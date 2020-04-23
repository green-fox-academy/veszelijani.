'use strict';

export function counter(word: string): any {
    let letters = word.split('')
    let letter = {}
    for (let i: number = 0; i < letters.length; i++) {
        if (letter.hasOwnProperty(letters[i])) {
            letter[letters[i]] += 1;
        } else {
            letter[letters[i]] = 1;
        }
    } return letter;
}
