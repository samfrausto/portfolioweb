/* RELAY GEOMETRY ASSERTIONS.  node prototypes/verify/relay-geom.js
   Run from the repo root. Loads relay-engine.js in a vm with a window stub and
   checks every cloud without a browser.

   POINT LAYOUT — the thing that will waste your time if you guess:
     [0]=x  [1]=y  [2]=z  [3]=brightness  [4]=TAG  [5]=group  [6]=arc-length
   The tag is SLOT 4, not slot 3. Yellow is tag 3 and must appear only in `gum`;
   the chapter-03 traveller is tag 5 and must appear only in `waypoints`, and
   every tag-5 point must carry a real arc-length in slot 6.

   CENTRES: the recorded numbers are the BRIGHTNESS-WEIGHTED vertical mean, not
   the plain mean. The plain mean drifts up to 0.12 from them and looks like a
   regression when nothing has changed. */
const fs = require('fs'), vm = require('vm'), path = require('path');
const ENGINE = path.join(__dirname, '..', 'relay-engine.js');

const win = {
  devicePixelRatio: 1, innerWidth: 1440, innerHeight: 900,
  matchMedia: () => ({ matches: false, addEventListener() {}, addListener() {} }),
  requestAnimationFrame: () => 0, addEventListener() {},
};
const ctx = { window: win, document: {}, console };
ctx.globalThis = ctx;
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(ENGINE, 'utf8'), ctx, { filename: 'relay-engine.js' });
const R = ctx.window.Relay || ctx.Relay;
if (!R) { console.error('FAIL: Relay did not attach to window'); process.exit(1); }

/* last known good, fitted to 1500 — [diagonal, brightness-weighted centre] */
const KNOWN = {
  headset:   [2.498, -0.015],
  heart:     [2.398, -0.151],
  waypoints: [2.464, -0.084],
  gum:       [2.508, -0.103],
};

console.log('N=' + R.N + '  NARROW_W=' + R.NARROW_W);
let fail = 0;
for (const k of Object.keys(R.CLOUDS)) {
  const pts = R.fit(R.CLOUDS[k](), R.N);
  let bad = 0, t3 = 0, t5 = 0, arc = 0, wy = 0, wsum = 0;
  const mn = [1e9, 1e9, 1e9], mx = [-1e9, -1e9, -1e9];
  for (const p of pts) {
    for (let i = 0; i < 3; i++) {
      if (!Number.isFinite(p[i])) bad++;
      mn[i] = Math.min(mn[i], p[i]); mx[i] = Math.max(mx[i], p[i]);
    }
    if (!Number.isFinite(p[3])) bad++;
    if ((p[4] | 0) === 3) t3++;
    if ((p[4] | 0) === 5) { t5++; if (p[6] >= 0) arc++; }
    wy += p[1] * p[3]; wsum += p[3];
  }
  const diag = Math.hypot(mx[0] - mn[0], mx[1] - mn[1], mx[2] - mn[2]);
  const ctr = wy / wsum;
  const [kd, kc] = KNOWN[k];
  const ok = pts.length === R.N && bad === 0
    && (k === 'gum' ? t3 > 0 : t3 === 0)
    && (k === 'waypoints' ? (t5 > 0 && arc === t5) : t5 === 0)
    /* the clouds have a random component, so the centre moves a little run to
       run — gum swings about 0.03. The diagonal does not move; hold that tight. */
    && Math.abs(diag - kd) < 0.02 && Math.abs(ctr - kc) < 0.045;
  if (!ok) fail++;
  console.log((ok ? 'OK   ' : 'FAIL ') + k.padEnd(11) +
    'n=' + String(pts.length).padEnd(6) + 'nonfinite=' + bad +
    '  diag=' + diag.toFixed(3) + ' (was ' + kd + ')' +
    '  centre=' + ctr.toFixed(3) + ' (was ' + kc + ')' +
    '  yellow=' + String(t3).padEnd(5) + 'route=' + t5);
}
console.log(fail ? 'FAILURES: ' + fail : 'ALL CLOUD ASSERTIONS PASS');
process.exit(fail ? 1 : 0);
