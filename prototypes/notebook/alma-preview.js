// The iframe hosts Alma's real lesson in an isolated renderer. It is mounted only
// while selected and visible; messages are accepted only from that same-origin frame.
export function almaPreviewMarkup(){return `<figure class="alma-demo"><div class="alma-surface"><img class="alma-poster" src="assets/design/alma-imgMediaAlmaIn.webp" alt="Alma’s four-valve view" width="1600" height="1042"><iframe title="Alma — interactive four-valve heart" data-alma-frame data-src="/projects/heart-valve/app/portfolio-embed.html?intro=0" allow="fullscreen" tabindex="0"></iframe><div class="alma-loading" role="status"><span>Loading the interactive heart…</span><button class="utility" data-alma-retry hidden>Try again</button></div></div><div class="alma-toolbar"><span>Drag to turn the heart</span><button class="utility" data-alma-expand aria-label="Expand Alma interactive demo">Expand<svg viewBox="0 0 20 20" aria-hidden="true" fill="none"><path d="M3 8V3h5m4 0h5v5M3 12v5h5m4 0h5v-5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div><figcaption>Interactive Alma · anatomy &amp; poses: 3D4SCI.</figcaption></figure>`;}
export function mountAlmaPreview(root){
 const figure=root?.querySelector('.alma-demo');if(!figure)return ()=>{};
 const frame=figure.querySelector('iframe'),surface=figure.querySelector('.alma-surface'),loading=figure.querySelector('.alma-loading'),retry=figure.querySelector('[data-alma-retry]'),expand=figure.querySelector('[data-alma-expand]');let timer,visible=false,loaded=false,wasFullscreen=false;
 function loadingState(){surface.dataset.state='loading';loading.querySelector('span').textContent='Loading the interactive heart…';loading.hidden=false;retry.hidden=true;clearTimeout(timer);timer=setTimeout(()=>{if(surface.dataset.state==='ready')return;surface.dataset.state='error';loading.querySelector('span').textContent='Preview unavailable. Open Alma below or try again.';retry.hidden=false;},20000);}
 function load(){loaded=true;loadingState();frame.src=frame.dataset.src;}
 function pause(paused){frame.contentWindow?.postMessage({type:'alma-preview-control',paused},location.origin);}
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible&&!loaded)load();else if(loaded)pause(!visible||document.hidden);},{threshold:0});observer.observe(figure);
 function message(event){if(event.origin!==location.origin||event.source!==frame.contentWindow||event.data?.type!=='alma-preview')return;
  if(event.data.state==='ready'){clearTimeout(timer);surface.dataset.state='ready';loading.hidden=true;pause(!visible||document.hidden);}
  if(event.data.state==='error'){clearTimeout(timer);surface.dataset.state='error';loading.hidden=false;loading.querySelector('span').textContent='Preview unavailable. Open Alma below or try again.';retry.hidden=false;}
  if(event.data.state==='leave'){if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});expand.focus();}
 }
 window.addEventListener('message',message);
 retry.addEventListener('click',load);
 expand.addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else if(figure.requestFullscreen)await figure.requestFullscreen();else window.open(frame.dataset.src,'_blank','noopener');}catch{window.open(frame.dataset.src,'_blank','noopener');}});
 const fullscreen=()=>{const expanded=document.fullscreenElement===figure;if(wasFullscreen&&!expanded)expand.focus({preventScroll:true});wasFullscreen=expanded;expand.setAttribute('aria-label',expanded?'Exit fullscreen Alma demo':'Expand Alma interactive demo');};document.addEventListener('fullscreenchange',fullscreen);
 const visibility=()=>pause(!visible||document.hidden);document.addEventListener('visibilitychange',visibility);
 return ()=>{clearTimeout(timer);observer.disconnect();window.removeEventListener('message',message);document.removeEventListener('visibilitychange',visibility);document.removeEventListener('fullscreenchange',fullscreen);pause(true);frame.removeAttribute('src');};
}
