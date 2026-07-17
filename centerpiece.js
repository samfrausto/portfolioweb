// ─────────────────────────────────────────────────────────────────────────────
//  PORTRAIT BLOB-REVEAL — the landonorris.com mechanic
//  Base layer: Samuel in a VR headset. A gooey, cursor-driven blob dissolves the
//  headset to reveal his face underneath, then re-forms as the cursor moves away.
//  The grey studio background is keyed out in-shader so he floats in the scene.
// ─────────────────────────────────────────────────────────────────────────────
import * as THREE from 'three';

const stage = document.getElementById('stage');
if (stage) boot();

function boot() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let W = stage.clientWidth, H = stage.clientHeight;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: false });
  } catch (e) { stage.classList.add('webgl-fail'); return; }
  renderer.setPixelRatio(Math.min(Math.max(window.devicePixelRatio, 2), 3)); // supersample for crispness
  renderer.setSize(W, H);
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace; // raw passthrough — we color-manage manually
  stage.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const loader = new THREE.TextureLoader();
  const texHeadset = loader.load('assets/portrait/headset.png', check);
  const texFace = loader.load('assets/portrait/face.png', check);
  [texHeadset, texFace].forEach(t => { t.colorSpace = THREE.NoColorSpace; t.minFilter = THREE.LinearFilter; t.magFilter = THREE.LinearFilter; });
  let loaded = 0;
  function check() { if (++loaded >= 2) stage.classList.add('ready'); }

  const uniforms = {
    uHeadset: { value: texHeadset },
    uFace:    { value: texFace },
    uMouse:   { value: new THREE.Vector2(0.5, 0.55) },
    uReveal:  { value: 0 },
    uTime:    { value: 0 },
    uBg:      { value: new THREE.Vector3(0.463, 0.463, 0.463) }, // exact grey studio bg to key out
    uAuto:    { value: reduceMotion ? 0.0 : 1.0 }, // strength of the constant auto-flow reveal
  };

  const material = new THREE.ShaderMaterial({
    uniforms, transparent: true, depthWrite: false,
    vertexShader: `
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
    `,
    fragmentShader: `
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D uHeadset, uFace;
      uniform vec2 uMouse;
      uniform float uReveal, uTime, uAuto;
      uniform vec3 uBg;

      // value noise + fbm
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453123); }
      float noise(vec2 p){
        vec2 i=floor(p), f=fract(p);
        float a=hash(i), b=hash(i+vec2(1.,0.)), c=hash(i+vec2(0.,1.)), d=hash(i+vec2(1.,1.));
        vec2 u=f*f*(3.-2.*f);
        return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;
      }
      float fbm(vec2 p){
        float v=0.0, amp=0.5;
        for(int i=0;i<4;i++){ v+=amp*noise(p); p*=2.0; amp*=0.5; }
        return v;
      }
      // keep subject, drop the flat grey studio background by color-distance.
      // The bg is a uniform grey, well-separated from skin/shirt/visor in RGB space.
      float keyAlpha(vec3 c){
        return smoothstep(0.05, 0.12, distance(c, uBg));
      }
      // unsharp-mask: restores crispness lost to scaling/AI softness.
      // Detail is damped on already-bright pixels so highlights (nose/skin speculars)
      // don't overshoot to white.
      vec3 sharpen(sampler2D tex, vec2 uv){
        vec2 px = vec2(0.0013);
        vec3 c = texture2D(tex, uv).rgb;
        vec3 b = (texture2D(tex, uv+vec2(px.x,0.0)).rgb + texture2D(tex, uv-vec2(px.x,0.0)).rgb
                + texture2D(tex, uv+vec2(0.0,px.y)).rgb + texture2D(tex, uv-vec2(0.0,px.y)).rgb) * 0.25;
        float luma = dot(c, vec3(0.299, 0.587, 0.114));
        vec3 detail = (c - b) * 0.6 * (1.0 - smoothstep(0.62, 0.95, luma));
        return clamp(c + detail, 0.0, 1.0);
      }
      void main(){
        vec2 uv = vUv;
        vec4 hs = texture2D(uHeadset, uv);
        vec4 fc = texture2D(uFace, uv);
        vec3 hsC = sharpen(uHeadset, uv);
        vec3 fcC = sharpen(uFace, uv);
        // even out the bright glabella highlight the AI baked between the brows
        float glab = smoothstep(1.0, 0.0, length((uv - vec2(0.5, 0.61)) / vec2(0.075, 0.08)));
        fcC *= 1.0 - glab * 0.18;

        // ── constant flowing reveal: a liquid 'banner' blob sweeps back & forth on
        //    its own, and follows the cursor when you interact ──
        float n  = fbm(uv*3.0 + vec2(uTime*0.13, -uTime*0.07));
        // env: confine the WHOLE effect (holo + reveal) to the headset/visor region — widened
        // in x so the banner can travel across the FULL goggle width, edge to edge.
        float env = smoothstep(0.60, 0.05, length((uv - vec2(0.5,0.665))/vec2(0.36,0.15)));
        // auto: a liquid BANNER — a wavy, gooey vertical ribbon that sweeps the whole visor
        // edge to edge, dissolving the headset to reveal the face as it passes, then re-forming.
        float bandX = fract(uTime*0.16)*1.4 - 0.2;                                      // constant sweep L→R, wraps off-screen
        float wave  = sin(uv.y*7.0 + uTime*2.0)*0.05;                                    // rhythmic ripple down the ribbon
        float goo   = (fbm(uv*vec2(2.5,4.5) + vec2(uTime*0.55, uTime*0.4)) - 0.5)*0.17;  // organic liquid churn
        float dx    = uv.x - bandX - wave - goo;
        float banner = smoothstep(0.24, 0.09, abs(dx)) * env;                            // wide fully-revealed ribbon w/ gooey edge
        // cursor: a big blob you can steer — reveals much more of the real face underneath
        float cdist = distance(uv, uMouse) - (n-0.5)*0.10;
        float cblob = smoothstep(0.36, 0.06, cdist);
        float reveal = clamp(max(banner*uAuto, cblob*uReveal), 0.0, 1.0);

        // holographic visor: cyan tint, scanlines, flicker — only within the headset env
        float scan  = 0.93 + 0.07*sin(uv.y*420.0 + uTime*5.0);
        float flick = 0.975 + 0.025*sin(uTime*32.0 + uv.y*8.0);
        vec3 holoFx = hsC*scan*flick + vec3(0.0,0.09,0.11)*0.45;
        vec3 holo = mix(hsC, holoFx, env);

        vec3 subjCol = mix(holo, fcC, reveal);
        float subjA  = mix(keyAlpha(hs.rgb), keyAlpha(fc.rgb), reveal);
        subjCol *= 1.03;
        // glowing chromatic edge that flows with the reveal (teal <-> coral over time)
        float edge = smoothstep(0.12, 0.0, abs(reveal-0.5));
        subjCol += mix(vec3(0.13,0.70,0.60), vec3(0.95,0.42,0.22), sin(uTime*0.5)*0.5+0.5) * edge * 0.7;

        // rim light: glow just OUTSIDE the silhouette so the dark subject pops
        float e = 0.007;
        float ring4 = keyAlpha(texture2D(uHeadset, uv+vec2(e,0.0)).rgb)
                    + keyAlpha(texture2D(uHeadset, uv-vec2(e,0.0)).rgb)
                    + keyAlpha(texture2D(uHeadset, uv+vec2(0.0,e)).rgb)
                    + keyAlpha(texture2D(uHeadset, uv-vec2(0.0,e)).rgb);
        float rim = clamp(ring4 * 0.25 - keyAlpha(hs.rgb), 0.0, 1.0);

        // glowing studio backdrop so the dark silhouette separates from the scene
        float d2   = distance(uv, vec2(0.5, 0.58));
        float disc = smoothstep(0.58, 0.12, d2);
        float halo = smoothstep(0.40, 0.02, d2);
        vec3 backdrop = mix(vec3(0.035,0.04,0.055), vec3(0.13,0.12,0.17), disc);
        backdrop += vec3(0.26,0.11,0.10) * halo * 0.7;   // warm glow behind the head/shoulders
        vec3 col = mix(backdrop, subjCol, subjA);
        float a  = max(subjA, disc * 0.92);

        // apply the rim (teal up top → coral lower) and let it lift alpha
        col += mix(vec3(0.85,0.35,0.20), vec3(0.13,0.70,0.55), smoothstep(0.35,0.85,uv.y)) * rim * 1.25;
        a = max(a, rim * 0.95);

        // cinematic fades: melt the bottom (hides watermark) + soften edges into the scene
        a *= smoothstep(0.015, 0.17, uv.y);
        a *= smoothstep(0.0, 0.05, uv.x) * smoothstep(1.0, 0.95, uv.x);
        a *= smoothstep(1.0, 0.90, uv.y);

        gl_FragColor = vec4(col, clamp(a,0.0,1.0));
      }
    `,
  });
  // guard against a typo-safe property name
  material.depthTest = false;

  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

  // ── Pointer tracking ───────────────────────────────────────────────────────
  const target = new THREE.Vector2(0.5, 0.55);
  let revealTarget = 0;
  const hint = document.getElementById('stageHint');
  let hintShown = true;
  function endIntro() { if (hintShown && hint) { hint.classList.add('hide'); hintShown = false; } }

  // A coral "reveal cursor" that replaces the custom dot cursor inside the hero
  // reveal zone — so the effect spans the whole upper hero, then hands back to the
  // custom cursor once you drop to the name header.
  const revealCursor = document.createElement('div');
  revealCursor.className = 'reveal-cursor';
  document.body.appendChild(revealCursor);
  const hero = stage.closest('.hero') || stage;

  function onMove(e) {
    endIntro();
    // the hologram is small + off to the side now, so steer/reveal only near it
    const r = stage.getBoundingClientRect();
    const m = 70;
    const inZone = e.clientX >= r.left - m && e.clientX <= r.right + m &&
                   e.clientY >= r.top - m && e.clientY <= r.bottom + m;
    target.set((e.clientX - r.left) / r.width, 1.0 - (e.clientY - r.top) / r.height);
    revealTarget = inZone ? 1 : 0;
    document.body.classList.toggle('reveal-zone', inZone);
    if (inZone) { revealCursor.style.left = e.clientX + 'px'; revealCursor.style.top = e.clientY + 'px'; }
  }
  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('blur', () => { revealTarget = 0; document.body.classList.remove('reveal-zone'); });

  // ── Resize ───────────────────────────────────────────────────────────────--
  function resize() { W = stage.clientWidth; H = stage.clientHeight; renderer.setSize(W, H); }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.01 }).observe(stage);

  // ── Loop ─────────────────────────────────────────────────────────────────--
  const clock = new THREE.Clock();
  function frame() {
    requestAnimationFrame(frame);
    if (!visible) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    uniforms.uTime.value += reduceMotion ? 0 : dt;
    uniforms.uMouse.value.lerp(target, 0.16);
    uniforms.uReveal.value += (revealTarget - uniforms.uReveal.value) * 0.1;
    renderer.render(scene, camera);
  }
  frame();
}
