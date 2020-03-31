'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets(array: any[]): any[] {
    for (let i: number = 0; i < array.length; i++) {
        if (array[i] === 2) {
            array[i] = 'Croissant';
        }if (array[i] === false) {
            array[i] = 'Ice cream';
        }
    } return array;
}
sweets(shopItems);