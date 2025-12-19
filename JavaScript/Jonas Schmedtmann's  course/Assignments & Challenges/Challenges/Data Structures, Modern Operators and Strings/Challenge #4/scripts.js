"use strict";

const camelCaseMaker = function (word) {
  const lower = word.toLowerCase();
  const undreLineIndex = lower.indexOf("_");
  const capitalized = lower[lower.indexOf("_") + 1].toUpperCase();

  const finalAnswer =
    lower.slice(0, undreLineIndex) +
    capitalized +
    lower.slice(undreLineIndex + 2);

  return finalAnswer;
};

const button = document.querySelector("button");
const textArea = document.querySelector("textarea");
let textAreaInput;
button.addEventListener("click", function () {
  textAreaInput = textArea.value.split("\n");
  let check = "✅";
  for (const varirable of textAreaInput) {
    console.log(
      camelCaseMaker(varirable),
      check.padStart(5, " ").padEnd(20, " *")
    );
    check += "✅";
  }
});
