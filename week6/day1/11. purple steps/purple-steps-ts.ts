'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let countBoxes: number = 12;
function drawBox(x: number, y: number, size: number): void {
    for (let i: number = 0; i < countBoxes; i++) {
        ctx.strokeStyle = 'Black';
        ctx.fillStyle = 'Purple';
        ctx.fillRect(i * x, i * y, size, size);
        ctx.strokeRect(i * x, i * y, size, size);
    }
}
drawBox(30, 30, 30)