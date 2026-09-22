import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {Firewood} from './firewood.js?v=42';
import {PERSONAL} from './personal.js?v=42';
import {drawDisplay} from './display.js?v=51';
const B=(x,y,z)=>new THREE.Vector3(x,z,-y);
export const anchors={
 'experience/0':B(-5.91,.8,8.0),'experience/1':B(-5.91,.8,5.6),'experience/2':B(5.91,.8,8.0),'experience/3':B(5.91,.8,5.6),
 'project/1':B(-6.41,.2,3.4),'project/4':B(-4.68,.35,3.3),'project/6':B(4.82,.3,3.35),'project/12':B(7.02,.3,3.4),
 work:B(2.65,-4.18,1.98),experiences:B(5.1,-4.18,1.98),skills:B(7.55,-4.18,1.98),favorites:B(-10.05,.23,7.81),'favorites/movies':B(-10.05,.25,5.78),'favorites/songs':B(-10.05,.25,3.95),'favorites/activities':B(-10.05,.25,2.12),'favorites/games':B(-10.05,.25,.35),'photo/baseball':B(-11.15,.46,2.95),'photo/surfing':B(-10.05,.46,2.95),'photo/hiking':B(-8.95,.46,2.95),hat:B(-17.27,.68,8.40),frosty:B(-18.4,.9,9.07),tv:B(0,1.08,7.1),about:B(-13.83,1.655,3.44),portrait:B(-13.83,1.748,5.64),firewood:B(-4.075,-1.102,.12)
};
export class Workshop {
 constructor(host,{select,hover,position,ready,error,notify}){
  this.host=host;this.callbacks={select,hover,position,ready,error,notify};this.motion=!matchMedia('(prefers-reduced-motion: reduce)').matches;this.route='room';this.pan=0;this.area='work';this.frosty=false;this.meshes=[];this.folios=[];this.active=null;this.bounds=[];this.frameSamples=[];this.needsFrame=false;this.previewPlaying=false;
  this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#84755e');this.scene.fog=new THREE.Fog('#a99e87',43,80);
  this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.05;this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFShadowMap;this.renderer.shadowMap.autoUpdate=false;host.appendChild(this.renderer.domElement);
  this.camera=new THREE.PerspectiveCamera(31.5,1,.15,100);this.camera.position.copy(B(0,-27.1,10.55));this.look=B(-.25,.6,4.94);this.goalPosition=this.camera.position.clone();this.goalLook=this.look.clone();this.camera.lookAt(this.look);
  const pmrem=new THREE.PMREMGenerator(this.renderer),environment=new RoomEnvironment();this.env=pmrem.fromScene(environment,.04).texture;this.scene.environment=this.env;this.scene.environmentIntensity=.20;environment.dispose();pmrem.dispose();
  this.scene.add(new THREE.HemisphereLight('#d6e3e8','#674529',.63));const key=new THREE.DirectionalLight('#ffdfb0',1.55);key.position.copy(B(-5,-8,14));key.castShadow=true;key.shadow.mapSize.set(1024,1024);Object.assign(key.shadow.camera,{left:-13,right:13,top:13,bottom:-10,near:1,far:45});key.shadow.radius=4;key.shadow.blurSamples=8;key.shadow.normalBias=.035;key.shadow.bias=-.00015;this.scene.add(key);key.target.position.copy(B(0,1,3));this.scene.add(key.target);
  const fill=new THREE.DirectionalLight('#c6e4ff',.68);fill.position.copy(B(-11,.3,7));this.scene.add(fill);
  this.fireLight=new THREE.PointLight('#ff9c39',26,8,2);this.fireLight.layers.set(1);this.fireLight.position.copy(B(0,-.1,2.6));this.scene.add(this.fireLight);
  this.raycaster=new THREE.Raycaster();this.pointer=new THREE.Vector2();this.drag=null;
  this.makeTV();this.makeFire();this.makeArtifacts();this.makeSnow();this.firewood=new Firewood(this.scene,host,notify||(()=>{}));this.meshes.push(...this.firewood.meshes);
  this.spot=new THREE.SpotLight('#ffe2a0',6,22,.39,.74,0);this.spot.position.copy(B(-5.8,-3.8,10));this.spot.target.position.copy(anchors['experience/0']);this.scene.add(this.spot,this.spot.target);
  const woodCanvas=document.createElement('canvas');woodCanvas.width=256;woodCanvas.height=512;const wc=woodCanvas.getContext('2d'),pixels=wc.createImageData(256,512);for(let y=0;y<512;y++)for(let x=0;x<256;x++){const i=(y*256+x)*4,v=242+6*Math.sin(y*.54+Math.sin(x*.021)*3)+Math.random()*5;pixels.data[i]=pixels.data[i+1]=pixels.data[i+2]=v;pixels.data[i+3]=255}wc.putImageData(pixels,0,0);this.woodTexture=new THREE.CanvasTexture(woodCanvas);this.woodTexture.wrapS=this.woodTexture.wrapT=THREE.RepeatWrapping;this.woodTexture.repeat.set(2,3);

  new ResizeObserver(()=>this.resize()).observe(host);this.resize();
  const c=this.renderer.domElement;
  c.addEventListener('pointerdown',e=>{if(this.route!=='room'&&this.route!=='library')return;this.setRay(e);if(this.area==='work'&&this.firewood.begin(this.raycaster)){this.host.style.cursor='grabbing';this.invalidate();}else this.drag={x:e.clientX,y:e.clientY,pan:this.pan,moved:false};c.setPointerCapture(e.pointerId);});
  c.addEventListener('pointermove',e=>{if(this.firewood.drag){this.setRay(e);this.firewood.move(this.raycaster);this.invalidate();return;}if(this.drag){const dx=e.clientX-this.drag.x;if(Math.abs(dx)>7){this.drag.moved=true;const max=this.host.clientWidth<700?7:1.2;this.pan=THREE.MathUtils.clamp(this.drag.pan-dx/host.clientWidth*7,-max,max);this.home();}return;}if(this.isRoom()&&performance.now()-(this.lastHit||0)>50){this.lastHit=performance.now();this.hit(e,false);}});
  c.addEventListener('pointerup',e=>{if(this.firewood.drag){this.setRay(e);this.firewood.move(this.raycaster);this.firewood.end(false,this.motion);this.host.style.cursor='grab';this.invalidate();return;}const d=this.drag;this.drag=null;if(d&&!d.moved&&this.isRoom())this.hit(e,true);});
  c.addEventListener('pointercancel',()=>{this.drag=null;this.firewood.end(true);this.invalidate();});c.addEventListener('pointerleave',()=>{if(!this.drag&&!this.firewood.drag)this.setHover(null);});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)this.invalidate()});this.load();this.last=0;this.invalidate();
 }
 async load(){try{
  const surfaceResponse=await fetch('surfaces.json?v=42');this.surfaceData=await surfaceResponse.json();for(const [key,surface] of Object.entries(this.surfaceData.surfaces)){if(anchors[key])anchors[key].copy(B(...surface.center));}const gltf=await new GLTFLoader().loadAsync('models/workshop.glb?v=42',e=>{if(e.total)document.getElementById('loadDetail').textContent='Arranging the workshop · '+Math.round(e.loaded/e.total*100)+'%'});this.root=gltf.scene;
  this.root.traverse(o=>{if(!o.isMesh)return;o.layers.enable(1);o.castShadow=!o.userData.cover;o.receiveShadow=true;if(['project/3'].includes(o.userData.target)){o.visible=false;return;}this.meshes.push(o);
   const materials=Array.isArray(o.material)?o.material:[o.material];materials.forEach(m=>{if(!m.map&&/walnut|oak|grain|wood/.test(m.name)){m.map=this.woodTexture;m.roughness=.66}if(m.map)m.map.anisotropy=4;if(m.name.includes('brass'))m.metalness=.45;if(m.name.includes('clear hopper')){m.transparent=true;m.opacity=.17;m.depthWrite=false;m.roughness=.15;m.color.set('#bcdfdc');o.castShadow=false;}});
   if(o.userData.frostyPart==='awake')o.visible=false;if(/Logo.cutout.edwards/.test(o.name)){o.material=o.material.clone();o.material.color.set('#9d3b43');o.material.roughness=.55;}
  });this.scene.add(this.root);this.root.updateMatrixWorld(true);
  // Derive interaction/light anchors from the exported figure, not an old room offset.
  for(const [key,part] of [['hat','hat'],['frosty','body']]){const box=new THREE.Box3();this.meshes.filter(m=>m.userData.frostyPart===part).forEach(m=>box.union(new THREE.Box3().setFromObject(m)));if(!box.isEmpty())box.getCenter(anchors[key]);}
  this.host.dataset.frostyState='resting';await this.makePersonalPhotos();
  // A cover and its lettering turn together about a real hinge.
  for(const key of ['work','experiences','skills']){
   const cover=this.meshes.find(m=>m.userData.cover===key);if(!cover)continue;
   const pose=this.surfaceData.books[key],frame=new THREE.Group();frame.position.copy(B(...pose.hinge));frame.rotation.x=pose.tilt;this.scene.add(frame);const hinge=new THREE.Group();frame.add(hinge);frame.updateMatrixWorld(true);hinge.attach(cover);this.folios.push({key,hinge,frame});
  }

  this.buildBounds();this.resize();this.renderer.shadowMap.needsUpdate=true;this.ready=true;document.body.dataset.renderer='live-webgl';document.getElementById('loading').hidden=true;this.callbacks.ready?.();this.invalidate();
 }catch(error){console.error(error);document.getElementById('loadDetail').textContent='The 3D room could not load. The collection below is still available.';this.callbacks.error?.(error)}}
 async makePersonalPhotos(){
  const loader=new THREE.TextureLoader(),photos=PERSONAL.activities.items.map(i=>({key:'photo/'+i.key,image:i.image,target:'favorites/activities',cover:true,focus:{baseball:.56,surfing:.62,hiking:.30}[i.key]}));
  photos.push({key:'portrait',image:'assets/personal/portrait.jpg',target:'about'});
  this.libraryArt=[];
  for(const item of photos)await this.addPicture(loader,item);
 }
 async addPicture(loader,item){const data=this.surfaceData.surfaces[item.key];if(!data)return;
  const texture=await loader.loadAsync(item.image);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;
  const aspect=texture.image.width/texture.image.height,target=data.width/data.height;
  let w=data.width,h=data.height;
  if(item.cover){if(aspect>target){texture.repeat.x=target/aspect;texture.offset.x=(1-texture.repeat.x)*(item.focus??.5);}else{texture.repeat.y=aspect/target;texture.offset.y=(1-texture.repeat.y)*.31;}}
  else if(aspect>target)h=w/aspect;else w=h*aspect;
  const plane=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:texture,toneMapped:false}));plane.position.copy(B(...data.center));plane.userData.target=item.target;this.scene.add(plane);this.meshes.push(plane);this.libraryArt.push(plane);
 }
 loadCovers(){if(!this.surfaceData||this.coversLoading)return;this.coversLoading=true;const loader=new THREE.TextureLoader();Promise.all(Object.entries(PERSONAL).filter(([k])=>k!=='activities').flatMap(([cat,c])=>c.items.map(i=>this.addPicture(loader,{key:'cover/'+i.key,image:i.image,target:'favorites/'+cat})))).then(()=>{this.buildBounds();this.invalidate();}).catch(e=>console.error('Cover art could not load',e));}
 makeTV(){
  this.tvCanvas=document.createElement('canvas');this.tvCanvas.width=1280;this.tvCanvas.height=720;this.tvContext=this.tvCanvas.getContext('2d');this.tvTexture=new THREE.CanvasTexture(this.tvCanvas);this.tvTexture.colorSpace=THREE.SRGBColorSpace;this.tvTexture.minFilter=THREE.LinearFilter;this.tvTexture.generateMipmaps=false;
  this.tv=new THREE.Mesh(new THREE.PlaneGeometry(7.7,4.33125),new THREE.MeshBasicMaterial({map:this.tvTexture,toneMapped:false}));this.tv.position.copy(B(0,1.075,7.11));this.tv.userData.target='tv';this.scene.add(this.tv);this.meshes.push(this.tv);this.video=document.getElementById('tvVideo');this.videoTexture=new THREE.VideoTexture(this.video);this.videoTexture.colorSpace=THREE.SRGBColorSpace;
  this.video.addEventListener('loadeddata',()=>this.invalidate());this.video.addEventListener('pause',()=>{if(this.video.paused)this.syncPlayback(false);});this.video.addEventListener('error',()=>{this.previewPlaying=false;this.tv.material.map=this.tvTexture;document.getElementById('tvScreen').classList.remove('playing');document.getElementById('playPreview').textContent='Retry demo ▷';this.invalidate()});document.fonts.ready.then(()=>this.drawTV());
 }
 preview(display){if(this.display===display)return;this.stopPreview();this.display=display;this.previewPaused=false;this.video.removeAttribute('src');this.video.load();this.drawTV();}
 syncPlayback(playing){this.previewPlaying=playing;this.tv.material.map=playing?this.videoTexture:this.tvTexture;document.getElementById('tvScreen').classList.toggle('playing',playing);document.getElementById('playPreview').textContent=playing?'Pause demo Ⅱ':'Play demo ▷';document.getElementById('playPreview').setAttribute('aria-pressed',String(playing));this.invalidate();}
 stopPreview(){this.playRequest=(this.playRequest||0)+1;this.playPending=false;this.video.pause();this.syncPlayback(false);}
 autoPlayPreview(){if(this.display?.autoplay&&this.motion&&!this.previewPaused)this.startPreview();}
 startPreview(){
  if(!this.display?.src||this.route!=='room'||document.hidden||this.previewPlaying||this.playPending)return;
  const request=this.playRequest=(this.playRequest||0)+1;this.playPending=true;
  if(this.video.getAttribute('src')!==this.display.src)this.video.src=this.display.src;
  this.video.muted=true;document.getElementById('playPreview').textContent='Loading demo…';
  this.video.play().then(()=>{if(request!==this.playRequest)return;this.playPending=false;if(this.route==='room'&&!document.hidden)this.syncPlayback(true);else this.stopPreview();}).catch(()=>{if(request===this.playRequest){this.playPending=false;this.syncPlayback(false);}});
 }
 playPreview(){if(!this.display?.src)return false;if(this.previewPlaying||this.playPending){this.previewPaused=true;this.stopPreview();return false;}this.previewPaused=false;this.startPreview();return true;}
 drawTV(){if(!this.display)return;const display=this.display;this.images||=new Map();let img=this.images.get(display.poster);
  if(display.poster&&!img){img=new Image();this.images.set(display.poster,img);img.onload=()=>{if(this.display===display)this.drawTV()};img.src=display.poster;}
  drawDisplay(this.tvContext,display,img?.complete&&img.naturalWidth?img:null);this.tvTexture.needsUpdate=true;this.invalidate();}
 tvCorners(){return [[-3.85,2.165625],[3.85,2.165625],[3.85,-2.165625],[-3.85,-2.165625]].map(([x,y])=>this.project(this.tv.position.clone().add(new THREE.Vector3(x,y,.012))));}
 bookCorners(key){const f=this.folios.find(f=>f.key===key);if(!f)return null;f.hinge.updateMatrixWorld();return [[-.97,1.21],[.97,1.21],[.97,-1.21],[-.97,-1.21]].map(([x,y])=>this.project(f.hinge.localToWorld(new THREE.Vector3(x+.95,y,.055))));}
 surfaceCorners(key){const p=this.surfaceData?.surfaces[key];return p?p.corners.map(v=>this.project(B(...v))):null;}
 center(){this.pan=0;this.home();}
 isRoom(){return this.route==='room'||this.route==='library';}

 spotlight(key){key=key==='tv'?this.previewKey||'experience/0':key;const focus=this.surfaceData?.focus?.[key],target=focus?B(...focus):anchors[key];if(!target)return;this.spot.target.position.copy(target);this.spot.position.copy(target).add(new THREE.Vector3(-.7,4,4.5));this.spot.intensity=6;this.host.dataset.spotlight=key;this.invalidate();}
 makeArtifacts(){
  const add=(geo,col,pos,key)=>{const m=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:col,roughness:.55,metalness:.15}));m.position.copy(B(...pos));m.userData.target=key;m.castShadow=true;m.receiveShadow=true;this.scene.add(m);this.meshes.push(m);return m;};
  // A representative road model identifies the research; it is not a simulation result.
  const k='project/12',x=7.02,y=.22,z=2.68;
  add(new THREE.BoxGeometry(1.62,.17,1.26),'#24443d',[x,y,z],k);add(new THREE.BoxGeometry(.87,.07,1.17),'#3c4e4a',[x,y,z+.12],k);
  for(let i=0;i<5;i++)add(new THREE.BoxGeometry(.03,.015,.13),'#e2ceb0',[x,y-.46+i*.23,z+.17],k);
  for(let i=0;i<4;i++){const cx=x+(i%2===0?-.23:.23),cy=y-.40+i*.26;add(new THREE.BoxGeometry(.25,.15,.34),i===0?'#e8ad58':'#a4bc8b',[cx,cy,z+.25],k);add(new THREE.BoxGeometry(.19,.09,.17),'#d5e5d1',[cx,cy,z+.36],k);}
  for(let i=0;i<3;i++){const arc=add(new THREE.TorusGeometry(.28+i*.12,.008,4,24,Math.PI*1.5),'#adcd8b',[x-.23,y-.4,z+.54],k);arc.rotation.x=-Math.PI/2;}
  const road=new THREE.Group();road.position.copy(B(x,y,z));this.scene.add(road);for(const m of this.meshes.filter(m=>m.userData.target===k))road.attach(m);road.rotation.x=Math.PI*.30;road.scale.set(1.12,1.12,1.12);road.position.y+=.75;add(new THREE.BoxGeometry(.65,.48,.48),'#345348',[x,y,z+.22],k);

 }
 buildBounds(){const groups=new Map();for(const m of this.meshes){const key=m.userData.target;if(!key||!m.visible)continue;const box=new THREE.Box3().setFromObject(m);if(groups.has(key))groups.get(key).union(box);else groups.set(key,box);}this.bounds=[...groups].map(([key,box])=>({key,box}));}
 makeFire(){this.flames=[];const colors=['#c63d0c','#f3801b','#ffc04a'];for(let j=0;j<8;j++){
  const inner=j>=5,x=inner?-.64+(j-5)*.65:-1.08+j*.54,height=inner?.78+Math.sin(j)*.18:1.25+.32*Math.sin(j*1.7),r=inner?.21:.31;
  const vertices=[],indices=[],sides=9,rings=7;
  for(let k=0;k<rings;k++){const u=k/(rings-1),radius=r*Math.sin(Math.PI*(u*.94+.03))*(1-u*.62);for(let a=0;a<sides;a++){const angle=a/sides*Math.PI*2;vertices.push(Math.cos(angle)*radius,u*height,Math.sin(angle)*radius*.68)}}
  for(let k=0;k<rings-1;k++)for(let a=0;a<sides;a++){const n=(a+1)%sides,b=k*sides;indices.push(b+a,b+n,b+sides+a,b+n,b+sides+n,b+sides+a)}
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setIndex(indices);geometry.computeVertexNormals();const col=colors[inner?2:j%2];const material=new THREE.MeshStandardMaterial({color:col,emissive:col,emissiveIntensity:.55,roughness:1,flatShading:true});const mesh=new THREE.Mesh(geometry,material);mesh.position.copy(B(x,inner?.27:.63,1.84));this.scene.add(mesh);this.flames.push({mesh,base:Float32Array.from(vertices),height,phase:j*1.81});
 }}
 makeSnow(){const points=[];this.snowSpeeds=[];for(let i=0;i<90;i++){points.push(8.88+Math.random()*3.15,2.09+Math.random()*6.55,-3.02-Math.random()*.48);this.snowSpeeds.push(.12+Math.random()*.18)}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(points,3));this.snow=new THREE.Points(geo,new THREE.PointsMaterial({color:'#edfaff',size:.044,transparent:true,opacity:.84,depthWrite:false}));this.scene.add(this.snow);}

 setMotion(on){this.motion=on;if(!on){this.firewood.cancel();this.stopPreview();}else this.autoPlayPreview();this.invalidate();}
 setHover(key){if(this.active===key)return;this.active=key;this.host.dataset.hovered=key||'';if(key)this.spotlight(key);this.host.style.cursor=key?'pointer':'grab';document.querySelectorAll('.book-label').forEach(b=>b.classList.toggle('hovered',b.dataset.object===key));this.callbacks.hover?.(key);this.invalidate();}
 setRay(e){const r=this.host.getBoundingClientRect();this.pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);this.raycaster.setFromCamera(this.pointer,this.camera);}
 hit(e,click){this.setRay(e);const hit=this.raycaster.intersectObjects(this.meshes.filter(m=>m.visible&&m.userData.target),false).find(h=>{let o=h.object;while(o){if(!o.visible)return false;o=o.parent;}return true;});const key=hit?.object.userData.target||null;this.setHover(key);if(click&&key)this.callbacks.select?.(key);}
 feedFire(){this.firewood.feed(this.motion);this.invalidate();}
 cancelDrag(){this.drag=null;this.firewood.cancel();this.invalidate();}
 wake(awake=!this.frosty){this.frosty=awake;this.meshes.forEach(m=>{const p=m.userData.frostyPart;if(p==='awake')m.visible=awake;if(p==='hat'||p==='idleOnly')m.visible=!awake});this.host.dataset.frostyState=awake?'awake':'resting';this.uiDirty=true;this.buildBounds();this.renderer.shadowMap.needsUpdate=true;this.spotlight('frosty');this.invalidate();return awake;}
 home(){const mobile=this.host.clientWidth<700&&!document.body.classList.contains('reading');const tvDistance=7.7/(2*Math.tan(35*Math.PI/360)*this.camera.aspect)*1.10-1.075;
  if(this.area==='library'){
   this.goalPosition.copy(mobile?B(-16.3+this.pan,-Math.max(19.2,9.7/(2*Math.tan(35*Math.PI/360)*this.camera.aspect)),7.4):B(-16.5+this.pan*.4,-19.7,8.3));this.goalLook.copy(B(mobile?-16.3+this.pan:-16.5+this.pan*.4,.6,4.9));this.camera.fov=mobile?35:Math.max(34.5,THREE.MathUtils.radToDeg(2*Math.atan(10*this.host.clientHeight/Math.max(220,this.host.clientHeight-180)/41)));
  }else{const overview=THREE.MathUtils.clamp(Math.abs(this.pan)/2,0,1),distance=THREE.MathUtils.lerp(tvDistance,Math.max(tvDistance,17.5),overview);this.goalPosition.copy(mobile?B(this.pan,-distance,8.4):B(.45+this.pan*.5,-19.5,9.3));this.goalLook.copy(B(mobile?this.pan:.25+this.pan,.6,mobile?THREE.MathUtils.lerp(6.35,4.75,overview):5.35));this.camera.fov=mobile?35:27;}
  this.camera.updateProjectionMatrix();this.invalidate();
 }
 focus(key){this.route=key;if(this.isRoom()){this.area=key==='library'?'library':'work';this.pan=0;if(this.area==='library'){this.loadCovers();this.stopPreview();}else this.autoPlayPreview();this.uiDirty=true;this.home();return;}
  this.firewood.cancel();this.stopPreview();const target=anchors[key]||anchors[key.startsWith('favorites')?'favorites':'work'];this.goalLook.copy(target);if(key.startsWith('experience/'))this.goalPosition.copy(target).add(new THREE.Vector3(-.9,1.1,7.6));else if(key.startsWith('project/'))this.goalPosition.copy(target).add(new THREE.Vector3(2.2,2.3,6.5));else this.goalPosition.copy(target).add(new THREE.Vector3(.2,4.4,5.5));this.camera.fov=39;this.camera.updateProjectionMatrix();this.invalidate();
 }
 resize(){for(const m of this.meshes){if(['work','experiences','skills'].includes(m.userData.target))m.visible=innerWidth>700;}const w=this.host.clientWidth,h=this.host.clientHeight;if(!w||!h)return;this.renderer.setSize(w,h,false);this.uiDirty=true;this.camera.aspect=w/h;this.camera.updateProjectionMatrix();if(this.isRoom())this.home();this.invalidate();}
 panBy(dx){const max=this.host.clientWidth<700?7:1.2;this.pan=THREE.MathUtils.clamp(this.pan+dx,-max,max);this.home();}
 project(v){const p=v.clone().project(this.camera),r=this.host.getBoundingClientRect();return {x:r.left+(p.x+1)*r.width/2,y:r.top+(1-p.y)*r.height/2,visible:p.z<1&&p.z>-1&&Math.abs(p.x)<1.2&&Math.abs(p.y)<1.0}}
 invalidate(){if(this.needsFrame)return;this.needsFrame=true;requestAnimationFrame(ms=>this.animate(ms));}
 animate(ms){this.needsFrame=false;if(document.hidden)return;
  const raw=ms-(this.last||ms),dt=Math.min(raw/1000,.05)||.016;const moving=this.camera.position.distanceToSquared(this.goalPosition)>.00002||this.look.distanceToSquared(this.goalLook)>.00002;
  if(!moving&&this.motion&&this.isRoom()&&ms-(this.lastRender||0)<16){this.invalidate();return;}
  this.last=ms;this.lastRender=ms;const start=performance.now(),blend=this.motion?1-Math.exp(-dt*8):1;this.camera.position.lerp(this.goalPosition,blend);this.look.lerp(this.goalLook,blend);this.camera.lookAt(this.look);
  if(this.motion&&this.isRoom()){this.firewood.update(dt);const boost=this.firewood.boost,t=ms/1000;if(this.snow){const p=this.snow.geometry.attributes.position;for(let i=0;i<p.count;i++){let y=p.getY(i)-dt*this.snowSpeeds[i];if(y<2.05)y=8.63;p.setY(i,y);}p.needsUpdate=true;}for(const f of this.flames){const a=f.mesh.geometry.attributes.position;for(let i=0;i<a.count;i++){const x=f.base[i*3],y=f.base[i*3+1],z=f.base[i*3+2],u=y/f.height;a.setXYZ(i,x+Math.sin(t*2.7+f.phase+u*2.8)*u*u*.20,y*(1+boost+.07*Math.sin(t*3.2+f.phase)),z);}a.needsUpdate=true;}this.fireLight.intensity=25+boost*24+2*Math.sin(t*4.2);}
  let coverMoving=false;for(const f of this.folios){const goal=this.route===f.key?-.85:this.active===f.key?-.28:0;if(Math.abs(f.hinge.rotation.y-goal)>.001)coverMoving=true;f.hinge.rotation.y=THREE.MathUtils.lerp(f.hinge.rotation.y,goal,blend);}
  this.renderer.render(this.scene,this.camera);this.host.dataset.frames=String((+this.host.dataset.frames||0)+1);
  // Project DOM labels only when camera geometry changes, not on every flame frame.
  if(this.ready&&(moving||coverMoving||this.uiDirty!==false)){this.callbacks.position?.(this);this.uiDirty=false;}
  const cost=performance.now()-start;if(raw>0&&raw<250){this.frameSamples.push(raw);if(this.frameSamples.length>180)this.frameSamples.shift();}
  if(ms-(this.lastReport||0)>1500){this.lastReport=ms;const v=[...this.frameSamples].sort((a,b)=>a-b);Object.assign(this.host.dataset,{triangles:this.renderer.info.render.triangles,drawCalls:this.renderer.info.render.calls,frameMs:(v[Math.floor(v.length/2)]||0).toFixed(1),p95Ms:(v[Math.floor(v.length*.95)]||0).toFixed(1),renderCpuMs:cost.toFixed(2),renderMode:this.motion?'live':'on-demand'});}
  if(moving||coverMoving||(this.motion&&this.isRoom())||this.previewPlaying)this.invalidate();
 }
}
