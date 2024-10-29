'use strict';

let  score = 20;
let highScore = 0;
let number = 0;

document.querySelector('.again').addEventListener('click', function() {
    playAgain();
});

// document.querySelector('.new-game').addEventListener('click', function() {
//     resetAll();
// });

const winReaction = (number, highScore) => {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = highScore;
}

const resetGame = () => {
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
}

const resetAll = () => {
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.highscore').textContent = '0';
    
    score = 20;
    highScore = 0;

    document.querySelector('.score').textContent = score;
    number = Math.trunc(Math.random() * 20) + 1;
    console.log('Secret number: ', number);
}

const gameLogic = (guess, number) => {
    if (score > 0) {
        sendMessage(guess > number ? '😒 Too high' : '😶‍🌫️ Too low');
        
        score--;
        document.querySelector('.score').textContent = score;
    }
    else {
        sendMessage('😘 You lost the game');
    }
}

const sendMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

const playAgain = () => {
    score = 20;
    document.querySelector('.score').textContent = score;
    
    number = Math.trunc(Math.random() * 20) + 1;
    console.log('Secret number: ', number);

    resetGame();

    document.querySelector('.check').addEventListener('click', function() {
        document.querySelector('.number').textContent = '?';
        
        let guess = Number(document.querySelector('.guess').value);
        console.log('Guessed number: ', guess);

        if (!guess) {
            sendMessage('⛔ no number');
        }
        else if (guess === number) {
            sendMessage('🥳 Correct number');
            
            highScore = score;
            winReaction(number, highScore);
        }
        else if (guess !== number) {
            gameLogic(guess, number);
        }
    });
}

playAgain();