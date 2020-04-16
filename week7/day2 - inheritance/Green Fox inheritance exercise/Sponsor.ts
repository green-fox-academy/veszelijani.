'use strict';

import { Person } from './Person'

export class Sponsor extends Person {
    private _company: string;
    private _hiredStudents: number;

    constructor(name?: string, age?: number, gender?: string, company: string = 'RandomCompany') {
        super(name, age, gender)
        this._company = company;
        this._hiredStudents = 0;
    }
    public introduce(): string{
        return super.introduce() + `who represents ${this._company} and hired ${this._hiredStudents} students so far`;
    }
    public hire(): void {
        this._hiredStudents++;
    }
    public getGoal(): void {
        console.log('My goal is: Hire brilliant junior software developers.');
    }
}