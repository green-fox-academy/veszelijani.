'use strict';

let numbers: number[] = [1, 2, 3, 8, 5, 6];

let rightNumbers: number[] = numbers.map(function(e){
    if(e === 8){
       return 4; 
    }else{
        return e
    }
})

console.log(rightNumbers)


let numList: number[] = [1, 2, 3, 4, 5]

numList[2]++;

console.log(numList[2]);