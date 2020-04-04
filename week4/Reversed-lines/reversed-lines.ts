'use strict';

const fs = require('fs');
let fileContent: string = '';

try {
    fileContent = fs.readFileSync('text.txt', 'utf-8');

} catch (e) {
    console.log("File doesn't exist");
}
function reverseIt(path: string){
let newContent: string = fileContent.split('').reverse().join('').split('\n\r').reverse().join('\n\r')
console.log(newContent)
fs.writeFileSync('newText.txt', newContent);
}
reverseIt(fileContent);