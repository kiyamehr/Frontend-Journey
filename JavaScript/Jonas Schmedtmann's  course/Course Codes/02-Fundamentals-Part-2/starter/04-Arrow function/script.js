// normal functino
function calcAge1(birthYear) {
  return 2025 - birthYear;
}

// Arrow Function

// one liner arrow function:
// parameter, return 2025 - parameter
const calcAge2 = (birthYear) => 2025 - birthYear;

console.log(calcAge2(2007));

// multi liner arrow function:

// we  use curly braces & we use 'return'
const yearsTillRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 70 - age;
  return `${firstName} Retires in ${retirement} Years`;
};

console.log(yearsTillRetirement(2007, "kiamehr"));
