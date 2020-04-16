'use strict';

import {Person} from './Person';
import {Student} from './Student';
import {Mentor} from './Mentor';

export class Cohort{
    private _name: string;
    private _students: Student[] = [];
    private _mentors: Mentor[] = [];

    constructor(name: string){
        this._name = name;
    }
    public addStudent(Student: Student):void{
        this._students.push(Student);
    }
    public addMentor(Mentor: Mentor):void{
        this._mentors.push(Mentor);
    }
    public info():void{
        console.log(`The ${this._name} cohort has ${this._students.length} students and ${this._mentors.length} mentors`)
    }
}