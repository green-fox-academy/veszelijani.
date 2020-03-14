'use strict';

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(text: string): string {
    let newText = text.split('').reverse().join('');
    return newText;
}

console.log(reverse(toBeReversed));