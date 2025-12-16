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

  //* argument order is not important in objects as arguments
  orderDelivery: function ({
    time = '20:00',
    location = 'home',
    starterOrderIndex,
    mainOrderIndex,
  }) {
    console.log(
      `Order Recived ${this.starterMenu[starterOrderIndex]}, ${this.mainMenu[mainOrderIndex]} will be Delivered in ${time} to ${location}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  location: 'somewhere you live',
  starterOrderIndex: 0,
  mainOrderIndex: 2,
});

console.log();

const { categories, openingHours, mianMenu } = restaurant;
console.log(categories, openingHours, mianMenu);

// giving diffrent names
const { categories: cat, openingHours: openHours, mianMenu: menu } = restaurant;
console.log(cat, openHours, menu);

// default value
const { sending = [], openingHours: OH = [] } = restaurant;
console.log(sending, openingHours);

// mutate
let a = 11;
let b = 123;

const obj = { a: 1, b: 32 };

({ a, b } = obj);
console.log(a, b);

// Nested
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);
