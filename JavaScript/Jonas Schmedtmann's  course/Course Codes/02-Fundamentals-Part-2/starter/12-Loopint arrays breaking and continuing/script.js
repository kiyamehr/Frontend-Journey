"use strict";

const person = ["mmd", "hosseini", 2007, "Construction Worker"];
const types = [];

// console.log(person[0]);
// console.log(person[1]);

for (let i = 0; i < person.length; i++) {
  console.log(person[i]);

  // // // Filling an Array:
  // // method 1
  // types.push(typeof person[i]);

  // method 2
  types[i] = typeof person[i];
}

console.log(types);

// example 2

const birthYearArray = [2007, 1999, 1991, 2001];
const ageArray = [];

for (let i = 0; i < birthYearArray.length; i++) {
  ageArray.push(2025 - birthYearArray[i]);
}
console.log(ageArray);

// Continue & Break
console.log("------------------");
for (let i = 0; i < person.length; i++) {
  if (typeof person[i] !== "string") continue;

  console.log(person[i]);
}

console.log("------------------");
for (let i = 0; i < person.length; i++) {
  if (typeof person[i] === "number") break;

  console.log(person[i]);
}
