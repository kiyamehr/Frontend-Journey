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

// this returns an error
// console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon);

// if we did not wanted it to return an error
if (restaurant.openingHours && restaurant.openingHours.mon) {
  // this takes a lot of time
  console.log(restaurant.openingHours);
}

// if the expression before .? existed continue if not return *undefined*.
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

console.log(restaurant.openingHours?.fri?.open);

// Example
const days = ['son', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for (const day of days) {
  const open = `On ${day} we open at ${
    // because sat opens on zero then || wont work correctly
    restaurant.openingHours[day]?.open ?? 'closed'
  }`;
  console.log(open);
}

console.log('---------------');

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method Does Not Exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method Does Not Exist');

// Arrays
const person = [{ name: 'kia', email: 'kia@email.com', age: '18' }];

console.log(person[0]?.name ?? 'User array empty');
