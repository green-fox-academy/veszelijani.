'use strict';

let numbers: number[] = [3, 4, 5, 6, 7];

numbers.reverse();

console.log(numbers);

let numbers2: number[] = [3, 4, 5, 6, 7];

let reversedNumbers: any[] = [];

for(let i = numbers2.length - 1; i >= 0; i--){
    reversedNumbers.push(numbers2[i]);
}
console.log(reversedNumbers);