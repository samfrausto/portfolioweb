// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
(function anim(){
  rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
  if(cursor){cursor.style.left=mx+'px';cursor.style.top=my+'px'}
  if(ring){ring.style.left=rx+'px';ring.style.top=ry+'px'}
  requestAnimationFrame(anim);
})();

// Hover states
document.addEventListener('mouseover', e => {
  if(e.target.closest('a,button')) {
    if(cursor) { cursor.style.width='16px'; cursor.style.height='16px'; cursor.style.background='var(--teal)'; }
    if(ring) { ring.style.width='48px'; ring.style.height='48px'; ring.style.borderColor='rgba(62,207,178,0.3)'; }
  }
});
document.addEventListener('mouseout', e => {
  if(e.target.closest('a,button')) {
    if(cursor) { cursor.style.width='10px'; cursor.style.height='10px'; cursor.style.background='var(--coral)'; }
    if(ring) { ring.style.width='32px'; ring.style.height='32px'; ring.style.borderColor='rgba(255,107,74,0.4)'; }
  }
});

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach((e,i) => {
    if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('visible'), i*80); obs.unobserve(e.target); }
  });
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
