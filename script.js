'use strict';

// Create a random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.question').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(typeof guessingNumber);

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Input some number';
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'You are right!';
  } else if (guessingNumber > secretNumber) {
    // Add logic when score is 0
    if (score > 0) {
      document.querySelector('.guess-message').textContent = 'To much (◕‿◕)';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guessingNumber < secretNumber) {
    // Add logic when score is 0
    if (score > 0) {
      document.querySelector('.guess-message').textContent = 'To small number';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
