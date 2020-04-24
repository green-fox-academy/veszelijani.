'use strict';

function fibonacci(n: number){
    if(n <= 1){
        return 0;
    }
    if(n <= 3){
        return 1;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}