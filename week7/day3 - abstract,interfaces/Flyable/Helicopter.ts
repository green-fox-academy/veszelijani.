'use strict';

import { Vehicle } from "./Vehicle";
import { Flyable } from "../Zoo/Flyable";

class Helicopter extends Vehicle implements Flyable{
    constructor(name: string = '1', fuelType: string = 'kerosine', fuelLevel: number = 100){
        super(name,fuelType,fuelLevel)
    }
    public land(){
        console.log('The Helicopter is landing');
    }
    public fly(){
        console.log('The helicopter is flying');
    }
    public takeOff(){
        console.log('The Helicopter is taking Off');
    }
}
let Medicopter = new Helicopter();

console.log(Medicopter);
Medicopter.fly();