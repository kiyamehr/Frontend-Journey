'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterOrderIndex, mainOrderIndex) {
    return [this.starterMenu[starterOrderIndex], this.mainMenu[mainOrderIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  createPasta: function (ing1, ing2, ing3) {
    return `Here is your pasta with ${ing1}, ${ing2}, ${ing3}, `;
  },
};

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5, 6];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Roast Beef Pizza'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays or more
const main = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(main);

// Iterables
const str = 'Kiamehr';
const strSpread = [...str, '', 'S.'];
console.log(strSpread);

// const passtaIngredients = [prompt('ing1?'), prompt('ing2?'), prompt('ing3')];
// console.log;
// restaurant.createPasta(
//   passtaIngredients[0],
//   passtaIngredients[1],
//   passtaIngredients[2]
// )();
// console.log(restaurant.createPasta(...passtaIngredients));

// Objects
const newRestaurant = { ...restaurant, founder: 'Kiamehrè moradè' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'moradè';

console.log(restaurantCopy.name);
console.log(restaurant.name);
