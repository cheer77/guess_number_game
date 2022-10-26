'use strict';

// Create a random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.number-input').value = 0;

// Enter game logic
document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  // No input value
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Input some number';

    // Player is won
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'You are right!';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').classList.add('active');
    document.querySelector('.question').classList.add('active');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // To bigger number
  } else if (guessingNumber > secretNumber) {
    // Add logic when score is 0
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'To much (◕‿◕)';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent =
        'Game over - start again';
    }

    // To lower number
  } else if (guessingNumber < secretNumber) {
    // Add logic when score is 0
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'To small number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent =
        'Game over - start again';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Restart the game logic
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').classList.remove('active');
  document.querySelector('.question').classList.remove('active');
  document.querySelector('.question').textContent = '???';
  document.querySelector('.guess-message').textContent = 'Start guessing';
  document.querySelector('.number-input').value = 0;
});
