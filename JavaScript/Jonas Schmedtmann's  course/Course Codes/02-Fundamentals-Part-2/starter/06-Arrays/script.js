"use strict";

const friend1 = "Kia";
const friend2 = "mmd";
const friend3 = "ali";

// defining an Array:

const friends = ["Chandler", "Pheobe", "Ross", "Joey", "Monica", "Rachel"];

console.log(friends);
console.log(friends[0]);
console.log(friends.length);

// editing an array (we can edit them in a constant)

friends[0] = "RIP";
console.log(friends[0]);

// Example

const birthYears = [2000, 1993, 2007];
const calcAge = (birthYear) => 2025 - birthYear;

const age1 = calcAge(birthYears[0]);
const age2 = calcAge(birthYears[1]);
const age3 = calcAge(birthYears[2]);

console.log(age1, age2, age3);

// we can use them as expressions too!
const ages = [
  calcAge(birthYears[0]),
  calcAge(birthYears[1]),
  calcAge(birthYears[2]),
];

console.log(ages);
