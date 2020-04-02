'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawIt(x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(x, y);
    ctx.stroke();
}
for (let i: number = 0; i < 3; i++) {
    drawIt(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));
}