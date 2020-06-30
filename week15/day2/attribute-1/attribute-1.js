'use strict';

const image = document.getElementsByTagName("img");
const link = document.getElementsByTagName("a");
const button = document.getElementsByClassName("this-one");

image[0].setAttribute('src','https://5.imimg.com/data5/AV/VJ/MY-41740956/guinea-pig-500x500.jpg');

link[0].setAttribute('href', "https://www.greenfoxacademy.com/en/home");

button[0].innerHTML = 'Don\'t click me';
