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

let playerScores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

// setting the game contininue or not
let playing = true;

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// functions
const switchPlayer = function () {
  // switch to next player.
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  // switching the background
  player0El.classList.toggle('player--active'); // if it has the class add it
  player1El.classList.toggle('player--active'); // if not remove it
};

// Rolling Dice Functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

// button hold
btnHold.addEventListener('click', function () {
  if (playing) {
    // Saving Current Score
    // // this is a smart method to define a array and the active player is the position of the score
    playerScores[activePlayer] += currentScore; // player[0] = 50 (score)
    document.querySelector(`#score--${activePlayer}`).textContent =
      playerScores[activePlayer];

    // checking if score >= 100
    if (playerScores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      // Switching The Player
      switchPlayer();
    }
  }
});
