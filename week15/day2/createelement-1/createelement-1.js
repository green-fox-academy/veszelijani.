'use strict';

let asteroidlist = document.querySelector('ul')

let greenFoxAsteroid = document.createElement('li');
greenFoxAsteroid.textContent = 'The Green Fox';

asteroidlist.appendChild(greenFoxAsteroid);

let lampLighter = document.createElement('li');
lampLighter.textContent = 'The Lamplighter';

asteroidlist.appendChild(lampLighter);

let container = document.querySelector('div.container');
let heading = document.createElement("h1");
heading.textContent = 'I can add elements to the DOM!';
container.appendChild(heading);
let newImage = document.createElement('img');
newImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTreFaNHjRBj8YLTmmIprMtxhFoT_ehHwOA5f6u-a7AGW66KsAn&usqp=CAU';
container.appendChild(newImage);