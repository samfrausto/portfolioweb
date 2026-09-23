import { card, HAND_EXAMPLES, parseCards } from './cards.js';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const fmt=n=>Number(n).toLocaleString('en-US');
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let mode='friends',state=null,source=null,code=null,connected=false,actionKey='',toastTimer,working=false;
let invited=new URLSearchParams(location.search).get('table')?.toUpperCase();
if(!/^[A-F0-9]{6}$/.test(invited||''))invited=null;
function toast(message){$('#toast').textContent=message;$('#toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').hidden=true,5500);}
async function api(path,data){const response=await fetch(path,{method:data===undefined?'GET':'POST',headers:data===undefined?{}:{'Content-Type':'application/json'},body:data===undefined?undefined:JSON.stringify(data)});const result=await response.json();if(!response.ok)throw new Error(result.error||'Could not connect. Please try again.');return result;}
$('#fan-cards').innerHTML=parseCards('Ks Qh As').map((c,i)=>card(c,['fan-one','fan-two','fan-three'][i])).join('')+'<span class="fan-caption">Texas Hold’em, beautifully uncomplicated.</span>';
$('#hand-rankings').innerHTML=HAND_EXAMPLES.map(hand=>`<li class="hand-example"><div class="hand-copy"><h4>${hand.name}</h4><p>${hand.description}</p></div><div class="example-cards" role="group" aria-label="${hand.name} example">${hand.cards.map(c=>card(c)).join('')}</div></li>`).join('');
function setMode(next){mode=next;$('#friends-mode').classList.toggle('selected',next==='friends');$('#practice-mode').classList.toggle('selected',next==='practice');$('#friends-mode').setAttribute('aria-pressed',next==='friends');$('#practice-mode').setAttribute('aria-pressed',next==='practice');$('#mode-description').textContent=next==='friends'?'A private table for 2–6. Send a link and settle in.':'Your seat, three bots, and all the time you need.';$('#create').innerHTML=next==='friends'?'Create a table <span aria-hidden="true">↗</span>':'Start practicing <span aria-hidden="true">↗</span>';$('#buy-in-label').innerHTML=next==='friends'?'Table buy-in <span>Play chips</span>':'Starting stack <span>Play chips</span>';$('#join-details').hidden=next==='practice';}
$('#friends-mode').onclick=()=>setMode('friends');$('#practice-mode').onclick=()=>setMode('practice');
try{$('#player-name').value=localStorage.getItem('scarlet-name')||'';}catch{}
function nickname(){const n=$('#player-name').value.trim();if(!n){$('#player-name').focus();throw new Error('Enter your name to take a seat.');}try{localStorage.setItem('scarlet-name',n);}catch{}return n;}
async function busy(fn,button){if(working)return;working=true;if(button)button.disabled=true;try{await fn();}catch(e){toast(e.message);}finally{working=false;if(button)button.disabled=false;}}
$('#create-form').onsubmit=e=>{e.preventDefault();busy(async()=>{const result=invited?await api(`/api/rooms/${invited}/join`,{name:nickname()}):await api('/api/rooms',{name:nickname(),mode,buyIn:Number($('#buy-in').value)});await enter(result.code);},$('#create'));};
$('#join-form').onsubmit=e=>{e.preventDefault();busy(async()=>{const room=$('#table-code').value.trim().toUpperCase();await api(`/api/rooms/${room}/join`,{name:nickname()});await enter(room);},e.submitter);};
async function enter(room){
 const initial=await api(`/api/rooms/${room}`);code=room;state=initial;invited=null;
 source?.close();history.replaceState(null,'',`?table=${room}`);$('#welcome').hidden=true;$('#game').hidden=false;document.body.classList.add('in-game');$('#main').focus({preventScroll:true});window.scrollTo(0,0);connected=false;actionKey='';render(initial);
 source=new EventSource(`/api/rooms/${room}/events`);
 source.onopen=()=>{connected=true;$('#connection').textContent='Connected';$('#connection').classList.add('online');actionKey='';render(state);};
 source.onmessage=e=>{connected=true;render(JSON.parse(e.data));};
 source.onerror=()=>{connected=false;$('#connection').textContent='Reconnecting…';$('#connection').classList.remove('online');actionKey='';render(state);};
}
function render(s){
 state=s;const self=s.players.find(p=>p.id===s.you),me=s.players.indexOf(self),done=s.phase==='complete',waiting=s.phase==='waiting';
 $('#mode-label').textContent=s.mode==='practice'?'Practice · 3 bots':`Private table · ${s.code}`;
 $('#table-title').textContent=s.mode==='practice'?'A little room to practice.':'Everyone’s welcome at your table.';
 $('#invite').hidden=s.mode==='practice';$('#blinds').textContent=`Blinds ${s.smallBlind} / ${s.bigBlind}`;$('#hand-number').textContent=s.hand?`Hand ${String(s.hand).padStart(2,'0')}`:'Waiting to deal';
 $('#pot').innerHTML=waiting?'<span>Your next good evening</span><strong class="waiting-pot">starts here.</strong>':`<span>${done?'Hand total':'In the pot'}</span><strong>${fmt(s.pot)}</strong>`;
 $('#board').innerHTML=Array.from({length:5},(_,i)=>card(s.board[i])).join('');
 $('#street').textContent=waiting?`${s.players.filter(p=>!p.left).length} of 6 seats filled`:done?'Hand complete':({preflop:'Pre-flop',flop:'The flop',turn:'The turn',river:'The river'}[s.phase]);
 $('#result').innerHTML=s.result.map(r=>`<span><strong>${escape(r.id===s.you?'You':r.name)} ${r.id===s.you?'win':'wins'} ${fmt(r.amount)}</strong><small>${escape(r.hand)}</small></span>`).join('');
 const seatMap={2:[0,3],3:[0,2,4],4:[0,2,3,4],5:[0,1,2,4,5],6:[0,1,2,3,4,5]}[s.players.length]||[0];
 const slots=s.players.map((p,i)=>({p,i,pos:seatMap[(i-me+s.players.length)%s.players.length]}));
 $('#seats').innerHTML=Array.from({length:6},(_,pos)=>{
 const entry=slots.find(e=>e.pos===pos);if(!entry||entry.p.left)return `<div class="seat pos-${pos} empty-seat"><span class="empty-avatar" aria-hidden="true">+</span><span>Open seat</span></div>`;
 const {p,i}=entry,turn=i===s.turn,isMe=p.id===s.you,folded=p.status==='folded';
 const initial=p.name.slice(0,1).toUpperCase();
 return `<div class="seat pos-${pos} ${turn?'is-turn':''} ${folded?'folded':''} ${isMe?'self-seat':''}" aria-label="${escape(p.name)}${turn?', current turn':''}${folded?', folded':''}"><div class="seat-avatar" aria-hidden="true">${escape(initial)}${i===s.dealer?'<span class="dealer">D</span>':''}</div><div class="seat-label"><strong>${isMe&&i===s.dealer?'<span class="self-dealer" aria-label="Dealer">D</span> ':''}${escape(isMe?'You':p.name)}${p.bot?'<small class="bot-tag">Bot</small>':''}</strong><span>${fmt(p.stack)}</span></div><span class="seat-action">${escape(turn?(isMe?'Your turn':p.name+'’s turn'):(p.lastAction||(!p.online&&!p.bot?'Away':waiting?'Ready':p.status==='waiting'?'Next hand':'')))}</span>${!isMe&&p.cards.length?`<div class="mini-cards">${p.cards.map(c=>card(c)).join('')}</div>`:''}</div>`;
 }).join('');
 $('#my-hand').innerHTML=self.cards.length?`<div class="private-cards ${self.status==='folded'?'folded':''}">${self.cards.map(c=>card(c)).join('')}</div><span>${self.status==='folded'?'You folded · next hand is yours':done?'Your hand':'Your cards · only you can see them'}</span>`:`<span class="waiting-cards">${self.status==='waiting'&&!waiting&&!done?'You’re seated. Join the next hand.':'Your cards will appear here.'}</span>`;
 $('#history').innerHTML=s.history.slice(-7).reverse().map((h,i)=>`<li class="${i===0?'latest':''}">${escape(h)}</li>`).join('')||'<li>The best hands start with good company.</li>';
 $('#full-history').innerHTML=s.history.map(h=>`<li>${escape(h)}</li>`).join('')||'<li>No hands yet.</li>';
 $('#table-note').textContent=s.mode==='practice'?'Three practice partners. Take your time, try a line, find your rhythm.':`Everyone starts with ${fmt(s.buyIn)} play chips. ${s.host===s.you?'You’re hosting.':'The host deals each hand.'}`;
 const key=JSON.stringify([s.revision,connected,s.host,self.stack,s.players.length]);
 if(key!==actionKey){actionKey=key;renderActions(s,self);}
 updateClock();
}
function renderActions(s,self){
 const a=$('#actions'),message=$('#turn-message'),detail=$('#turn-detail'),l=s.legal,canDeal=['waiting','complete'].includes(s.phase);
 if(!connected){message.textContent='Connecting to your table…';detail.textContent='Your seat is saved. Actions resume when you’re connected.';a.innerHTML='';return;}
 if(canDeal){
  const ready=s.players.filter(p=>!p.left&&p.stack>0).length;
  message.textContent=s.phase==='waiting'?'Make yourself at home.':s.result.map(r=>`${r.id===s.you?'You':r.name} ${r.id===s.you?'win':'wins'} ${fmt(r.amount)}`).join(' · ')||'Another hand?';
  detail.textContent=ready<2?'You need at least two players with chips.':s.phase==='complete'?s.result.map(r=>r.hand).filter((v,i,a)=>a.indexOf(v)===i).join(' · '):s.host===s.you?'The table is ready when you are.':'Waiting for the host to deal.';
  a.innerHTML=`${self.stack===0?`<button class="secondary" data-command="rebuy">Add ${fmt(s.buyIn)} play chips</button>`:''}${s.host===s.you?`<button class="primary" data-command="start" ${ready<2?'disabled':''}>${s.phase==='waiting'?'Deal the first hand':'Deal next hand'} <span aria-hidden="true">↗</span></button>`:''}${s.phase==='waiting'&&s.mode==='friends'?'<button class="secondary" id="invite-action">Invite friends</button>':''}`;
  $('#invite-action')?.addEventListener('click',invite);
 }else if(l){
  message.textContent='Your move.';detail.textContent=l.check?'You can check, raise, or fold.':`${fmt(l.call)} to call · ${fmt(self.stack)} in your stack`;
  a.innerHTML=`<div class="quick-actions"><button class="secondary" data-move="fold">Fold</button><button class="primary" data-move="${l.check?'check':'call'}">${l.check?'Check':`Call ${fmt(l.call)}`}</button></div>${l.canRaise?`<form id="raise-form" class="raise-form"><label for="raise-amount">Raise to <span>total this round</span></label><div class="raise-row"><input id="raise-amount" type="number" inputmode="numeric" min="${Math.min(l.minRaise,l.maxRaise)}" max="${l.maxRaise}" step="1" value="${Math.min(l.minRaise,l.maxRaise)}" required aria-describedby="raise-cost"><button class="secondary" id="all-in" type="button">All-in</button><button class="primary" type="submit">Raise</button></div><small id="raise-cost"></small></form>`:''}`;
  if(l.canRaise){const input=$('#raise-amount'),cost=()=>{$('#raise-cost').textContent=`Adds ${fmt(Math.max(0,Number(input.value)-self.bet))} · leaves ${fmt(Math.max(0,self.stack-(Number(input.value)-self.bet)))}`;};cost();input.oninput=cost;$('#all-in').onclick=()=>{input.value=l.maxRaise;cost();input.focus();};$('#raise-form').onsubmit=e=>{e.preventDefault();move('raise',Number(input.value));};}
 }else {message.textContent=self.status==='folded'?'You’re out of this hand.':self.status==='allin'?'You’re all-in.':self.status==='waiting'?'You’re in for the next hand.':`${s.players[s.turn]?.name||'The table'} is thinking.`;detail.textContent=self.status==='folded'?'Watch it play out. A fresh deal is coming.':self.status==='allin'?'Your cards are still in play.':'Follow the action at the table.';a.innerHTML='<span class="waiting-dots" aria-hidden="true"><i></i><i></i><i></i></span>';}
 $$('[data-command]').forEach(b=>b.onclick=()=>command(b.dataset.command));$$('[data-move]').forEach(b=>b.onclick=()=>move(b.dataset.move));
}
async function move(type,amount){await busy(async()=>{const revision=state.revision;$$('#actions button').forEach(b=>b.disabled=true);try{await api(`/api/rooms/${code}/action`,{type,amount,revision});}finally{actionKey='';render(await api(`/api/rooms/${code}`));}});}
async function command(action){await busy(async()=>{await api(`/api/rooms/${code}/${action}`,{});actionKey='';render(await api(`/api/rooms/${code}`));});}
function updateClock(){if(!state||!connected)return;const current=state.players[state.turn];if(state.deadline&&current){const sec=Math.max(0,Math.ceil((state.deadline-Date.now())/1000));$('#hand-number').textContent=`Hand ${String(state.hand).padStart(2,'0')} · ${sec}s to act`;}}
setInterval(updateClock,1000);
function invite(){if(!code)return;$('#invite-link').value=`${location.origin}/?table=${code}`;$('#invite-note').textContent=['localhost','127.0.0.1'].includes(location.hostname)?`Table code: ${code}. This local preview works on this computer. A hosted version is needed for friends elsewhere.`:`Table code: ${code}. Buy-in: ${fmt(state.buyIn)} play chips.`;$('#invite-dialog').showModal();}
$('#invite').onclick=invite;$('#copy-link').onclick=async()=>{try{await navigator.clipboard.writeText($('#invite-link').value);toast('Invitation link copied.');}catch{$('#invite-link').select();toast('Select and copy the invitation link.');}};
$('#leave').onclick=()=>busy(async()=>{await api(`/api/rooms/${code}/leave`,{});source?.close();location.href='/';});
$('#help').onclick=()=>$('#help-dialog').showModal();$('#history-button').onclick=()=>$('#history-dialog').showModal();$$('[data-close]').forEach(b=>b.onclick=()=>b.closest('dialog').close());
$$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();}}));
if(invited){
 $('#table-code').value=invited;
 try{await enter(invited);}catch{
  $('.entry-heading h2').textContent='Your seat is waiting.';$('.entry-heading p').textContent=`You’re invited to table ${invited}.`;
  $('.mode-switch').hidden=true;$('#buy-in').hidden=true;$('#buy-in-label').hidden=true;$('#join-details').hidden=true;
  $('#mode-description').textContent='Enter your name. You’ll receive the table’s starting play chips.';$('#create').textContent='Take your seat';
 }
}
