'use strict';

const fs = require('fs');

function writeSomeThing(path: string, word: string, number: number) {
    let myArray: string[] = [];
    for (let i: number = 0; i < number; i++) {
        myArray.push(word);  
    }
    let fileContent = myArray.join('\n');
    fs.writeFileSync(path, fileContent);
}
writeSomeThing('message.txt', 'apple', 5)