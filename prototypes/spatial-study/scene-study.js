import * as THREE from '../../vendor/three.module.js';
import {GLTFLoader} from '../../vendor/addons/loaders/GLTFLoader.js';
import {PERSONAL} from './personal.js';
import {buildFurnishings} from './furnishings.js';
import {featured} from './content.js';
const names=['work','about','career'];
export async function createStudy(host,onReady,onSelect,onMedia,onHover=()=>{}){
 const scene=new THREE.Scene();scene.background=new THREE.Color('#b7ab91');
 const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;host.append(renderer.domElement);
 const camera=new THREE.PerspectiveCamera(38,1,.1,160),world=new THREE.Group();scene.add(world);
 scene.add(new THREE.HemisphereLight('#e3ebed','#876349',2.0));const key=new THREE.DirectionalLight('#ffe3b8',2.7);key.position.set(-4,12,9);key.castShadow=true;key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.5,far:40});key.shadow.bias=-.0007;scene.add(key,key.target);
 const sectionLight=new THREE.SpotLight('#ffdc9b',40,35,1,.8,1),objectLight=new THREE.SpotLight('#fff1ce',30,24,.3,.7,1);scene.add(sectionLight,sectionLight.target,objectLight,objectLight.target);
 const roots=Object.fromEntries(names.map(n=>[n,new THREE.Group()]));Object.values(roots).forEach(g=>world.add(g));
 const asset=await new GLTFLoader().loadAsync('/models/chapters.glb');
 for(const node of [...asset.scene.children])if(roots[node.userData.section])roots[node.userData.section].add(node);
 const gum=await new GLTFLoader().loadAsync('/models/suzchews.glb');gum.scene.traverse(o=>{if(o.isMesh&&/Clear[ _]gum[ _]hopper/.test(o.name)){o.material=o.material.clone();o.material.transparent=true;o.material.opacity=.18;o.material.depthWrite=false;o.material.roughness=.08;}});gum.scene.scale.setScalar(.52);roots.work.add(gum.scene);
 const mat=c=>new THREE.MeshStandardMaterial({color:c,roughness:.9});const plaster=mat('#ddd2b6'),wood=mat('#805b3d'),floorMat=mat('#a37f54');
 const architecture=new THREE.Group();world.add(architecture);
 function box(parent,size,pos,material){const m=new THREE.Mesh(new THREE.BoxGeometry(...size),material);m.position.set(...pos);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 const loader=new THREE.TextureLoader(),textures=[];
 async function picture(group,url,pos,w,h){const t=await loader.loadAsync(url);t.colorSpace=THREE.SRGBColorSpace;textures.push(t);const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:t,toneMapped:false}));m.position.set(...pos);group.add(m);return m;}
 const surfaces=await (await fetch('/personal-surfaces.json')).json();
 const items=[{key:'portrait',image:'personal/portrait.jpg'},...Object.entries(PERSONAL).flatMap(([cat,v])=>v.items.map(i=>({key:cat==='activities'?'photo/'+i.key:'cover/'+i.key,image:i.image.replace('assets/','')})))];
 await Promise.all(items.map(async i=>{const s=surfaces[i.key];if(s){const m=await picture(roots.about,'/'+i.image,[s.center[0],s.center[2],-s.center[1]+.006],s.width,s.height);m.userData.target=i.key==='portrait'?'about':i.key.startsWith('photo/')?'favorites/activities':'favorites/'+Object.entries(PERSONAL).find(([,v])=>v.items.some(o=>'cover/'+o.key===i.key))?.[0];}}));
 const roadGroup=new THREE.Group();roadGroup.scale.setScalar(.52);roots.work.add(roadGroup);
 const B=(x,y,z)=>new THREE.Vector3(x,z,-y);
 const makeRoad=function(){
  const add=(geo,col,pos,key)=>{const m=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:col,roughness:.55,metalness:.15}));m.position.copy(B(...pos));m.userData.target=key;m.castShadow=true;m.receiveShadow=true;this.scene.add(m);this.meshes.push(m);return m;};
  // A representative road model identifies the research; it is not a simulation result.
  const k='project/12',x=7.02,y=.22,z=2.68;
  add(new THREE.BoxGeometry(1.62,.17,1.26),'#24443d',[x,y,z],k);add(new THREE.BoxGeometry(.87,.07,1.17),'#3c4e4a',[x,y,z+.12],k);
  for(let i=0;i<5;i++)add(new THREE.BoxGeometry(.03,.015,.13),'#e2ceb0',[x,y-.46+i*.23,z+.17],k);
  for(let i=0;i<4;i++){const cx=x+(i%2===0?-.23:.23),cy=y-.40+i*.26;add(new THREE.BoxGeometry(.25,.15,.34),i===0?'#e8ad58':'#a4bc8b',[cx,cy,z+.25],k);add(new THREE.BoxGeometry(.19,.09,.17),'#d5e5d1',[cx,cy,z+.36],k);}
  for(let i=0;i<3;i++){const arc=add(new THREE.TorusGeometry(.28+i*.12,.008,4,24,Math.PI*1.5),'#adcd8b',[x-.23,y-.4,z+.54],k);arc.rotation.x=-Math.PI/2;}
  const road=new THREE.Group();road.position.copy(B(x,y,z));this.scene.add(road);for(const m of this.meshes.filter(m=>m.userData.target===k))road.attach(m);road.rotation.x=Math.PI*.30;road.scale.set(1.12,1.12,1.12);road.position.y+=.75;add(new THREE.BoxGeometry(.65,.48,.48),'#345348',[x,y,z+.22],k);

 };makeRoad.call({scene:roadGroup,meshes:[]});
 for(let i=0;i<5;i++){const f=new THREE.Mesh(new THREE.ConeGeometry(.11,.48+(i%2)*.17,5),new THREE.MeshBasicMaterial({color:i%2?'#f2b344':'#da6a25'}));f.position.set((i-2)*.23,1.22,-.15);f.userData.flame=true;roots.work.add(f);}
 function label(group,text,pos,w=.95,fontSize=38){const canvas=document.createElement('canvas');canvas.width=512;canvas.height=100;const c=canvas.getContext('2d');c.fillStyle='#405b4e';c.fillRect(0,0,512,100);c.fillStyle='#fff9e8';c.textAlign='center';c.font='500 '+fontSize+'px sans-serif';c.fillText(text,256,63);const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;textures.push(t);const p=new THREE.Mesh(new THREE.PlaneGeometry(w,w*100/512),new THREE.MeshBasicMaterial({map:t}));p.position.set(...pos);group.add(p);return p;}
 label(roots.about,'Samuel “Frosty” Frausto',[1.215,1.93,-.918],1.9,32);
 roots.about.traverse(o=>{if(o.userData.frostyPart==='awake')o.visible=false;});
 const furniture=buildFurnishings(THREE,roots,box,label);furniture.groups.about.position.x=-1.0;Object.values(furniture.groups).forEach(g=>g.traverse(o=>{if(o.isMesh&&o.geometry.type!=='PlaneGeometry'&&o.geometry.type!=='CircleGeometry'){o.castShadow=true;o.receiveShadow=true;}}));
 // The screen takes almost the entire rear wall. Its media preserves aspect ratio.
 box(roots.work,[10.12,5.81,.32],[0,4.38,-1.28],wood);
 box(roots.work,[9.89,5.58,.11],[0,4.38,-1.055],mat('#202d29'));
 const screen=await picture(roots.work,'/heart-live.png',[0,4.38,-.985],9.6,5.4);screen.userData.target='screen';
 const careerWalls=[];let careerBeam;
 for(let i=0;i<3;i++){
  const g=new THREE.Group();g.position.x=i*11.2;roots[names[i]].position.x=i*11.2;architecture.add(g);
  box(g,[11.2,.18,32],[0,-.12,14],floorMat);
  for(let x=-5.25;x<5.6;x+=.7)box(g,[.017,.01,32],[x,-.024,14],wood);
  const backWall=box(g,[11.2,7.65,.25],[0,3.7,-1.85],plaster);const beam=box(g,[11.2,.20,.40],[0,7.30,-1.55],wood);if(i===2){careerWalls.push(backWall);careerBeam=beam;}box(g,[11.2,.22,.16],[0,.15,-1.63],wood);
  for(const x of [-5.6,5.6]){
   const side=box(g,[.22,7.65,10],[x,3.7,3.10],plaster);if(i===2)careerWalls.push(side);
   box(g,[.34,7.65,.34],[x,3.7,8.11],wood);
   // Long open side passages keep the camera in a physically continuous aisle at every aspect.
   box(g,[.25,1.1,22],[x,7.0,19],plaster);
  }

 }
 let state={section:0,project:1,playing:false,motion:true},disposed=false,dirty=true,raf=0,transition=null,lastFrame=0,awake=false;
 const look=new THREE.Vector3(),destination=new THREE.Vector3(),destinationLook=new THREE.Vector3();
 const video=document.createElement('video');video.playsInline=true;video.muted=true;video.loop=true;video.preload='metadata';
 const videoTexture=new THREE.VideoTexture(video);videoTexture.colorSpace=THREE.SRGBColorSpace;textures.push(videoTexture);
 let heart,heartTexture,heartPromise,mediaToken=0;
 const stills=new Map();
 async function heartReady(){if(!heartPromise)heartPromise=import('../../heart-engine.js').then(m=>m.createPreview(document.createElement('canvas'))).then(h=>{heart=h;heart.resize(960,540,'viewer');heartTexture=new THREE.CanvasTexture(heart.canvas);heartTexture.colorSpace=THREE.SRGBColorSpace;textures.push(heartTexture);return h;});return heartPromise;}
 function applyTexture(t,aspect=16/9){screen.visible=true;screen.material.map=t;screen.material.needsUpdate=true;const ratio=aspect/(16/9);screen.scale.set(ratio<1?ratio:1,ratio>1?1/ratio:1,1);dirty=true;}
 function trafficTexture(){const c=document.createElement('canvas');c.width=1280;c.height=720;const x=c.getContext('2d');x.fillStyle='#173e38';x.fillRect(0,0,1280,720);x.fillStyle='#c5d6bf';x.font='500 54px sans-serif';x.fillText('Autonomous traffic digital twin',70,165);x.font='28px sans-serif';x.fillText('USC faculty-directed research',70,220);x.fillStyle='#e8c47d';x.fillText('Research in progress',70,307);x.fillStyle='#dce5d3';x.font='26px sans-serif';x.fillText('OpenUSD environment • vehicle coordination • virtual instrumentation',70,369);x.fillText('Project capture and experimental results to come.',70,430);x.strokeStyle='#789f91';x.lineWidth=2;x.beginPath();x.moveTo(70,545);x.lineTo(1210,545);x.stroke();x.font='24px sans-serif';x.fillText('Open “Research notes” for the scope and current work.',70,613);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;textures.push(t);return t;}
 async function selectMedia(id){const token=++mediaToken;screen.visible=false;dirty=true;video.pause();video.removeAttribute('src');video.load();onMedia({loading:true,error:''});const p=featured.find(p=>p.id===id);
  try{
   if(id===1){await heartReady();if(disposed||token!==mediaToken)return;applyTexture(heartTexture);}
   else if(id===12){if(!stills.has(id))stills.set(id,trafficTexture());applyTexture(stills.get(id));}
   else{if(!stills.has(id)){const url=id===5?'/assets/projects/pavilia-02.png':'/'+p.poster;const t=await loader.loadAsync(url);t.colorSpace=THREE.SRGBColorSpace;textures.push(t);stills.set(id,t);}if(disposed||token!==mediaToken)return;const t=stills.get(id);applyTexture(t,t.image.width/t.image.height);
    if(p.video){video.src='/'+p.video;video.load();}
   }
   onMedia({loading:false,error:''});syncPlaying();
  }catch(e){if(token===mediaToken&&!disposed)onMedia({loading:false,error:'This preview could not load. Open the project story to see the available media.'});}
 }
 video.addEventListener('loadeddata',()=>{if(featured.find(p=>p.id===state.project)?.video&&video.readyState>=2)applyTexture(videoTexture,video.videoWidth/video.videoHeight);});
 video.addEventListener('error',()=>{if(video.getAttribute('src'))onMedia({loading:false,error:'The video could not load. The project story is still available.'});});
 function syncPlaying(){if(featured.find(p=>p.id===state.project)?.video){if(state.playing&&state.section===0&&!document.hidden)video.play().catch(()=>onMedia({loading:false,error:'Press play to start the project video.'}));else video.pause();}dirty=true;}
 function pose(animate=true){const r=host.getBoundingClientRect(),compact=r.width<=650;furniture.roleScreen.scale.set(compact?1.6:1,compact?2.4:1,1);furniture.roleScreen.position.y=compact?7:4.5;careerWalls.forEach(w=>{w.scale.y=compact?9.85/7.65:1;w.position.y=compact?4.8:3.7;});careerBeam.position.y=compact?9.5:7.3;camera.aspect=r.width/r.height;camera.updateProjectionMatrix();const height=state.section===0?8.0:state.section===1?5.9:6.60,width=state.section===1?8.9:11.4,dist=Math.max(height/(2*Math.tan(38*Math.PI/360)),width/(2*Math.tan(38*Math.PI/360)*camera.aspect));const x=state.section*11.2,y=(state.section===0?3.6:state.section===2?(compact?4.7:2.5):2.8)-(compact?Math.max(0,r.height-530)*11.4/r.width/2:0);destination.set(x,y+.28,dist);destinationLook.set(x,y,0);
  if(!animate||!state.motion){camera.position.copy(destination);look.copy(destinationLook);transition=null;host.dataset.moving='false';}
  else{transition={start:performance.now(),duration:Math.min(1600,800+Math.abs(destination.x-camera.position.x)*25),from:camera.position.clone(),look:look.clone()};host.dataset.moving='true';}
  key.position.set(x-4,12,9);key.target.position.set(x,2,0);sectionLight.position.set(x-1,8,6);sectionLight.target.position.set(x,3,0);host.dataset.section=names[state.section];host.dataset.cameraTarget=String(x);dirty=true;
 }
 function visible(o){for(let p=o;p;p=p.parent)if(!p.visible)return false;return true;}
 function focus(target){const group=roots[names[state.section]],bounds=new THREE.Box3();group.updateWorldMatrix(true,true);group.traverse(o=>{if(o.isMesh&&o.userData.target===target&&visible(o))bounds.union(new THREE.Box3().setFromObject(o));});const p=bounds.isEmpty()?new THREE.Vector3(state.section*11.2,3.4,0):bounds.getCenter(new THREE.Vector3());objectLight.target.position.copy(p);objectLight.position.copy(p).add(new THREE.Vector3(-1,4,4));host.dataset.objectFocus=target||'section';dirty=true;}
 const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
 function hit(e){if(transition)return null;const r=host.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);for(const h of raycaster.intersectObjects([architecture,...Object.values(roots)],true)){if(!visible(h.object))continue;return h.object.userData.target||null;}return null;}
 const move=e=>{const t=hit(e);host.style.cursor=t?'pointer':'default';focus(t);onHover(t);};const click=e=>{const t=hit(e);if(t)onSelect(t);};renderer.domElement.addEventListener('pointermove',move);renderer.domElement.addEventListener('click',click);
 const leave=()=>{focus(state.section===0?'project/'+state.project:null);onHover(null);};renderer.domElement.addEventListener('pointerleave',leave);
 function wake(){awake=!awake;furniture.groups.about.traverse(o=>{const p=o.userData.frostyPart;if(p==='awake')o.visible=awake;if(p==='hat'||p==='idleOnly')o.visible=!awake;});host.dataset.frostyState=awake?'awake':'resting';dirty=true;return awake;}

 function updateOverlays(){
  const layer=host.parentElement.querySelector('.scene-ui');if(!layer)return;
  layer.dataset.traveling=String(Boolean(transition));
  const w=host.clientWidth,h=host.clientHeight;
  function setRect(key,points){const el=[...layer.querySelectorAll('[data-anchor]')].find(e=>e.dataset.anchor===key);if(!el)return;const projected=points.map(p=>p.clone().project(camera));const xs=projected.map(p=>(p.x+1)*w/2),ys=projected.map(p=>(1-p.y)*h/2);const left=Math.min(...xs),top=Math.min(...ys),width=Math.max(...xs)-left,height=Math.max(...ys)-top;el.style.setProperty('--anchor-x',left+'px');el.style.setProperty('--anchor-y',top+'px');el.style.setProperty('--anchor-w',width+'px');el.style.setProperty('--anchor-h',height+'px');el.dataset.positioned='true';}
  function plane(key,root,x,y,z,width,height){root.updateWorldMatrix(true,false);setRect(key,[-1,1].flatMap(a=>[-1,1].map(b=>new THREE.Vector3(x+a*width/2,y+b*height/2,z).applyMatrix4(root.matrixWorld))));}
  function target(key){const root=roots[names[state.section]],bounds=new THREE.Box3();root.updateWorldMatrix(true,true);root.traverse(o=>{if(o.isMesh&&o.userData.target===key&&visible(o))bounds.union(new THREE.Box3().setFromObject(o));});if(bounds.isEmpty())return;const c=bounds.getCenter(new THREE.Vector3()),size=bounds.getSize(new THREE.Vector3());setRect(key,[-1,1].flatMap(a=>[-1,1].map(b=>new THREE.Vector3(c.x+a*size.x/2,c.y+b*size.y/2,bounds.max.z))));}
  if(state.section===0){plane('tv',roots.work,0,4.38,-.975,9.6,5.4);[1,6,4,7,3,12].forEach((id,i)=>plane('project/'+id,roots.work,-3.875+i*1.55,1.23,.38,1.40,1.03));}
  if(state.section===1){['about','favorites/movies','favorites/songs','favorites/activities','favorites/games','skills','frosty'].forEach(target);}
  if(state.section===2){plane('role-screen',furniture.roleScreen,0,0,0,3.23,1.69);[0,1,2,3].forEach(id=>target('experience/'+id));target('cv');}
 }
 function tick(ms){if(disposed)return;raf=requestAnimationFrame(tick);if(document.hidden)return;
  if(transition){const t=Math.min(1,(ms-transition.start)/transition.duration),ease=t*t*(3-2*t);camera.position.lerpVectors(transition.from,destination,ease);look.lerpVectors(transition.look,destinationLook,ease);if(t===1){transition=null;host.dataset.moving='false';}dirty=true;}
  if(state.section===0&&state.playing&&ms-lastFrame>=33){if(state.project===1&&heart){heart.step(Math.min((ms-lastFrame)/1000,.05));heartTexture.needsUpdate=true;dirty=true;}else if(!video.paused)dirty=true;lastFrame=ms;}
  if(dirty){camera.lookAt(look);renderer.render(scene,camera);updateOverlays();host.dataset.cameraX=camera.position.x.toFixed(3);dirty=false;}
 }
 const resize=()=>{renderer.setSize(host.clientWidth,host.clientHeight,false);pose(state.motion&&Math.abs(camera.position.x-state.section*11.2)>.01);};const observer=new ResizeObserver(resize);observer.observe(host);resize();raf=requestAnimationFrame(tick);const visibility=()=>{syncPlaying();lastFrame=performance.now();};document.addEventListener('visibilitychange',visibility);selectMedia(1);onReady();
 return {set(next){const old={...state};state={...state,...next};if(state.section!==old.section||(!state.motion&&old.motion))pose();if(state.project!==old.project)selectMedia(state.project);syncPlaying();focus('project/'+state.project);},focus,wake,dispose(){disposed=true;++mediaToken;cancelAnimationFrame(raf);observer.disconnect();video.pause();video.removeAttribute('src');video.load();document.removeEventListener('visibilitychange',visibility);renderer.domElement.removeEventListener('pointermove',move);renderer.domElement.removeEventListener('click',click);renderer.domElement.removeEventListener('pointerleave',leave);const geometries=new Set(),materials=new Set();scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);for(const m of o.material?(Array.isArray(o.material)?o.material:[o.material]):[])materials.add(m);});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());renderer.dispose();renderer.domElement.remove();}};
}
