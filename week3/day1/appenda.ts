'use strict';

let animals: string[] = ['koal', 'pand', 'zebr'];

let newAnimals: string[] = animals.map(e => e + 'a');

console.log(newAnimals);

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];

let newDrinks: string[] = drinks.map(e => e + e);

console.log(newDrinks);