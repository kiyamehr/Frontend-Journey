'use strict';

class AccountCl {
  // Public Fields //? (accessed on all instances)
  locale = navigator.language;

  // Private Fields //? (accessed only inside class)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // Public Interface (API)
  getMovements() {
    //! Cause this uses return itself its not chainable!
    //? although it can be used at the end of the chain
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    // In order to make the method chainable:
    return this; //? returns an object so methods can work on it
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // '#' made this funciton Private
  #approvedLoan() {
    return true;
  }

  requestLoan(val) {
    if (this.#approvedLoan()) this.deposit(val);
  }
}

const kiaAcc = new AccountCl('Kiamehr', 'IRR', '1111');

const movements = kiaAcc
  .deposit(100)
  .withdraw(40)
  .deposit(140)
  .withdraw(103)
  .getMovements();

console.log(movements);
