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

//Doubling

app.get('/doubling', (req, res) => {
    let input = parseInt(req.query.input)
    res.json(doubling(input))
})
function doubling(number) {
    if (!number) return { "error": "Please provide an input!" };
    return { 'received': number, 'result': number * 2 };
}

//Greeter

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
    else {
        res.json({ "welcome_message": `Oh, hi there ${name}, my dear ${title}!` });
    }
});

//Appenda

app.get('/appenda/:appended', (req, res) => {
    let appended = req.params.appended;
    res.json({ "appended": appended + 'a' })

})

//Do until

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

//Array

app.post('/arrays', jsonParser, (req, res) => {
    let action = req.body.what;
    let numbers = req.body.numbers

    if (numbers.length > 0 && (action === 'sum' || action === 'multiply' || action === 'double')) {
        if (action === 'sum') {
            res.json({
                "result": numbers.reduce((a, b) => {
                    return a + b;
                })
            })
        }
        if (action === 'multiply') {
            res.json({
                "result": numbers.reduce((a, b) => {
                    return a * b;
                })
            })
        }
        if (action === 'double') {
            res.json({
                "result": numbers.map((e) => {
                    return e * 2;
                })
            });
        }

    } else {
        res.json({
            "error": "Please provide what to do with the numbers!"
        });
    }
});

//sith

app.post('/sith', jsonParser, (req, res) => {
    let text = req.body.text;
    if (!text) {
        res.json({
            "error": "Feed me some text you have to, padawan young you are. Hmmm."
        });
    } else {
        res.json({
            "sith_text": YodaText(text)
        })
    }
})

function YodaText(text) {
    let newOne = text.toLowerCase().split('.')
    let words = newOne.map(e => e.split(' '));
    let title = '';
    let yodaWords = ['Arrgh.', 'Uhmm.', 'Err..err.err.'];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length - 1; j++) {
            if (j % 2 === 0) {
                [words[i][j], words[i][j + 1]] = [words[i][j + 1], words[i][j]];

            }
        }
    }
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {

            if (i <= 1 && j == 0) {
                words[i][j] = words[i][j].replace(words[i][j].charAt(0), words[i][j].charAt(0).toUpperCase())
                words[i].push(yodaWords[Math.floor(Math.random() * yodaWords.length)]);
            }
            title = words.join(' ').split(',').join(' ').split('  ').join(' ');
        }
    }
    return title;
}