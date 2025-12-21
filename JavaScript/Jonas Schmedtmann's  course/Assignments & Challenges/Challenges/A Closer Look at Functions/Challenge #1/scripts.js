"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // prompt text
    let optionText = "";
    for (const option of this.options) {
      console.log(option);
      optionText += option + "\n";
    }

    // prompt
    const askQuestionPompt = Number(
      prompt(`${this.question} \n ${optionText} \n (write option number)`)
    );

    // check prompt 0 > x > len options
    if (askQuestionPompt >= 0 && askQuestionPompt <= this.options.length) {
      this.answers[askQuestionPompt] += 1;
    } else {
      alert("Number Out of options Range!");
    }
  },

  displayResults(type) {
    // type is either array or string
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      for (const answer of this.answers) {
        console.log(answer);
        // [js, py, rust, cPlus];
        // console.log(`Poll results are ${js}, ${py}, ${rust}, ${cPlus}`);
      }
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll)); // setting the 'this' method to poll

poll.displayResults("array");
poll.displayResults("string");
