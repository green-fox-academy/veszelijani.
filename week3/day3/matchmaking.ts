'use strict';

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
let pairedBoozos: string[] = [];

function makingMatches(array1: string[], array2: string[]) {
    for (let i: number = 0; i < array1.length && array2.length; i++) {
        if (array1[i] != undefined) {
            pairedBoozos.push(array1[i]);
        } if (array2[i] != undefined) {
            pairedBoozos.push(array2[i]);
        }
    }
    return pairedBoozos;
}
console.log(makingMatches(girls, boys));

