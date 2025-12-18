'use strict';

const openingHours = {
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
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order: function (starterOrderIndex, mainOrderIndex) {
    return [this.starterMenu[starterOrderIndex], this.mainMenu[mainOrderIndex]];
  },

  createPasta: function (ing1, ing2, ing3) {
    return `Here is your pasta with ${ing1}, ${ing2}, ${ing3}, `;
  },

  orderPizza: function (mainIngredirent, ...otherIngs) {
    return `You Pizza's Main Ingredient is ${mainIngredirent}, and you have also ${otherIngs} in your pizza`;
  },
};

const orderSet = new Set(['Pizza', 'Rizzoto', 'Pizza', 'kebab', 'Rizzoto']);
console.log(orderSet);

console.log(new Set('kia'));

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Fesenjoon'));

console.log(orderSet.add('Sirghaliye'));
console.log(orderSet.add('Sirghaliye'));

console.log(orderSet.delete('Rizzoto'));
console.log(orderSet);
// console.log(orderSet.clear());

// you can iterate through them!
for (const order of orderSet) console.log(order);

// Example
const staff = ['manager', 'chef', 'chef', 'waiter', 'waiter'];

// transforming array into a unique array
const staffUnique = [...new Set(staff)]; // cause it is an iterable and we want to transform it into an array we can simply use the dot notation
console.log(staffUnique);

// size
console.log(new Set('kiamehrmoradi').size);
