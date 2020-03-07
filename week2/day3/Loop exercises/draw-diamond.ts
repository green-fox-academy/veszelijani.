'use strict';

let empty: any = ' ';
let star: string = '*';
let lineCount: number = 7;

for (let i: number = 0; i < lineCount / 2; i++) {
    for (let j: number = lineCount / 2; i < j; j--) {
        empty = empty + ' '
    }
    console.log(empty + star);
    star = star + '**'
    empty = ' '
}
for (let k: number = lineCount / 2; k < lineCount; k++) {
    star = '*'
    for (let n: number = lineCount; k < n; n--) {
        star = star + '**'    
    }
    console.log(empty + star);
    empty = empty + ' '
    star = '*'
}