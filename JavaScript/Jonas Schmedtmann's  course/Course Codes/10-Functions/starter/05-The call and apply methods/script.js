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
