'use strict';

const fs = require('fs');
try {
    let fileContent = fs.readFileSync('text.txt', 'utf-8');
    let newContent: string[] = fileContent.split(' ').reverse().join(' ')
    fs.writeFileSync('newText.txt', newContent);
    console.log(newContent)
} catch (e) {
    console.log("File doesn't exist");
}