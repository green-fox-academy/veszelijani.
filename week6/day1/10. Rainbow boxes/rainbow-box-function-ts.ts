'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let colors: string[] = ['Red', 'orange', 'yellow','green','aqua','blue','purple'];
let sizes: number[] = [400, 350, 300, 250, 200, 150, 100];

function drawing(i: number) {

    ctx.beginPath();
    ctx.fillStyle = colors[i];
    ctx.fillRect((canvas.width - sizes[i]) / 2, (canvas.height - sizes[i]) / 2, sizes[i], sizes[i]);
}

for (let i = 0; i < 7; i++) {
    drawing(i)
}