'use strict';

const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let maxNumber = 15
let howMany: number = canvas.width / maxNumber

function drawing1(x: number, y: number) {
    for (let i: number = 0; i < howMany; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'purple';
        ctx.moveTo(x, 0);
        ctx.lineTo(canvas.height, y);
        ctx.stroke();
        x -= 40;
        y -= 40;
    }
}
drawing1(canvas.height, canvas.width);

function drawing2(x: number, y: number) {
    for (let i: number = 0; i < howMany; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'green';
        ctx.moveTo(0, y);
        ctx.lineTo(x, canvas.width);
        ctx.stroke();
        x += 40;
        y += 40;

    }
}
drawing2(40, 40);
