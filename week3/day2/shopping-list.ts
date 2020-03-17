'use strict';

let list: string[] = ['Eggs', 'Milk', 'Fish', 'Apples', 'Bread', 'Chicken',];

console.log("Do we have milk on the list? " + list.some(function(e) { return e == "Milk"}));
console.log("Do we have banana on the list? " + list.some(function(e) { return e == "Banana"}));