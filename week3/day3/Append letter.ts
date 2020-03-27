'use strict';

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(name: string[]): string[]{
    
  for(let i: number = 0; i <name.length; i++){
      name[i] = name[i] + 'a';
  }  
    return name;
}
console.log(appendA(far));