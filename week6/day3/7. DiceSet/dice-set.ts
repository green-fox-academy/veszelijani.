export class DiceSet {

  dice: number[];
  readonly numOfDices: number = 6;
  roll(): number[] {

    this.dice = [];

    for (let i = 0; i < this.numOfDices; i++) {

      this.dice.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dice;
  }
  reroll(index?: number): void {
    if (index === undefined) {

      for (let i = 0; i < this.numOfDices; i++) {
        this.dice[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dice[index] = Math.floor(Math.random() * 6 + 1);
    }
  }
  getCurrent(index?: number): number[] | number {

    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        return this.dice;
      }
    } else {
      return this.dice[index];
    }for(let i: number = 0; i < this.numOfDices; i++){}
  }
}

let diceSet = new DiceSet();

diceSet.roll();
console.log(diceSet.getCurrent(2))

console.log(diceSet.getCurrent());
  for(let i: number = 0; i < 6; i++){
    if(diceSet.getCurrent(i) !== 6){
      diceSet.reroll(i)
      i--
    }
  }
console.log("------------------");
console.log(diceSet.getCurrent());
