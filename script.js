'use strict';

// Create a random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(typeof guessingNumber);

  // No input value
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Input some number';

    // Player is won
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'You are right!';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').classList.add('active');
    document.querySelector('.question').classList.add('active');

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
