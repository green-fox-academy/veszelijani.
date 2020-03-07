'use strict'

let lineCount: number = 8

for (let i: number = 0; i < lineCount; i++) {
    let a: string = '';
    for (let j: number = 0; j < lineCount; j++) {
        if((i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1)){
            a = a + '%';
        }else{
            a = a + ' '
        }
    }console.log(a)
}