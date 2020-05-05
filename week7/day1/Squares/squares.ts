'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function drawSquare(startX: number, startY: number, size: number) {

    ctx.strokeRect(startX, startY, size, size);
}
function fractals(x: number, y: number, size: number) {
    drawSquare(x, y, size);
    if (size > minimum) {
        fractals(x + size / 3, y, size / 3);
        fractals(x, y + size / 3, size / 3);
        fractals(x + size / 3 * 2, y + size / 3, size / 3);
        fractals(x + size / 3, y + size / 3 * 2, size / 3);
    }
}
const minimum: number = 1
fractals(0, 0, canvas.height)