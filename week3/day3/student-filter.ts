'use strict';


const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
];

function whoHasTheMostCandy(students: any[]): void {
    for (let i: number = 0; i < students.length; i++) {
        if (students[i].candies > 4) {
            console.log(students[i].name + ' has a looooot of candy,tho');
        }
    }
}
whoHasTheMostCandy(students);

function averageCandy(students: any[]): void {
    let avgCandy: number = 0;
    for (let i: number = 0; i < students.length; i++) {
        avgCandy = avgCandy + (students[i].candies / students.length)
    }
    console.log("The average candy number is: " + avgCandy);
}
averageCandy(students);