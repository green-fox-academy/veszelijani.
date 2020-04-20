'use strict'

import { Instrument } from './instruments';

export class StringedInstrument extends Instrument {
    private _numberOfStrings: number;
    constructor(numberOfStrings: number, name: string) {
        super(name);
        this._numberOfStrings = numberOfStrings;
    }
    public sound() {
    }
    public play() {
        console.log(`${this.NamedThing}, a ${this._numberOfStrings}-stringed instrument that goes ` + this.sound());
    }
}