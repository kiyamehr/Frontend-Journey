'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Wrong!'],
]);

console.log(question);

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value} `);
  }
}

// const answer = Number(prompt('Your Answer'));
const answer = 3;
console.log(question.get(question.get('correct') === answer));

// convert map into array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

// for (const [key, value] of question) {
//   if (answer === key) {
//     console.log(question.get(value === 'Javascript'));
//   }
// }
//if (answer > 0 && answer <= 3) {
//  console.log(answer);
//} else {
//  console.log('Answer out of range');
//}
