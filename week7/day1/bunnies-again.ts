'use strict';

function bunnies(num: number) {
    if (num === 1) {
        return 2;
    } else {
        if (num % 2 === 0) {
            num = 3 + bunnies(num - 1);
        } else {
            num = 2 + bunnies(num - 1);
        }
    } return num;
}
console.log(bunnies(4));