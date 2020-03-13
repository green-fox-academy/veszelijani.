'use strict';

let sizeOfMatrix: number = 4;

let myMatrix: any[] = [];

for(let i: number = 0; i < sizeOfMatrix; i++){
    myMatrix[i] = [];
    for(let j: number = 0; j <sizeOfMatrix; j++){
        if(i == sizeOfMatrix - j - 1){
            myMatrix[i][j] = 1;
        }else{
            myMatrix[i][j] = 0;
        }
    }
}
console.log(myMatrix);