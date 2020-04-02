'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let colors: string[] = ['red', 'white', 'green'];
let sizes: number[] = [300, 200, 100];

function drawing(i: number){

    ctx.beginPath();
    ctx.fillStyle = colors[i];
    ctx.fillRect((canvas.width-sizes[i])/2, (canvas.height-sizes[i])/2, sizes[i], sizes[i]);
}

for(let i = 0; i < 3; i++){
    drawing(i)
}