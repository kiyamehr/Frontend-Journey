const now = "2030";

// math operators
const ageKia = now - 2007;
const ageMehrgun = now - 1999;

console.log(ageKia, ageMehrgun);

// Im gonna be 23 years old?!
// In just 5 years...

console.log(ageKia * 2, ageKia / 10, 2 ** 10);

const firstName = "Kiamehr";
const lastName = "Moradi";

console.log(firstName + lastName);
console.log(firstName + " " + lastName);

// assignment operators:

let x = 10 + 5;

x += 10;

x *= 10;

x++; // x + 1
x--; // x - 1
x--; // x - 1
x--; // x - 1

console.log(x);

// Comparison Operators

console.log(ageKia > ageMehrgun); // > < >= <=

console.log(ageKia >= 23); // > < >= <=

console.log(now - 2007 >= now - 1999);
console.log(now - 1999 >= now - 2007);

const avg = (ageKia + ageMehrgun) / 2;

console.log(avg);
