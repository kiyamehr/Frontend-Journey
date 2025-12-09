"use strict";

let rep = 1;
while (rep <= 5) {
  console.log(`Hitting Rep ${rep} with 120KGs of BenchPress`);

  // DO NOT FORGET THIS!!! (if its not your own pc then go on, see what happens)
  rep++;
}

let dice = 0;

while (dice !== 6) {
  dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);
}
