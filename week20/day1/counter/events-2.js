'use strict';

const button = document.querySelector('button');
const list = document.querySelectorAll('li')
let result = document.querySelector('.result')

button.addEventListener('click', () => {
    result.innerHTML = list.length;
});