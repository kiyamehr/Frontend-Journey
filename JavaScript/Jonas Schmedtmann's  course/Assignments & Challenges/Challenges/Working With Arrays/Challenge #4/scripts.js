'use strict';

// Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

// - Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// - Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// - Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

// YOUR TASKS:
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
// 6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// 8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
// 9. Group the dogs by the number of owners they have
// 10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

const dogs = [
  { weight: 22, curFood: 284, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.map(dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2
const sarahDog = dogs.filter(dog => dog.owners.includes('Sarah')).pop();

console.log(
  sarahDog.curFood < sarahDog.recommendedFood
    ? 'Eating Eating Too much'
    : 'Eating Too little'
);

// 3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood);
const ownersEatTooLow = dogs.filter(dog => dog.curFood < dog.recommendedFood);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLow);

// 4
console.log(
  `${ownersEatTooMuch
    .map(obj => obj.owners.join(' and ', ' '))
    .join(' and ', ' ')} dogs eat too much, ${ownersEatTooLow
    .map(obj => obj.owners.join(' and ', ' '))
    .join(' and ', ' ')} Dogs eat too little`
);

// 5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

// 7
console.log(
  dogs.filter(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

// 8
const GroupEnoughLevel = Object.groupBy(dogs, dog => {
  const curFood = dog.curFood;
  const recommendedFood = dog.recommendedFood;

  if (curFood === recommendedFood) return 'Exact';
  if (curFood > recommendedFood) return 'too-much';
  if (curFood < recommendedFood) return 'too-little';
  return 'ha?';
});
console.log(GroupEnoughLevel);

// 9
const groupByOwnerNum = Object.groupBy(dogs, dog => {
  const ownerNum = dog.owners.length;

  return `Dogs With ${ownerNum} owners`;
});

console.log(groupByOwnerNum);

// 10
const sortDogs = dogs.toSorted((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortDogs);
