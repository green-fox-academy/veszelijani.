'use strict'

import { StringedInstrument } from './stringedInstrument';

export class BassGuitar extends StringedInstrument {
    constructor(numberOfStrings: number = 4, name: string = 'Bass Guitar') {
        super(numberOfStrings, name);
    }
    public sound(): string {
        return 'Duum-duum-duum';
    }
}