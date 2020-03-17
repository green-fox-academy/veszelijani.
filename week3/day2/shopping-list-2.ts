'use strict';

let priceList = {

    "Milk": 1.07,
    "Rice": 1.59,
    "Eggs": 3.14,
    "Cheese": 12.60,
    "Chicken Breasts": 9.40,
    "Apples": 2.31,
    "Tomato": 2.58,
    "Potato": 1.75,
    "Onion": 1.10,
};

let bobList = {
    "Milk": 3,
    "Rice": 2,
    "Eggs": 2,
    "Cheese": 1,
    "Chicken Breasts": 4,
    "Apples": 1,
    "Tomato": 2,
    "Potato": 1,
};

let aliceList = {

    "Rice": 1,
    "Eggs": 5,
    "Chicken Breasts": 2,
    "Apples": 1,
    "Tomato": 10,
};
let bobPays: number = 0;
for (let i: number = 0; i < Object.keys(bobList).length; i++) {
    bobPays = bobPays + (bobList[Object.keys(bobList)[i]] * priceList[Object.keys(bobList)[i]]);
}
console.log("Bob pays: " + bobPays);

let alicePays: number = 0;
for (let i: number = 0; i < Object.keys(aliceList).length; i++) {
    alicePays = alicePays + (aliceList[Object.keys(aliceList)[i]] * priceList[Object.keys(aliceList)[i]]);
}
console.log("Alice pays: " + alicePays);

if (aliceList["Rice"] > bobList["Rice"]) {
    console.log("Alice bought more Rice");
} else {
    console.log("Bob bought more Rice");
}

if (aliceList["Potato"] > bobList["Potato"]) {
    console.log("Alice bought more Potato");
} else {
    console.log("Bob bought more Potato");
}
if (Object.keys(bobList).length > Object.keys(aliceList).length) {
    console.log("Bob bought more different products");
} else {
    console.log("Alice bought more different products");
}

let bobsAmount: number = Object.values(bobList).reduce((a, b) => a + b, 0);

let aliceAmount: number = Object.values(aliceList).reduce((a, b) => a + b, 0);

if(bobsAmount > aliceAmount){
    console.log("Bob bought more things");
}else{
    console.log("Alice bought more things");
}

