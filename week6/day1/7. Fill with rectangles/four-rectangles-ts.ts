'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let colors: string[] = ['green', 'blue', 'yellow', 'red'];

for(let i: number = 0; i < 4; i++){
    ctx.beginPath();
    ctx.fillStyle = colors[i]
    ctx.fillRect(Math.floor(Math.random()* canvas.width), Math.floor(Math.random()* canvas.height), Math.floor(Math.random()* 50) + 10, Math.floor(Math.random()* 50) + 10)
}