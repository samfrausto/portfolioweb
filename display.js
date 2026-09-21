// Original project captures. Framing changes how the image is presented, not its content.
export const DISPLAYS={
 'experience/0':{eyebrow:'CURRENTLY AT EDWARDS',title:'XR learning design',description:'Turning complex concepts into immersive learning.',poster:'assets/heart-live.png',caption:'Related project · Alma',intro:true},
 'project/1':{eyebrow:'INTERACTION DESIGN · FEATURED PROJECT',title:'Alma',description:'How the heart works. Made interactive.',liveHeart:true,poster:'assets/heart-live.png',caption:'Live model from the original project'},
 'project/4':{eyebrow:'UNITY · VR TRAINING',title:'VR Baseball',description:'Pitch physics for a training concept.',poster:'assets/projects/baseball-pitch.jpg',caption:'Desktop recording · Unity',src:'media/baseball-pitch-demo.mp4',autoplay:true},
 'project/6':{eyebrow:'OMNIVERSE · DIGITAL TWIN',title:'Cyberpunk Twin',description:'A real room, rebuilt in 3D.',poster:'assets/cyberpunk.png',caption:'Original project capture',src:'media/cyberpunk-twin-demo.mp4',autoplay:true},
 'project/12':{eyebrow:'CURRENT RESEARCH · USC',title:'Autonomous Traffic Twin',description:'Building a testbed for autonomous traffic.',caption:'In progress · OpenUSD + NVIDIA Omniverse',inProgress:true},
 'experience/1':{eyebrow:'USC IOVINE & YOUNG · STUDENT',title:'B.S. Human-Technology Interaction ’28',description:'',poster:'assets/projects/synesthesia-controls.jpg',caption:'Student project · Synesthesia'},
 'experience/2':{eyebrow:'THE JEL SERT COMPANY',title:'Research, brands & stories',description:'Product research and creative communication.',poster:'assets/projects/jamba-01.png',caption:'Jamba Singles To Go · Launch imagery'},
 'experience/3':{eyebrow:'UNIVERSITY OF CHICAGO',title:'Cancer research',description:'Investigating TET2 in cancer immunology.',poster:'assets/projects/tet2-research-poster.png',caption:'Original research poster',fit:'contain'},
};
export function displayFor(key,data){return DISPLAYS[key]||{eyebrow:data?.role||'FROM THE COLLECTION',title:data?.title||data?.name||'Selected work',description:data?.context||'Explore my contribution',poster:data?.poster,caption:'Project source material'};}
export function drawDisplay(ctx,d,img){const W=1280,H=720;ctx.clearRect(0,0,W,H);ctx.fillStyle='#13271f';ctx.fillRect(0,0,W,H);if(!img)return;
 const c=d.crop||[0,0,1,1],sx=c[0]*img.width,sy=c[1]*img.height,sw=c[2]*img.width,sh=c[3]*img.height;
 // Heart has a tiny model in a large original capture: focus on that real model.
 if(d.crop){const dh=650,dw=sw/sh*dh,dx=d.intro?W-dw-36:(W-dw)/2+100;ctx.fillStyle='#130e0a';ctx.fillRect(0,0,W,H);ctx.drawImage(img,sx,sy,sw,sh,dx,12,dw,dh);}
 else {const scale=(d.fit==='contain'?Math.min:Math.max)(W/sw,H/sh),dw=sw*scale,dh=sh*scale;ctx.drawImage(img,sx,sy,sw,sh,(W-dw)/2,(H-dh)/2,dw,dh);}
}
