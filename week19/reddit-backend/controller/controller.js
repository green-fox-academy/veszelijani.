'use strict';

let posts;

const path = require('path');
const conn = require('../db');
const jsonParser = require('../index');

const redditController = (app) => {
    app.get('/', (req, res) => {
        res.sendFile('index.html', { root: path.join(__dirname, '../static') });
    });

    app.get('/hello', (req, res) => {
        res.send('Hello World');
    });

    app.get('/posts', (req, res) => {
        res.status(200);
        res.set('Content-Type', 'application/json')
        conn.query('SELECT * FROM reddit', function (err, rows) {
            if (err) throw err;
            posts = rows;
            res.send(posts);
        });
    });

    app.post('/posts', jsonParser, (req, res) => {
        let title = req.body.title;
        let url = req.body.url;
        let timestamp = Date.now();
        res.status(200);
        res.set('Content-Type', 'application/json');

        conn.query(`INSERT INTO reddit(title, url, timestamp)
        VALUES ('${title}', '${url}', '${timestamp}' );`, (err, rows) => {
            if (err) throw err;
        });

        conn.query(`SELECT * FROM reddit ORDER BY id LIMIT 6;`, (err, rows) => {
            if (err) throw err;
            posts = rows;
            res.send(posts);
        });
    });

    app.put('/posts/:id/:vote', (req, res) => {
        let newQuery = '';
        if (req.params.vote == 'upvote') {
            newQuery = `UPDATE reddit SET score = score + 1 WHERE id = ${req.params.id} `;
        }
        else if (req.params.vote == 'downvote') {
            newQuery = `UPDATE reddit SET score = score - 1 WHERE id = ${req.params.id} `;
        }

        conn.query(newQuery, (err, rows) => {
            if (err) throw err;
        });

        conn.query(`SELECT * FROM reddit ORDER BY id LIMIT 6;`, (err, rows) => {
            if (err) throw err;
            posts = rows;
            res.send(posts);
        });
    });
}
module.exports = {
    redditController,
};