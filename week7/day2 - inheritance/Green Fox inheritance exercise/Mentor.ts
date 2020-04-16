'use strict';

import {Person} from './Person'

export class Mentor extends Person{
    private _level: string;

    constructor(name?: string, age?: number, gender?: string, level: string = 'intermediate'){
        super(name,age,gender);
        this._level = level;
    }
    public getGoal():void{
        console.log('My goal is: Educate brilliant junior software developers.');
    }
    public introduce(): string{
        return super.introduce() + `, ${this._level} mentor`
    }
}
