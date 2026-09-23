import { randomInt } from 'node:crypto';
export const SUITS = ['♠', '♥', '♣', '♦'];
export const RANKS = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
export const HAND_NAMES = ['High card','One pair','Two pair','Three of a kind','Straight','Flush','Full house','Four of a kind','Straight flush'];
export const cardRank = c => c % 13 + 2;
export const cardSuit = c => Math.floor(c / 13);
const assert = (condition, message) => { if (!condition) throw new Error(message); };
export function compare(a,b) { for(let i=0;i<Math.max(a.length,b.length);i++){const d=(a[i]??0)-(b[i]??0);if(d)return Math.sign(d);}return 0; }
export function rankFive(cards) {
  const ranks=cards.map(cardRank).sort((a,b)=>b-a), unique=[...new Set(ranks)];
  const flush=cards.every(c=>cardSuit(c)===cardSuit(cards[0]));
  const straight=unique.length===5 ? (unique[0]-unique[4]===4?unique[0]:unique.join(',')==='14,5,4,3,2'?5:0):0;
  const counts=new Map(); for(const r of ranks)counts.set(r,(counts.get(r)||0)+1);
  const groups=[...counts].sort((a,b)=>b[1]-a[1]||b[0]-a[0]);
  if(flush&&straight)return [8,straight];
  if(groups[0][1]===4)return [7,groups[0][0],groups[1][0]];
  if(groups[0][1]===3&&groups[1][1]===2)return [6,groups[0][0],groups[1][0]];
  if(flush)return [5,...ranks];
  if(straight)return [4,straight];
  if(groups[0][1]===3)return [3,groups[0][0],...groups.slice(1).map(g=>g[0])];
  if(groups[0][1]===2&&groups[1][1]===2)return [2,...groups.slice(0,2).map(g=>g[0]).sort((a,b)=>b-a),groups[2][0]];
  if(groups[0][1]===2)return [1,groups[0][0],...groups.slice(1).map(g=>g[0])];
  return [0,...ranks];
}
export function evaluate(cards) {
  assert(cards.length>=5&&cards.length<=7,'Evaluate five to seven cards.');
  let best=[];
  for(let a=0;a<cards.length-4;a++)for(let b=a+1;b<cards.length-3;b++)for(let c=b+1;c<cards.length-2;c++)for(let d=c+1;d<cards.length-1;d++)for(let e=d+1;e<cards.length;e++){
    const score=rankFive([cards[a],cards[b],cards[c],cards[d],cards[e]]); if(compare(score,best)>0)best=score;
  }
  return best;
}
export function makePlayer(id,name,buyIn,bot=false) {return {id,name,stack:buyIn,boughtIn:buyIn,bot,cards:[],bet:0,total:0,status:'waiting',acted:false,actedAt:0,lastAction:'',left:false};}
export function makeGame(buyIn=2000) {return {players:[],buyIn,smallBlind:10,bigBlind:20,phase:'waiting',board:[],deck:[],dealer:-1,turn:-1,currentBet:0,lastRaise:20,hand:0,revision:0,history:[],result:[],pot:0};}
export function log(g,message) {g.history.push(message);g.history=g.history.slice(-40);}
function next(g,from,predicate) {for(let n=1;n<=g.players.length;n++){let i=(from+n+g.players.length)%g.players.length;if(predicate(g.players[i]))return i;}return -1;}
function pay(g,p,amount) {let paid=Math.min(amount,p.stack);p.stack-=paid;p.bet+=paid;p.total+=paid;if(!p.stack)p.status='allin';return paid;}
export const inHand = p => p.status==='active'||p.status==='allin';
export const pot = g => g.players.reduce((sum,p)=>sum+p.total,0);
export function startHand(g) {
  assert(['waiting','complete'].includes(g.phase),'The current hand is still in progress.');
  assert(g.players.filter(p=>p.stack>0&&!p.left).length>=2,'Two players with chips are needed.');
  g.deck=Array.from({length:52},(_,i)=>i);for(let i=51;i>0;i--){let j=randomInt(i+1);[g.deck[i],g.deck[j]]=[g.deck[j],g.deck[i]];}
  g.board=[];g.result=[];g.pot=0;g.currentBet=g.bigBlind;g.lastRaise=g.bigBlind;g.hand++;g.phase='preflop';g.revision++;
  for(const p of g.players){p.cards=[];p.bet=0;p.total=0;p.acted=false;p.actedAt=0;p.lastAction='';p.status=p.stack>0&&!p.left?'active':'waiting';}
  g.dealer=next(g,g.dealer,p=>p.status==='active');
  const live=g.players.filter(p=>p.status==='active');
  for(let round=0;round<2;round++)for(let j=1;j<=g.players.length;j++){const p=g.players[(g.dealer+j)%g.players.length];if(p.status==='active')p.cards.push(g.deck.pop());}
  const sb=live.length===2?g.dealer:next(g,g.dealer,p=>p.status==='active');
  const bb=next(g,sb,p=>p.status==='active');
  pay(g,g.players[sb],g.smallBlind);pay(g,g.players[bb],g.bigBlind);
  g.players[sb].lastAction=`Small blind ${g.players[sb].bet}`;g.players[bb].lastAction=`Big blind ${g.players[bb].bet}`;
  log(g,`Hand ${g.hand} · blinds ${g.smallBlind} / ${g.bigBlind}`);
  g.turn=bb;advance(g);
}
export function legal(g,id) {
  const p=g.players.find(p=>p.id===id);
  if(!p||g.players[g.turn]!==p||p.status!=='active'||['waiting','complete'].includes(g.phase))return null;
  const owe=Math.max(0,g.currentBet-p.bet), max=p.stack+p.bet;
  const reopened=!p.acted||g.currentBet-p.actedAt>=g.lastRaise;
  const opponent=g.players.some(o=>o!==p&&o.status==='active');
  return {call:Math.min(owe,p.stack),check:owe===0,minRaise:g.currentBet+g.lastRaise,maxRaise:max,canRaise:opponent&&reopened&&max>g.currentBet};
}
export function act(g,id,type,amount) {
  const p=g.players.find(p=>p.id===id), options=legal(g,id);assert(options,'Wait for your turn.');
  if(type==='fold'){p.status='folded';p.lastAction='Fold';}
  else if(type==='call'||type==='check') {assert(type!=='check'||options.check,'You need to call or fold.');const paid=pay(g,p,options.call);p.lastAction=paid?`Call ${paid}`:'Check';}
  else if(type==='raise') {
    assert(options.canRaise,'Raising is not available.');assert(Number.isSafeInteger(amount),'Use a whole number of chips.');
    assert(amount<=options.maxRaise&&amount>g.currentBet,'Choose a valid raise total.');
    assert(amount>=options.minRaise||amount===options.maxRaise,`Minimum raise is ${options.minRaise}.`);
    const increase=amount-g.currentBet;pay(g,p,amount-p.bet);g.currentBet=amount;if(increase>=g.lastRaise)g.lastRaise=increase;
    p.lastAction=`${p.status==='allin'?'All-in':'Raise'} to ${amount}`;
  }else throw new Error('Unknown action.');
  p.acted=true;p.actedAt=g.currentBet;log(g,`${p.name}: ${p.lastAction}`);g.revision++;advance(g);
}
export function settle(g) {
  const live=g.players.filter(inHand), levels=[...new Set(g.players.map(p=>p.total).filter(Boolean))].sort((a,b)=>a-b);
  const awards=new Map(), scores=new Map();
  if(live.length>1)for(const p of live)scores.set(p.id,evaluate([...p.cards,...g.board]));
  let previous=0;
  for(const level of levels){
    const contributed=g.players.filter(p=>p.total>=level), amount=(level-previous)*contributed.length;previous=level;
    let eligible=contributed.filter(inHand);
    if(contributed.length===1){const p=contributed[0];p.stack+=amount;log(g,`${p.name}: ${amount} uncalled chips returned`);continue;}
    // Folded contributions cannot create an uncontested side pot in legal play.
    assert(eligible.length>0,'Invalid pot: no eligible player.');
    let winners=eligible;
    if(eligible.length>1){let best=scores.get(eligible[0].id);for(const p of eligible)if(compare(scores.get(p.id),best)>0)best=scores.get(p.id);winners=eligible.filter(p=>compare(scores.get(p.id),best)===0);}
    winners.sort((a,b)=>((g.players.indexOf(a)-g.dealer-1+g.players.length)%g.players.length)-((g.players.indexOf(b)-g.dealer-1+g.players.length)%g.players.length));
    const share=Math.floor(amount/winners.length);let remainder=amount%winners.length;
    for(const p of winners){const won=share+(remainder-->0?1:0);p.stack+=won;awards.set(p.id,(awards.get(p.id)||0)+won);}
  }
  g.pot=pot(g);g.result=[...awards].map(([id,amount])=>({id,name:g.players.find(p=>p.id===id).name,amount,hand:scores.has(id)?HAND_NAMES[scores.get(id)[0]]:'Everyone else folded'}));
  for(const r of g.result)log(g,`${r.name} wins ${r.amount} · ${r.hand}`);
  g.phase='complete';g.turn=-1;
}
function dealStreet(g) {
  g.deck.pop(); // Burn before each street.
  if(g.phase==='preflop'){g.phase='flop';g.board.push(g.deck.pop(),g.deck.pop(),g.deck.pop());}
  else if(g.phase==='flop'){g.phase='turn';g.board.push(g.deck.pop());}
  else if(g.phase==='turn'){g.phase='river';g.board.push(g.deck.pop());}
  g.currentBet=0;g.lastRaise=g.bigBlind;for(const p of g.players){p.bet=0;p.acted=false;p.actedAt=0;if(inHand(p))p.lastAction=p.status==='allin'?'All-in':'';}
  log(g,g.phase[0].toUpperCase()+g.phase.slice(1));
}
export function advance(g) {
  if(g.players.filter(inHand).length===1){settle(g);return;}
  const active=g.players.filter(p=>p.status==='active');
  const needs=p=>p.status==='active'&&(!p.acted||p.bet<g.currentBet);
  // With no other player able to bet, only chips actually contested need to be matched.
  // A short all-in big blind must not force a lone opponent to call an uncallable amount.
  if(active.length<2)g.currentBet=Math.max(...g.players.filter(inHand).map(p=>p.bet));
  if(active.length<2&&(!active.length||active[0].bet>=g.currentBet)){
    while(g.board.length<5)dealStreet(g);settle(g);return;
  }
  const pending=next(g,g.turn,needs);
  if(pending>=0){g.turn=pending;return;}
  if(g.phase==='river'){settle(g);return;}
  dealStreet(g);g.turn=next(g,g.dealer,p=>p.status==='active');
}
export function view(g,id) {
  const showdown=g.phase==='complete'&&g.players.filter(inHand).length>1;
  return {buyIn:g.buyIn,smallBlind:g.smallBlind,bigBlind:g.bigBlind,phase:g.phase,board:g.board,hand:g.hand,revision:g.revision,dealer:g.dealer,turn:g.turn,currentBet:g.currentBet,pot:g.phase==='complete'?g.pot:pot(g),result:g.result,history:g.history,legal:legal(g,id),
    players:g.players.map(p=>({id:p.id,name:p.name,stack:p.stack,bot:p.bot,bet:p.bet,status:p.status,lastAction:p.lastAction,left:p.left,cards:p.id===id||(showdown&&inHand(p))?p.cards:p.cards.map(()=>null)}))};
}
export function botAction(g,id,random=Math.random) {
  const p=g.players.find(p=>p.id===id), l=legal(g,id);if(!l)return;
  const strength=g.board.length>=3?evaluate([...p.cards,...g.board])[0]/8:(cardRank(p.cards[0])+cardRank(p.cards[1]))/35+(cardRank(p.cards[0])===cardRank(p.cards[1])?0.3:0);
  if(l.call>0&&l.call>p.stack*0.22&&strength<0.35&&random()<0.7)return ['fold'];
  if(l.canRaise&&l.maxRaise>=l.minRaise&&strength>0.42&&random()<0.24)return ['raise',Math.min(l.maxRaise,Math.max(l.minRaise,g.currentBet+Math.ceil((pot(g)/3)/20)*20))];
  return [l.check?'check':'call'];
}
