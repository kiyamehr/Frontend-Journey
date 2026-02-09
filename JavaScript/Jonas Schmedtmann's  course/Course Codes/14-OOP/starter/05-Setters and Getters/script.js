'use strict';

// Class Expression
// const PersonCl = class{
//   constructor(){}
// }

// Class Decleration
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
}

// PersonCl.prototype.greet = function(){
//   return `Hello ${this.firstName}`
// }

const kia = new PersonCl('Kiamehr', 2007);

console.log(kia.calcAge());

console.log(PersonCl); // to see the class itself

console.log(kia.__proto__ === PersonCl.prototype);

console.log(kia.greet());

/*

Notes About Classes
1. They are Not Hoisted: can't use em before they are defined
2. Allways run in strict mode
3. Classes are first-class Citizens

*/
