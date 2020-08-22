'use strict';

const path = require('path');
const conn = require('../db');
const jsonParser = require('../index');

const websiteController = (app) => {
    app.get('/', (req, res) => {
        res.sendFile('index.html', { root: path.join("public", '../static') });
    });
}
module.exports = {
    websiteController,
};