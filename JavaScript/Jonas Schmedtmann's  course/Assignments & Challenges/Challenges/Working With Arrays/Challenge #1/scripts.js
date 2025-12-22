"use strict";

const checkDogs = function (dj, dk) {
  const realJuliaDog = dj.slice(1, -2);
  const dogKateCopy = [...dk];

  const mixDogs = [...realJuliaDog, ...dogKateCopy];
  console.log(mixDogs);
  mixDogs.forEach(function (mov, i) {
    mov <= 3
      ? console.log(`Dog Number ${i + 1} is still a puppy 🐶`)
      : console.log(`Dog Number ${i + 1} is Grown to a Bear! 🐻`);
  });
};

const dogJulia = [3, 5, 2, 12, 7];
const dogKate = [4, 1, 15, 8, 3];

checkDogs(dogJulia, dogKate);
