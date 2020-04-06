'use strict';

import { Car } from './car'

export class Station {
    private _gasAmount: number;

    constructor(gasAmount: number) {
        this._gasAmount = gasAmount;
    }

    public refill(car: Car): void {
        if (car.refill() === false) {
            console.log('Sorry Dude your car is full');
        } else {
            this._gasAmount = this._gasAmount - car.Capacity;
        }
    }
}
