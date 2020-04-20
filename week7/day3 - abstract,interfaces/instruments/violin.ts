'use strict'

import { StringedInstrument } from './stringedInstrument'

export class Violin extends StringedInstrument {
    constructor(numberOfStrings: number = 4, name: string = 'Violin') {
        super(numberOfStrings, name)
    }
    public sound(): string {
        return 'Screech';
    }
}