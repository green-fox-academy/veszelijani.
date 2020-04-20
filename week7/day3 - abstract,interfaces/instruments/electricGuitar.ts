'use strict'

import { StringedInstrument } from './stringedInstrument';

export class ElectricGuitar extends StringedInstrument {
    constructor(numberOfStrings: number = 6, name: string = 'Electric Guitar') {
        super(numberOfStrings, name);
    }
    public sound(): string {
        return 'Twangg';
    }
}