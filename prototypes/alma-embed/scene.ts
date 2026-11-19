// A compact entry into Alma's actual Four Valves lesson. The engine, geometry,
// valve picking, phase switch and morph binding are imported without modification.
import '@alma/style.css';
import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';
import {HeartScene} from '@alma/scene/index.ts';
import {bindHeartToClock} from '@alma/scene/heartRig.ts';
import {CardiacEngine} from '@alma/engine/index.ts';
import {BeatClock} from '@alma/clock/index.ts';
import {createSection3} from '@alma/sections/section3.ts';
import {initUiScale} from '@alma/ui/uiScale.ts';

const canvas=document.querySelector<HTMLCanvasElement>('#scene')!;
const panel=document.querySelector<HTMLElement>('#section-valve-plane')!;
const signal=(state:string)=>parent.postMessage({type:'alma-preview',state},location.origin);
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
let scene:HeartScene|null=null,paused=false;
function fail(){document.body.dataset.state='error';scene?.stop();signal('error');}
function visibility(){if(!scene)return;document.hidden||paused?scene.stop():scene.start();}

async function start(){
 initUiScale();
 scene=new HeartScene(canvas);
 scene.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
 scene.controls.enableDamping=!reduce.matches;
 const engine=new CardiacEngine();engine.runToSteadyState();
 const clock=new BeatClock(engine);
 await scene.ready;
 if(scene.usingPlaceholder)throw new Error('Alma anatomy could not load');
 const heart=scene.getHeart()!;
 const binding=bindHeartToClock(heart,clock);
 scene.setWallInfluence(()=>binding.sampleInfluence()??0);
 const lesson=createSection3(),context={scene,clock,panel};
 const registerFrame=scene.onFrame.bind(scene);
 scene.onFrame=callback=>registerFrame(dt=>callback(reduce.matches?2:dt));
 const motionPreference=()=>{scene!.controls.enableDamping=!reduce.matches;gsap.globalTimeline.timeScale(reduce.matches?1000:1);};
 motionPreference();reduce.addEventListener('change',motionPreference);
 lesson.init?.(context);lesson.enter?.(context);
 const direction=new THREE.Vector3(...lesson.framing.position).sub(new THREE.Vector3(...lesson.framing.target)).normalize();
 function frame(){
  if(!scene)return;
  // The lesson's isolate camera uses a scalar GSAP proxy. Cancel that flight
  // before applying the compact overview so a late frame cannot overwrite reset.
  for(const tween of gsap.globalTimeline.getChildren(false,true,false)){
   if(tween instanceof gsap.core.Tween && tween.targets().some(target=>target && typeof target==='object' && 'px' in target && 'tx' in target))tween.kill();
  }
  scene.controls.enabled=true;
  const compact=innerWidth<900;
  const target=compact?new THREE.Vector3(.005,-.52,.05):new THREE.Vector3(...lesson.framing.target);
  const distance=compact?Math.max(2.65,2.3/scene.camera.aspect):2.6;
  scene.controls.target.copy(target);scene.camera.position.copy(target).addScaledVector(direction,distance);
  scene.controls.minDistance=1.25;scene.controls.maxDistance=7;
  scene.controls.update();
 }
 frame();
 const reset=()=>{panel.querySelector<HTMLButtonElement>('.keystone-toggle')?.click();frame();};
 const zoom=(factor:number)=>{const offset=scene!.camera.position.clone().sub(scene!.controls.target);const length=THREE.MathUtils.clamp(offset.length()*factor,1.25,7);scene!.camera.position.copy(scene!.controls.target).addScaledVector(offset.normalize(),length);scene!.controls.update();};
 document.querySelector('#zoom-in')!.addEventListener('click',()=>zoom(.85));
 document.querySelector('#zoom-out')!.addEventListener('click',()=>zoom(1.18));
 document.querySelector('#reset-view')!.addEventListener('click',reset);
 canvas.addEventListener('keydown',event=>{
  if(event.key==='Escape'){signal('leave');return;}
  if(event.key==='Home'){event.preventDefault();reset();return;}
  if(event.key==='+'||event.key==='='){event.preventDefault();zoom(.85);return;}
  if(event.key==='-'){event.preventDefault();zoom(1.18);return;}
  if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;
  event.preventDefault();const sphere=new THREE.Spherical().setFromVector3(scene!.camera.position.clone().sub(scene!.controls.target));
  sphere.theta+=event.key==='ArrowLeft'?.12:event.key==='ArrowRight'?-.12:0;
  sphere.phi=THREE.MathUtils.clamp(sphere.phi+(event.key==='ArrowUp'?-.1:event.key==='ArrowDown'?.1:0),.15,Math.PI-.15);
  scene!.camera.position.copy(scene!.controls.target).add(new THREE.Vector3().setFromSpherical(sphere));scene!.controls.update();
 });
 canvas.addEventListener('pointerdown',()=>canvas.focus({preventScroll:true}));
 window.addEventListener('resize',frame);
 const valveIDs=['pulmonary','aortic','tricuspid','mitral'] as const;
 let previous='';
 scene.onFrame(()=>{
  const sample=clock.sample();const signature=valveIDs.map(id=>sample.valves[id].open?'open':'shut').join(',');
  if(signature===previous)return;previous=signature;
  for(const id of valveIDs){const node=document.querySelector<HTMLElement>('[data-valve="'+id+'"]')!;node.dataset.open=String(sample.valves[id].open);node.querySelector('span')!.textContent=sample.valves[id].open?'Open':'Shut';}
 });
 // Reduced motion samples the same engine-derived switch endpoint on the next frame.
 (window as any).almaPreview={capture:()=>{scene!.renderer.render(scene!.scene,scene!.camera);return canvas.toDataURL('image/webp',.85);}};
 visibility();requestAnimationFrame(()=>requestAnimationFrame(()=>{document.body.dataset.state='ready';signal('ready');}));
 window.addEventListener('pagehide',()=>{lesson.dispose?.(context);binding.unsubscribe();scene?.dispose();},{once:true});
}
window.addEventListener('message',event=>{if(event.origin!==location.origin||event.source!==parent||event.data?.type!=='alma-preview-control')return;paused=event.data.paused===true;visibility();});
document.addEventListener('visibilitychange',visibility);
canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();fail();});
start().catch(fail);
