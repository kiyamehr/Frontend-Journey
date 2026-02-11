"use strict";

// Your tasks:

// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class

// 2. Make the 'charge' property private

// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!

// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  break() {
    this.speed -= 5;
    return this;
  }

  accelerate() {
    this.speed += 10;
    return this;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed = 0, charge = 0) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 10;
    this.#charge--;
    return this;
  }

  chargeBattery(num) {
    this.#charge = num;
    return this;
  }

  showChargeNum() {
    return this.#charge;
  }
}

const tesla = new EVCl("Tesla", 120, 20);

const afterAccelerateCharge = tesla
  .accelerate()
  .accelerate()
  .break()
  .chargeBattery(50)
  .accelerate()
  .showChargeNum();

console.log(tesla);
console.log(tesla.showChargeNum());
