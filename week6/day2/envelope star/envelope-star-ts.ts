'use strict';

const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.translate(canvas.width / 2, canvas.height / 2);
for (let k = 0; k < 4; k++) {
    function drawing1(x: number, y: number) {
        ctx.rotate(k * (90 * Math.PI / 180));
        for (let i: number = 0; i < 16; i++) {
            ctx.beginPath();
            ctx.strokeStyle = 'green'
            ctx.moveTo(x, 0);
            ctx.lineTo(0, y);
            ctx.stroke();
            x -= 20;
            y += 20;
        }
    }
    drawing1(320, 20);
}