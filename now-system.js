// ─────────────────────────────────────────────────────────────────────────────
//  NOW SYSTEM — live diagram of the VR training platform
//  A canvas-drawn system map: the clinician-in-headset at the center, the
//  three subsystems Sam builds around them (adaptive AI, 3D world, procedure
//  content), with signal particles flowing along the links — performance data
//  out, guidance back in. Quiet, technical, always moving.
// ─────────────────────────────────────────────────────────────────────────────
(() => {
  const canvas = document.getElementById('nowSystem');
  if (!canvas) return;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ctx = canvas.getContext('2d');

  const COL = {
    line: 'rgba(245,244,242,0.14)',
    text: 'rgba(245,244,242,0.62)',
    dim: 'rgba(245,244,242,0.38)',
    coral: '#D94F2B',
    teal: '#3ED4C4',
    node: 'rgba(245,244,242,0.05)',
  };

  // layout in unit space; scaled on resize
  const CENTER = { x: 0.5, y: 0.5, r: 46, label: 'CLINICIAN', sub: 'in headset' };
  const NODES = [
    { x: 0.5,  y: 0.13, r: 34, label: 'ADAPTIVE AI',  sub: 'scenario engine' },
    { x: 0.12, y: 0.78, r: 34, label: '3D WORLD',     sub: 'or / cath lab' },
    { x: 0.88, y: 0.78, r: 34, label: 'PROCEDURE',    sub: 'clinical content' },
  ];
  // particle flows: [fromNode(-1 = center), toNode, color, count]
  const FLOWS = [
    [-1, 0, COL.teal, 3],   // performance data → AI
    [0, -1, COL.coral, 3],  // guidance → clinician
    [1, -1, COL.teal, 2],   // world state → clinician
    [2, 0, COL.coral, 2],   // content → AI
  ];

  let W = 0, H = 0, dpr = 1;
  function resize() {
    dpr = Math.min(devicePixelRatio, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  addEventListener('resize', resize, { passive: true });

  const pos = (n) => n === -1
    ? { x: CENTER.x * W, y: CENTER.y * H, r: CENTER.r }
    : { x: NODES[n].x * W, y: NODES[n].y * H, r: NODES[n].r };

  const particles = [];
  FLOWS.forEach(([a, b, color, count]) => {
    for (let i = 0; i < count; i++) particles.push({ a, b, color, t: Math.random(), speed: 0.0016 + Math.random() * 0.0016 });
  });

  function drawNode(n, isCenter, time) {
    const p = pos(isCenter ? -1 : n);
    const d = isCenter ? CENTER : NODES[n];
    ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = COL.node; ctx.fill();
    ctx.strokeStyle = COL.line; ctx.lineWidth = 1; ctx.stroke();
    if (isCenter) {
      // breathing ring on the center node
      const breathe = reduceMotion ? 0 : (Math.sin(time * 1.4) * 0.5 + 0.5);
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r + 7 + breathe * 4, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(217,79,43,${0.35 - breathe * 0.2})`; ctx.stroke();
    }
    ctx.fillStyle = COL.text;
    ctx.font = '600 10px "DM Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(d.label, p.x, p.y - 2);
    ctx.fillStyle = COL.dim;
    ctx.font = '400 9px "DM Mono", monospace';
    ctx.fillText(d.sub, p.x, p.y + 12);
  }

  function link(a, b) {
    const pa = pos(a), pb = pos(b);
    const dx = pb.x - pa.x, dy = pb.y - pa.y;
    const dist = Math.hypot(dx, dy);
    const ux = dx / dist, uy = dy / dist;
    return {
      x1: pa.x + ux * (pa.r + 6), y1: pa.y + uy * (pa.r + 6),
      x2: pb.x - ux * (pb.r + 6), y2: pb.y - uy * (pb.r + 6),
    };
  }

  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.05 }).observe(canvas);

  function frame(ms) {
    requestAnimationFrame(frame);
    if (!visible) return;
    const time = ms / 1000;
    ctx.clearRect(0, 0, W, H);

    // links (deduped by unordered pair)
    const seen = new Set();
    for (const [a, b] of FLOWS) {
      const key = a < b ? `${a}|${b}` : `${b}|${a}`;
      if (seen.has(key)) continue; seen.add(key);
      const l = link(a, b);
      ctx.beginPath(); ctx.moveTo(l.x1, l.y1); ctx.lineTo(l.x2, l.y2);
      ctx.strokeStyle = COL.line; ctx.lineWidth = 1; ctx.stroke();
    }

    // particles
    for (const p of particles) {
      p.t += reduceMotion ? 0 : p.speed * 16;
      if (p.t > 1) p.t -= 1;
      const l = link(p.a, p.b);
      const x = l.x1 + (l.x2 - l.x1) * p.t;
      const y = l.y1 + (l.y2 - l.y1) * p.t;
      ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = p.color; ctx.fill();
      ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = p.color.startsWith('#') ? p.color + '22' : p.color; ctx.fill();
    }

    NODES.forEach((_, i) => drawNode(i, false, time));
    drawNode(0, true, time);
  }
  requestAnimationFrame(frame);
})();
