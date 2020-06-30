'use strict';

let paragraf = document.querySelectorAll("p");
console.log(paragraf)
for(let i = 1 ; i < paragraph.length ; i++){
    paragraph[i].innerText +=  ' ' + paragraph[i-1].innerText ;
  }