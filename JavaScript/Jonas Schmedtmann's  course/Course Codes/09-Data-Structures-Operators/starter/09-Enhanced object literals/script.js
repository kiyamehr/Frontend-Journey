'use strict';

const weekDays = ['son', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];

const openingHours = {
  // you can do anything if you put it in an array
  [weekDays[2]]: {
    open: 12,
    close: 22,
  },
  [`Day ${2 + 4}`]: {
    open: 11,
    close: 23,
  },
  [weekDays[2 + 1]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

console.log(openingHours);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // you can simply add the name here and it will be added
  openingHours,

  // we can even remove the function and : to make a function in an object
  order(starterOrderIndex, mainOrderIndex) {
    return [this.starterMenu[starterOrderIndex], this.mainMenu[mainOrderIndex]];
  },

  createPasta(ing1, ing2, ing3) {
    return `Here is your pasta with ${ing1}, ${ing2}, ${ing3}, `;
  },

  orderPizza(mainIngredirent, ...otherIngs) {
    return `You Pizza's Main Ingredient is ${mainIngredirent}, and you have also ${otherIngs} in your pizza`;
  },
};

console.log(restaurant.openingHours);
