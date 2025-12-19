'use strict';

// split & join

console.log('a+very+nice+string'.split('+'));
console.log('Kiamehr Moradi'.split(' '));

const [firstName, lastName] = 'Kiamehr Moradi'.split(' ');
console.log(firstName);
console.log(lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const capitalized = [];
  for (const n of names) {
    // capitalized.push(n[0].toUpperCase() + n.slice(1));

    capitalized.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(capitalized.join(' '));
};

capitalizeName('kiamehr moradi');

capitalizeName('mmd hossein rezazade koohedashti');

// Padding
const message = 'Hello!';
console.log(message.padStart(15, '+').padEnd(30, '+'));
console.log(message.padEnd(20, '+'));

const maskCreditKard = function (number) {
  const str = number + ''; //transform type to string
  const lastDigit = str.slice(-4);
  const padded = lastDigit.padStart(str.length, '*');
  console.log(padded);
};

maskCreditKard(219456125906153);
maskCreditKard(2194561345906153);
maskCreditKard(215906153);

// Repeat
const message2 = 'Bad Weather... All Departures Delayed...';

console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There ${n} Planes Waiting: ${'✈'.repeat(n)}`);
};

planesInline(10);
planesInline(2);
planesInline(19);
