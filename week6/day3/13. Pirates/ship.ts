'use strict';

import { Pirate } from './pirates'
import { Captain } from './captain'

class Ship{
    private _ship: Pirate[];

    constructor(){
        this._ship = [];
    }
    public fillShip(amount: number):void{
        this._ship.push(new Captain)
        for(let i: number = 0; i < amount; i++){
            this._ship.push(new Pirate)
        }
    }
}
let BlackPearl: Ship = new Ship;
BlackPearl.fillShip(4);
console.log(BlackPearl)