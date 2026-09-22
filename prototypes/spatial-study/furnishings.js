// Original artifacts are re-housed without editing their source GLB.
export function buildFurnishings(THREE, roots, box, label) {
 const mat=color=>new THREE.MeshStandardMaterial({color,roughness:.83});
 const walnut=mat('#65452f'),oak=mat('#a47c50'),pine=mat('#4c6658'),linen=mat('#cbbd9d'),brass=mat('#bea575');
 const source={};for(const [n,r] of Object.entries(roots)){r.updateWorldMatrix(true,true);source[n]=[...r.children];}
 const groups=Object.fromEntries(Object.keys(roots).map(n=>[n,new THREE.Group()]));
 function cloneWhere(root,test){const g=new THREE.Group(),inverse=root.matrixWorld.clone().invert();root.traverse(o=>{if(!o.isMesh||!test(o))return;const m=new THREE.Mesh(o.geometry,o.material);m.name=o.name;m.userData={...o.userData};inverse.clone().multiply(o.matrixWorld).decompose(m.position,m.quaternion,m.scale);m.visible=o.visible;g.add(m);});return g;}
 function fit(g,w,h,d,x,y,z){g.updateMatrixWorld(true);const b=new THREE.Box3().setFromObject(g),s=b.getSize(new THREE.Vector3()),c=b.getCenter(new THREE.Vector3());const scale=Math.min(w/s.x,h/s.y,d/s.z);const wrap=new THREE.Group();g.position.set(-c.x,-b.min.y,-c.z);wrap.add(g);wrap.scale.setScalar(scale);wrap.position.set(x,y,z);return wrap;}
 function drawers(parent,x,width,y=.40){box(parent,[width,.72,.9],[x,y,-.35],walnut);for(const dx of [-width*.25,width*.25]){box(parent,[width*.48,.58,.08],[x+dx,y,.15],pine);box(parent,[.25,.04,.06],[x+dx,y+.12,.215],brass);}box(parent,[width+.08,.12,1.06],[x,y+.42,-.35],oak);}
 function lamp(parent,x,y,z){const foot=new THREE.Mesh(new THREE.CylinderGeometry(.20,.24,.08,16),brass);foot.position.set(x,y+.04,z);parent.add(foot);box(parent,[.045,.57,.045],[x,y+.34,z],brass);const shade=new THREE.Mesh(new THREE.CylinderGeometry(.19,.34,.30,16),linen);shade.position.set(x,y+.70,z);parent.add(shade);}
 function rug(parent,w,d,x=0,z=2){box(parent,[w,.024,d],[x,.003,z],pine);for(const zz of [z-d/2+.14,z+d/2-.14])box(parent,[w-.25,.008,.035],[x,.019,zz],linen);for(const xx of [x-w/2+.14,x+w/2-.14])box(parent,[.035,.008,d-.25],[xx,.019,z],linen);}
 // A broad screen above a single six-object display console.
 drawers(groups.work,0,9.65);rug(groups.work,8.7,3.6,0,2.45);
 const positions=[-3.875,-2.325,-.775,.775,2.325,3.875];
 const ids=[1,6,4,7,3,12],titles=['Alma','Cyberpunk','VR Baseball','Synesthesia','SuzChews','Traffic twin'];
 for(let i=0;i<6;i++){
  const x=positions[i],key='project/'+ids[i];
  const base=box(groups.work,[1.35,.07,.8],[x,.895,-.22],brass);base.userData.target=key;
  if([1,6,4,3,12].includes(ids[i])){const artifact=cloneWhere(roots.work,o=>o.userData.target===key&&!o.userData.tv&&!/^Project[ _]plaque/.test(o.name));groups.work.add(fit(artifact,1.20,.75,.72,x,.94,-.20));}
  else{
   const g=new THREE.Group();g.position.set(x,.94,-.22);groups.work.add(g);
   if(ids[i]===5){ // Two offset portal frames: a miniature of the spatial mechanic.
    for(const [px,pz,col] of [[-.27,.04,'#72bbc6'],[.28,-.15,'#cf8dac']]){
     const frame=new THREE.Group();frame.position.set(px,0,pz);frame.rotation.y=px<0?.18:-.30;g.add(frame);
     const ring=new THREE.Mesh(new THREE.TorusGeometry(.225,.038,10,40),brass);ring.position.y=.39;ring.scale.y=1.42;frame.add(ring);
     const view=new THREE.Mesh(new THREE.CircleGeometry(.208,40),new THREE.MeshBasicMaterial({color:col}));view.position.set(0,.39,-.016);view.scale.y=1.42;frame.add(view);
     const island=new THREE.Mesh(new THREE.ConeGeometry(.17,.18,5),pine);island.rotation.z=Math.PI;island.position.set(0,.27,.015);island.scale.z=.3;frame.add(island);
     const tree=new THREE.Mesh(new THREE.IcosahedronGeometry(.10,1),mat(px<0?'#e9baca':'#b4d1a5'));tree.position.set(-.02,.49,.02);tree.scale.z=.35;frame.add(tree);
     box(frame,[.025,.15,.03],[-.02,.40,.02],walnut);box(frame,[.53,.06,.32],[0,.015,0],oak);
    }
   }else{ // Layered ambient landscape and a floating control strip.
    for(let a=0;a<4;a++){const m=mat(['#719caf','#9d8eaa','#bf99ac','#7eaaa0'][a]);const arc=new THREE.Mesh(new THREE.TorusGeometry(.35-a*.047,.037,8,40,Math.PI),m);arc.position.set(0,.15+a*.04,-.18+a*.09);g.add(arc);}
    box(g,[.72,.25,.04],[.10,.23,.25],linen);for(let a=0;a<3;a++)box(g,[.11,.035,.02],[-.12+a*.19,.23,.278],pine);
   }
   g.traverse(o=>{if(o.isMesh)o.userData.target=key;});
  }
  const p=label(groups.work,titles[i],[x,.75,.215],1.36);p.userData.target=key;
 }
 // Personal collection and portrait remain together; the winter window owns the right wall.
 for(const o of source.about)groups.about.add(o.clone(true));
 groups.about.traverse(o=>{if(o.isMesh&&(o.userData.target==='frosty'||o.userData.target==='hat'||o.userData.frostyPart)){o.position.x+=o.userData.frostyPart==='hat'?2.3:2.6;o.position.y-=3.35;o.position.z+=.30;}});
 const notebook=box(groups.about,[.78,.60,.12],[.54,1.42,-.28],pine);notebook.userData.target="skills";const skillsLabel=label(groups.about,"Skills",[.54,1.45,-.212],.65,64);skillsLabel.userData.target="skills";box(groups.about,[.07,.60,.14],[.17,1.42,-.28],walnut).userData.target="skills";
 drawers(groups.about,1.21,2.15);lamp(groups.about,2.10,1.12,-.40);rug(groups.about,8.2,3.5,0,2.0);
 for(const [t,y] of [['Movies',3.29],['Music',2.28],['Activities',1.25],['Games',.25]])label(groups.about,t,[-1.148,y,-.12],1.63);
 const wx=3.73,wy=3.50,ww=2.45,wh=4.05;
 // An inset winter diorama gives the window real depth. It does not animate by default.
 const sky=box(groups.about,[ww,wh,.08],[wx,wy,-1.60],new THREE.MeshBasicMaterial({color:'#afc1c9'}));
 for(let i=0;i<9;i++){
  const tree=new THREE.Group();tree.position.set(wx-ww/2+.17+i*.265,wy-wh/2+.14,-1.49);groups.about.add(tree);
  const h=.85+(Math.sin(i*2.7)+1)*.55;
  for(let j=0;j<3;j++){const pineTree=new THREE.Mesh(new THREE.ConeGeometry(.24-j*.052,h*.48,7),mat(j===2?'#dde5e0':'#68827d'));pineTree.scale.z=.11;pineTree.position.y=.22+j*h*.22;tree.add(pineTree);}
 }
 box(groups.about,[ww,.33,.11],[wx,wy-wh/2+.1,-1.32],linen);
 for(let i=0;i<42;i++){const flake=new THREE.Mesh(new THREE.CircleGeometry(.014+(i%3)*.006,6),new THREE.MeshBasicMaterial({color:'#f6faf6'}));flake.position.set(wx+Math.sin(i*31.7)*(ww*.45),wy+Math.cos(i*12.3)*(wh*.44),-1.27);groups.about.add(flake);}
 for(const dx of [-ww/2-.08,ww/2+.08])box(groups.about,[.14,wh+.30,.24],[wx+dx,wy,-1.19],walnut);
 for(const dy of [-wh/2-.08,wh/2+.08])box(groups.about,[ww+.3,.14,.24],[wx,wy+dy,-1.19],walnut);
 box(groups.about,[.07,wh,.15],[wx,wy,-1.12],oak);box(groups.about,[ww,.075,.15],[wx,wy,-1.12],oak);box(groups.about,[ww+.5,.14,.5],[wx,wy-wh/2-.15,-1.12],oak);
 const chair=new THREE.Group();chair.position.set(3.45,0,1.3);chair.rotation.y=-.28;groups.about.add(chair);
 box(chair,[1.25,.26,1.10],[0,.70,0],pine);box(chair,[1.25,1.03,.22],[0,1.10,-.5],pine);
 for(const x of [-.65,.65]){box(chair,[.15,.38,1.18],[x,.9,0],oak);for(const z of [-.43,.43])box(chair,[.12,.61,.12],[x,.3,z],walnut);}
 // Experience: relocated original hearth, two narrow artifact cabinets, original folio desk.
 const hearth=cloneWhere(roots.work,o=>/^(Hearth|Firebox|Limestone|Warm.oak.mantel|Mantel|Iron.fire.grate|Fire.grate)/.test(o.name)||o.userData.flame);
 groups.career.add(fit(hearth,3.65,3.35,1.75,0,0,-.40));
 for(const [index,x,y] of [[0,-3.45,3.52],[1,-3.45,1.90],[2,3.45,3.52],[3,3.45,1.90]]){
  const key='experience/'+index;const g=cloneWhere(roots.career,o=>o.userData.target===key&&!/^(Experience.shelf|Shelf.bracket)/.test(o.name));groups.career.add(fit(g,2.05,1.14,1.15,x,y,-.42));
  box(groups.career,[2.5,.13,1.3],[x,y-.10,-.40],oak);const plaque=label(groups.career,['Edwards','USC','Jel Sert','UChicago'][index],[x,y-.10,.29],2.1);plaque.userData.target=key;
 }
 for(const x of [-3.45,3.45]){drawers(groups.career,x,2.52);for(const dx of [-1.28,1.28])box(groups.career,[.13,4.8,1.3],[x+dx,2.4,-.4],walnut);box(groups.career,[2.64,.15,1.3],[x,4.8,-.4],oak);}
 const folio=cloneWhere(roots.career,o=>['work','experiences','skills'].includes(o.userData.target)||/^V11[ _](worktable|trestle|reading)/.test(o.name));folio.traverse(o=>{if(o.isMesh)o.userData.target='cv';});if(folio.children.length)groups.career.add(fit(folio,2.75,1.25,1.50,1.8,0,2.0));
 rug(groups.career,8.2,4.0,0,2.40);lamp(groups.career,-1.35,2.8,-.45);
 const roleScreen=new THREE.Group();roleScreen.position.set(0,4.5,-1.18);groups.career.add(roleScreen);
 box(roleScreen,[3.48,1.94,.17],[0,0,-.20],oak);
 box(roleScreen,[3.23,1.69,.08],[0,0,-.06],new THREE.MeshBasicMaterial({color:'#20382f'}));
 for(const [name,g] of Object.entries(groups)){source[name].forEach(o=>o.visible=false);roots[name].add(g);}
 return {groups,roleScreen};
}
