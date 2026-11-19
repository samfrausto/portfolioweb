import {escape as e,videoMarkup} from './render.js';

// Keep the original deck isolated, and keep its browsing state when enlarged.
export function duoPreviewMarkup(p,caption){
 return `<div class="duo-preview"><figure class="duo-deck"><div class="duo-toolbar"><span>Interactive pitch · 13 slides</span><button class="utility" type="button" data-duo-expand aria-haspopup="dialog">Enlarge pitch <span aria-hidden="true">↗</span></button></div><dialog class="duo-stage" open role="group" aria-label="Duo Unboxed interactive pitch"><div class="duo-expanded-bar"><span>Duo Unboxed · interactive pitch</span><button class="utility" type="button" data-duo-close aria-label="Close enlarged Duo pitch">Close <span aria-hidden="true">×</span></button></div><div class="duo-surface"><iframe title="Duo Unboxed — interactive team pitch" data-duo-frame data-src="${e(p.presentation.url)}?embed=1" tabindex="0"></iframe><div class="duo-loading" role="status"><span>Loading the interactive pitch…</span><button class="utility" type="button" data-duo-retry hidden>Try again</button></div></div></dialog></figure><section class="duo-model" aria-labelledby="duo-model-heading"><h3 id="duo-model-heading">Model in motion</h3>${videoMarkup(p,'preview-duo',{caption})}</section></div>`;
}

export function mountDuoPreview(root,{onExpand=()=>{},onCollapse=()=>{}}={}){
 const figure=root?.querySelector('.duo-deck');if(!figure)return ()=>{};
 const frame=figure.querySelector('iframe'),stage=figure.querySelector('dialog'),surface=figure.querySelector('.duo-surface'),loading=figure.querySelector('.duo-loading'),retry=figure.querySelector('[data-duo-retry]'),expand=figure.querySelector('[data-duo-expand]'),close=figure.querySelector('[data-duo-close]');
 let timer,visible=false,loaded=false,expanded=false;
 function pause(){frame.contentWindow?.postMessage({type:'duo-preview-control',paused:document.hidden||(!visible&&!expanded)},location.origin);}
 function load(){loaded=true;surface.dataset.state='loading';loading.hidden=false;retry.hidden=true;loading.querySelector('span').textContent='Loading the interactive pitch…';clearTimeout(timer);timer=setTimeout(()=>{surface.dataset.state='error';loading.querySelector('span').textContent='The pitch couldn’t load. Try again or use Explore pitch below.';retry.hidden=false;},20000);frame.src=frame.dataset.src;}
 function collapse(){if(!expanded)return;expanded=false;stage.close();stage.setAttribute('role','group');stage.removeAttribute('aria-modal');stage.show();figure.style.minHeight='';pause();expand.focus({preventScroll:true});onCollapse();}
 function enlarge(){figure.style.minHeight=figure.offsetHeight+'px';expanded=true;stage.close();stage.setAttribute('role','dialog');stage.setAttribute('aria-modal','true');stage.showModal();close.focus();pause();onExpand();}
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible&&!loaded)load();else if(loaded)pause();},{threshold:0});observer.observe(figure);
 function message(event){
  if(event.origin!==location.origin||event.source!==frame.contentWindow||event.data?.type!=='duo-preview')return;
  if(event.data.state==='ready'){clearTimeout(timer);surface.dataset.state='ready';loading.hidden=true;pause();}
  if(event.data.state==='leave'){collapse();expand.focus({preventScroll:true});}
 }
 window.addEventListener('message',message);document.addEventListener('visibilitychange',pause);
 retry.addEventListener('click',load);expand.addEventListener('click',enlarge);close.addEventListener('click',collapse);
 stage.addEventListener('cancel',event=>{event.preventDefault();collapse();});
 return ()=>{clearTimeout(timer);observer.disconnect();window.removeEventListener('message',message);document.removeEventListener('visibilitychange',pause);if(expanded)stage.close();frame.contentWindow?.postMessage({type:'duo-preview-control',paused:true},location.origin);frame.removeAttribute('src');};
}
