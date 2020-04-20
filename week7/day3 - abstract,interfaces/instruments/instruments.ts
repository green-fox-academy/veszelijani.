'use strict';

import { StringedInstrument } from './stringedInstrument'

export abstract class Instrument {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }
    public play() {
    }
    public get NamedThing(): string {
        return this._name;
    }
}