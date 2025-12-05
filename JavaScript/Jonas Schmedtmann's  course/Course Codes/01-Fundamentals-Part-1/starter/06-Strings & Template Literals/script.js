const firstName = "Kiamehr";
const birthYear = 2007;
const currentYear = 2025;
const job = "Great Programmer";

/* here we can use a "template literal" which works like 
'fstrings' in python */

const introduce = `Hi Im ${firstName}, My job is ${job} and I am ${
  currentYear - birthYear
} years Old`;

console.log(introduce);

console.log(`well
it looks like \n
you can write in multiple lines
with back ticks`);
