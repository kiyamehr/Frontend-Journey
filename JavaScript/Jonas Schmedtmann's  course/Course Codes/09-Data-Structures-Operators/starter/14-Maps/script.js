'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const rest = new Map();

rest.set('name', 'Pizza');
rest.set(1, 'Pasta');
console.log(rest.set(2, 'fesenjoon'));

// chaining sets:

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are close :(');

console.log(rest);
console.log(rest.get(true));
console.log(rest.get('open'));

const currentTime = 14;

console.log(
  rest.get(currentTime > rest.get('open') && currentTime < rest.get('close'))
);

console.log(rest.has('categories'));
console.log(rest.delete(2));
// rest.clear()

// giving array as a key in maps
const arr = [1, 2]; // this way it gets saved in memory

rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading'); // You can even use DOM object
console.log(rest);
console.log(rest.get(arr));
console.log(rest.size);
