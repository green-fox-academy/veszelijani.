'use strict';

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(text: string): string {
    return text.split('').reverse().join(''); 
}
console.log(reverse(toBeReversed));