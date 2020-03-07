'use strict';

let lineCount: number = 6;

for (let i: number = 0; i <= lineCount; i++) {
    let a: string = '';
    for (let j: number = 0; j <= lineCount; j++) {
        if (i == 0 || j == 0 || i == lineCount || j == lineCount || i == j) {
            a = a + '%';
        } else {
            a = a + ' ';
        }
    }
    console.log(a);
}