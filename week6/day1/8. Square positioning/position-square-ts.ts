'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawSquare(x: number, y: number):void{
    ctx.beginPath();
    ctx.fillRect(x,y,50,50)

}

for(let i: number = 0; i < 3; i++){
    drawSquare(Math.floor(Math.random()* canvas.width), Math.floor(Math.random()* canvas.height));
}