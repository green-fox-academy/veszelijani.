'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let remainingHours: number = 23 - currentHours;
let remainingMinutes: number = 59 - currentMinutes;
let remainingSeconds: number = 59 - currentSeconds;

console.log(`The remaining time is ${remainingHours} hour(s) ${remainingMinutes} minute(s) ${remainingSeconds} second(s)!`);
console.log(`The remaining time in secound is: ${(remainingHours * 60)* 60 +  (remainingMinutes * 60) + remainingSeconds} second(s)`)