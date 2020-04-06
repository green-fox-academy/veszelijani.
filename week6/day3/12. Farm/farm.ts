'use strict';

import { Animal } from '/Users/nopen/OneDrive/Desktop/greenfox/week6/day3/3. Animal/Animal'

export class Farm{
    BigFarm: Animal[] = [];
    slot: number = 5;

    public add(animal: Animal){
        this.BigFarm.push(animal);
        this.slot --;
    }
    public breed():void{
        if(this.slot > 0){
            this.add(new Animal);
        }else if(this.slot === 0){
            console.log('the farm is full');
        }
    }
    public slaughter():void{
        let hunger: number[] = [];
        for(let i: number = 0; i < this.BigFarm.length; i++){
          hunger.push(this.BigFarm[i].AnimalHunger);
          if(this.BigFarm[i].AnimalHunger === Math.min(...hunger)){
              this.BigFarm.splice(i,1);
          }
        }this.slot ++;
    }
}
