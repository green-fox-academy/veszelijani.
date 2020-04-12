'use strict';

function powerCalculator (base: number, power: number): number {

    if (power > 1){
        base *= powerCalculator(base, power -1);
    }
    return base;
}
console.log(powerCalculator(3, 2));