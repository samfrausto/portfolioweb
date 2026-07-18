// ─────────────────────────────────────────────────────────────────────────────
//  HERO DEPTH — head-tracked-window parallax
//  The hero's layers sit at different z-depths and shift against each other as
//  the cursor moves, so the scene reads as a space you're looking into rather
//  than a flat page. Far layers move opposite the cursor (like a window),
//  near layers move with it. Everything lerps, nothing snaps.
// ─────────────────────────────────────────────────────────────────────────────

(() => {
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isSmall = () => innerWidth <= 900;

// [selector, xRange(px), yRange(px), rotate(deg)]
// negative range = far layer (moves opposite cursor), positive = near layer
const LAYERS = [
  ['.hero-watermark span', -26, -14, 0],
  ['.hero-grid-lines',     -14,  -8, 0],
  ['.orbit-ring.r1',        10,   6, 0],
  ['.orbit-ring.r2',        18,  10, 0],
  ['.stage-wrap',            7,   5, 1.1],
];

function boot() {
  const hero = document.querySelector('.hero');
  if (!hero || reduceMotion || isSmall()) return;

  const layers = LAYERS.map(([sel, x, y, rot]) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    // preserve any transform the stylesheet already applies (e.g. orbit rings center via translate)
    const base = getComputedStyle(el).transform;
    return { el, x, y, rot, base: base === 'none' ? '' : base + ' ' };
  }).filter(Boolean);
  if (!layers.length) return;

  let tx = 0, ty = 0;  // target, normalized -1..1 from hero center
  let cx = 0, cy = 0;  // current (lerped)
  let raf = null, idle = true;

  function onMove(e) {
    const r = hero.getBoundingClientRect();
    if (e.clientY > r.bottom + 80) { tx = 0; ty = 0; }
    else {
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    }
    if (idle) { idle = false; raf = requestAnimationFrame(tick); }
  }

  function tick() {
    cx += (tx - cx) * 0.06;
    cy += (ty - cy) * 0.06;
    for (const l of layers) {
      const rot = l.rot ? ` rotateY(${(cx * l.rot).toFixed(3)}deg) rotateX(${(-cy * l.rot * 0.6).toFixed(3)}deg)` : '';
      l.el.style.transform = `${l.base}translate3d(${(cx * l.x).toFixed(2)}px, ${(cy * l.y).toFixed(2)}px, 0)${rot}`;
    }
    if (Math.abs(tx - cx) < 0.001 && Math.abs(ty - cy) < 0.001 && tx === 0 && ty === 0) {
      idle = true; return; // settled at rest — stop the loop until the next move
    }
    raf = requestAnimationFrame(tick);
  }

  addEventListener('pointermove', onMove, { passive: true });
  addEventListener('blur', () => { tx = 0; ty = 0; if (idle) { idle = false; raf = requestAnimationFrame(tick); } });
  addEventListener('resize', () => {
    if (isSmall()) {
      cancelAnimationFrame(raf); idle = true;
      layers.forEach(l => { l.el.style.transform = l.base; });
    }
  }, { passive: true });
}

boot();
})();
