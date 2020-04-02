'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let colors: string[] = ['red', 'yellow', 'green', 'blue'];
let xCord: number[] = [300, 300, 150, 150];
let yCord: number[] = [150, 300, 300, 150];

for(let i: number = 0; i < colors.length; i++){
    ctx.beginPath();
    if(i == 0){
        ctx.moveTo(150,150);
    }else{
        ctx.lineTo(xCord[i-1], yCord[i-1])
    }
    ctx.strokeStyle = colors[i];
    ctx.lineTo (xCord[i], yCord[i]);
    ctx.stroke();
}