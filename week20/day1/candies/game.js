'use strict';

const candyButton = document.querySelector('.create-candies');
const lolliButton = document.querySelector('.buy-lollypops');
const candyRain = document.querySelector('.candy-machine');
const CandyCounter = document.querySelector('.candies');
const LolliCounter = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');
const speedRate = document.querySelector('.rate');

let candyScore = 0;
let lolliScore = 0;
let multiScore = 0;

candyButton.addEventListener('click', (e) => {
    if (multiScore === 0) {
        candyScore += 1;
    } else {
        candyScore += multiScore * 10;
    }
    CandyCounter.innerHTML = candyScore + ' x 🍬';
    let bothCandee = candyScore + (lolliScore * 10)
    speed.innerHTML = Math.round(bothCandee / (e.timeStamp / 1000) * 10) / 10;

})
lolliButton.addEventListener('click', (e) => {
    if (candyScore >= 100) {
        lolliScore++;
        candyScore -= 100;
    }
    CandyCounter.innerHTML = candyScore + ' x 🍬';
    LolliCounter.innerHTML = lolliScore + ' x 🍭';

})
candyRain.addEventListener('click', (e) => {
    multiScore++
    speedRate.innerHTML = multiScore + 'x'
})

setInterval(() => {
    let addCandy = (lolliScore / 10);
    candyScore += addCandy;
    CandyCounter.innerHTML = Math.round(candyScore) + ' x 🍬';
}, 1000);
