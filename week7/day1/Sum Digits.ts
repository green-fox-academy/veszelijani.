'use strict';

function sumDigits(num : number){
    if (num < 1){
        return 0
    }else{
        return ( (num % 10) + sumDigits(Math.floor(num/10)) )
    }
}
console.log(sumDigits(1411));