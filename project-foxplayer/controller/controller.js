'use strict';

const path = require('path');
const conn = require('../db');
const jsonParser = require('../index');

const websiteController = (app) => {
    app.get('/', (req, res) => {
        res.sendFile('index.html', { root: path.join("public", '../static') });
    });
    app.get('/playlists', function (req, res) {
        conn.query('SELECT * FROM playlists;', function (err, row) {
            if (err) {
                return err;
            }
            res.setHeader('Content-Type', 'application/json');
            res.send(row);
        });
    });
}
module.exports = {
    websiteController,
};