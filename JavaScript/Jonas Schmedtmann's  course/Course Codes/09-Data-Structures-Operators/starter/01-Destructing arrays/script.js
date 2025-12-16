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
};

const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);

// rescive two return values from a funciton
let [main, , secondry] = restaurant.categories;
console.log(main, secondry);

[secondry, main] = [main, secondry];
console.log(main, secondry);

console.log(restaurant.order(2, 0));

const nested = [2, 4, [9, 6]];

const [i, , [j, k]] = nested;

console.log(i, j, k);

// Default Values

const settingDefaultValue = [1, 2, 4];

const [l = 1, m = 1, p = 1, q = 1, r = 1] = settingDefaultValue;

console.log(l, m, p, q, r);
