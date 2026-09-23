import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from '../server.mjs';

test('two independent clients join, share game state, protect cards, reject stale actions and resume a seat',async t=>{
 const server=createServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
 t.after(()=>{server.closeAllConnections();server.close();});
 const alice={},bob={},outsider={};
 async function request(client,path,data,extra={}){const res=await fetch(base+path,{method:data===undefined?'GET':'POST',headers:{...data===undefined?{}:{'Content-Type':'application/json'},...client.cookie?{cookie:client.cookie}:{},...extra},body:data===undefined?undefined:JSON.stringify(data)});const cookie=res.headers.get('set-cookie');if(cookie)client.cookie=cookie.split(';')[0];return {status:res.status,body:await res.json()};}
 const created=await request(alice,'/api/rooms',{name:'Alice',mode:'friends',buyIn:1000});assert.equal(created.status,201);const path=`/api/rooms/${created.body.code}`;
 assert.equal((await request(outsider,path)).status,400);
 assert.equal((await request(bob,path+'/join',{name:'Bob'})).status,200);
 const a0=await request(alice,path),b0=await request(bob,path);assert.equal(a0.body.players.length,2);assert.notEqual(a0.body.you,b0.body.you);assert.equal(a0.body.buyIn,1000);
 assert.equal((await request(bob,path+'/start',{})).status,400);
 assert.equal((await request(alice,path+'/start',{})).status,200);
 let a=(await request(alice,path)).body,b=(await request(bob,path)).body;
 assert.deepEqual(a.board,b.board);assert.deepEqual(a.players[1].cards,[null,null]);assert.deepEqual(b.players[0].cards,[null,null]);assert(a.players[0].cards.every(Number.isInteger));assert(b.players[1].cards.every(Number.isInteger));
 const oldRevision=a.revision;
 const wrong=await request(bob,path+'/action',{type:'call',revision:oldRevision});assert.equal(wrong.status,400);
 const move=await request(alice,path+'/action',{type:'call',revision:oldRevision});assert.equal(move.status,200);
 assert.equal((await request(alice,path+'/action',{type:'call',revision:oldRevision})).status,400);
 a=(await request(alice,path)).body;b=(await request(bob,path)).body;assert.equal(a.revision,b.revision);assert.equal(a.turn,1);
 const reconnected={cookie:alice.cookie};assert.equal((await request(reconnected,path)).body.you,a.you);assert.equal((await request(reconnected,path)).body.players.length,2);
 const controller=new AbortController();const stream=await fetch(base+path+'/events',{headers:{cookie:alice.cookie},signal:controller.signal});assert.equal(stream.headers.get('content-type'),'text/event-stream');const reader=stream.body.getReader();const event=new TextDecoder().decode((await reader.read()).value);assert(event.includes('"online":true'));assert(!event.includes('"deck"'));controller.abort();
 assert.equal((await request(alice,path+'/action',{type:'fold',revision:a.revision},{Origin:'https://other.example'})).status,400);
 for(let i=0;i<30;i++){
  a=(await request(alice,path)).body;if(a.phase==='complete')break;const current=a.players[a.turn].id===a.you?alice:bob;const own=(await request(current,path)).body;
  assert.equal((await request(current,path+'/action',{type:own.legal.check?'check':'call',revision:own.revision})).status,200);
 }
 a=(await request(alice,path)).body;assert.equal(a.phase,'complete');assert.equal(a.players.reduce((s,p)=>s+p.stack,0),2000);assert(a.players.every(p=>p.cards.every(Number.isInteger)));
 assert.equal((await request(bob,path+'/leave',{})).status,200);assert.equal((await request(bob,path)).status,400);
});

test('practice creates real bots and validates buy-in/name',async t=>{
 const server=createServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;t.after(()=>{server.closeAllConnections();server.close();});
 const res=await fetch(base+'/api/rooms',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:'Practice',mode:'practice',buyIn:2000})});assert.equal(res.status,201);const cookie=res.headers.get('set-cookie').split(';')[0],{code}=await res.json();const state=await (await fetch(base+`/api/rooms/${code}`,{headers:{cookie}})).json();assert.equal(state.mode,'practice');assert.equal(state.players.filter(p=>p.bot).length,3);assert.equal(state.phase,'preflop');
 const bad=await fetch(base+'/api/rooms',{method:'POST',headers:{'Content-Type':'application/json',cookie},body:JSON.stringify({name:' ',mode:'friends',buyIn:-1})});assert.equal(bad.status,400);
});
