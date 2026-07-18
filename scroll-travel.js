// ─────────────────────────────────────────────────────────────────────────────
//  SCROLL AS TRAVEL — dolly transitions between sections
//  Scrolling reads as moving through space, not flipping a document:
//   · the hero recedes (scales down, dims) as you leave it — a dolly-out
//   · each incoming section arrives from "behind" the viewport plane —
//     slightly scaled down and fogged, settling to full presence as it
//     reaches the reading zone
//  Everything is scroll-linked (no timed animations), cheap transforms only.
// ─────────────────────────────────────────────────────────────────────────────

(() => {
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isSmall = () => innerWidth <= 900;

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const ease = (t) => t * t * (3 - 2 * t);

function boot() {
  if (reduceMotion || isSmall()) return;

  // prefer the inner dolly wrapper (prototype page) so the hero's dark
  // backdrop stays full-bleed while only the content recedes
  const hero = document.getElementById('heroDolly') || document.querySelector('.hero');
  // sections that dolly in as they enter. The path section is excluded: its
  // sticky dot canvas must not live inside a transformed ancestor.
  const incoming = ['.now-section', '#about', '.contact-wrap']
    .map((s) => document.querySelector(s)).filter(Boolean);

  for (const el of incoming) {
    el.style.willChange = 'transform, opacity';
    el.style.transformOrigin = '50% 20%';
  }
  if (hero) {
    hero.style.willChange = 'transform, opacity';
    hero.style.transformOrigin = '50% 30%';
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  function update() {
    ticking = false;
    const vh = innerHeight;

    // ── hero dolly-out: recede + dim over the first 90vh of scroll
    if (hero) {
      const p = ease(clamp(scrollY / (vh * 0.9), 0, 1));
      hero.style.transform = `scale(${(1 - p * 0.06).toFixed(4)})`;
      hero.style.opacity = (1 - p * 0.45).toFixed(3);
    }

    // ── incoming sections dolly-in: from 96.5% scale + fog to full presence.
    //    Fog is a brightness dip (not opacity — that would reveal the body
    //    background behind the section and flash light on a dark page).
    for (const el of incoming) {
      const r = el.getBoundingClientRect();
      // progress: 0 when the section top is at the viewport bottom,
      // 1 once it has risen to 55% of the viewport
      const p = ease(clamp((vh - r.top) / (vh * 0.45), 0, 1));
      el.style.transform = `translateY(${((1 - p) * 26).toFixed(2)}px) scale(${(0.965 + p * 0.035).toFixed(4)})`;
      el.style.filter = p >= 1 ? '' : `brightness(${(0.55 + p * 0.45).toFixed(3)})`;
    }
  }

  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => {
    if (isSmall()) {
      removeEventListener('scroll', onScroll);
      [hero, ...incoming].forEach((el) => { if (el) { el.style.transform = ''; el.style.opacity = ''; el.style.filter = ''; } });
    }
  }, { passive: true });
  update();
}

boot();
})();
