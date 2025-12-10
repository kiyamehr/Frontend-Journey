"use strict";

// generating a random number
const randomNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
document.querySelector(".number").textContent = randomNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // when There is no Input
    document.querySelector(".message").textContent = "⛔ No Input!";
  } else if (guess === randomNumber) {
    // when player wins
    document.querySelector(".message").textContent = "🎉 Right Number!!!";

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
      document.querySelector(".message").textContent = "📈 Too High... ";

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
