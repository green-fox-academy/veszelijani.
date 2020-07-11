'use strict';

const path = require('path');
const db = require('../db');

const redditController = (app) => {
    app.get('/', (req, res) => {
        res.sendFile('index.html', { root: path.join(__dirname, '../static') });
    });

    app.get('/hello', (req,res) => {
        res.send('Hello World');
    });
}

module.exports = { 
    redditController, 
};