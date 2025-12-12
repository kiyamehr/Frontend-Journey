'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const Current0El = document.getElementById('current--0');
const Current1El = document.getElementById('current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

let activePlayer = 0;
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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player.
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    // switching the background
    player0El.classList.toggle('player--active'); // if it has the class add it
    player1El.classList.toggle('player--active'); // if not remove it
  }
});
