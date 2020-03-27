'use strict';

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

function containsSeven(number: number[]){
    if (number.includes(7) === true) {
        return 'Hurray'
    } else {
        return 'nooooooooooooo'
    }
    
}

console.log(containsSeven(numbers));