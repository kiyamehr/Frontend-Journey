'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    // prompt text
    let optionText = '';
    for (const option of this.options) {
      optionText += option + '\n';
    }

    // prompt
    const askQuestionPompt = Number(
      prompt(`${this.question} \n ${optionText} \n (write option number)`)
    );

    // check prompt 0 > x > len options
    if (askQuestionPompt >= 0 && askQuestionPompt < this.options.length) {
      this.answers[askQuestionPompt] += 1;
    } else {
      alert('Number Out of options Range!');
    }

    // type can be 'array' or 'string'
    return this.displayResults();
  },

  displayResults(type = 'array', array = this.answers) {
    // type is either array or string
    if (type === 'array') {
      console.log(array);
    } else if (type === 'string') {
      let pollanswer = '';
      for (const [index, voteNum] of array.entries()) {
        pollanswer += `${voteNum}, `;
      }
      console.log(`Poll Results Were ${pollanswer}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll)); // setting the 'this' method to poll

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

// using bind
const displayArr = poll.displayResults.bind(poll);

displayArr('string', data1);
displayArr('array', data2);

// using call
// poll.displayResults.call([...data1], 'string');
