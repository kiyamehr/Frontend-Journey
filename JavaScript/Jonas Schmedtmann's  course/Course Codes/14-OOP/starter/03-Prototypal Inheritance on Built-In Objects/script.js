'use strict';

const Person = function (firstName, age) {
  this.firstName = firstName;
  this.age = age;

  //! Never Do This!
  // this.calcAge = function () {
  //   console.log(2025 - this.age);
  // };
};

console.log(Person.prototype);

//? Do This
// Prototypal Inhertense
Person.prototype.calcAge = function () {
  console.log(2025 - this.age);
};

const kiamehr = new Person('kiamehr', 18);

kiamehr.calcAge();

// To check an objects prototypes
console.log(kiamehr.__proto__);
console.log(kiamehr.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(kiamehr));
console.log(Person.prototype.isPrototypeOf(Person));

// more honest name since its not a prototype of the class itself: \n
//? .prototypeOfLinkedObjects

// defining attribute using prototypes
Person.prototype.species = 'Homo Sapiens';

console.log(kiamehr.species);

kiamehr.hasOwnProperty('firstName');
