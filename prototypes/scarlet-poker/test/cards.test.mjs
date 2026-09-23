import test from 'node:test';
import assert from 'node:assert/strict';
import { card, HAND_EXAMPLES } from '../public/cards.js';
import { evaluate, compare } from '../engine.mjs';

test('illustrated hand examples match the actual game evaluator, strongest first',()=>{
 let previous=null;
 for(const hand of HAND_EXAMPLES){
  assert.equal(hand.cards.length,5);assert.equal(new Set(hand.cards).size,5);
  const score=evaluate(hand.cards);assert.equal(score[0],hand.category,hand.name);
  if(previous)assert(compare(previous,score)>0,`${hand.name} must be weaker than the previous example`);
  previous=score;
 }
 assert.equal(evaluate(HAND_EXAMPLES[0].cards)[1],14);
});
