'use strict';

let numbers: number[] = [3, 4, 5, 6, 7];

let counter: number = 0;

numbers.forEach(function (e) {
    counter = counter + e
})
console.log(counter);