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

console.log('-----or-----');

console.log(10 || 'Kiamehr');
console.log(0 || 'Kiamehr');
console.log(null || 0);
console.log(true || undefined);

console.log(0 || 'hello' || undefined || null);

//! restaurans.numGuests does NOT exist in restaurants object
// restaurant.numGuests = 23;
//? and it will be still false if the guests are zero
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guests2 = restaurant.numGuests || 10;

console.log(guests1);
console.log(guests2);

console.log('-----and-----');

console.log(10 && 'kia');
console.log(10 && 0);

// Practical example (if this exists do this)
if (restaurant.orderPizza) {
  console.log(restaurant.orderPizza('wurst', 'cheese'));
}

console.log(restaurant.orderPizza && restaurant.orderPizza('wurst', 'cheese'));
