'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  // using destructuring
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

// Higher-order Function (Lord Function)
const transformer = function (str, fn) {
  console.log(`Original Text: ${str}`);
  console.log(`Transformed Text: ${fn(str)}`);
  console.log(`Funciton used: ${fn.name}`);
};

transformer('kiamehr moradi', upperFirstWord);
console.log('--------');
transformer('kiamehr moradi', oneWord);

const high5 = function () {
  console.log('✋');
};

document.body.addEventListener('click', high5);

['Kiamehr', 'Jonas', 'Jadi Jadi'].forEach(high5);
