'use strict';

import { Pirate } from './pirates'
import { Captain } from './captain'

class Ship{
    private _ship: Pirate[] = []

    constructor(){
    }
    public fillShip(amount: number, name: Captain):void{
            this._ship.push(name)
        for(let i: number = 0; i < amount; i++){
            this._ship.push(new Pirate(Math.floor(Math.random() * 5)));
        }
    }
    public countLifes(): number{
        let lifeCounter: number = 0;
        this._ship.forEach(function(e){
            if(e.IsThePirateStillAlive){
                lifeCounter ++
                return lifeCounter
            }
        })
        return lifeCounter
    }
    public battle(otherShip: Ship):boolean{
        let score1: number = this.countLifes() - this._ship[0].drinkThatRum;
        let score2: number = otherShip.countLifes() - otherShip._ship[0].drinkThatRum;
        if(score1 > score2){
            return true
        }else{
            return false
        }
    }  
}
let BlackBeard = new Captain(Math.floor(Math.random() * 5));
let Samuel = new Captain(Math.floor(Math.random() * 5));
let BlackPearl = new Ship;
let BigShip = new Ship;
BigShip.fillShip(4,BlackBeard);
BlackPearl.fillShip(4, Samuel);
console.log(BlackPearl);
console.log(BigShip);
console.log(BlackPearl.countLifes());
console.log(BlackPearl.battle(BigShip));