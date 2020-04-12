'use strict';

function bunnies(num: number) {
    if (num === 1) {
        return 2;
    }else{
        num = 2 + bunnies(num - 1)
    }return num ;

}
console.log(bunnies(4));