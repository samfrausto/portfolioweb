let adapter,loading,host,mode,token=0,raf=0,last=0,playing=!matchMedia('(prefers-reduced-motion: reduce)').matches,motion=playing,visible=true,opened=false;
const shell=document.createElement('div');shell.className='heart-runtime';
const canvas=document.createElement('canvas');canvas.className='heart-surface';canvas.setAttribute('aria-label','Animated anatomical heart from the Alma project');shell.append(canvas);
const status=document.createElement('span');status.className='heart-loading';status.textContent='Loading the heart…';shell.append(status);
const bar=document.createElement('div');bar.className='heart-controls';bar.innerHTML='<button type="button" data-heart-play>Pause beat</button><button type="button" data-heart-cut aria-pressed="false">See inside</button><label>One heartbeat<input type="range" min="0" max="1000" value="0" aria-label="Scrub one heartbeat"></label><span class="heart-drag">Drag to turn</span>';shell.append(bar);
const play=bar.querySelector('[data-heart-play]'),cut=bar.querySelector('[data-heart-cut]'),range=bar.querySelector('input');
function label(){play.textContent=playing?'Pause beat':'Play beat';play.setAttribute('aria-pressed',String(playing));}
function stop(){cancelAnimationFrame(raf);raf=0;last=0;}
function tick(ms){raf=0;if(!host||!adapter||!visible||document.hidden||!playing)return;if(!last||ms-last>=32){adapter.step(last?Math.min((ms-last)/1000,.06):0);last=ms;range.value=String(Math.round(adapter.getPhase()*1000));}raf=requestAnimationFrame(tick);}
function start(){stop();if(host&&adapter&&playing&&visible&&!document.hidden)raf=requestAnimationFrame(tick);label();}
function resize(){if(!host||!adapter)return;const box=canvas.getBoundingClientRect();if(box.width&&box.height){const w=mode==='tv'?640:box.width,h=mode==='tv'?360:box.height;adapter.resize(w,h,mode);}}
const ro=new ResizeObserver(resize);ro.observe(shell);
const io=new IntersectionObserver(entries=>{visible=entries.at(-1)?.isIntersecting!==false;start();});io.observe(shell);
play.onclick=()=>{playing=!playing;start();};
cut.onclick=()=>{opened=!opened;adapter?.cutaway(opened);cut.setAttribute('aria-pressed',String(opened));cut.textContent=opened?'Close cutaway':'See inside';};
range.oninput=()=>{playing=false;stop();label();adapter?.phase(+range.value/1000);};
document.addEventListener('visibilitychange',start);
export async function mountHeart(target,kind){
 if(!target)return;const stamp=++token;host=target;mode=kind;shell.dataset.mode=kind;target.append(shell);bar.hidden=kind!=='viewer';visible=true;
 if(!loading)loading=import('./heart-engine.js?v=51').then(m=>m.createPreview(canvas)).then(value=>{adapter=value;status.remove();return value;}).catch(error=>{status.textContent='Live preview unavailable. Open the full Alma experience below.';console.error('Heart preview',error);});
 await loading;if(stamp!==token)return;opened=false;adapter?.cutaway(false);cut.textContent='See inside';cut.setAttribute('aria-pressed','false');playing=motion;resize();start();
}
export function parkHeart(){++token;stop();host=null;shell.remove();}
export function setHeartMotion(on){motion=on;playing=on;start();}
