'use strict';

class PersonCl {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approvedLoan() {
    return true;
  }

  requestLoan(val) {
    if (this.approvedLoan()) this.deposit(val);
  }
}

const kiaAcc = new PersonCl('Kiamehr', 'IRR', '1111');

kiaAcc.requestLoan(1000);
