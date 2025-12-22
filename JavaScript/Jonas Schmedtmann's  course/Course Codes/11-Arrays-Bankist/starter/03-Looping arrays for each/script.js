'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Your Deposit ${i + 1}th: ${movement}`);
  } else {
    console.log(`Your Withdraw ${i + 1}th ${Math.abs(movement)}`);
  }
}

// forEach method
console.log('For Each'.padStart(10, '-').padEnd(15, '-'));

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You Deposited ${movement}`);
//   } else {
//     console.log(`You Withdrew ${Math.abs(movement)}`);
//   }
// });

//? (current element, current element index, entire array)
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Your Deposit ${index + 1}th: ${movement}`);
  } else {
    console.log(`Your Withdraw ${index + 1}th ${Math.abs(movement)}`);
  }
});

console.log('--------------MAPS--------------');

// Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// value, key, whole map object
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log('--------------SETS--------------');

// Sets
const currenciesSet = new Set(['USD', 'EUR', 'EUR', 'GBP', 'USD']);

// since there are no keys or indexes the sacond argument is set to the first argument
currenciesSet.forEach(function (value, sameAsFirst, set) {
  // value, '_'(throaway variable), set
  console.log(`${value}: ${sameAsFirst}`);
});
