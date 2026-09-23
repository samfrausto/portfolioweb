import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { randomBytes, randomUUID } from 'node:crypto';
import { makeGame, makePlayer, startHand, act, view, legal, botAction, log } from './engine.mjs';

const rooms=new Map(), sessions=new Map();
const root=fileURLToPath(new URL('./public/',import.meta.url));
const json=(res,status,data)=>{res.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store'});res.end(JSON.stringify(data));};
const fail=(test,message)=>{if(!test)throw new Error(message);};
function session(req,res){
  const sid=req.headers.cookie?.match(/(?:^|; )scarlet=([a-f0-9]{48})(?:;|$)/)?.[1];
  if(sid&&sessions.has(sid)){const s=sessions.get(sid);s.touched=Date.now();return s;}
  fail(sessions.size<5000,'This server is full. Try again later.');
  const key=randomBytes(24).toString('hex'), s={id:randomUUID(),touched:Date.now(),requests:[],created:[]};sessions.set(key,s);
  res.setHeader('Set-Cookie',`scarlet=${key}; HttpOnly; SameSite=Strict; Path=/; Max-Age=86400${process.env.SECURE_COOKIE==='1'?'; Secure':''}`);return s;
}
async function body(req){let data='';for await(const chunk of req){data+=chunk;fail(data.length<4096,'Request too large.');}try{return JSON.parse(data||'{}');}catch{throw new Error('Invalid request.');}}
function name(value){fail(typeof value==='string','Enter your name.');const s=value.trim().replace(/[\x00-\x1f\x7f]/g,'');fail(s.length>=1&&s.length<=18,'Use a name between 1 and 18 characters.');return s;}
function playerView(room,id){return {...view(room.game,id),code:room.code,mode:room.mode,host:room.host,you:id,deadline:room.deadline,
 players:view(room.game,id).players.map(p=>({...p,online:p.bot||[...room.clients].some(c=>c.id===p.id)}))};}
function send(room){room.touched=Date.now();for(const c of room.clients)c.res.write(`data: ${JSON.stringify(playerView(room,c.id))}\n\n`);}
function schedule(room){
  clearTimeout(room.timer);room.deadline=null;
  const p=room.game.players[room.game.turn];if(!p||room.game.phase==='complete')return;
  const delay=p.bot?950:room.mode==='practice'?0:45000;
  if(!delay)return;
  if(!p.bot)room.deadline=Date.now()+delay;
  room.timer=setTimeout(()=>{
    try{const action=p.bot?botAction(room.game,p.id):[legal(room.game,p.id)?.check?'check':'fold'];if(action)act(room.game,p.id,...action);schedule(room);send(room);}catch(e){console.error('Table transition failed:',e.message);}
  },delay);
  room.timer.unref();
}
function destroy(room){clearTimeout(room.timer);for(const c of room.clients)c.res.end();rooms.delete(room.code);}
export function createServer(){return http.createServer(async(req,res)=>{
  res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','same-origin');
  res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'self'; base-uri 'none'; form-action 'self'");
  try{
    const url=new URL(req.url,'http://localhost');
    if(url.pathname.startsWith('/api/')){
      if(req.method==='POST'){
        if(req.headers.origin)fail(new URL(req.headers.origin).host===req.headers.host,'This request came from a different site.');
        fail(req.headers['content-type']?.startsWith('application/json'),'Send a JSON request.');
      }
      const s=session(req,res);
      s.requests=s.requests.filter(t=>Date.now()-t<10000);fail(s.requests.length<80,'Too many requests. Wait a few seconds.');s.requests.push(Date.now());
      if(url.pathname==='/api/rooms'&&req.method==='POST'){
        const b=await body(req);fail(rooms.size<300,'All tables are occupied. Try again later.');
        s.created=s.created.filter(t=>Date.now()-t<60000);fail(s.created.length<10,'Please wait before creating another table.');
        const nick=name(b.name);fail(['practice','friends'].includes(b.mode),'Choose a mode.');fail([1000,2000,5000].includes(b.buyIn),'Choose a valid chip buy-in.');
        const prior=[...rooms.values()].find(r=>r.mode==='practice'&&r.host===s.id);if(prior)destroy(prior);
        let code;do{code=randomBytes(4).toString('hex').slice(0,6).toUpperCase();}while(rooms.has(code));
        const room={code,mode:b.mode,host:s.id,game:makeGame(b.buyIn),clients:new Set(),touched:Date.now(),deadline:null};
        room.game.players.push(makePlayer(s.id,nick,b.buyIn));
        if(b.mode==='practice')for(const nick of ['Jules','Theo','Mika'])room.game.players.push(makePlayer(randomUUID(),nick,b.buyIn,true));
        rooms.set(code,room);s.created.push(Date.now());
        if(b.mode==='practice'){startHand(room.game);schedule(room);}
        return json(res,201,{code});
      }
      const match=url.pathname.match(/^\/api\/rooms\/([A-F0-9]{6})(?:\/(join|events|action|start|rebuy|leave))?$/);
      if(match){
        const room=rooms.get(match[1]);fail(room,'This table has closed. Create a new one.');const endpoint=match[2];
        let p=room.game.players.find(p=>p.id===s.id);
        if(endpoint==='join'&&req.method==='POST'){
          fail(room.mode==='friends','This is a private practice table.');const b=await body(req);const nick=name(b.name);
          if(!p){
            fail(room.game.players.filter(p=>!p.left).length<6,'This table is full.');
            // Reuse departed seats only between hands, preserving deal order and contribution history.
            if(['waiting','complete'].includes(room.game.phase)){
              room.game.players=room.game.players.filter(p=>!p.left);room.game.dealer=Math.min(room.game.dealer,room.game.players.length-1);
            }
            fail(room.game.players.length<6,'A seat will open after this hand.');
            p=makePlayer(s.id,nick,room.game.buyIn);room.game.players.push(p);log(room.game,`${nick} joined the table`);
          }else {p.left=false;p.name=nick;}
          room.game.revision++;send(room);return json(res,200,{code:room.code});
        }
        fail(p&&!p.left,'Join the table to take a seat.');
        if(endpoint==='events'&&req.method==='GET'){
          res.writeHead(200,{'Content-Type':'text/event-stream','Cache-Control':'no-cache, no-transform','Connection':'keep-alive','X-Accel-Buffering':'no'});
          const c={id:s.id,res};room.clients.add(c);send(room);
          const heartbeat=setInterval(()=>res.write(': connected\n\n'),15000);
          res.on('close',()=>{clearInterval(heartbeat);room.clients.delete(c);send(room);});return;
        }
        if(!endpoint&&req.method==='GET')return json(res,200,playerView(room,s.id));
        if(req.method==='POST'){
          const b=await body(req);
          if(endpoint==='action'){
            fail(b.revision===room.game.revision,'The table changed. Check the current action and try again.');
            act(room.game,s.id,b.type,b.amount);schedule(room);
          }else if(endpoint==='start'){
            fail(room.host===s.id,'The host will deal the next hand.');
            // Departed seats stay stable until the hand has been settled.
            fail(['waiting','complete'].includes(room.game.phase),'The current hand is still in progress.');
            if(room.mode==='practice')for(const bot of room.game.players.filter(p=>p.bot&&p.stack===0)){bot.stack=room.game.buyIn;bot.boughtIn+=room.game.buyIn;}
            startHand(room.game);schedule(room);
          }else if(endpoint==='rebuy'){
            fail(['waiting','complete'].includes(room.game.phase),'Add chips between hands.');fail(p.stack===0,'You still have chips to play.');
            p.stack=room.game.buyIn;p.boughtIn+=room.game.buyIn;room.game.revision++;log(room.game,`${p.name} added ${room.game.buyIn} play chips`);
          }else if(endpoint==='leave'){
            fail(['waiting','complete'].includes(room.game.phase)||!['active','allin'].includes(p.status),'Finish or fold this hand before leaving.');
            p.left=true;room.game.revision++;if(room.host===s.id)room.host=room.game.players.find(o=>!o.left&&!o.bot)?.id??s.id;
          }else throw new Error('Unknown action.');
          send(room);return json(res,200,{ok:true});
        }
      }
      return json(res,404,{error:'This table could not be found.'});
    }
    if(req.method!=='GET'&&req.method!=='HEAD')return json(res,405,{error:'Method not allowed.'});
    const files={'/':'index.html','/index.html':'index.html','/app.js':'app.js','/cards.js':'cards.js','/cards.css':'cards.css','/style.css':'style.css','/favicon.svg':'favicon.svg'};
    const file=files[url.pathname];if(!file)return json(res,404,{error:'Page not found.'});
    const data=await readFile(root+file),ext=file.split('.').pop();
    res.writeHead(200,{'Content-Type':{html:'text/html; charset=utf-8',js:'text/javascript; charset=utf-8',css:'text/css; charset=utf-8',svg:'image/svg+xml'}[ext],'Cache-Control':'no-cache'});res.end(req.method==='HEAD'?undefined:data);
  }catch(error){if(!res.headersSent)json(res,400,{error:error.message});else res.end();}
});}
const sweeper=setInterval(()=>{for(const room of rooms.values())if(Date.now()-room.touched>4*60*60*1000)destroy(room);for(const [key,s]of sessions)if(Date.now()-s.touched>86400000)sessions.delete(key);},60000);sweeper.unref();
if(process.argv[1]===fileURLToPath(import.meta.url)){const port=Number(process.env.PORT||8794);createServer().listen(port,'0.0.0.0',()=>console.log(`Scarlet ready on http://localhost:${port}`));}
