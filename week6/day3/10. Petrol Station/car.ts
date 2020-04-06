'use strict';

import { Station } from './station'

export class Car {
    private _gasAmount: number;
    private _capacity: number;

    constructor(_gasAmount?: number, _capacity?: number) {
        this._gasAmount = 0;
        this._capacity = 100;

    }
    public get Capacity(): number {
        return this._capacity;
    }
    public get gasAmount(): number {
        return this._gasAmount;
    }
    public refill(): boolean {
        if (this._gasAmount === this._capacity) {
            return false
        } else {
            this._gasAmount += this._capacity;
        }
    }
}