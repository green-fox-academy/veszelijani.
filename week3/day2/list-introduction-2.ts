'use strict';

const ListA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

let ListB: string[] = [...ListA];

for (let i: number = 0; i < ListA.length; i++) {
    if (ListA[i] === 'Durian') {
        console.log('Its the ' + i + '. element')
    }
}

for (let i: number = 0; i < ListB.length; i++) {
    if (ListB[i] === 'Durian') {
        ListB.splice(i, 1);
    }
}
console.log(ListB)

ListA.splice(4, 0, 'Kiwifruit');
console.log(ListA)

if (ListA.length > ListB.length) {
    console.log('List A is bigger');

} else if (ListB.length > ListA.length) {
    console.log('List B is bigger');
} else {
    console.log('Dunno or equal');
}
console.log(ListA.indexOf('Avocado'));
if (ListB.indexOf('Durian') == -1) {
    console.log('Not in the list')
} else {
    console.log(ListB.indexOf('Durian'));
}
ListB.push('Passion Fruit', 'Pomelo');

console.log(ListB);
console.log(ListA[2]);