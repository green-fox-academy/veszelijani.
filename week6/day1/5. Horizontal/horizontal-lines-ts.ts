'use strict'


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawItAgain(x: number, y: number){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+50,y)
    ctx.stroke()
}
for(let i: number = 0; i < 3; i++){
    drawItAgain(Math.floor(Math.random() * canvas.width),Math.floor(Math.random() * canvas.height));
}