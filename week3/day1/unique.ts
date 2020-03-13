'use strict';

let thing: number[] = [1, 11, 34, 11, 52, 61, 1, 34];

function unique(array: number[]) {

    for(let i: number = 0; i < array.length; i++){
        for(let j: number = i + 2; j <array.length; j++){
            if(array[i] === array[j]){
                array.splice((i), 1);
                i --
            }
        }
    }
    return array.sort((a, b) => a - b)
}
console.log(unique(thing))