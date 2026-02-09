'use strict';

// Class Expression
// const PersonCl = class{
//   constructor(){}
// }

// Class Decleration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    return 2025 - this.birthYear;
  }

  greet() {
    return `Hello ${this.firstName}`;
  }

  //? Is actually Added as a property
  get age() {
    return 2025 - this.birthYear;
  }

  // Set a Property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('name is not a fullname!');
  }

  get fullName() {
    return this._fullName;
  }
}

const kia = new PersonCl('Kiamehr Moradi', 2007);

// Setters and Getters on Objects
const kiaAccount = {
  firstName: 'Kiamehr',
  movements: [20, 100, 300, 500, 42],

  // when you need to get something out of an array with some calculations before
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // when you want to set something to an object
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(kiaAccount.latest);

kiaAccount.latest = 50;
console.log(kiaAccount.movements);

// using get and set in classes
console.log(kia.age);

// kia.fullname = 'Kiamehr';
console.log(kia.fullName);
