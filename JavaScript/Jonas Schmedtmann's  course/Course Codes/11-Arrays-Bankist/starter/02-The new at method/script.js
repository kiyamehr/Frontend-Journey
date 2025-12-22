'use strict';

const arr = [1, 2, 3, 4, 5, 5, 6];

// Getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); // arr at position -1

// on strings
const firstName = 'Kiamehr';
console.log(firstName.at(0));
console.log(firstName.at(-1));
