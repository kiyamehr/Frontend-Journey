"use strict";

// generating a random number
const randomNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
document.querySelector(".number").textContent = randomNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Input!";
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "🎉 Right Number!!!";
  } else if (guess > randomNumber) {
    // if score !== 0:
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
