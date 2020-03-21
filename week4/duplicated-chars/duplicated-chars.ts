'use strict'

const fs = require('fs');
try {
    let fileContent = fs.readFileSync('text.txt', 'utf-8');
    let newContent: string[] = [];
    let lettersContent: string[] = fileContent.split('');
    for (let i: number = 0; i < lettersContent.length; i++) {
        if (i % 2 == 0) {
            newContent.push(lettersContent[i]);
        }
    }
    let writeThis: string = newContent.join('')
    console.log(writeThis)
    fs.writeFileSync('newText.txt', writeThis);
} catch (e) {
    console.log("Text file doesn't exist")
}
