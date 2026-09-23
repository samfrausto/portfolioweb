// Original vector deck, shared by the table, entrance and illustrated hand guide.
const ranks=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const rankNames=['Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King','Ace'];
const suitNames=['spades','hearts','clubs','diamonds'];
const paths=[
 'M16 1C12 7 2 12 2 20c0 8 10 10 14 3 4 7 14 5 14-3C30 12 20 7 16 1Zm-2 22c0 4-2 6-5 8h14c-3-2-5-4-5-8Z',
 'M16 29C11 23 1 17 1 9 1-1 13-2 16 7 19-2 31-1 31 9c0 8-10 14-15 20Z',
 'M16 1a8 8 0 0 0-7 12C-1 9-3 23 5 26c4 1 7-1 9-4 0 4-2 7-5 9h14c-3-2-5-5-5-9 2 3 5 5 9 4 8-3 6-17-4-13A8 8 0 0 0 16 1Z',
 'M16 0 29 16 16 32 3 16Z'
];
function suit(s,x,y,size=20,rotated=false){return `<g transform="translate(${x} ${y})${rotated?' rotate(180)':''} scale(${size/32}) translate(-16 -16)"><path d="${paths[s]}" fill="currentColor"/></g>`;}
const layouts={
 2:[[70,53],[70,143]],
 3:[[70,53],[70,98],[70,143]],
 4:[[47,53],[93,53],[47,143],[93,143]],
 5:[[47,53],[93,53],[70,98],[47,143],[93,143]],
 6:[[47,53],[93,53],[47,98],[93,98],[47,143],[93,143]],
 7:[[47,53],[93,53],[70,75],[47,98],[93,98],[47,143],[93,143]],
 8:[[47,53],[93,53],[70,75],[47,98],[93,98],[70,121],[47,143],[93,143]],
 9:[[47,49],[93,49],[47,81],[93,81],[70,98],[47,115],[93,115],[47,147],[93,147]],
 10:[[47,49],[93,49],[70,65],[47,81],[93,81],[47,115],[93,115],[70,131],[47,147],[93,147]]
};
function corner(rank,s){return `<g><text x="16" y="28" text-anchor="middle" class="card-rank" font-size="${rank==='10'?20:23}" fill="currentColor">${rank}</text>${suit(s,16,41,13)}</g>`;}
function court(rank,s){
 const crown=rank==='J'?'<path d="m56 64 5-13 22 7-3 7Z" fill="currentColor"/><path d="m78 55 7-9" stroke="#ac823e" stroke-width="2"/>':rank==='Q'?'<path d="m57 65-3-13 9 6 7-13 7 13 9-6-3 13Z" fill="#c4a15b"/>':'<path d="m55 65-3-17 10 8 8-14 8 14 10-8-3 17Z" fill="#c4a15b"/>';
 const half=`<g>${crown}<path d="M59 67h22l-2 12-9 8-9-8Z" fill="#eee1bf" stroke="currentColor" stroke-width="1.2"/><path d="M62 71h5m6 0h5m-11 8h6" stroke="currentColor" stroke-width="1.4" fill="none"/><path d="m61 82 9 5 9-5 18 17H43Z" fill="currentColor"/><path d="m62 87 8 10 8-10m-8 0v10" stroke="#d7b66f" stroke-width="1.4" fill="none"/></g>`;
 return `<rect x="36" y="43" width="68" height="110" rx="2" fill="#f6edda" stroke="#c4a15b" stroke-width=".8"/>${half}<g transform="rotate(180 70 98)">${half}</g><path d="M39 98h62" stroke="#c4a15b" stroke-width="1"/>${suit(s,45,48,8)}${suit(s,95,148,8,true)}`;
}
function back(){
 let lattice='';for(let n=-140;n<220;n+=12)lattice+=`<path d="M${n} 12  ${n+172} 184 M${n} 184 ${n+172} 12"/>`;
 return `<rect width="140" height="196" rx="9" fill="#741b30"/><rect x="6" y="6" width="128" height="184" rx="6" fill="none" stroke="#e4bb64" stroke-width="1.4"/><svg x="11" y="11" width="118" height="174" viewBox="11 11 118 174" overflow="hidden"><g fill="none" stroke="#bd924c" stroke-width=".55" opacity=".5">${lattice}</g></svg><path d="m70 45 36 53-36 53-36-53Z" fill="#741b30" stroke="#e4bb64"/><path d="m70 52 30 46-30 46-30-46Z" fill="none" stroke="#bd924c" stroke-width=".7"/><g color="#e4bb64">${suit(0,70,95,29)}</g><path d="M59 117h22" stroke="#e4bb64" stroke-width="1"/>`;
}
export function card(c,extra=''){
 if(c===undefined)return '<span class="card-slot" aria-hidden="true"></span>';
 if(c===null)return `<span class="playing-card card-back ${extra}" role="img" aria-label="Face-down card"><svg viewBox="0 0 140 196" aria-hidden="true" focusable="false">${back()}</svg></span>`;
 if(!Number.isInteger(c)||c<0||c>51)throw new Error('Invalid card.');
 const rank=ranks[c%13],s=Math.floor(c/13),value=c%13+2;
 const middle=value===14?`${suit(s,70,89,48)}<path d="M52 133h36" stroke="#c4a15b" stroke-width=".7"/><text x="70" y="146" text-anchor="middle" class="card-signature" fill="#826738">Scarlet</text>`:value>=11?court(rank,s):layouts[value].map(([x,y])=>suit(s,x,y,value>=9?17:20,y>98)).join('');
 return `<span class="playing-card ${s%2?'red':''} ${extra}" role="img" aria-label="${rankNames[c%13]} of ${suitNames[s]}"><svg viewBox="0 0 140 196" aria-hidden="true" focusable="false"><rect x=".7" y=".7" width="138.6" height="194.6" rx="9" fill="#fffbf1" stroke="#e9dcc1" stroke-width="1.4"/><path d="M32 15h76M32 181h76" stroke="#c4a15b" stroke-width=".6" opacity=".55"/><g class="card-face">${corner(rank,s)}<g class="card-art">${middle}</g><g transform="rotate(180 70 98)">${corner(rank,s)}</g></g><g class="card-compact"><text x="70" y="87" text-anchor="middle" class="card-rank" font-size="62" fill="currentColor">${rank}</text>${suit(s,70,125,40)}</g></svg></span>`;
}
export function parseCards(text){return text.split(' ').map(code=>{const rank='23456789TJQKA'.indexOf(code[0]),suit='shcd'.indexOf(code[1]);if(code.length!==2||rank<0||suit<0)throw new Error('Invalid example card.');return suit*13+rank;});}
export const HAND_EXAMPLES=[
 {name:'Royal flush',description:'Ten through ace, all in the same suit. The highest straight flush.',cards:'Ts Js Qs Ks As',category:8},
 {name:'Straight flush',description:'Five consecutive cards, all in the same suit.',cards:'5h 6h 7h 8h 9h',category:8},
 {name:'Four of a kind',description:'Four cards of one rank, plus a fifth card.',cards:'Ks Kh Kc Kd 3s',category:7},
 {name:'Full house',description:'Three cards of one rank and two of another.',cards:'Qh Qs Qd 8c 8d',category:6},
 {name:'Flush',description:'Five cards of one suit, not all consecutive.',cards:'Ad Jd 8d 5d 2d',category:5},
 {name:'Straight',description:'Five consecutive ranks, with mixed suits.',cards:'4s 5h 6c 7d 8s',category:4},
 {name:'Three of a kind',description:'Three cards of one rank, plus two different ranks.',cards:'7s 7h 7c Kd 2s',category:3},
 {name:'Two pair',description:'Two cards of one rank, two of another, and a fifth card.',cards:'Jh Js 4c 4d 9s',category:2},
 {name:'One pair',description:'Two cards of one rank, plus three different ranks.',cards:'Th Ts Ac 7d 3s',category:1},
 {name:'High card',description:'No pair, straight or flush. The highest card leads.',cards:'As Jh 8c 6d 2s',category:0}
].map(hand=>({...hand,cards:parseCards(hand.cards)}));
