"use strict";

const kia = {
  firstName: "kiamehr",
  lastName: "moradi",
  age: 2025 - 2007,
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
};

// Method 1: Dotted Notation
console.log(kia.firstName);

// Method 2: Bracket Notaion
console.log(kia["firstName"]);

// example
const intrestedIn = prompt(
  "What do you like to know about Kia? Choose From FirstName, LastName, Age, Job, Friends"
);

// this doesnt work cause the prompt returns string not a key
// console.log(kia.intrestedIn);

// use this method

if (kia[intrestedIn]) {
  console.log(kia[intrestedIn]);
} else {
  console.log("Enter A Valid Intrest");
}

// ----------------- //

// adding elements inside an object

kia.location = "Persia";
kia.city = "Rasht";

// challenge

// used the two methods
console.log(
  `${kia.firstName} has ${kia["friends"].length} Friends, And His best friend is:  ${kia.friends[0]}`
);
