'use strict';

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

let isPlaying = true;

// Selection elements player--active
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const scorePlayer0 = document.querySelector('#score--0');
const scorePlayer1 = document.getElementById('score--1');
const currentScorePlayer0 = document.getElementById('current--0');
const currentScorePlayer1 = document.getElementById('current--1');

const classNameToCheck = 'player--winner';

const diceElement = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// startting conditions
scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
diceElement.classList.add('hidden');

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        
    activePlayer = activePlayer === 0 ? 1 : 0;
        
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

const logFunction = (param) => console.log(`I pass ${param} to arrow function`);

// rolling dice functionality
btnRoll.addEventListener('click', function() {
    if (isPlaying) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        
        logFunction(dice);

        diceElement.classList.remove('hidden');
        diceElement.src = `/3_pig_game/img/dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } 
        else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if (isPlaying) {
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currnetScore;
        
        // console.log(scores[activePlayer]);

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            isPlaying = false;

            diceElement.classList.add('hidden');
            
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        }
        else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', function() {
    scorePlayer0.textContent = 0;
    scorePlayer1.textContent = 0;
    diceElement.classList.remove('hidden');

    currentScore = 0;
    currentScorePlayer0.textContent = 0;
    currentScorePlayer1.textContent = 0;
    scores[0, 0] = [];

    if (player0.classList.contains(classNameToCheck)) {
        player0.classList.remove('player--winner');
        player1.classList.add('player--active');
        activePlayer = 1;
    }
    else if (player1.classList.contains(classNameToCheck)) {
        player1.classList.remove('player--winner');
        player0.classList.add('player--active');
        activePlayer = 0;
    }

    isPlaying = true;
});