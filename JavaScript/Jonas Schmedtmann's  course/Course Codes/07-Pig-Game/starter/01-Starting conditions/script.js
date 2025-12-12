'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const Current0El = document.getElementById('current--0');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

let currentScore = 0;

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  //1- Generate random Number

  const dice = Math.trunc(Math.random() * 6) + 1;

  //2- Display The Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `../images/dice-${dice}.png`;

  //3- Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    Current0El.textContent = currentScore;
  } else {
    // switch to next player.
  }
});
