'use strict';

let names: string[] = [];
//console.log(names.length);
names.push('William');
//console.log(names);

if(names.length === 0){
    console.log('the list is empty');
}else{
    console.log('The lsit is not empty');
}
names.push('John', 'Amanda');

console.log('the number of elements is: ' + names.length);
//console.log(names[2]);

names.forEach(function(e){
    console.log(e)
})

names.forEach(function(e,i){
    var list = (i + 1) + '.' + e
    console.log(list)
})

for(let i: number = 0; i < names.length; i++){
    if(names[i] === 'John'){
        names.splice(i, 1);
    }
}
console.log(names);

names.reverse().forEach(function(e){
    console.log(e)
})
