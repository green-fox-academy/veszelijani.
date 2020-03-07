'use strict';

let dailyCoding: number = 6;
let workdaysCoding: number = 5;
let semesterLong: number = 17;
let averageWeekly: number = 52;

console.log(`Green Fox attendee codes ${dailyCoding * workdaysCoding * semesterLong} hours in a Semester`);

console.log(`The percentage of the coding hours in the semester: ${(dailyCoding * workdaysCoding) / averageWeekly * 100} %`);
