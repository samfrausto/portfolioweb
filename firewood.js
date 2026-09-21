import * as THREE from 'three';
const B=(x,y,z)=>new THREE.Vector3(x,z,-y);
// A small reusable log rack and a bounded ember burst; no physics engine or postprocessing.
export class Firewood {
 constructor(scene,host,notify){
  this.host=host;this.notify=notify;this.logs=[];this.drag=null;this.effect=null;this.count=0;
  const bark=new THREE.MeshStandardMaterial({color:'#745039',roughness:1}),end=new THREE.MeshStandardMaterial({color:'#cfb186',roughness:1});
  const geometry=new THREE.CylinderGeometry(.16,.18,.97,9);geometry.rotateX(Math.PI/2);const colors=[];const normals=geometry.attributes.normal;for(let i=0;i<normals.count;i++){const c=Math.abs(normals.getZ(i))>.9?end.color:bark.color;colors.push(c.r,c.g,c.b);}geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geometry.clearGroups();const logMaterial=new THREE.MeshStandardMaterial({vertexColors:true,roughness:1});bark.dispose();end.dispose();
  for(let i=0;i<7;i++){const m=new THREE.Mesh(geometry,logMaterial);m.position.copy(B(-4.52+(i%3)*.43,-.5,.38+Math.floor(i/3)*.27));m.userData.target='firewood';m.castShadow=false;scene.add(m);this.logs.push({mesh:m,home:m.position.clone()});}
  const pts=[[-1.50,1.58,.82],[1.50,1.58,.82],[1.50,3.9,.82],[-1.50,3.9,.82]].map(v=>new THREE.Vector3(...v));
  this.dropOutline=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:'#f5cc77',transparent:true,opacity:.72}));this.dropOutline.visible=false;scene.add(this.dropOutline);
  const canvas=document.createElement('canvas');canvas.width=canvas.height=32;const ctx=canvas.getContext('2d'),g=ctx.createRadialGradient(16,16,0,16,16,16);g.addColorStop(0,'#fff8d0');g.addColorStop(.25,'#ffbb49');g.addColorStop(1,'#ff8d0000');ctx.fillStyle=g;ctx.fillRect(0,0,32,32);
  this.sparkPositions=new Float32Array(42*3);this.sparkVelocity=[];const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(this.sparkPositions,3));
  this.sparks=new THREE.Points(geo,new THREE.PointsMaterial({map:new THREE.CanvasTexture(canvas),color:'#ffc369',size:.13,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending}));this.sparks.visible=false;this.sparks.frustumCulled=false;scene.add(this.sparks);
  this.dragPlane=new THREE.Plane(new THREE.Vector3(0,0,1),-.80);
 }
 get meshes(){return this.logs.map(l=>l.mesh)}
 begin(ray){if(this.effect||this.drag)return false;const hit=ray.intersectObjects(this.meshes,false)[0];if(!hit)return false;this.drag=this.logs.find(l=>l.mesh===hit.object);this.drag.moved=false;this.dropOutline.visible=true;this.host.dataset.fireState='dragging';this.notify('Drop the log into the glowing hearth.');this.move(ray);return true;}
 move(ray){if(!this.drag)return;const p=ray.ray.intersectPlane(this.dragPlane,new THREE.Vector3());if(!p)return;this.drag.moved=true;this.drag.mesh.position.copy(p);this.drag.mesh.rotation.set(.2,Math.PI/2,-.25);this.overFire=Math.abs(p.x)<1.55&&p.y>1.48&&p.y<4.1;this.dropOutline.material.color.set(this.overFire?'#fff2b0':'#dbaa5e');this.dropOutline.material.opacity=this.overFire?1:.6;this.host.dataset.fireState=this.overFire?'drop-ready':'dragging';}
 end(cancel=false,motion=true){if(!this.drag)return;const log=this.drag;this.drag=null;this.dropOutline.visible=false;if(!cancel&&this.overFire)this.burn(log,motion);else{log.mesh.position.copy(log.home);log.mesh.rotation.set(0,0,0);this.host.dataset.fireState='ready';this.notify(cancel?'':'Back on the rack. Drag a log into the fireplace.');}this.overFire=false;}
 feed(motion=true){if(this.effect||this.drag)return;this.burn(this.logs[this.count%this.logs.length],motion);}
 burn(log,motion){this.count++;this.host.dataset.logsAdded=String(this.count);this.host.dataset.fireState='burning';this.notify('A little more warmth.');
  if(!motion){log.mesh.position.copy(log.home);log.mesh.rotation.set(0,0,0);this.host.dataset.fireState='ready';return;}
  this.effect={log,age:0,start:log.mesh.position.clone()};this.sparks.visible=true;
  for(let i=0;i<42;i++){this.sparkPositions[i*3]=0;this.sparkPositions[i*3+1]=2;this.sparkPositions[i*3+2]=.85;this.sparkVelocity[i]=new THREE.Vector3((Math.random()-.5)*1.8,1.3+Math.random()*2.0,(Math.random()-.5)*.6);}
 }
 cancel(){this.end(true);if(this.effect){const l=this.effect.log;l.mesh.position.copy(l.home);l.mesh.rotation.set(0,0,0);l.mesh.scale.setScalar(1);this.effect=null;this.sparks.visible=false;this.host.dataset.fireState='ready';}}
 update(dt){if(!this.effect)return;const e=this.effect;e.age+=dt;const t=Math.min(e.age/.5,1),ease=1-(1-t)**3;e.log.mesh.position.lerpVectors(e.start,B(.2,.3,1.88),ease);e.log.mesh.position.y+=Math.sin(t*Math.PI)*.65;e.log.mesh.rotation.set(.12,Math.PI/2,t*.25);
  const fade=e.age<1?1:Math.max(0,1-(e.age-1)/.6);e.log.mesh.scale.setScalar(fade);
  for(let i=0;i<42;i++){const v=this.sparkVelocity[i],age=Math.max(0,e.age-.27),p=this.sparkPositions;p[i*3]=v.x*age;p[i*3+1]=2+v.y*age-.35*age*age;p[i*3+2]=.85+v.z*age;}
  this.sparks.geometry.attributes.position.needsUpdate=true;this.sparks.material.opacity=Math.max(0,Math.sin(Math.min(1,e.age/2.2)*Math.PI))*.9;
  if(e.age>2.4)this.cancel();
 }
 get boost(){return this.effect?Math.sin(Math.min(1,this.effect.age/2.4)*Math.PI)*.65:0}
}
