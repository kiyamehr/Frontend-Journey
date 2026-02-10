'use strict';

class PersonCl {
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
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // '#' made this funciton Private
  #approvedLoan() {
    return true;
  }

  requestLoan(val) {
    if (this.#approvedLoan()) this.deposit(val);
  }
}

const kiaAcc = new PersonCl('Kiamehr', 'IRR', '1111');

kiaAcc.requestLoan(1000);
console.log(kiaAcc);
