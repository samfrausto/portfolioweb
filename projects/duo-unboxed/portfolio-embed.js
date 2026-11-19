// The standalone team presentation keeps its original behavior. This bridge is
// active only for the portfolio's same-origin embedded preview.
(() => {
 if(window.parent===window||new URLSearchParams(location.search).get('embed')!=='1')return;
 document.body.classList.add('portfolio-embed');
 const style=document.createElement('link');style.rel='stylesheet';style.href='portfolio-embed.css';document.head.append(style);
 document.body.classList.remove('unboxing');const intro=document.getElementById('unboxing');if(intro)intro.hidden=true;
 const coverTitle=document.querySelector('#cover h1');if(coverTitle?.firstChild?.nodeType===Node.TEXT_NODE)coverTitle.firstChild.textContent='DUO ';
 const coverOption=document.querySelector('.manual-slide-controls option[value=cover]');if(coverOption)coverOption.textContent='1. Duo Unboxed';
 const sound=document.getElementById('sound-toggle');if(window.duoSoundEnabled?.())sound.click();
 let paused=false;
 const notify=state=>parent.postMessage({type:'duo-preview',state},location.origin);
 function setPaused(value){
  if(paused===value)return;paused=value;document.body.classList.toggle('portfolio-paused',paused);
  if(paused){
   // Stop the deck's own timers and speech without resetting its current slide.
   document.dispatchEvent(new Event('portfolio:pause'));
   document.querySelectorAll('video').forEach(video=>video.pause());
   if(window.duoSoundEnabled?.())sound.click();
  }
 }
 window.addEventListener('message',event=>{if(event.origin===location.origin&&event.source===parent&&event.data?.type==='duo-preview-control')setPaused(event.data.paused===true);});
 document.addEventListener('play',event=>{if(paused&&event.target instanceof HTMLMediaElement)event.target.pause();},true);
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!document.querySelector('dialog[open]')){event.preventDefault();notify('leave');}},true);
 // Readiness means the compact layout is applied, not merely the HTML loaded.
 style.addEventListener('load',()=>notify('ready'));
})();
