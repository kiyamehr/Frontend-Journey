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

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'morade',
};

// OR assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// And assignment Operator
//// rest1.owner = rest2.owner && 'Anonymous';
rest1.owner ? rest1.owner : (rest1.owner = 'Anonymous ');
// rest2.owner = rest2.owner && 'Anonymous';
rest2.owner &&= rest2.owner = 'Anonymous';

console.log(rest1.owner);
console.log(rest2.owner);

// Nullish assignment Operator (null and undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1.numGuests);
// console.log(rest2.numGuests);
