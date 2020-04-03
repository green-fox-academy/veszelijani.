'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let checkerBoardNumber: number = 8;
let sizeOf: number = canvas.height / checkerBoardNumber;


function checker(x: number, y: number, size: number) {
    for (let i: number = 0; i < checkerBoardNumber; i++) {
        ctx.fillRect(x + size * i, y + size * i, size, size)
    }
}
for (let j: number = 0; j < checkerBoardNumber; j++) {
    checker(0, j * (sizeOf * 2), sizeOf)
}
for(let k: number = 0; k < checkerBoardNumber; k++){
    checker(k * (sizeOf * 2), 0, sizeOf)
}