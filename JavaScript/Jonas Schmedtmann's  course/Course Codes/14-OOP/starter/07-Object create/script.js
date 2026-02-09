'use strict';

const PersonProto = {
  calcAge: function () {
    return 2026 - this.birthYear;
  },

  firstWord: function () {
    return this.name[0];
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const kia = Object.create(PersonProto);
console.log(kia);

// when we use constructor funcitons the 'new' keyword does prototype and property syncing \\
//  automaticaly for us
kia.name = 'Kiamehr';
kia.birthYear = 2007;
console.log(kia.calcAge());
console.log(kia.firstWord());

const jadi = Object.create(PersonProto);

jadi.init('Jadi Mir Mir', 1978);

console.log(jadi.calcAge());
