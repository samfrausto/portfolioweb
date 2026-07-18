// ─────────────────────────────────────────────────────────────────────────────
//  DOTMORPH v2 — per-chapter glyphs
//  Same engine as path-dots.js, but the path's dot field now re-forms into a
//  distinct silhouette per station, each drawn procedurally on an offscreen
//  canvas (no image assets needed):
//   01 flask + baseball (the two lanes)   05 clapperboard (Jel Sert media)
//   02 microscope (UChicago lab)          06 wireframe cube (spatial @ USC)
//   03 broken EKG trace (the break)       07 VR headset (Edwards)
//   04 globe (the reset / 14 countries)   08 rocket (what's next)
//  The hero handoff still streams the sampled portrait for continuity.
// ─────────────────────────────────────────────────────────────────────────────
import * as THREE from 'three';

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const small = () => innerWidth <= 900;
const N = 9000;
const KEY = { r: 0.463, g: 0.463, b: 0.463 }; // grey studio bg (same key as the hero shader)

// ── point sampling ───────────────────────────────────────────────────────────
function pointsFromPixels(d, S) {
  const cand = [];
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const i = (y * S + x) * 4;
    if (d[i + 3] < 20) continue;
    const r = d[i] / 255, g = d[i + 1] / 255, b = d[i + 2] / 255;
    if (Math.hypot(r - KEY.r, g - KEY.g, b - KEY.b) < 0.14) continue;
    cand.push([(x / S - 0.5) * 2, -(y / S - 0.5) * 2]);
  }
  cand.sort((p, q) => q[1] - p[1] || p[0] - q[0]);
  const out = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const s = cand.length ? cand[(i * cand.length / N) | 0] : [0, 0];
    out[i * 3] = s[0]; out[i * 3 + 1] = s[1];
  }
  return out;
}

function sampleImage(src) {
  return new Promise((res) => {
    const img = new Image();
    img.onload = () => {
      const S = 240;
      const cv = document.createElement('canvas'); cv.width = cv.height = S;
      const cx = cv.getContext('2d', { willReadFrequently: true });
      cx.drawImage(img, 0, 0, S, S);
      res(pointsFromPixels(cx.getImageData(0, 0, S, S).data, S));
    };
    img.src = src;
  });
}

function sampleGlyph(draw) {
  const S = 240;
  const cv = document.createElement('canvas'); cv.width = cv.height = S;
  const cx = cv.getContext('2d', { willReadFrequently: true });
  cx.strokeStyle = '#fff'; cx.fillStyle = '#fff';
  cx.lineWidth = 10; cx.lineCap = 'round'; cx.lineJoin = 'round';
  draw(cx);
  return pointsFromPixels(cx.getImageData(0, 0, S, S).data, S);
}

// ── the eight glyphs (240×240 space) ────────────────────────────────────────
const GLYPHS = [
  // 01 · the two lanes — flask + baseball
  (c) => {
    c.beginPath(); // erlenmeyer flask
    c.moveTo(52, 42); c.lineTo(80, 42);
    c.moveTo(58, 42); c.lineTo(58, 92); c.lineTo(30, 172); c.lineTo(102, 172); c.lineTo(74, 92); c.lineTo(74, 42);
    c.moveTo(42, 148); c.lineTo(90, 148); // liquid line
    c.stroke();
    c.beginPath(); c.arc(170, 118, 46, 0, Math.PI * 2); c.stroke(); // ball
    c.beginPath(); c.arc(136, 118, 44, -0.62, 0.62); c.stroke();    // stitches
    c.beginPath(); c.arc(204, 118, 44, Math.PI - 0.62, Math.PI + 0.62); c.stroke();
  },
  // 02 · UChicago — microscope
  (c) => {
    c.beginPath(); c.moveTo(96, 34); c.lineTo(116, 56); c.stroke();          // eyepiece
    c.save(); c.lineWidth = 18;
    c.beginPath(); c.moveTo(104, 48); c.lineTo(146, 96); c.stroke(); c.restore(); // tube
    c.beginPath(); c.moveTo(150, 100); c.quadraticCurveTo(184, 132, 160, 176); c.stroke(); // arm
    c.beginPath(); c.moveTo(84, 132); c.lineTo(158, 132); c.stroke();        // stage
    c.beginPath(); c.moveTo(118, 132); c.lineTo(118, 158) ; c.stroke();      // condenser
    c.beginPath(); c.moveTo(64, 190); c.lineTo(180, 190); c.stroke();        // base
    c.beginPath(); c.moveTo(96, 190); c.lineTo(110, 160); c.stroke();
  },
  // 03 · the break — EKG trace with a gap
  (c) => {
    c.beginPath();
    c.moveTo(20, 122); c.lineTo(72, 122); c.lineTo(88, 74); c.lineTo(106, 168); c.lineTo(118, 122);
    c.stroke();
    c.beginPath();
    c.moveTo(152, 122); c.lineTo(168, 96); c.lineTo(182, 138); c.lineTo(192, 122); c.lineTo(222, 122);
    c.stroke();
  },
  // 04 · the reset — globe
  (c) => {
    c.beginPath(); c.arc(120, 120, 72, 0, Math.PI * 2); c.stroke();
    c.beginPath(); c.ellipse(120, 120, 32, 72, 0, 0, Math.PI * 2); c.stroke();
    c.beginPath(); c.ellipse(120, 120, 72, 26, 0, 0, Math.PI * 2); c.stroke();
    c.beginPath(); c.moveTo(120, 48); c.lineTo(120, 192); c.stroke();
  },
  // 05 · Jel Sert — clapperboard
  (c) => {
    c.strokeRect(52, 104, 136, 72);
    c.save(); c.translate(52, 104); c.rotate(-0.22);
    c.strokeRect(0, -34, 136, 34);
    for (let i = 0; i < 4; i++) { c.beginPath(); c.moveTo(18 + i * 32, -34); c.lineTo(32 + i * 32, 0); c.stroke(); }
    c.restore();
    c.beginPath(); c.moveTo(52, 140); c.lineTo(188, 140); c.stroke();
  },
  // 06 · USC / spatial — wireframe cube
  (c) => {
    c.strokeRect(66, 92, 88, 88);   // front face
    c.strokeRect(96, 60, 88, 88);   // back face
    c.beginPath();
    c.moveTo(66, 92); c.lineTo(96, 60);
    c.moveTo(154, 92); c.lineTo(184, 60);
    c.moveTo(66, 180); c.lineTo(96, 148);
    c.moveTo(154, 180); c.lineTo(184, 148);
    c.stroke();
  },
  // 07 · Edwards — VR headset
  (c) => {
    c.beginPath(); c.roundRect(46, 84, 148, 74, 28); c.stroke();
    c.beginPath(); c.arc(94, 120, 17, 0, Math.PI * 2); c.stroke();  // lenses
    c.beginPath(); c.arc(146, 120, 17, 0, Math.PI * 2); c.stroke();
    c.beginPath(); c.moveTo(46, 112); c.lineTo(20, 104); c.stroke(); // straps
    c.beginPath(); c.moveTo(194, 112); c.lineTo(220, 104); c.stroke();
    c.beginPath(); c.arc(120, 158, 14, Math.PI, 0); c.stroke();      // nose notch
  },
  // 08 · next — rocket
  (c) => {
    c.beginPath();
    c.moveTo(120, 30);
    c.quadraticCurveTo(152, 70, 146, 130); c.lineTo(146, 152);
    c.lineTo(94, 152); c.lineTo(94, 130);
    c.quadraticCurveTo(88, 70, 120, 30);
    c.stroke();
    c.beginPath(); c.arc(120, 96, 15, 0, Math.PI * 2); c.stroke();   // window
    c.beginPath(); c.moveTo(94, 138); c.lineTo(66, 176); c.lineTo(94, 168); c.stroke();  // fins
    c.beginPath(); c.moveTo(146, 138); c.lineTo(174, 176); c.lineTo(146, 168); c.stroke();
    c.beginPath(); c.moveTo(108, 166); c.lineTo(104, 196); c.moveTo(120, 166); c.lineTo(120, 210); c.moveTo(132, 166); c.lineTo(136, 196); c.stroke(); // flame
  },
];

// ── engine (unchanged from path-dots.js) ────────────────────────────────────
const VERT = `
  uniform float uT; uniform float uTime; uniform float uPix;
  uniform float uStream; uniform vec2 uOffset; uniform float uScale;
  attribute vec3 aA; attribute vec3 aB; attribute float aR;
  varying float vR; varying float vMix;
  void main(){
    vR = aR;
    float e = smoothstep(0.0, 1.0, uT);
    vMix = e;
    vec3 p = mix(aA, aB, e);
    float s = sin(e * 3.14159);
    float ang = aR * 6.2831 + uTime * 0.2;
    p.xy += vec2(cos(ang), sin(ang)) * s * (0.08 + 0.12 * aR);
    p.x += sin(uTime * 0.6 + aR * 10.0) * 0.004;
    p.y += cos(uTime * 0.5 + aR * 8.0) * 0.004;
    vec2 sv = vec2(0.35 + 0.7 * aR, -1.6 - 1.2 * aR);
    p.xy += sv * uStream * (0.15 + aR);
    p.xy = p.xy * uScale + uOffset;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (1.6 + 1.0 * aR) * uPix * max(uScale, 0.55);
  }`;

const FRAG = `
  varying float vR; varying float vMix;
  uniform float uFade;
  void main(){
    vec2 d = gl_PointCoord - 0.5;
    float r2 = dot(d, d);
    if (r2 > 0.25) discard;
    float soft = smoothstep(0.25, 0.05, r2);
    vec3 warm  = vec3(0.96, 0.93, 0.88);
    vec3 coral = vec3(0.88, 0.38, 0.23);
    vec3 teal  = vec3(0.37, 0.83, 0.77);
    vec3 col = mix(warm, mix(teal, coral, vR), sin(vMix * 3.14159) * 0.85);
    gl_FragColor = vec4(col, soft * 0.95 * uFade);
  }`;

function createField(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  const scene = new THREE.Scene();
  let camera;
  const uni = {
    uT: { value: 0 }, uTime: { value: 0 }, uPix: { value: Math.min(devicePixelRatio, 2) },
    uStream: { value: 0 }, uFade: { value: 1 },
    uOffset: { value: new THREE.Vector2(0, 0) }, uScale: { value: 0.85 },
  };
  const geo = new THREE.BufferGeometry();
  const aR = new Float32Array(N);
  for (let i = 0; i < N; i++) aR[i] = Math.random();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  geo.setAttribute('aA', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  geo.setAttribute('aB', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  geo.setAttribute('aR', new THREE.BufferAttribute(aR, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: uni, vertexShader: VERT, fragmentShader: FRAG,
    transparent: true, depthTest: false, blending: THREE.AdditiveBlending,
  });
  scene.add(new THREE.Points(geo, mat));
  function resize() {
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    const a = w / h;
    camera = new THREE.OrthographicCamera(-a, a, 1, -1, 0, 10);
  }
  resize();
  return {
    uni, resize,
    setA(t) { geo.getAttribute('aA').array.set(t); geo.getAttribute('aA').needsUpdate = true; },
    setB(t) { geo.getAttribute('aB').array.set(t); geo.getAttribute('aB').needsUpdate = true; },
    render() { renderer.render(scene, camera); },
    aspect() { return (canvas.clientWidth || 1) / (canvas.clientHeight || 1); },
  };
}

const hCanvas = document.getElementById('handoffCanvas');
const pCanvas = document.getElementById('pathCanvas');
if (hCanvas || pCanvas) boot();

async function boot() {
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const smooth = (t) => t * t * (3 - 2 * t);

  const stations = GLYPHS.map(sampleGlyph);
  const portrait = await sampleImage('assets/portrait/headset.png');

  // ── THE PATH ──
  const story = document.querySelector('.path-story');
  let path = null, pathVisible = false, lastSeg = -1;
  if (pCanvas && story) {
    path = createField(pCanvas);
    path.setA(stations[0]); path.setB(stations[1]); lastSeg = 0;
    new IntersectionObserver(([e]) => { pathVisible = e.isIntersecting; }, { threshold: 0 }).observe(story);
  }

  // ── HERO HANDOFF ──
  const stageWrap = document.querySelector('.stage-wrap');
  const hero = document.querySelector('.hero');
  let hand = null;
  if (hCanvas && stageWrap && hero && !reduce && !small()) {
    hand = createField(hCanvas);
    hand.setA(portrait);
    hand.setB(portrait);
  }

  const t0 = performance.now();
  function frame() {
    requestAnimationFrame(frame);
    const time = (performance.now() - t0) / 1000;

    if (hand) {
      const p = scrollY / (hero.offsetHeight * 0.75);
      if (p > 0.02 && p < 1.3) {
        const fadeIn = clamp((p - 0.10) / 0.18, 0, 1);
        const fadeOut = clamp((p - 0.80) / 0.30, 0, 1);
        hCanvas.style.opacity = (fadeIn * (1 - fadeOut)).toFixed(3);
        stageWrap.style.opacity = (1 - fadeIn).toFixed(3);
        const r = stageWrap.getBoundingClientRect();
        const a = hand.aspect();
        hand.uni.uOffset.value.set(
          ((r.left + r.width / 2) / innerWidth * 2 - 1) * a,
          -((r.top + r.height / 2) / innerHeight * 2 - 1)
        );
        hand.uni.uScale.value = r.height / innerHeight;
        hand.uni.uStream.value = smooth(clamp((p - 0.34) / 0.66, 0, 1)) * 1.5;
        hand.uni.uTime.value = time;
        hand.render();
      } else {
        hCanvas.style.opacity = 0;
        if (p <= 0.02) stageWrap.style.opacity = 1;
      }
    }

    if (path && pathVisible) {
      const r = story.getBoundingClientRect();
      const total = Math.max(r.height - innerHeight, 1);
      const g = clamp(-r.top / total, 0, 1) * (stations.length - 1);
      const seg = Math.min(g | 0, stations.length - 2);
      if (seg !== lastSeg) { path.setA(stations[seg]); path.setB(stations[seg + 1]); lastSeg = seg; }
      let t = clamp(((g - seg) - 0.30) / 0.40, 0, 1);
      if (reduce) t = t < 0.5 ? 0 : 1; else path.uni.uTime.value = time;
      path.uni.uT.value = t;
      path.uni.uOffset.value.set(small() ? 0 : 0.42 * path.aspect(), -0.02);
      path.render();
    }
  }
  frame();
  addEventListener('resize', () => { path && path.resize(); hand && hand.resize(); });
}
