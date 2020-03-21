'use strict';

function divideWithTen(number: number) {
    if (10 / number === 0 || number === 0) {
        console.log('fail');
    } else {
        console.log(10 / number)
    }
}

divideWithTen(0);