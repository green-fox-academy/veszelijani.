'use strict';

export function Anagram(word1: string, word2: string): boolean{
    let example1 = word1.split('').sort().join();
    let example2 = word2.split('').sort().join();

    if(example1 === example2){
        return true
    }else{
        return false
    }
}
console.log(Anagram('tie', 'iet'));