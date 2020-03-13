'use strict';

let nameToGreet: string = 'Green Fox';

function greet(name: string) {
    console.log('Greetings, dear ' + nameToGreet)
}

greet(nameToGreet);

let typo: string = 'Chinchill';

function appendAFunc(name: string): string {

    return name + 'a';
}
console.log(appendAFunc('Chinchill'));

let counter: number = 0;

function sum(number: number): number{
    for(let i : number = 0; i <= number; i++){
        counter = counter + i 
    }
    return counter
}
console.log(sum(3))