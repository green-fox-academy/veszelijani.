'use strict';

class Animal {
    private _hunger: number;
    private _thirst: number;

    constructor() {
        this._hunger = 50;
        this._thirst = 50;
    }

    public eat(): void {
        this._hunger -= 1;

    }
    public drink(): void {
        this._thirst -= 1;

    }
    public play(): void {
        this._hunger++;
        this._thirst++
    }
}
let Tiger = new Animal();
Tiger.drink();
Tiger.eat();
console.log(Tiger)
Tiger.play();
console.log(Tiger)