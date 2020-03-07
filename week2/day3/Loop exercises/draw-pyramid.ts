'use strict';

let empty: any = ' ';
let star: string = '*';
let lineCount: number = 4;

for(let i: number = 0; i < lineCount; i++){
    for(let j: number = lineCount; i < j;j--){
        empty = empty + ' '
    }
    console.log(empty+star);
    star = star + '**'
    empty = ' '
}