"use strict";

// generating a random number
let randomNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

// play Again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = randomNumber;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = " ";
  // document.querySelector(".number").textContent = "?";

  // Restoring Styles
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

// document.querySelector(".number").textContent = "?";
document.querySelector(".number").textContent = randomNumber;

// Game Logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // when There is no Input
    document.querySelector(".message").textContent = "⛔ No Input!";
  } else if (guess === randomNumber) {
    // when player wins
    document.querySelector(".message").textContent = "🎉 Right Number!!!";

    // document.querySelector(".number").textContent = randomNumber;

    // changing styles for WINNING:
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem"; // Allways String!!!
  } else if (guess > randomNumber) {
    // if score was bigger than 0:
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High... ";

      // decreasing Score
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      // if score === 0
      document.querySelector(".message").textContent =
        "💥 You Lost The Game :(";
    }
  } else if (randomNumber > guess) {
    // if score was smaller than 0:
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low... ";

      // decreasing Score
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // if score === 0
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent =
        "💥 You Lost The Game :(";
    }
  }
});
