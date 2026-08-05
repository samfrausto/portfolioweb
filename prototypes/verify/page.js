/* PAGE STRUCTURE + DATA BLOCK.  node prototypes/verify/page.js
   Self-contained: extracts the page's inline scripts itself, syntax-checks them,
   parses the HTML, and runs the data block against a DOM stub.

   Asserts: every inline <script> parses; no duplicate ids; no unclosed tags;
   every href/src resolves on disk; <style> braces balance; and the data block
   renders 4 phone rows, 12 index entries and 4 FEATURED flags.

   TWO THINGS THE HARNESS NEEDS THAT A BROWSER GIVES FOR FREE:
     - a bare `Relay` resolves through window in a browser but not in a vm, so
       ctx.Relay is aliased after the engine loads;
     - canvas getContext() must return something or the relay mount dies on
       setTransform. That is the harness, not the page.
   SYSTEMS / ALL are not readable from outside — the data block is an IIFE. The
   rendered output below is the assertion, which is the better test anyway. */
const fs = require('fs'), vm = require('vm'), path = require('path'), os = require('os');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..', '..');
const PAGE = path.join(ROOT, 'prototypes', 'mockup-d-sonar.html');
const src = fs.readFileSync(PAGE, 'utf8');
let fail = 0;
const bad = m => { console.log('FAIL ' + m); fail++; };

/* ---------- 1. inline scripts parse ---------- */
const scripts = [...src.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sonar-verify-'));
scripts.forEach((s, i) => fs.writeFileSync(path.join(tmp, 'inline' + i + '.js'), s));
scripts.forEach((s, i) => {
  const f = path.join(tmp, 'inline' + i + '.js');
  try { execFileSync(process.execPath, ['--check', f], { stdio: 'pipe' }); console.log('OK   inline' + i + '.js parses'); }
  catch (e) { bad('inline' + i + '.js: ' + String(e.stderr).split('\n').slice(0, 3).join(' ')); }
});

/* ---------- 2. structure ---------- */
const VOID = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
const stack = [], ids = new Map(), refs = [];
const tagRe = /<(\/?)([a-zA-Z][\w-]*)([^>]*)>/g;
const stripped = src.replace(/<script[\s\S]*?<\/script>/g, '<script></script>')
                    .replace(/<style[\s\S]*?<\/style>/g, '<style></style>')
                    .replace(/<!--[\s\S]*?-->/g, '');
let m;
while ((m = tagRe.exec(stripped))) {
  const [, close, tag, attrs] = m;
  if (attrs.trim().endsWith('/') || VOID.has(tag.toLowerCase())) {
    if (!close) { const id = /\bid="([^"]+)"/.exec(attrs); if (id) ids.set(id[1], (ids.get(id[1]) || 0) + 1); }
  } else if (close) {
    if (stack[stack.length - 1] === tag) stack.pop();
    else bad('tag mismatch: </' + tag + '> while <' + stack[stack.length - 1] + '> is open');
  } else {
    const id = /\bid="([^"]+)"/.exec(attrs); if (id) ids.set(id[1], (ids.get(id[1]) || 0) + 1);
    stack.push(tag);
  }
  for (const r of [...attrs.matchAll(/\b(?:href|src)="([^"]+)"/g)]) refs.push(r[1]);
}
const dup = [...ids].filter(([, n]) => n > 1).map(([k]) => k);
dup.length ? bad('duplicate ids: ' + dup.join(', ')) : console.log('OK   no duplicate ids');
stack.length ? bad('unclosed: ' + stack.join(', ')) : console.log('OK   no unclosed tags');
const miss = refs.filter(r => !/^(https?:|#|mailto:|tel:|data:|\/\/)/.test(r) &&
  !fs.existsSync(path.join(ROOT, 'prototypes', r.split(/[#?]/)[0])));
miss.length ? bad('missing refs: ' + miss.join(', ')) : console.log('OK   every href/src resolves on disk');

const style = /<style[^>]*>([\s\S]*?)<\/style>/.exec(src)[1];
const open = (style.match(/\{/g) || []).length, shut = (style.match(/\}/g) || []).length;
open === shut ? console.log('OK   style braces balance (' + open + ')') : bad('style braces ' + open + '/' + shut);

/* ---------- 3. data block against a DOM stub ---------- */
const store = {}, els = {};
const El = id => ({
  id, _h: '', set innerHTML(v) { this._h = v; store[id] = v; }, get innerHTML() { return this._h; },
  textContent: '', style: { setProperty() {} }, dataset: {}, hidden: false,
  classList: { add() {}, remove() {}, toggle() { return false; }, contains: () => false },
  appendChild() {}, setAttribute() {}, removeAttribute() {}, getAttribute: () => null,
  addEventListener() {}, querySelector: () => null, querySelectorAll: () => [],
  getBoundingClientRect: () => ({ top: 0, left: 0, width: 800, height: 400, bottom: 400, right: 800 }),
  offsetParent: null, offsetWidth: 800, offsetHeight: 400, focus() {},
  getContext: () => new Proxy({}, { get: (t, k) => (k in t ? t[k] : () => ({ data: new Uint8ClampedArray(4), width: 1, height: 1 })) }),
});
const doc = {
  getElementById: id => els[id] || (els[id] = El(id)),
  querySelector: () => El('_q'), querySelectorAll: () => [], createElement: t => El('_' + t),
  addEventListener() {}, body: El('body'), head: El('head'), readyState: 'complete',
  documentElement: { style: { setProperty() {} }, clientHeight: 900, classList: { add() {}, remove() {}, toggle() {} } },
};
const win = {
  document: doc, innerWidth: 1440, innerHeight: 900, devicePixelRatio: 1, scrollY: 0,
  matchMedia: () => ({ matches: false, addEventListener() {}, addListener() {} }),
  requestAnimationFrame: () => 0, cancelAnimationFrame() {}, addEventListener() {},
  setTimeout() {}, setInterval() {}, getComputedStyle: () => ({ getPropertyValue: () => '' }),
  location: { hash: '' }, performance: { now: () => 0 },
  IntersectionObserver: function () { this.observe = () => {}; this.disconnect = () => {}; },
};
const ctx = Object.assign({ console, Math, JSON, Date, String, Number, Array, Object }, win, { window: win });
ctx.globalThis = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'prototypes', 'relay-engine.js'), 'utf8'), ctx);
ctx.Relay = ctx.window.Relay;
try { vm.runInContext(fs.readFileSync(path.join(tmp, 'inline0.js'), 'utf8'), ctx, { filename: 'inline0.js' }); }
catch (e) { bad('data block threw: ' + e.name + ': ' + e.message); }

const count = (h, re) => ((h || '').match(re) || []).length;
const rows = count(store['sysMobile'], /sys-row/g);
const entries = count(store['allIdx'], /<a href=|<div class="norow">/g);
const feats = count(Object.values(store).join(''), /FEATURED/g);
rows === 4 ? console.log('OK   4 phone rows') : bad('phone rows = ' + rows + ', expected 4');
entries === 12 ? console.log('OK   12 index entries') : bad('index entries = ' + entries + ', expected 12');
feats === 4 ? console.log('OK   4 FEATURED flags') : bad('FEATURED = ' + feats + ', expected 4');

fs.rmSync(tmp, { recursive: true, force: true });
console.log(fail ? '\nFAILURES: ' + fail : '\nPAGE OK');
process.exit(fail ? 1 : 0);
