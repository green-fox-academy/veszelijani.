'use strict';

require('es6-promise');
/*
let promise = new Promise(function (fulfill, reject) {
    setTimeout(function(){
        if(true){
            fulfill('FULFILLED!')
        }
    },300)
});
promise.then(console.log);*/

let promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        reject(new Error('REJECTED!'))
    },300)
  });

  function onReject (error) {
    console.log(error.message);
  }
  promise.then(null,onReject)

  // Your solution here


