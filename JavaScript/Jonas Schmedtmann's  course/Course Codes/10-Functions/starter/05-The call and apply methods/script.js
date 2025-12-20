'use strict';

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],

  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}` }, name);
  },
};

lufthansa.book(124, 'kiamehr Moradi');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// This doesn't work!
// eurowings.book(23, 'salar salariyan');

// the first given param is the 'this' keyword
book.call(eurowings, 2, 'salar salariyan');
book.call(lufthansa, 2, 'salar salariyan');

console.log(lufthansa.bookings);
console.log(eurowings.bookings);

// Apply Method
const flightData = [521, 'Bill Williams'];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData); // does the same thing as apply

// Bind Method

const bookLH = book.bind(lufthansa);
const bookEW = book.bind(eurowings);

bookEW(20, 'kiamehr moradi');

// You can even preset values
const bookEW23 = book.bind(eurowings, 23);
bookEW23('jadi jadi');
bookEW23('Jonas Schmedtmann');

console.log('------------');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

// since the 'this' keyword will return to the element its attached to
// when attached to a event lister it will return NaN, so we use bind
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application (presetting valeus)
const addTax = (rate, value) => value + value * rate;
const addTaxVAT = addTax.bind(null, 0.23);
console.log(addTaxVAT(200));

// coding it with functions calling other functions
// method 1
// const addTax = rate => value => value + value * rate;
// const addTaxVAT = addTax(0.23);

// method 2
// const addTax = function(rate) {
//   return function(value) {
//     return value + value * rate
//   }
// }

console.log(addTaxVAT(200));
