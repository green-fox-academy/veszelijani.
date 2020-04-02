'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawBox(a: number): void {
    for (let i: number = 0; i < 5; i++) {
  
        a = a + i*20;
        ctx.strokeStyle = 'Black';
        ctx.fillStyle = 'Purple';
        ctx.fillRect (a, a, 20+i*20, 20+i*20);
        ctx.strokeRect(a, a, 20+i*20, 20+i*20);
    }
}
drawBox(20)