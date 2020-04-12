'use strict';

import { Pirate } from './pirates'

export class Captain extends Pirate{

    constructor(drinkRum: number = 0){
        super(drinkRum)
        
    }
}
let captainka: Captain = new Captain;

captainka.drinkSomeRum()
console.log(captainka)
