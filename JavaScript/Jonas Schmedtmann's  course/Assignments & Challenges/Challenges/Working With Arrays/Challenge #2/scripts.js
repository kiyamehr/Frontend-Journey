"use strict";

/* Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

*/

const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );

  const dogsPg18 = humanAges.filter((ha) => ha >= 18, humanAges[0]);

  const avgHumanAge = humanAges.reduce((acc, currentAge) =>
    Math.trunc((acc + currentAge) / dogsPg18.length, 0)
  );

  console.log(humanAges);
  console.log(dogsPg18);
  console.log(avgHumanAge);
};

const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

console.log("---data1---");
calcAverageHumanAge(dogAges1);
console.log("---data2---");
calcAverageHumanAge(dogAges2);
