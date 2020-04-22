'use stricts';

export abstract class Vehicle{
    private _name: string
    private _fuelType: string;
    private _fuelLevel: number;

    constructor(name: string, fuelType: string, fuelLevel: number){
        this._name = name;
        this._fuelLevel = fuelLevel
        this._fuelType = fuelType
    }
}