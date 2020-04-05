import { DiceSet } from './dice-set';

let diceSet = new DiceSet();

diceSet.roll();
console.log(diceSet.getCurrent(2));

console.log(diceSet.getCurrent());
  for(let i: number = 0; i < 6; i++){
    if(diceSet.getCurrent(i) !== 6){
      diceSet.reroll(i);
      i--;
    }
  }
console.log("------------------");
console.log(diceSet.getCurrent());