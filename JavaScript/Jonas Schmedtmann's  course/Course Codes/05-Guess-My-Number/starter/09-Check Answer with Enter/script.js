"use strict";

// generating a random number
let randomNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

// play Again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = randomNumber;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").textContent = "?";

  // Restoring Styles
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

document.querySelector(".number").textContent = "?";
// document.querySelector(".number").textContent = randomNumber;

// game logics such as too high or low winning losing:
const gamelogic = function (guess, randomNumber) {
  if (!guess) {
    // when There is no Input
    displayMessage("⛔ No Input!");
  } else if (guess === randomNumber) {
    // setting the highscore
    if (score >= highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // when player wins
    displayMessage("🎉 Right Number!!!");

    document.querySelector(".number").textContent = randomNumber;

    // changing styles for WINNING:
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem"; // Allways String!!!
  } else if (guess !== randomNumber) {
    // if the answer was wrong
    // if score was bigger than 0:
    if (score > 1) {
      displayMessage(guess > randomNumber ? "📈 Too High..." : "📉 Too Low...");

      // decreasing Score
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    // if score === 0
    document.querySelector(".score").textContent = 0;
    displayMessage("💥 You Lost The Game :(");
  }
};

const getNumberFromInput = function () {
  return Number(document.querySelector(".guess").value);
};

// Checking answer when "Check!" is pressed
document.querySelector(".check").addEventListener("click", function () {
  const guess = getNumberFromInput();
  gamelogic(guess, randomNumber);
});

// when "Enter" is pressed check the answer
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const guess = getNumberFromInput();
    gamelogic(guess);
  }
});
