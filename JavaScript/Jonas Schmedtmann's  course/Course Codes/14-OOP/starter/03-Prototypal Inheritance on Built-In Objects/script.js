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

console.dir(Person.prototype.constructor);

const arr = [5, 6, 5, 9, 6, 9];
console.log(arr.__proto__); // Shows All the method prototype on Arryas
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

// Adding new methods to a class like Array
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
