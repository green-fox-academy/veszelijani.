'use strict';

import {Person} from './Person'

export class Student extends Person{
    private _previousOrganization: string;
    private _skippedDays: number;

    constructor(name?: string, age?: number, gender?: string, priviousOrganization: string = 'The School of Life'){
        super(name,age,gender)
        this._previousOrganization = priviousOrganization;
        this._skippedDays = 0;
    }
    public introduce(): string{
        return super.introduce() +` from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already`;
    }
    public getGoal(): void{
        console.log('My goal is: Be a junior software developer.')
    }
    public skipDays(numberOfDays: number):void{
        this._skippedDays = this._skippedDays + numberOfDays
    }
}
let studento = new Student()
console.log(studento)
studento.introduce()