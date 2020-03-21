'use strict';

const fs = require('fs');
try {
    fs.writeFileSync('message2.txt', fs.readFileSync('message.txt', 'utf-8'));
} catch (e) {
    console.log('Cannot read the message file')
}