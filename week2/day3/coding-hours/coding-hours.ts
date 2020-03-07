'use strict';

let dailyCoding: number = 6;
let workdaysCoding: number = 5;
let semesterLong: number = 17;
let averageWeekly: number = 52;

console.log(`Green Fox attendee codes ${dailyCoding * workdaysCoding * semesterLong} hours in a Semester`);

console.log(`The percentage of the coding hours in the semester: ${(dailyCoding * workdaysCoding) / averageWeekly * 100} %`);


let myName: string = 'János';
let myAge: number = 25;
let myHeight: number = 1.82;
let amImarried: boolean = false;

console.log(`My name is ${myName} and I am ${myAge} old. My height is ${myHeight}m`);

if (amImarried == false) {
    console.log("and I am not married");
} else {
    console.log("and I am married");
}