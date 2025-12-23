"use strict";

const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (dogages) =>
  dogages
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((dogAge) => dogAge >= 18, 0)
    .reduce((acc, dogAge, _, arr) => acc + dogAge / arr.length);

console.log(Math.trunc(calcAverageHumanAge(dogAges1)));

console.log(Math.trunc(calcAverageHumanAge(dogAges2)));
