window.Relay=(function(){
'use strict';
var N=1500;
var TEAL=[18,181,146],WARM=[228,87,46],PAPER=[240,242,244],BG=[11,16,23];
var YELL=[236,199,74],GREY=[84,94,106];               /* tag 3 = the flower; GREY = tasteless */

/* ---------- sampling helpers (3D, normalized ~[-1,1]) ---------- */
function P(a,x,y,z,w,tag,grp){a.push([x,y,z,w==null?.7:w,tag||0,grp||0]);}
function ring(a,cx,cy,cz,r,n,axis,w,tag,a0,a1){
  a0=a0==null?0:a0;a1=a1==null?6.2832:a1;
  for(var k=0;k<n;k++){var t=a0+(a1-a0)*k/(n-1||1),c=Math.cos(t)*r,s=Math.sin(t)*r;
    if(axis==='y')P(a,cx+c,cy,cz+s,w,tag);
    else if(axis==='x')P(a,cx,cy+c,cz+s,w,tag);
    else P(a,cx+c,cy+s,cz,w,tag);}
}
function seg3(a,x1,y1,z1,x2,y2,z2,n,w,tag,j){
  j=j||0;
  for(var k=0;k<n;k++){var t=k/(n-1||1);
    P(a,x1+(x2-x1)*t+(Math.random()-.5)*j,y1+(y2-y1)*t+(Math.random()-.5)*j,z1+(z2-z1)*t+(Math.random()-.5)*j,w,tag);}
}
function rrOutline(a,cx,cy,z,hw,hh,cr,n,w,tag){
  var sw=2*(hw-cr),sh=2*(hh-cr),q=1.5708*cr,per=2*sw+2*sh+4*q;
  for(var k=0;k<n;k++){
    var d=(k/n)*per,x,y,t;
    if(d<sw){x=-(hw-cr)+d;y=-hh;}
    else if((d-=sw)<q){t=d/cr;x=(hw-cr)+Math.sin(t)*cr;y=-(hh-cr)-Math.cos(t)*cr;}
    else if((d-=q)<sh){x=hw;y=-(hh-cr)+d;}
    else if((d-=sh)<q){t=d/cr;x=(hw-cr)+Math.cos(t)*cr;y=(hh-cr)+Math.sin(t)*cr;}
    else if((d-=q)<sw){x=(hw-cr)-d;y=hh;}
    else if((d-=sw)<q){t=d/cr;x=-(hw-cr)-Math.sin(t)*cr;y=(hh-cr)+Math.cos(t)*cr;}
    else if((d-=q)<sh){x=-hw;y=(hh-cr)-d;}
    else{t=(d-sh)/cr;x=-(hw-cr)-Math.cos(t)*cr;y=-(hh-cr)-Math.sin(t)*cr;}
    P(a,cx+x,cy+y,z,w,tag);
  }
}
function face(a,plane,c,u0,u1,v0,v1,nu,nv,w,tag){
  for(var i=0;i<nu;i++)for(var j=0;j<nv;j++){
    var u=u0+(u1-u0)*(i/(nu-1||1)),v=v0+(v1-v0)*(j/(nv-1||1));
    if(plane==='z')P(a,u,v,c,w,tag);
    else if(plane==='x')P(a,c,v,u,w,tag);
    else P(a,u,c,v,w,tag);
  }
}
/* catmull-rom through control points — used for the great vessels */
function crs(p0,p1,p2,p3,t){var t2=t*t,t3=t2*t;
  return .5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t2+(-p0+3*p1-3*p2+p3)*t3);}
function curvePt(pts,s){
  var n=pts.length,f=Math.max(0,Math.min(1,s))*(n-1),i=Math.min(n-2,Math.floor(f)),t=f-i;
  var p0=pts[Math.max(0,i-1)],p1=pts[i],p2=pts[i+1],p3=pts[Math.min(n-1,i+2)];
  return [crs(p0[0],p1[0],p2[0],p3[0],t),crs(p0[1],p1[1],p2[1],p3[1],t),crs(p0[2],p1[2],p2[2],p3[2],t)];
}
/* swept tube of contour rings along a curve — reads solid from any angle */
function tube(a,pts,rf,nSeg,nRing,w,tag){
  for(var i=0;i<=nSeg;i++){
    var s=i/nSeg,c=curvePt(pts,s),
        c1=curvePt(pts,Math.max(0,s-.006)),c2=curvePt(pts,Math.min(1,s+.006));
    var tx=c2[0]-c1[0],ty=c2[1]-c1[1],tz=c2[2]-c1[2],tl=Math.sqrt(tx*tx+ty*ty+tz*tz)||1;
    tx/=tl;ty/=tl;tz/=tl;
    var ux=0,uy=0,uz=1;if(Math.abs(tz)>.9){ux=1;uz=0;}
    var ax=ty*uz-tz*uy,ay=tz*ux-tx*uz,az=tx*uy-ty*ux,al=Math.sqrt(ax*ax+ay*ay+az*az)||1;
    ax/=al;ay/=al;az/=al;
    var bx=ty*az-tz*ay,by=tz*ax-tx*az,bz=tx*ay-ty*ax;
    var r=rf(s);
    for(var k=0;k<nRing;k++){
      var th=(k/nRing)*6.2832,cc=Math.cos(th)*r,ss=Math.sin(th)*r;
      P(a,c[0]+ax*cc+bx*ss,c[1]+ay*cc+by*ss,c[2]+az*cc+bz*ss,w,tag);
    }
  }
}
function strand(a,pts,n,w,tag){
  for(var i=0;i<n;i++){var c=curvePt(pts,i/(n-1||1));P(a,c[0],c[1],c[2],w,tag);}
}
/* latitude-ring ellipsoid — see-through, reads as a volume */
function blob(a,cx,cy,cz,rx,ry,rz,rows,w,tag,grp){
  for(var i=0;i<rows;i++){
    var u=((i+.5)/rows)*Math.PI,sr=Math.sin(u),n=Math.max(6,Math.round(30*sr));
    for(var k=0;k<n;k++){var th=(k/n)*6.2832;
      P(a,cx+Math.cos(th)*sr*rx,cy-Math.cos(u)*ry,cz+Math.sin(th)*sr*rz,w,tag,grp);}
  }
}
/* distance from origin to the far side of a circle along a ray — for cross-section unions */
function rayC(dx,dz,cx,cz,R){
  var b=dx*cx+dz*cz,cc=cx*cx+cz*cz-R*R,d=b*b-cc;
  if(d<0)return 0;var t=b+Math.sqrt(d);return t>0?t:0;
}
/* even-spaced walk around a closed plan polygon (x,z), scaled */
function poly(a,pl,y,n,w,tag,s){
  var L=[],per=0,i,q;
  for(i=0;i<pl.length;i++){var p0=pl[i],p1=pl[(i+1)%pl.length];
    var d=Math.hypot((p1[0]-p0[0])*s,(p1[1]-p0[1])*s);L.push(d);per+=d;}
  for(i=0;i<n;i++){
    var dd=(i/n)*per,e=0,sI=0;
    for(q=0;q<L.length;q++){if(dd<=e+L[q]){sI=q;break;}e+=L[q];}
    var t=L[sI]>0?(dd-e)/L[sI]:0,a0=pl[sI],a1=pl[(sI+1)%pl.length];
    P(a,(a0[0]+(a1[0]-a0[0])*t)*s,y,(a0[1]+(a1[1]-a0[1])*t)*s,w,tag);
  }
}
function inPoly(pl,x,z,s){
  var c=false;
  for(var i=0,j=pl.length-1;i<pl.length;j=i++){
    var xi=pl[i][0]*s,zi=pl[i][1]*s,xj=pl[j][0]*s,zj=pl[j][1]*s;
    if(((zi>z)!==(zj>z))&&(x<(xj-xi)*(z-zi)/(zj-zi)+xi))c=!c;
  }
  return c;
}

/* ---------- 01 — VR headset: shell + lens wells + INTERIOR training loop ---------- */
function cloudHeadset(){
  var a=[],i,z,hw=.66,hh=.36,cr=.20,dz=.24;
  for(i=0;i<5;i++){z=-dz+(2*dz)*(i/4);rrOutline(a,0,0,z,hw,hh,cr,i===4?110:60,i===4?.95:.5,0);}
  rrOutline(a,0,0,dz,hw*.90,hh*.84,cr*.8,50,.28,0);
  [-.31,.31].forEach(function(x){
    ring(a,x,0,dz-.02,.155,48,'z',.95,1);
    ring(a,x,0,dz-.07,.115,30,'z',.5,1);
    for(i=0;i<52;i++){var g=Math.random()*6.2832,rr=.145*Math.sqrt(Math.random());
      P(a,x+Math.cos(g)*rr,Math.sin(g)*rr,dz-.03-rr*.12,.45,1);}
  });
  ring(a,0,.30,dz-.04,.09,20,'z',.42,0,3.34,6.08);
  [-1,1].forEach(function(s){
    seg3(a,s*hw,-.05,dz*.4,s*1.02,-.12,-.62,30,.8,0,.012);
    seg3(a,s*hw,.09,dz*.4,s*1.02,.02,-.62,30,.8,0,.012);
    seg3(a,s*1.02,-.12,-.62,s*1.02,.02,-.62,9,.7,0,.008);
  });
  for(i=0;i<36;i++){var t=i/35;P(a,0,-hh-Math.sin(Math.PI*t)*.22,dz-t*(dz+.62),.5,0);}
  /* INTERIOR: the training loop, seen through the shell as it turns */
  ring(a,0,0,-.02,.40,64,'y',.42,1);                 /* loop ellipse, horizontal */
  for(i=0;i<4;i++){                                  /* four nodes on the loop */
    var na=i*1.5708;
    ring(a,Math.cos(na)*.40,0,Math.sin(na)*.40,.055,16,'y',.9,1);
  }
  for(i=0;i<14;i++){                                 /* travelling charge on the loop */
    var fa=(i/14)*6.2832;
    P(a,Math.cos(fa)*.40,0,Math.sin(fa)*.40,.85,2);
  }
  return a;
}

/* ---------- 02 — ANATOMICAL heart: ventricular mass + great vessels + INTERIOR flow ----------
   The old version was the valentine curve (16·sin³t) lofted into 3D — an emoji, not an organ.
   This is built the way an anatomy actually reads at low dot counts:
     1. the ventricular mass is a LOFT whose cross-section is the UNION of two circles
        (big LV + smaller RV that stops short of the apex) — that asymmetry is what stops
        it looking like a pear;
     2. the apex is sheared down-and-left and forward, which is the pose everyone recognises;
     3. the AORTIC ARCH is the single strongest legibility cue — a heart reads as a heart from
        the arch and its three branches long before the muscle mass resolves. It gets the
        most contrast and the most dots of any vessel.
   ------------------------------------------------------------------------------------------ */
function hRad(v,dx,dz){                      /* union cross-section radius at height v */
  var rl=.44*Math.sqrt(Math.max(0,1-Math.pow(v,2.1))),      /* left ventricle */
      rr=.30*Math.sqrt(Math.max(0,1-Math.pow(v,1.25)));     /* right ventricle, ends higher */
  if(rl<.02)return 0;
  return Math.max(rayC(dx,dz,0,0,rl),rr>.03?rayC(dx,dz,rl*.62,rl*.30,rr):0);
}
function hY(v){return -.52+v*1.16;}
function hSX(v){return -.20*v*v;}             /* apex shears left */
function hSZ(v){return .09*v;}                /* ...and forward */
function cloudHeart(){
  var a=[],lvl,k,v,y,r,t,dx,dz;
  var LEV=18;
  for(lvl=0;lvl<LEV;lvl++){                   /* contour slices */
    v=lvl/(LEV-1);y=hY(v);
    var lit=(lvl%4===0),n=Math.max(20,Math.round(76*Math.sqrt(Math.max(0,1-Math.pow(v,2.1)))));
    for(k=0;k<n;k++){
      t=(k/n)*6.2832;dx=Math.cos(t);dz=Math.sin(t);
      r=hRad(v,dx,dz);if(r<=.02)continue;
      P(a,hSX(v)+dx*r,y,hSZ(v)+dz*r*.86,lit?.9:.36+.30*(1-v),0);
    }
  }
  for(k=0;k<10;k++){                          /* meridians tie the slices into a solid */
    t=(k/10)*6.2832;dx=Math.cos(t);dz=Math.sin(t);
    for(lvl=0;lvl<=24;lvl++){
      v=lvl/24;r=hRad(v,dx,dz);if(r<=.02)continue;
      P(a,hSX(v)+dx*r,hY(v),hSZ(v)+dz*r*.86,.30,0);
    }
  }
  blob(a,.30,-.60,.02,.20,.16,.17,7,.40,0);   /* right atrium */
  blob(a,-.17,-.58,-.20,.17,.14,.15,6,.34,0); /* left atrium / appendage */

  /* AORTA — ascending, arch, descending. The legibility anchor. */
  var AO=[[.03,-.44,.05],[.09,-.72,.03],[.10,-1.00,-.03],[.02,-1.16,-.15],
          [-.14,-1.08,-.26],[-.18,-.74,-.31],[-.17,-.36,-.32],[-.16,-.02,-.32]];
  tube(a,AO,function(s){return .125-s*.045;},40,10,.82,0);
  [[.07,-1.13,-.10],[-.01,-1.17,-.16],[-.09,-1.12,-.22]].forEach(function(b){
    tube(a,[[b[0],b[1]+.02,b[2]],[b[0]+.01,b[1]-.12,b[2]-.02],[b[0]+.02,b[1]-.26,b[2]-.03]],
      function(){return .038;},9,7,.7,0);     /* brachiocephalic / carotid / subclavian */
  });
  /* PULMONARY TRUNK crossing in FRONT of the aorta, then bifurcating */
  tube(a,[[.19,-.40,.22],[.13,-.66,.22],[.02,-.86,.15],[-.09,-.93,.06]],
    function(s){return .105-s*.025;},22,9,.6,0);
  tube(a,[[-.09,-.93,.06],[-.24,-.95,-.02],[-.36,-.92,-.10]],function(){return .05;},8,6,.5,0);
  tube(a,[[-.09,-.93,.06],[.02,-1.00,-.04],[.13,-1.02,-.12]],function(){return .05;},8,6,.5,0);
  /* SVC + IVC on the right */
  tube(a,[[.35,-1.04,-.08],[.33,-.86,-.06],[.31,-.66,-.04]],function(){return .072;},14,7,.55,0);
  tube(a,[[.31,-.46,-.06],[.32,-.24,-.07],[.32,-.04,-.08]],function(){return .068;},11,6,.45,0);
  /* LAD — the anterior interventricular groove. Gives the form a readable FRONT. */
  strand(a,[[.13,-.40,.30],[.05,-.12,.32],[-.03,.18,.26],[-.13,.46,.14],[-.17,.58,.05]],34,.85,0);

  /* AORTIC VALVE at the root — teal, the subject of the piece */
  var vy=-.44;
  ring(a,.03,vy,.05,.135,64,'y',.95,1);
  for(var L=0;L<3;L++){                       /* three cusps */
    var b0=L*2.0944,a1=b0-1.0472,a2=b0+1.0472;
    var x1=.03+Math.cos(a1)*.135,z1=.05+Math.sin(a1)*.135,
        x2=.03+Math.cos(a2)*.135,z2=.05+Math.sin(a2)*.135;
    for(k=0;k<=20;k++){var u=k/20,iu=1-u;
      P(a,iu*iu*x1+2*iu*u*.03+u*u*x2,vy+Math.sin(u*3.1416)*.055,
          iu*iu*z1+2*iu*u*.05+u*u*z2,.9,1);}
  }
  ring(a,.19,-.40,.22,.10,26,'y',.5,1);       /* pulmonic ring */

  /* INTERIOR: the two circuits, warm — only visible because the form turns */
  strand(a,[[.31,-.60,-.02],[.26,-.28,.06],[.19,.10,.14],[.22,-.16,.20],[.19,-.40,.22]],40,.7,2);
  strand(a,[[-.15,-.56,-.18],[-.10,-.22,-.08],[-.06,.22,-.02],[.00,-.18,.02],[.03,-.44,.05]],40,.7,2);
  strand(a,[[.03,-.44,.05],[.09,-.86,.00],[.02,-1.16,-.15],[-.16,-.90,-.29],[-.17,-.30,-.32]],30,.8,2);
  /* the arch pushes this form's vertical centre to ~-0.42 while every other chapter
     centres near -0.10 — recentre so it doesn't ride high in the frame on arrival */
  for(i=0;i<a.length;i++)a[i][1]+=.30;
  return a;
}

/* ---------- 03 — IYH DIGITAL TWIN as a NAVIGATION PIN + ROUTE ----------
   v5. Four attempts rejected. Three drew the BUILDING — a box has near-zero
   curvature, so the rotation had nothing to reveal and every one of them read as
   jitter. The fourth drew six panoramic viewpoint spheres: those turned fine, but
   Samuel said "I can't really tell that 03 is a waypoint/map." So this time the
   failure was LEGIBILITY, not motion, and more detail would not have fixed it
   either — six spheres in a faint box reads as a molecule.
   The fix is to draw the single most nameable object in navigation: the map pin.
   It happens to be a surface of revolution — a sphere head tapering to a point —
   so it satisfies the curvature rule for free, and its through-hole is genuine
   interior structure that the +/-32 degree swing opens and closes.
   The rest of the scene is the actual product rather than the building: a route
   tube leaving a ground station, crossing the floor and CLIMBING to the pin on an
   upper plate. One twin, waypoint navigation, more than one level.
   -------------------------------------------------------------- */
function mapPin(a,cx,yTip,cz,R,H,w,rows,holeW){
  var cy=yTip-H;                                   /* head centre; +y is DOWN */
  var yt=R*R/H,rt=R*Math.sqrt(Math.max(1e-6,H*H-R*R))/H;   /* sphere/cone tangency */
  var yTop=cy-R,span=yTip-yTop,i,k,th,y,r,n;
  function rAt(y){                                 /* one profile drives rings AND meridians */
    if(y<=cy+yt){var dy=y-cy,v=R*R-dy*dy;return v>0?Math.sqrt(v):0;}
    var d=yTip-(cy+yt);return d>0?rt*(1-(y-(cy+yt))/d):0;
  }
  for(i=0;i<rows;i++){                             /* contour rings */
    y=yTop+span*((i+.5)/rows);r=rAt(y);
    if(r<.005)continue;
    n=Math.max(5,Math.round(30*(r/R)));
    for(k=0;k<n;k++){th=(k/n)*6.2832;
      P(a,cx+Math.cos(th)*r,y,cz+Math.sin(th)*r,w,0);}
  }
  /* meridian and hole density scale with `rows` — otherwise the small background
     pin costs as many dots as the hero pin and the fit() budget goes to the wrong
     one. Everything here is proportional to the pin's own size. */
  var MER=Math.max(5,Math.round(rows*.35)),MST=Math.max(12,rows);
  for(k=0;k<MER;k++){                              /* meridians tie it into one solid */
    th=(k/MER)*6.2832;
    for(i=0;i<=MST;i++){
      y=yTop+span*(i/MST);r=rAt(y);
      P(a,cx+Math.cos(th)*r,y,cz+Math.sin(th)*r,w*.5,0);
    }
  }
  if(holeW){                                       /* the through-hole — the pin's tell */
    var hr=R*.40,cn=Math.max(8,Math.round(rows*.7)),mn=Math.max(5,Math.round(rows*.42));
    for(i=0;i<5;i++){
      var zz=cz-R*.66+(R*1.32)*(i/4),cap=(i===0||i===4);
      ring(a,cx,cy,zz,hr,cap?cn:mn,'z',cap?holeW:holeW*.42,1);
    }
  }
}
function cloudIso(){
  var a=[],i,k,rr,n,yy;
  var GY=.72,UY=.12;                               /* ground level / upper plate */
  function domeY(x,z){return GY+.17*Math.min(1,(x*x+z*z)/(.86*.86));}

  /* GROUND — domed, not flat. A flat plane shears under the swing; a dome turns. */
  for(i=1;i<=9;i++){
    rr=.10+(.86-.10)*(i/9);n=Math.max(10,Math.round(rr*46));
    yy=GY+.17*Math.pow(rr/.86,2);
    ring(a,0,yy,0,rr,n,'y',.11+(1-i/9)*.05,0);
  }
  /* UPPER PLATE — faint plan outline, so it reads as a building and not a street map */
  var PL=[[-.74,-.44],[.74,-.44],[.74,.44],[-.74,.44]];
  poly(a,PL,UY,46,.14,0,1);
  poly(a,PL,UY+.055,26,.07,0,1);
  [[-1,-1],[1,-1],[1,1],[-1,1]].forEach(function(c){   /* columns between the levels */
    for(k=0;k<10;k++)P(a,c[0]*.74,UY+(GY-UY)*(k/9),c[1]*.44,.08,0);
  });

  /* THE DESTINATION PIN — centre stage, standing on the upper plate */
  mapPin(a,.02,UY,.06,.30,.74,.82,26,.95);
  /* a second station pin, down on the ground, small and at depth for parallax */
  mapPin(a,.66,domeY(.66,-.24),-.24,.145,.36,.46,13,.55);

  /* ORIGIN MARKER — flat concentric rings on the ground, the way a map marks "you" */
  var ox=-.70,oz=-.20,oy=domeY(ox,oz);
  ring(a,ox,oy,oz,.115,26,'y',.85,1);
  ring(a,ox,oy,oz,.055,14,'y',.60,1);

  /* THE ROUTE — a swept tube, so it is a body in space rather than a connecting edge.
     Leaves the origin, crosses the floor, ramps up, and lands under the pin. */
  var RT=[[ox,oy,oz],[-.42,GY+.11,.14],[.02,GY+.07,.34],
          [.40,GY-.09,.30],[.44,UY+.31,.16],[.05,UY+.02,.09]];
  tube(a,RT,function(s){return .030-s*.008;},46,7,.62,1);
  strand(a,RT,26,.72,2);                           /* the glide, warm — as in ch 01 */
  var mp=curvePt(RT,.70);                          /* and the thing actually moving */
  blob(a,mp[0],mp[1],mp[2],.052,.052,.052,4,.95,2);

  /* match the optical weight of the other three chapters (verified headlessly:
     diagonal extent and bbox centre are compared across all four) */
  for(i=0;i<a.length;i++){a[i][0]*=.92;a[i][1]=(a[i][1]-.30)*.92;a[i][2]*=.92;}
  return a;
}

/* ---------- 04 — SUZCHEWS: the GUMBALL MACHINE ----------
   Four rejected attempts: a pouch, an abstract chew, a mouth. Every one of them was
   either clip-art or, in the mouth's case, a face — and a face at 1500 dots is far below
   the fidelity floor where human perception stops forgiving, which is why it read as a
   mask. The machine solves both problems at once: a GLASS SPHERE on a FLARED PEDESTAL is
   curvature top to bottom, which is the only thing this renderer draws well, and the
   gumballs packed inside the glass are the interior that the rotation exists to reveal —
   the same structure as the headset's training loop and the heart's circuits.
   The cancer aspect is carried by two things, neither of which is an awareness ribbon:
   (1) the gumballs start COLOURLESS and flood back to colour from the bottom up as the
       chapter resolves — taste lost and taste restored, in one scrubbable pass. It is
       reversible: scroll back and the colour drains out again.
   (2) a YELLOW FLOWER on the glass. Samuel's mother's favourite colour, from when she had
       cancer, which is where SuzChews came from. It is the only yellow in the whole relay.
   Gumballs carry grp 1..8 — an ignition bucket keyed to height, read by the render loop.
   -------------------------------------------------------- */
function cloudChew(){
  var a=[],i,k,lv,t;
  var GX=0,GY=-.30,R=.44;                             /* glass globe */
  var yBotIn=GY+.36,yTopIn=GY-.38;                    /* gumball fill range */

  for(lv=0;lv<12;lv++){                               /* globe shell, see-through */
    var u=((lv+.5)/12)*Math.PI,sr=Math.sin(u),n=Math.max(6,Math.round(30*sr));
    for(k=0;k<n;k++){var th=(k/n)*6.2832;
      P(a,GX+Math.cos(th)*sr*R,GY-Math.cos(u)*R,Math.sin(th)*sr*R,.19,0);}
  }
  for(k=0;k<9;k++){                                   /* meridians */
    t=(k/9)*6.2832;
    for(lv=1;lv<20;lv++){var pu=(lv/20)*Math.PI,sr2=Math.sin(pu);
      P(a,GX+Math.cos(t)*sr2*R,GY-Math.cos(pu)*R,Math.sin(t)*sr2*R,.13,0);}
  }
  ring(a,GX,GY,0,R*.999,54,'y',.42,0);                /* equator */
  for(k=0;k<22;k++){                                  /* specular arc on the glass */
    var ha=2.30+(k/21)*1.15;
    P(a,GX+Math.cos(ha)*R*.86,GY-R*.40,Math.sin(ha)*R*.86,.82,0);
  }

  /* GUMBALLS — the payload, visible only through the glass as the form turns */
  var balls=[],tries=0;
  while(balls.length<30&&tries<900){
    tries++;
    var bx=(Math.random()*2-1)*R*.74,bz=(Math.random()*2-1)*R*.74,
        by=yTopIn+Math.random()*(yBotIn-yTopIn);
    if(Math.hypot(bx,by-GY,bz)>R*.78)continue;
    var ok=true;
    for(i=0;i<balls.length;i++)
      if(Math.hypot(bx-balls[i][0],by-balls[i][1],bz-balls[i][2])<.145){ok=false;break;}
    if(ok)balls.push([bx,by,bz]);
  }
  balls.forEach(function(b,bi){
    var br=.068;
    var frac=(yBotIn-b[1])/(yBotIn-yTopIn);           /* 0 at the bottom of the pile */
    var grp=1+Math.min(7,Math.floor(frac*7.99));      /* ignition bucket, bottom first */
    var tg=(bi%7===0)?3:(bi%2?1:2);                   /* one in seven is a flower-yellow */
    for(var r2=0;r2<3;r2++){
      var pu2=(r2+.5)/3*Math.PI,sr3=Math.sin(pu2),n2=Math.max(4,Math.round(9*sr3));
      for(var k2=0;k2<n2;k2++){var th3=(k2/n2)*6.2832;
        P(a,b[0]+Math.cos(th3)*sr3*br,b[1]-Math.cos(pu2)*br,b[2]+Math.sin(th3)*sr3*br,
          .78,tg,grp);}
    }
  });

  /* THE FLOWER on the glass — projected onto the sphere, facing the viewer */
  var fn=[-.16,-.14,-1],fl=Math.hypot(fn[0],fn[1],fn[2]);
  fn=[fn[0]/fl,fn[1]/fl,fn[2]/fl];
  var uxv=[-fn[2],0,fn[0]],ul=Math.hypot(uxv[0],uxv[1],uxv[2]);
  uxv=[uxv[0]/ul,uxv[1]/ul,uxv[2]/ul];
  var vxv=[fn[1]*uxv[2]-fn[2]*uxv[1],fn[2]*uxv[0]-fn[0]*uxv[2],fn[0]*uxv[1]-fn[1]*uxv[0]];
  function onGlobe(pu,pv,w2){
    var x=fn[0]*R+uxv[0]*pu+vxv[0]*pv,y=fn[1]*R+uxv[1]*pu+vxv[1]*pv,
        z=fn[2]*R+uxv[2]*pu+vxv[2]*pv;
    var m=R*1.012/Math.hypot(x,y,z);
    P(a,GX+x*m,GY+y*m,z*m,w2,3);
  }
  for(var pe=0;pe<5;pe++){                            /* five petals */
    var pa2=pe*1.2566-1.5708;
    for(k=0;k<11;k++){
      var th4=(k/11)*6.2832;
      onGlobe(Math.cos(pa2)*.085+Math.cos(th4)*.048,
              Math.sin(pa2)*.085+Math.sin(th4)*.048,.95);
    }
  }
  for(k=0;k<7;k++){var th5=(k/7)*6.2832;onGlobe(Math.cos(th5)*.022,Math.sin(th5)*.022,1);}

  /* COLLAR + PEDESTAL — flared, contoured, so the base has curvature too */
  ring(a,GX,GY+R*.90,0,.30,34,'y',.80,0);
  for(lv=0;lv<10;lv++){
    var ty=GY+R*.90+.02+lv*.056, rr2=.30+Math.pow(lv/9,1.9)*.14;
    ring(a,GX,ty,0,rr2,Math.round(26+rr2*22),'y',(lv===0||lv===9)?.80:.34,0);
  }
  for(k=0;k<10;k++){                                  /* pedestal meridians */
    t=(k/10)*6.2832;
    for(lv=0;lv<10;lv++){
      var ty2=GY+R*.90+.02+lv*.056,rr3=.30+Math.pow(lv/9,1.9)*.14;
      P(a,GX+Math.cos(t)*rr3,ty2,Math.sin(t)*rr3,.22,0);
    }
  }
  ring(a,GX,GY+R*.90+.02+9*.056+.03,0,.455,44,'y',.72,0);   /* foot */

  /* dispenser door + coin knob on the front face */
  rrOutline(a,GX,GY+R*.90+.20,-.335,.10,.075,.035,26,.85,0);
  ring(a,GX,GY+R*.90+.075,-.315,.048,16,'z',.80,0);
  for(k=0;k<7;k++)P(a,GX-.022+k*.0073,GY+R*.90+.075,-.322,.9,0);   /* coin slot */
  /* the dispensed gumball — already in colour. The first one that worked. */
  for(var r4=0;r4<3;r4++){
    var pu4=(r4+.5)/3*Math.PI,sr4=Math.sin(pu4),n4=Math.max(5,Math.round(11*sr4));
    for(k=0;k<n4;k++){var th6=(k/n4)*6.2832;
      P(a,GX+Math.cos(th6)*sr4*.075,GY+R*.90+.30-Math.cos(pu4)*.075,
        -.40+Math.sin(th6)*sr4*.075,.92,3);}
  }
  /* the machine is a tall narrow object — at the shared canvas scale it renders ~30%
     smaller than the other three chapters, so match its optical weight to theirs */
  for(i=0;i<a.length;i++){a[i][0]*=1.32;a[i][1]=(a[i][1]+.04)*1.32-.04;a[i][2]*=1.32;}
  return a;
}


function fit(src,n){
  var out=new Array(n);
  for(var i=0;i<n;i++)out[i]=src[Math.floor(i*src.length/n)%src.length];
  return out;
}
var CLOUDS={headset:cloudHeadset,heart:cloudHeart,waypoints:cloudIso,gum:cloudChew};
var dly=new Float32Array(N),sxo=new Float32Array(N),syo=new Float32Array(N),szo=new Float32Array(N);
for(var i=0;i<N;i++){
  dly[i]=((i*2654435761)%1000/1000)*.34;
  sxo[i]=Math.sin(i*.7)*.42;
  syo[i]=Math.cos(i*.53)*.07;
  szo[i]=Math.sin(i*1.31)*.16;
}

function ease(x){x=Math.max(0,Math.min(1,x));return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;}

/* ---------------------------------------------------------------------------
   mount(o) — attach the relay to a pinned container.
   o = { pin, stage, canvas, chapters:[{cloud,sys,name,desc}],
         hud:{sys,nm,ds}, jump, meta, tog, swp, sweep:true, turntable:true,
         onChapter:fn(index) }
   `chapters[i].cloud` is a key into CLOUDS — swapping a featured project is a
   one-word edit in the page's SYSTEMS array, nowhere else.
   --------------------------------------------------------------------------- */
function mount(o){
  var pin=o.pin,stage=o.stage,cv=o.canvas,ctx=cv.getContext('2d');
  var CHAP=o.chapters;
  var CL=CHAP.map(function(c){return fit((CLOUDS[c.cloud]||CLOUDS.headset)(),N);});
  var W=0,H=0,DPR=1;
  var idle=o.turntable!==false,sweepOn=o.sweep!==false,t0=performance.now();
  var hud=o.hud||{},lastChap=-1,jbtns=null;

  /* scroll track + stage sized in REAL PIXELS — no vh, so nothing can collapse it */
  function layout(){
    var vh=document.documentElement.clientHeight||window.innerHeight||800;
    stage.style.height=vh+'px';
    pin.style.height=(vh*(CL.length+1))+'px';
    DPR=Math.min(devicePixelRatio||1,2);
    W=cv.clientWidth||cv.offsetWidth||0;
    H=cv.clientHeight||cv.offsetHeight||vh;
    if(!W)return;
    cv.width=W*DPR;cv.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0);
  }
  layout();addEventListener('resize',layout);

  if(o.tog)o.tog.addEventListener('click',function(){
    idle=!idle;this.textContent='TURNTABLE: '+(idle?'ON':'OFF');});
  if(o.swp)o.swp.addEventListener('click',function(){
    sweepOn=!sweepOn;this.textContent='SWEEP: '+(sweepOn?'ON':'OFF');});

  if(o.jump){
    CHAP.forEach(function(c,k){
      var b=document.createElement('button');
      b.type='button';b.textContent='0'+(k+1)+'  '+(c.name||'').toUpperCase();
      b.addEventListener('click',function(){
        var travel=Math.max(1,pin.offsetHeight-stage.offsetHeight);
        scrollTo({top:pin.offsetTop+travel*(k/(CL.length-1)),behavior:'smooth'});
      });
      o.jump.appendChild(b);
    });
    jbtns=o.jump.children;
  }

  function frame(now){
    requestAnimationFrame(frame);
    if(stage.offsetParent===null){lastChap=-1;return;}     /* hidden (mobile) — do nothing */
    if(!W){layout();if(!W)return;}
    var r=pin.getBoundingClientRect();
    var travel=Math.max(1,pin.offsetHeight-stage.offsetHeight);   /* guarded: never 0 */
    var prog=Math.max(0,Math.min(1,(-r.top)/travel));
    var p=prog*(CL.length-1);
    var idx=Math.min(CL.length-2,Math.floor(p)),lt=p-idx;

    /* BOUNDED rotation. A full spin turns every form into a blob at some point, so we
       oscillate around a good 3/4 view instead of revolving. */
    var BASE=0.62,SWING=0.55;
    var ang=BASE+Math.sin(p*1.55)*SWING+(idle?Math.sin((now-t0)*0.00020)*0.10:0);
    var tilt=-0.30+Math.sin(p*1.1)*0.06;

    /* SWEEP — keyed to the RESOLVE, not the scatter: back half of each leg only. */
    var sweepZ=9,sweepK=0;
    if(sweepOn){
      var sl=(lt-0.54)/0.36;
      if(sl>0){
        sweepZ=1.45-Math.min(1,sl)*2.95;
        sweepK=Math.min(1,sl*5)*Math.min(1,Math.max(0,(1-lt)/0.075));
      }
    }
    /* grp>0 dots (chapter 04's gumballs) flood back into colour bottom-up, reversibly */
    var igp=(idx===CL.length-2)?ease((lt-0.40)/0.54):1;

    ctx.clearRect(0,0,W,H);
    var S=Math.min(W,H)*0.29,cx=W*(o.cx==null?0.58:o.cx),cyv=H*0.50;
    var ca=Math.cos(ang),sa=Math.sin(ang),ct=Math.cos(tilt),stl=Math.sin(tilt);
    var A=CL[idx],B=CL[idx+1];

    for(var i=0;i<N;i++){
      var e=ease((lt-dly[i])/(1-.34));
      var sc=Math.sin(e*Math.PI);
      var a=A[i],b=B[i];
      var grp=e<.5?a[5]:b[5];
      var x=a[0]+(b[0]-a[0])*e+sxo[i]*sc;
      var y=a[1]+(b[1]-a[1])*e+syo[i]*sc;
      var z=a[2]+(b[2]-a[2])*e+szo[i]*sc;
      var w=a[3]+(b[3]-a[3])*e;
      var tag=e<.5?a[4]:b[4];

      var X=x*ca+z*sa,Z=-x*sa+z*ca;
      var Y=y*ct-Z*stl,Z2=y*stl+Z*ct;
      var pr=1/(1+Z2*0.34);
      var px=cx+X*S*pr,py=cyv+Y*S*pr;
      if(px<-40||px>W+40||py<-40||py>H+40)continue;

      var dn=Math.max(0,Math.min(1,(1.25-Z2)/2.2));
      var col=tag===1?TEAL:tag===2?WARM:tag===3?YELL:PAPER;
      var al=(0.14+w*0.72)*(0.34+dn*0.66)*(1-sc*0.30);
      var fog=(1-dn)*0.58;
      var R=col[0]+(BG[0]-col[0])*fog,G=col[1]+(BG[1]-col[1])*fog,Bc=col[2]+(BG[2]-col[2])*fog;
      var ig=0;
      if(sweepK>0){
        var sd=(Z2-sweepZ)/0.24,gg=Math.exp(-sd*sd);
        al*=(1-sweepK)+sweepK*((Z2>sweepZ?1:0.34)+gg*2.4);
        ig=gg*sweepK;
        if(ig>0.04){R+=(255-R)*ig*0.85;G+=(255-G)*ig*0.85;Bc+=(255-Bc)*ig*0.85;}
      }
      if(grp>0){
        var on=Math.max(0,Math.min(1,(igp-(grp-1)/8)*5));
        R=GREY[0]+(R-GREY[0])*on;G=GREY[1]+(G-GREY[1])*on;Bc=GREY[2]+(Bc-GREY[2])*on;
        al*=0.34+0.66*on;
      }
      al=Math.min(1,al);
      ctx.fillStyle='rgba('+(R|0)+','+(G|0)+','+(Bc|0)+','+al.toFixed(3)+')';
      var s2=(0.9+dn*1.5)*pr*(1+ig*0.6);
      ctx.fillRect(px,py,s2,s2);
    }

    var chap=Math.round(p);
    if(chap!==lastChap){
      lastChap=chap;
      var c=CHAP[Math.max(0,Math.min(CL.length-1,chap))];
      if(hud.sys)hud.sys.innerHTML=c.sys||'';
      if(hud.nm)hud.nm.innerHTML=c.name||'';
      if(hud.ds)hud.ds.innerHTML=c.desc||'';
      if(hud.link&&c.link){hud.link.href=c.link;hud.link.textContent=(c.linkLabel||'OPEN CASE FILE')+' →';hud.link.hidden=false;}
      else if(hud.link)hud.link.hidden=true;
      if(jbtns)for(var k=0;k<jbtns.length;k++)jbtns[k].className=(k===chap?'on':'');
      if(o.onChapter)o.onChapter(chap,c);
    }
    if(o.meta)o.meta.textContent='CHAPTER '+Math.min(CL.length,chap+1)+' / '+CL.length+
      ' — ROT '+String(Math.round(ang*57.2958)%360).padStart(3,'0')+'°';
  }
  requestAnimationFrame(frame);
  return {layout:layout};
}

return {mount:mount,CLOUDS:CLOUDS,N:N,fit:fit};
})();
