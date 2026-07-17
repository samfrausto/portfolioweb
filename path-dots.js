// ─────────────────────────────────────────────────────────────────────────────
//  DOTMORPH — datacurve.ai-style dot field (scaffold pass)
//  One engine, two stages:
//   1. HERO HANDOFF: as you scroll away, the portrait crossfades into ~9k dots
//      aligned to its exact on-screen position, which then stream downward —
//      carrying the image "into" The Path.
//   2. THE PATH: a sticky full-viewport canvas behind the 8 stations; the dot
//      field re-forms into a new silhouette per station as you scroll.
//  Placeholder targets (headset/face) until the 8 real silhouettes land in
//  assets/path/01…08. Swap them in the STATION_SRCS list below.
// ─────────────────────────────────────────────────────────────────────────────
import * as THREE from 'three';

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const small = () => innerWidth <= 900;
const N = 9000;
const KEY = { r: 0.463, g: 0.463, b: 0.463 }; // grey studio bg (same key as the hero shader)

// Placeholder stand-ins — replace with assets/path/01-two-lanes.png … 08-next.png
const STATION_SRCS = [
  'assets/portrait/headset.png', 'assets/portrait/face.png',
  'assets/portrait/headset.png', 'assets/portrait/face.png',
  'assets/portrait/headset.png', 'assets/portrait/face.png',
  'assets/portrait/headset.png', 'assets/portrait/face.png',
];

// Sample an image into N points in [-1,1]² — bg removed by alpha or grey-key,
// sorted top→bottom so morphs between aligned figures move coherently.
function sampleImage(src) {
  return new Promise((res) => {
    const img = new Image();
    img.onload = () => {
      const S = 240;
      const cv = document.createElement('canvas'); cv.width = cv.height = S;
      const cx = cv.getContext('2d', { willReadFrequently: true });
      cx.drawImage(img, 0, 0, S, S);
      const d = cx.getImageData(0, 0, S, S).data;
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
      res(out);
    };
    img.src = src;
  });
}

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
    // mid-morph scatter bulge (scaffold; upgraded to streaming trails later)
    float s = sin(e * 3.14159);
    float ang = aR * 6.2831 + uTime * 0.2;
    p.xy += vec2(cos(ang), sin(ang)) * s * (0.08 + 0.12 * aR);
    // gentle idle drift so the formed image feels alive
    p.x += sin(uTime * 0.6 + aR * 10.0) * 0.004;
    p.y += cos(uTime * 0.5 + aR * 8.0) * 0.004;
    // hero handoff: dots stream down-right and disperse
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

  // sample unique sources once, map stations onto them
  const uniq = [...new Set(STATION_SRCS)];
  const sampled = await Promise.all(uniq.map(sampleImage));
  const bySrc = Object.fromEntries(uniq.map((s, i) => [s, sampled[i]]));
  const stations = STATION_SRCS.map((s) => bySrc[s]);

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
    // formed headset portrait, no morph — only the downward stream
    hand.setA(stations[0]);
    hand.setB(stations[0]);
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
      // plateau: hold the formed image ~30% at each end of a segment
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
