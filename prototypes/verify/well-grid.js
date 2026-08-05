/* PHONE LANDING WELL — CLEARANCE GRID.  node prototypes/verify/well-grid.js

   The landing cloud is drawn free-hand on the page canvas, so nothing in the
   layout stops it overlapping the systems list below it. This computes the
   clearance at every phone size instead of trusting one screenshot.

   Mirrors these declarations in prototypes/mockup-d-sonar.html — if you change
   either, change it here too:
     main{padding:0 clamp(1.2rem,4vw,3.4rem)}   and, under 900px, main{padding:0 1rem}
     .relay-well{height:min(64vw,40vh)}
     wellR = max(40, min(wellW*0.42, wellH*0.46))     (layout(), dots engine)
     y is squashed by 0.94 in buildLanding()
   Last run: worst clearance 13.8px at 320x568. */
const clampPx = (lo, vwPct, hi, W) => Math.max(lo, Math.min(W * vwPct, hi));
const rem = 16;

function wellBoxes(W, H) {
  const padWide = clampPx(1.2 * rem, 0.04, 3.4 * rem, W);
  return [padWide, 1 * rem].map(pad => {
    const w = W - 2 * pad;
    const h = Math.min(0.64 * W, 0.40 * H);
    const r = Math.max(40, Math.min(w * 0.42, h * 0.46));
    return { pad, w, h, r, dx: (w / 2) - r, dy: (h / 2) - r * 0.94 };
  });
}

const sizes = [[320,568],[360,640],[375,667],[375,812],[390,844],[393,852],[412,915],
               [414,896],[430,932],[480,800],[540,720],[600,960],[720,1024],[768,1024],
               [820,1180],[899,600],[899,1180],[900,700]];
let worst = 1e9, worstAt = '';
for (const [W, H] of sizes) {
  for (const b of wellBoxes(W, H)) {
    const m = Math.min(b.dx, b.dy);
    if (m < worst) { worst = m; worstAt = W + 'x' + H + ' pad' + Math.round(b.pad); }
    if (b.pad === 16 || W >= 899)
      console.log(String(W + 'x' + H).padEnd(10) + 'pad=' + String(Math.round(b.pad)).padEnd(4) +
        'well ' + Math.round(b.w) + 'x' + Math.round(b.h) + '  r=' + b.r.toFixed(1) +
        '  clear x=' + b.dx.toFixed(1) + ' y=' + b.dy.toFixed(1) + (m < 8 ? '  <-- TIGHT' : ''));
  }
}
console.log('\nworst clearance across ' + sizes.length + ' sizes: ' + worst.toFixed(1) + 'px at ' + worstAt);
console.log(worst > 0 ? 'PASS - the cloud never leaves its well' : 'FAIL - cloud escapes the well');
process.exit(worst > 0 ? 0 : 1);
