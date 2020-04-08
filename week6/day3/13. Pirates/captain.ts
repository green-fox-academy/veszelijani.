'use strict';

import { Pirate } from './pirates'

export class Captain extends Pirate{

    constructor(){
        super()
    }
}
let captainka: Captain = new Captain;

captainka.drinkSomeRum()
console.log(captainka)