'use strict';

function bubble(array: number[]){
    return array.sort((a,b) => a - b)
}

function advancedBubble(array: number[], question: boolean){
    if(question === true){
    return array.sort((a,b) => b - a)
    }else{
        console.log("It's false")
    }
}


console.log(bubble([34, 12, 24, 9, 5]));

console.log(advancedBubble([34, 12, 24, 9, 5], true));