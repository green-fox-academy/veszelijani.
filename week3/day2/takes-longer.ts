'use strict';

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let missingQuote: string = "always takes longer than ";

let firstPiece: string = quote.slice(0, quote.indexOf('you expect'));

let secPiece: string = quote.slice(quote.indexOf('you expect'));

let newQuote: string = firstPiece + missingQuote + secPiece;

console.log(newQuote);
