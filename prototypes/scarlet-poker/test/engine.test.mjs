import test from 'node:test';
import assert from 'node:assert/strict';
import { makeGame,makePlayer,startHand,act,legal,pot,settle,rankFive,evaluate,view,compare } from '../engine.mjs';
const C=text=>text.split(' ').map(s=>{const suit='shcd'.indexOf(s.at(-1));const rank=['2','3','4','5','6','7','8','9','T','J','Q','K','A'].indexOf(s.slice(0,-1));assert(suit>=0&&rank>=0);return suit*13+rank;});
function game(stacks=[2000,2000]){const g=makeGame();g.players=stacks.map((n,i)=>makePlayer(String(i),`Player ${i}`,n));return g;}
test('all nine hand categories, wheel and best five of seven',()=>{
 const fixtures=[['As 2h 7c 9d Js',0],['As Ah 7c 9d Js',1],['As Ah 7c 7d Js',2],['As Ah Ac 9d Js',3],['As 2h 3c 4d 5s',4],['2s 4s 8s Ts As',5],['As Ah Ac 9d 9s',6],['As Ah Ac Ad Js',7],['Ts Js Qs Ks As',8]];
 for(const [hand,category]of fixtures)assert.equal(rankFive(C(hand))[0],category,hand);
 assert.deepEqual(rankFive(C('As 2h 3c 4d 5s')),[4,5]);
 assert.deepEqual(evaluate(C('As Ah Ac Ks Kh Kc 2d')),[6,14,13]);
 assert.deepEqual(evaluate(C('2s 3s 4s 5s 6s 7s 8s')),[8,8]);
 assert(compare(rankFive(C('As Ah Qs 9d 7s')),rankFive(C('Ac Ad Jh Td 8s')))>0);
});
test('heads-up dealer posts small blind and acts first; big blind retains option',()=>{
 const g=game();startHand(g);assert.equal(g.dealer,0);assert.equal(g.players[0].bet,10);assert.equal(g.players[1].bet,20);assert.equal(g.turn,0);
 act(g,'0','call');assert.equal(g.turn,1);assert.equal(g.phase,'preflop');act(g,'1','check');assert.equal(g.phase,'flop');assert.equal(g.turn,1);
});
test('private view never contains opponent cards, deck or internal contributions',()=>{
 const g=game([2000,2000,2000]);startHand(g);const v=view(g,'0');assert.deepEqual(v.players[1].cards,[null,null]);assert.equal(v.players[0].cards.length,2);assert(!('deck'in v));assert(!('total'in v.players[0]));assert(!('boughtIn'in v.players[0]));
});
test('illegal/out-of-turn actions do not mutate state',()=>{
 const g=game();startHand(g);const before=JSON.stringify(g);
 for(const action of [()=>act(g,'1','call'),()=>act(g,'0','check'),()=>act(g,'0','raise',30),()=>act(g,'0','raise',2001),()=>act(g,'0','raise',60.5)]){assert.throws(action);assert.equal(JSON.stringify(g),before);}
});
test('uncalled raise is returned and folded cards remain secret',()=>{
 const g=game();startHand(g);act(g,'0','raise',100);act(g,'1','fold');assert.equal(g.phase,'complete');assert.equal(g.players[0].stack,2020);assert.equal(g.players[1].stack,1980);assert.deepEqual(view(g,'1').players[0].cards,[null,null]);
});
test('short all-in does not reopen raising for a player who already acted',()=>{
 const g=game([2000,2000,70]);startHand(g);act(g,'0','raise',60);act(g,'1','call');act(g,'2','raise',70);
 assert.equal(g.turn,0);assert.equal(legal(g,'0').canRaise,false);assert.equal(legal(g,'0').call,10);act(g,'0','call');assert.equal(legal(g,'1').canRaise,false);
});
test('cumulative short all-ins reopen action when a full raise is reached',()=>{
 const g=game([2000,2000,70,100]);startHand(g); // First to act is seat 3; use explicit state for precise short-raise sequence.
 g.currentBet=60;g.lastRaise=40;g.turn=2;
 for(const p of g.players){p.bet=60;p.total=60;p.acted=true;p.actedAt=60;p.status='active';p.stack=1940;}
 g.players[2].stack=10;g.players[2].acted=false;g.players[3].stack=40;g.players[3].acted=false;
 act(g,'2','raise',70);act(g,'3','raise',100);assert.equal(g.turn,0);assert.equal(legal(g,'0').canRaise,true);assert.equal(legal(g,'0').minRaise,140);
});
test('side pots are awarded only to eligible hands',()=>{
 const g=game([0,0,0]);g.phase='river';g.board=C('2s 3h 7c 9d Js');g.dealer=0;
 const hands=['As Ah','Ks Kh','Qs Qh'];const contributions=[100,200,300];
 g.players.forEach((p,i)=>{p.status='allin';p.cards=C(hands[i]);p.total=contributions[i];});settle(g);
 assert.deepEqual(g.players.map(p=>p.stack),[300,200,100]);assert.equal(g.result.length,2);
});
test('odd split-pot chip goes clockwise from the dealer',()=>{
 const g=game([0,0,0]);g.phase='river';g.board=C('Ts Js Qs Ks As');g.dealer=0;
 g.players.forEach((p,i)=>{p.cards=C(['2h 3h','4h 5h','6h 7h'][i]);p.total=5;p.status=i===2?'folded':'allin';});settle(g);assert.deepEqual(g.players.map(p=>p.stack),[7,8,0]);
});
test('short-stack blinds automatically run out the board without deadlock',()=>{
 const g=game([5,10]);startHand(g);assert.equal(g.phase,'complete');assert.equal(g.board.length,5);assert.equal(g.players.reduce((s,p)=>s+p.stack,0),15);
});
test('seeded randomized legal games preserve chips and terminate',()=>{
 let seed=420;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 for(let run=0;run<250;run++){
  const g=game(Array.from({length:2+Math.floor(random()*5)},()=>50+Math.floor(random()*1000))),total=g.players.reduce((s,p)=>s+p.stack,0);startHand(g);
  let steps=0;while(g.phase!=='complete'){
   assert(++steps<150,'hand stalled');const p=g.players[g.turn],l=legal(g,p.id),r=random();
   if(r<.12)act(g,p.id,'fold');else if(l.canRaise&&r>.65){let to=l.maxRaise;if(to>=l.minRaise&&random()<.7)to=Math.min(to,l.minRaise+Math.floor(random()*100));act(g,p.id,'raise',to);}else act(g,p.id,l.check?'check':'call');
   assert(g.players.every(p=>p.stack>=0&&Number.isSafeInteger(p.stack)));assert.equal(g.players.reduce((s,p)=>s+p.stack,0)+(g.phase==='complete'?0:pot(g)),total);
  }
  assert.equal(g.players.reduce((s,p)=>s+p.stack,0),total);
  const dealt=[...g.players.flatMap(p=>p.cards),...g.board];assert.equal(new Set(dealt).size,dealt.length);
 }
});

test('a short all-in big blind does not demand an extra uncontested call',()=>{
 const g=game([2000,5]);startHand(g);assert.equal(g.phase,'complete');assert.equal(g.board.length,5);assert.equal(g.players.reduce((s,p)=>s+p.stack,0),2005);
});
