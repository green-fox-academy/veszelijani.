'use strict';

const fs = require('fs');

function countLines(path: string): number {
    try {
        let readThis = fs.readFileSync(path, 'utf-8');
        let lines: string = readThis.split('\n');
        console.log(lines);
        return lines.length;
    } catch(e){
        return 0
    }
}
console.log(countLines('message2.txt'));