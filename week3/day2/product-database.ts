'use strict';

let map = {
    "Eggs": 200,
    "Milk": 200,
    "Fish": 400,
    "Apples": 150,
    "Bread": 50,
    "Chicken": 550
}
console.log('The price of the fish is: ' + map['Fish']);

let values = Object.keys(map).map(e => map[e]);
let maxValues = Math.max(...values)

Object.keys(map).forEach(function (e) {
    if (map[e] === maxValues) {
        console.log('The most expensive product is : ' + e);
    }
})
console.log('The average price is: ' + Object.values(map).reduce((a, b) => a + b, 0) / Object.values(map).length);

let products300Below: number = 0;
Object.values(map).forEach(function (e) {
    if (e < 300) {
        products300Below++
    }
})

console.log(products300Below + " products are below 300");

console.log("Is there anything we can buy for exactly 125? " + values.some(function (e) { return e == 125 }));
/*Object.keys(map).forEach(function(e){
    if(map[e] === 125){
        console.log('We can buy ' + e + ' for 125');
    }
})*/

let values2 = Object.keys(map).map(e => map[e]);
let minValues = Math.min(...values)

Object.keys(map).forEach(function (e) {
    if (map[e] === minValues) {
        console.log('The cheapest product is : ' + e);
    }
})