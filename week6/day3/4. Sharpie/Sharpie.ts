'use strict';

import { SharpieSet } from '/Users/nopen/OneDrive/Desktop/greenfox/week6/day3/11. Sharpie Set/sharpieSet'

export class Sharpie{
    private _color: string;
    private _width: number;
    private _inkAmount: number;

    constructor(color: string, width: number){
        this._color = color;
        this._width = width;
        this._inkAmount = 100;
    }
    public use(amount = 1): void{
        this._inkAmount -= 10 * amount;
    }
    public get InkAmount(): number{
        return this._inkAmount;
    }
}