'use strict';

// function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// arrow function
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeter = greet('Hi 👋');

greeter('Kiamehr');
greeter('Jonas');
greeter('Jadi');

greet('How IS YOU LIFE MY FRIEND WITH THE NAME:')('kia');
