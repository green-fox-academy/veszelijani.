'use strict';

class Sharpie{
    private _color: string;
    private _width: number;
    private _inkAmount: number;

    constructor(color: string, width: number){
        this._color = color;
        this._width = width;
        this._inkAmount = 100;
    }
    public use(): void{
        this._inkAmount -= 10;
    }
}

let Sharpie1 = new Sharpie('Black', 3)
Sharpie1.use();

