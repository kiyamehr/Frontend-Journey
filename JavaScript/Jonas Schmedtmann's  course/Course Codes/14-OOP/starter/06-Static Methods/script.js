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

PersonCl.hey = function () {
  console.log('Hey There!');
  // the entire constructor
  console.log(this);
};

// Only for the parrent and not for the inctences
PersonCl.hey();

// Does not get Inherited!
// kia.hey(); //! error
