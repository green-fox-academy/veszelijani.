'use strict';

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(number: number[]){
   
if(number.includes(4) && number.includes(8) && number.includes(12) && number.includes(16)){
    return true
}else{
    return false
}}
console.log(checkNums(listOfNumbers));
