"use strict";

const kia = {
  firstName: "kiamehr",
  lastName: "moradi",
  birthyear: 2007,
  hasDriversLicense: false,
  job: "Best Programmer IN the Green WORLD!!!",
  friends: [
    "Random person so i dont have to choose a favorite among my friends i love them all",
    "teezro",
    "erfun",
    "ali",
    "nima",
    "ehsan",
    "amir",
    "and alot more :D",
  ],

  // we can declare a function inside an object

  // // this method is the dont repeat ur self!!! so we dont use this
  // calcAge: function (birthyear) {
  //   return 2025 - birthyear;
  // },

  // we cant store data in this method
  // calcAge: function () {
  //   // 'this' basically means use the key in this "object" you are in
  //   return 2025 - this.birthyear;
  // },

  calcAge: function () {
    // a way to store it in a new key
    this.age = 2025 - this.birthyear;
    return this.age;
  },

  getSummary: function () {
    // // method 1

    // if (this.hasDriversLicense) {
    //   return `${this["firstName"]} is a ${this.age} Years old and he has a hasDriversLicense`;
    // } else {
    //   return `${this.firstName} is a ${this.calcAge(
    //     2007
    //   )} Years old and has No hasDriversLicense`;
    // }

    // method 2
    return this.hasDriversLicense
      ? `${this["firstName"]} is a ${this.age} Years old and he has a hasDriversLicense`
      : `${this["firstName"]} is a ${this.age} Years old and he has No hasDriversLicense`;
  },
};

console.log(kia.calcAge(2007));

// an efficiant way cause its not calculating again and simply reusing the same calculations we did only once
console.log(kia.age);
console.log(kia.age);
console.log(kia.age);

console.log(kia.getSummary());
