'use strict';

const fs = require('fs');

try{
    let fileContent = fs.readFileSync("my-file.txt", 'utf-8');
    console.log(fileContent);
}catch(e){
    
 console.log('Unable to read file: my-file.txt');
}