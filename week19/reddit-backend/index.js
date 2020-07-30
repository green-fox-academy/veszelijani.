'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const jsonParser = bodyParser.json();
app.set('view engine', 'ejs');
module.exports = jsonParser;

const redditController = require('./controller/controller')

redditController.redditController(app);

app.listen(8080, () => {
    console.log(`The app is listening on port ${PORT}`)
});