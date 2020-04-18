'use strict';

import { Plant } from './Plants'

export class Flower extends Plant {

    constructor(color: string, currentWaterAmount: number) {
        super(color, currentWaterAmount);
    }
    public NeedWater(): boolean {
        if (this._currentWaterAmount > 5) {
            return false;
        } else {
            return true;
        }
    }
    public Watering(amount: number) {
        this._currentWaterAmount = this._currentWaterAmount + (0.75 * amount);
    }
    public info(): void {
        if (this.NeedWater() === true) {
            console.log(`the ${this._color} Tree needs Water`);
        } else {
            console.log(`the ${this._color} Tree doesnt need water`);
        }
    }
}