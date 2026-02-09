"use strict";

// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'company' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h

// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console

// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them

// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK 😀

const Car = function (company, speed) {
  this.speed = speed;
  this.company = company;
};

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};

Car.prototype.break = function () {
  return (this.speed -= 5);
};

const bmw = new Car("BMW", 220);

console.log(bmw.accelerate());
console.log(bmw.accelerate());

console.log(bmw.break());
console.log(bmw.accelerate());
