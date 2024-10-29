'use strict';

let currnetScore = 0;

// Selection elements
const scorePlayer0 = document.querySelector('#score--0');
const scorePlayer1 = document.getElementById('score--1');
const currentScorePlayer0 = document.getElementById('current--0');
const currentScorePlayer1 = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// startting conditions
scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
diceElement.classList.add('hidden');


// rolling dice functionality
btnRoll.addEventListener('click', function() {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceElement.classList.remove('hidden');
    diceElement.src = `/3_pig_game/img/dice-${dice}.png`;

    if (dice !== 1) {
        // add dice to the current score
        currnetScore += dice;
        currentScorePlayer0.textContent = currnetScore; 
    } 
    else {
        // switch to another player
    }
});