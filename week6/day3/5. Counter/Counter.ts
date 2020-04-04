'use strict';

export class Counter {
    private _Numbero: number;

    constructor(Numbero: number = 0) {
        this._Numbero = Numbero;
    }
    public add(amount: number = 1): void {
        this._Numbero += amount;
    }
    public get(): string {
        return this._Numbero.toString();
    }
    public reset(): number {
        this._Numbero = 0;
        return this._Numbero;
    }
    public get Numbero(): number {
        return this._Numbero;
    }
}