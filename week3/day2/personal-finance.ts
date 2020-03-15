'use strict';

let list: number[] = [500, 1000, 1250, 175, 800, 120];

console.log('We spent : ' + list.reduce((a, b) => a + b, 0));
console.log('The greatest is: ' + (Math.max(...list)));
console.log('The cheapest is: ' + (Math.min(...list)));

let sum = 0;
for(let i: number = 0; i < list.length; i++){
    sum +=list[i];
}
console.log('The average is: ' + sum/list.length);