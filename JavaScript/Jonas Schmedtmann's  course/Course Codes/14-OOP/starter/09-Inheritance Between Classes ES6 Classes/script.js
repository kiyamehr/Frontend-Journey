'use strict';

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    return 2025 - this.birthYear;
  }

  greet() {
    return `Hello ${this.firstName}`;
  }

  get age() {
    return 2006 - this.birthYear;
  }

  // Static Method
  static hey() {
    return 'Hello There';
  }
}

// 'extends' syncs the prototypes automatically
class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    // Allways needs to happen first!
    super(firstName, birthYear); //? Sets the 'this' key word
    this.course = course;
  }

  introduce() {
    return `Hey There I'm ${this.firstName} and im Studying ${this.course}`;
  }

  // Overwriting and inherited function
  // calcAge() {
  //   return 'I was Overwritten :D';
  // }
}

const kia = new StudentCl('Kiamehr', 2007, 'Computer Engineering');

console.log(kia.introduce());
console.log(kia.calcAge());
