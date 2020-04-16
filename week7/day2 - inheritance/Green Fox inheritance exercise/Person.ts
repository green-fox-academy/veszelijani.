'use strict';

export class Person {
    private _name: string;
    private _age: number;
    private _gender: string;

    constructor(name?: string, age?: number, gender?: string) {
        if (name && age && gender) {
            this._name = name;
            this._age = age;
            this._gender = gender;
        } else {
            this._name = 'Jane Doe';
            this._age = 30;
            this._gender = 'Female';
        }
    }
    public introduce(): string {
        return `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender}`;
    }
    public getGoal(): void {
        console.log('My goal is: Live for the moment!');
    }
}
