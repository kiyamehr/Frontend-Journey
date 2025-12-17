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

  orderPizza: function (mainIngredirent, ...otherIngs) {
    return `You Pizza's Main Ingredient is ${mainIngredirent}, and you have also ${otherIngs} in your pizza`;
  },
};

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const item of restaurant.menu) console.log(item);

// for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);

for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

console.log(menu.entries());
