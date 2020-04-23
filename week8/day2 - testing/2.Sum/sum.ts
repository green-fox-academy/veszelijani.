'use strict';

export class Random {

    public sumAll(array: number[]): number {
        return array.reduce((a, b) => a + b, 0);
    }
}
