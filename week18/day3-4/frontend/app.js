'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;
const jsonParser = bodyParser.json();

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});

app.get('/doubling', (req, res) => {
    let input = parseInt(req.query.input)
    res.json(doubling(input))
})
function doubling(number) {
    if (!number) return { "error": "Please provide an input!" };
    return { 'received': number, 'result': number * 2 };
}
app.get('/greeter', (req, res) => {
    let name = req.query.name;
    let title = req.query.title;

    if (!name && !title) {
        res.status(400)
        res.json({ "error": "Please provide a name and a title!" });
    }
    else if (!name) {
        res.status(400);
        res.json({ "error": "Please provide a name!" });
    }
    else if (!title) {
        res.status(400);
        res.json({ "error": "Please provide a title!" });
    }
    else{
        res.json({"welcome_message": `Oh, hi there ${name}, my dear ${title}!`});
    }
});

app.get('/appenda/:appended', (req, res) => {
    let appended = req.params.appended;
    res.json({ "appended": appended + 'a' })

})

app.post('/dountil/:action/', jsonParser, (req, res) => {
    let action = req.params.action;
    let number = parseInt(req.body.until);

    if (!number) {
        res.json({ "error": "Please provide a number!" });
    }
    else if (action === 'sum') {
        res.json({ "result": sum(number) });
    }
    else if (action === 'factor') {
        res.json({ "result": factor(number) });
    }
})

function sum(num) {
    for (let i = num - 1; i > 0; i--) {
        num += i;
    }
    return num;
}

function factor(num) {
    for (let i = num - 1; i > 0; i--) {
        num = num * i;
    }
    return num;
}