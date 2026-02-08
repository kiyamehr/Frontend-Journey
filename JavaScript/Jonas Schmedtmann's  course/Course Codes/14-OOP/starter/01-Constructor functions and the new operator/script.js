'use strict';

const Person = function (firstName, age) {
  this.firstName = firstName;
  this.age = age;

  //! Never Do This!
  this.calcAge = function () {
    console.log(2025 - this.age);
  };
};

const kiamehr = new Person('Kiamehr', '18');
const mmd = new Person('mmd', '150');

console.log(kiamehr);
console.log(mmd);
console.log(kiamehr instanceof Person);

kiamehr.calcAge();
