// Direct mobile chapter state; the desktop lesson stays at the original entry.
const mobile = matchMedia('(max-width: 820px), (max-width: 980px) and (max-height: 540px)');
function routeMobile() {
  if (mobile.matches && !new URLSearchParams(location.search).has('legacy')) {
    const target = new URL('./mobile-book.html', location.href);
    target.search = location.search;
    target.hash = location.hash;
    location.replace(target);
  }
}
mobile.addEventListener('change', routeMobile);
routeMobile();
