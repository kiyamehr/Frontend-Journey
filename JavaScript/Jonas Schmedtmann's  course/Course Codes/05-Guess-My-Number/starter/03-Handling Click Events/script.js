"use strict";

const getValueFromInput = function () {};

document.querySelector(".check").addEventListener("click", function () {
  // getting value from input
  const guess = document.querySelector(".guess").value;

  // !guess means if the input: empty = true
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Input!";
  }
});
