// Paired wire arcs enter punched holes. The page stays stationary.
export function drawBinding(){
 const host=document.querySelector('.wire-loops'),paper=document.querySelector('.paper');
 if(!host||!paper||!paper.offsetHeight)return;
 const height=host.clientHeight,count=Math.max(2,Math.floor((height-30)/48)),pitch=(height-32)/count;
 const rings=Array.from({length:count},(_,i)=>{const y=18+i*pitch;return `<g><rect x="45" y="${y-6}" width="7" height="15" rx="3.2" fill="#a2aa9b"/><rect x="47" y="${y-5}" width="4" height="12" rx="2" fill="#384238"/><path d="M49 ${y-4} C8 ${y-17},8 ${y+18},49 ${y+7} M49 ${y} C11 ${y-12},11 ${y+22},49 ${y+11}" fill="none" stroke="#28372d24" stroke-width="3.5" transform="translate(0 2)"/><path d="M49 ${y-5} C8 ${y-18},8 ${y+17},49 ${y+6} M49 ${y-1} C11 ${y-13},11 ${y+21},49 ${y+10}" fill="none" stroke="#34433b" stroke-width="2.8" stroke-linecap="round"/><path d="M49 ${y-5} C8 ${y-18},8 ${y+17},49 ${y+6} M49 ${y-1} C11 ${y-13},11 ${y+21},49 ${y+10}" fill="none" stroke="url(#wire-metal)" stroke-width="1.3" stroke-linecap="round"/></g>`}).join('');
 host.innerHTML=`<svg preserveAspectRatio="none" viewBox="0 0 58 ${height}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="wire-metal" x1="0" x2="0.2" y1="0" y2="1"><stop stop-color="#e6ebe5"/><stop offset=".45" stop-color="#889b8c"/><stop offset=".72" stop-color="#c8d2c7"/><stop offset="1" stop-color="#405748"/></linearGradient></defs>${rings}</svg>`;
}
