'use strict';

let map = {
    "Eggs": 200,
    "Milk": 200,
    "Fish": 400,
    "Apples": 150,
    "Bread": 50,
    "Chicken": 550
}

Object.keys(map).forEach(function(e){
    if(map[e] < 201){
        console.log(e)
    }
})
Object.keys(map).forEach(function(e){
    if(map[e] > 150){
        console.log(e + ' - ' + map[e])
    }
})