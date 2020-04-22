'use strict'

import { Animal } from "./Animal"
import { Flyable } from "./Flyable"

export class Bird extends Animal implements Flyable{
    constructor(name: string, age?: number){
        super(name,age)
    }
    public breed(): string{
        return 'laying eggs'
    }
    public land(){
        console.log('Birdie is landing')
    }
    public fly(){
        console.log('Birdie is flying')
    }
    public takeOff(){
        console.log('Birdie is taking off')
    }
}
