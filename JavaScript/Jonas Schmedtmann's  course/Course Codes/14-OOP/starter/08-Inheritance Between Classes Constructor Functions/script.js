'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return 2026 - this.birthYear;
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// If we do this after line 20 then object.create would overwrite \n
// the intruduce prototype, cause object.create creates an empty object.
Student.prototype = Object.create(Person.prototype); //? Linking the Prototypes

Student.prototype.introduce = function () {
  return `Hello, I'm ${this.firstName}, and i am studying ${this.course}`;
};

const kia = new Student('Kiamehr', 2007, 'Computer Engneering');

// So the Constructor Relies on the Student itself
Student.prototype.constructor = Student;

console.log(kia instanceof Student);
console.log(kia instanceof Person);
console.log(kia instanceof Object);

console.log(kia.introduce());
console.log(kia.calcAge());
