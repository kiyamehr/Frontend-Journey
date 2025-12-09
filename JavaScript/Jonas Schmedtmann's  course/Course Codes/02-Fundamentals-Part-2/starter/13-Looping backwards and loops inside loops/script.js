"use strict";

const person = [1, 2, 3, 4, 5];

for (let i = person.length - 1; i >= 0; i--) {
  console.log(person[i]);
}

// writing loops inside other loops

for (let exercise = 1; exercise <= 5; exercise++) {
  console.log(`----- Starting Exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`    Rep -${rep}`);
  }
}
