'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let array1: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290]];
let array2: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connectIt(array: number[][]) {
    ctx.beginPath()
    for (let i: number = 0; i < array.length + 1; i++) {
        if (i == array.length) {
            
            ctx.strokeStyle = 'green';
            ctx.lineTo(array[0][0], array[0][1]);
            ctx.stroke()

        } else {

            ctx.strokeStyle = 'green';
            ctx.lineTo(array[i][0], array[i][1]);
            ctx.stroke()
        }
    }
}
connectIt(array1)
connectIt(array2)