// Selected Artifact transfer. Comparison studies keep their own frozen implementation.
const ease='cubic-bezier(.23,1,.32,1)';

function rectFor(image,dimensions){
 const rect=image.getBoundingClientRect(),style=getComputedStyle(image);
 const left=parseFloat(style.paddingLeft)||0,right=parseFloat(style.paddingRight)||0,top=parseFloat(style.paddingTop)||0,bottom=parseFloat(style.paddingBottom)||0;
 const width=rect.width-left-right,height=rect.height-top-bottom;
 const naturalWidth=dimensions?.width||image.naturalWidth||image.videoWidth||width;
 const naturalHeight=dimensions?.height||image.naturalHeight||image.videoHeight||height;
 const scale=Math.min(width/naturalWidth,height/naturalHeight);
 return {x:rect.x+left+(width-naturalWidth*scale)/2,y:rect.y+top+(height-naturalHeight*scale)/2,width:naturalWidth*scale,height:naturalHeight*scale};
}
function visible(image){return image&&image.getBoundingClientRect().width>0&&getComputedStyle(image).visibility!=='hidden';}
function previewImage(){
 const frame=document.querySelector('#preview .alma-surface[data-state=ready] iframe');if(visible(frame))return frame;
 const poster=document.querySelector('#preview .alma-poster');if(visible(poster))return poster;
 const art=document.querySelector('#preview .media-sketch,#preview .preview-sketch img,#preview .preview-artifact img,#preview .presentation-evidence img');
 return visible(art)?art:document.querySelector('#preview video');
}
function sourceOf(image){
 if(image.tagName==='IFRAME'){try{return image.contentWindow.almaPreview.capture();}catch{return document.querySelector('#preview .alma-poster').src;}}
 if(image.tagName!=='VIDEO')return image.currentSrc||image.src;
 if(image.readyState>=2){
  try{const canvas=document.createElement('canvas');canvas.width=image.videoWidth;canvas.height=image.videoHeight;canvas.getContext('2d').drawImage(image,0,0);return canvas.toDataURL();}catch{/* The poster remains available if a recording cannot be sampled. */}
 }
 return image.poster;
}
function inViewport(rect){return rect.width>0&&rect.height>0&&rect.bottom>0&&rect.top<innerHeight&&rect.right>0&&rect.left<innerWidth;}
function layer(rect,className){
 const node=document.createElement('div');node.className='project-transfer-layer '+className;node.setAttribute('aria-hidden','true');
 Object.assign(node.style,{left:rect.x+'px',top:rect.y+'px',width:rect.width+'px',height:rect.height+'px'});document.body.append(node);return node;
}
function artwork(src,parent,rect){
 const image=new Image();image.src=src;image.alt='';image.className='project-transfer-art';
 if(rect)Object.assign(image.style,{left:rect.x+'px',top:rect.y+'px',width:rect.width+'px',height:rect.height+'px'});
 parent.append(image);return image;
}

export function createProjectMotion(onFinish){
 const reduce=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover:hover) and (pointer:fine)');
 let frame=0,generation=0,cleanup=null,active=false;
 document.body.dataset.projectMotion='artifact';
 function cancel(){generation++;cancelAnimationFrame(frame);cleanup?.();cleanup=null;active=false;}
 function finish(token){if(token!==generation)return;cancel();onFinish();}
 function capture(row,event){
  if(reduce.matches||!fine.matches||event.detail===0||event.pointerType==='touch'||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button||row.getAttribute('aria-pressed')==='true')return null;
  const thumb=row.querySelector('.project-thumb img'),previous=previewImage();
  if(!thumb?.complete||!thumb.naturalWidth||!previous)return null;
  const surface=previous.closest('.video-surface')||previous;
  if(!inViewport(thumb.getBoundingClientRect())||!inViewport(surface.getBoundingClientRect()))return null;
  return {src:thumb.currentSrc||thumb.src,start:rectFor(thumb),dimensions:{width:thumb.naturalWidth,height:thumb.naturalHeight},previous:{src:sourceOf(previous),rect:rectFor(previous)}};
 }
 function start(transfer){
  cancel();if(!transfer)return;
  active=true;const token=generation;
  frame=requestAnimationFrame(()=>{
   const image=previewImage();
   if(token!==generation)return;
   if(!image||!fine.matches||reduce.matches){finish(token);return;}
   const surface=image.closest('.video-surface')||image,bounds=surface.getBoundingClientRect();
   if(!inViewport(bounds)){finish(token);return;}
   const destination=rectFor(image,transfer.dimensions),backing=layer(bounds,'project-transfer-backing');
   const prior=artwork(transfer.previous.src,backing,{x:transfer.previous.rect.x-bounds.x,y:transfer.previous.rect.y-bounds.y,width:transfer.previous.rect.width,height:transfer.previous.rect.height});
   const flight=layer(destination,'project-transfer-flight');artwork(transfer.src,flight);
   const visibility=image.style.visibility;image.style.visibility='hidden';
   cleanup=()=>{image.style.visibility=visibility;backing.remove();flight.remove();};
   flight.style.transformOrigin='0 0';
   flight.style.transform=`translate(${transfer.start.x-destination.x}px,${transfer.start.y-destination.y}px) scale(${transfer.start.width/destination.width},${transfer.start.height/destination.height})`;
   flight.style.transition=`transform 280ms ${ease}`;prior.style.transition=`opacity 100ms ${ease}`;
   flight.getBoundingClientRect();
   flight.addEventListener('transitionend',event=>{if(event.target===flight&&event.propertyName==='transform')finish(token);});
   frame=requestAnimationFrame(()=>{
    if(token!==generation)return;
    flight.style.transform='translate(0,0) scale(1,1)';prior.style.opacity='0';flight.getBoundingClientRect();
    if(!flight.getAnimations().length)finish(token);
   });
  });
 }
 function interrupt(){if(active){cancel();onFinish();}}
 window.addEventListener('resize',interrupt);document.addEventListener('scroll',interrupt,{capture:true,passive:true});
 reduce.addEventListener('change',interrupt);fine.addEventListener('change',interrupt);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel();});
 return {capture,start,cancel,get active(){return active;}};
}
