'use strict';

let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];
let hashmap = {

  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '

};

for(let i: number = 0; i < notSoCrypticMessage.length; i++){
    out = out + hashmap[notSoCrypticMessage[i]]
}
console.log(out)