'use strict';

let a: number = 3;
a = a + 10;
// make it bigger by 10
console.log(a);

let b: number = 100;
b = b - 7;
// make it smaller by 7
console.log(b);

let c: number = 44;
c = c * 2
// double c's value
console.log(c);

let d: number = 125;
d = d / 5
// divide d's value by 5
console.log(d);

let e: number = 8;
e = e **2
// what's the cube of e's value?
console.log(e);

let f1: number = 123;
let f2: number = 345;
if(f1 > f2){
    console.log('F1 is bigger');
}else{
    console.log('F2 is bigger');
}
// tell if f1 is bigger than f2 (as a boolean)
let g1: number = 350;
let g2: number = 200;
if(g1 > (g2 * 2)){
    console.log('g1 is bigger');
}else{
    console.log('double of g2 is bigger');
}
// tell if the double of g2 is bigger than g1 (pras a boolean)

let h: number = 1357988018575474;
if(h % 11 == 0){
    console.log(true);
}else{
    console.log(false)
}
// tell if 11 is a divisor of h (as a boolean)
let i1: number = 10;
let i2: number = 3;
if(i1 > i2 **2 && i1 > i2 **3){
    console.log('it is');
}else{
    console.log("it isn't");
}
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let j: number = 1521;
if(j % 3 == 0){
    console.log('divisible by 3');
}else if(j % 5 == 0){
    console.log('divisible by 5');
}else{
    console.log("can't divide by 3 or 5");
}
// tell if j is divisible by 3 or 5 (as a boolean)