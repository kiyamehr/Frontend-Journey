'use strict';

const bookings = [];

const createBookings = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // Default value in ES5 (we are in ES6)
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBookings('LG123');
createBookings('LG123', 2, 800);
createBookings('LG123', 5);
createBookings('LG123', 6);

// skipping a parameters
createBookings('LG123', undefined, 1000);
console.log('hi');
