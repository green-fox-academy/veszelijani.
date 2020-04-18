'use strict';

export class Plant {
    protected _color: string;
    protected _currentWaterAmount: number;

    constructor(color: string, currentWaterAmount: number) {
        this._color = color;
        this._currentWaterAmount = currentWaterAmount;
    }
}