'use strict';

const students: any[] = [

    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

function candyCounter(students: any[]): void {
    let sumNumbers: number = 0
    for (let i: number = 0; i < students.length; i++) {
        sumNumbers = sumNumbers + students[i].candies

    }
    console.log('They owned ' + sumNumbers + ' candies');
}
candyCounter(students);

function sumAgeFunc(students: any[]): void {
    let sumAges: number = 0;
    for (let i: number = 0; i < students.length; i++) {
        if (students[i].candies < 5) {
            sumAges = sumAges + students[i].age
        }
    }
    console.log("The sum of the ages are " + sumAges + " years")
}
sumAgeFunc(students);