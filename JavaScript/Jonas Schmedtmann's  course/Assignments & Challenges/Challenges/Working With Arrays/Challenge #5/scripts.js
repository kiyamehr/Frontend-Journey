/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

*/

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// 1
const huskyWeight = breeds
  .filter(breed => breed.breed === 'Husky')
  .map(breed => breed.averageWeight)
  .pop();

// console.log(huskyWeight);

// 2
const dogBothActivities = breeds.find(
  breed =>
    breed.activities.includes('fetch') && breed.activities.includes('running')
);

// console.log(dogBothActivities);

// 3
const allActivities = [
  ...new Set(breeds.map(breed => breed.activities).flat()),
];
// console.log(allActivities);

// 4
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .map(breed => breed.activities)
      .flat()
  ),
];

console.log(swimmingAdjacent);

// 5
const avgWeightMoreThan10Kg = breeds.every(breed => breed.averageWeight >= 10);
console.log(avgWeightMoreThan10Kg);

// 6
const areActive = breeds.some(breed => breed.activities.length >= 3);
console.log(areActive);

// 7
const heaviestDogLikesFetch = breeds
  .filter(breed => breed.activities.includes('fetch'))
  .find(
    breed => breed.averageWeight >= Math.max(breed.averageWeight)
  ).averageWeight;

console.log(heaviestDogLikesFetch);
