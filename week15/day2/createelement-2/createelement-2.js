'use strict';

const planetData = [
    {
        category: 'inhabited',
        content: 'Foxes',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Whales and Rabbits',
        asteroid: true,
    },
    {
        category: 'uninhabited',
        content: 'Baobabs and Roses',
        asteroid: true,
    },
    {
        category: 'inhabited',
        content: 'Giant monsters',
        asteroid: false,
    },
    {
        category: 'inhabited',
        content: 'Sheep',
        asteroid: true,
    },
];

let king = document.querySelector('li');
let asteroids = document.querySelector('ul');

asteroids.removeChild(king);

for (let i = 0; i < planetData.length; i++) {
    if (planetData[i].asteroid) {
        let data = document.createElement("li");
        data.textContent = planetData[i].content;
        data.classList.add(planetData[i].category);
        asteroids.appendChild(data);
    }
}