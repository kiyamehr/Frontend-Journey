"use strict";

// Funcion Declaration
function calcAge1(birthYear) {
  // get the current year
  return new Date().getFullYear() - birthYear;
}

console.log(calcAge1(2007));

// Funcion Expression (storing in a variable)
const calcAge2 = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

console.log(calcAge2(1999));
