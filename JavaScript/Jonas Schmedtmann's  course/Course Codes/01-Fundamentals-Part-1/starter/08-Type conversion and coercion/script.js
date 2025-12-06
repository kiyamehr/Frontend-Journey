let num = 25;

console.log(String(num));

let word = "hello";
console.log(Number(word)); // NaN not a number

console.log(typeof NaN);

let strToWord = "24";

console.log(Number(strToWord)); // 24

// plus sign will convert numbers to strings
console.log("I'm" + 23 + "years old"); // " im 23 years old "

// minus & * & and / will convert to numbers cause thats the only way they will work
console.log("23" + 20 - 40 - "20");

let n = "1" + 1;
console.log(n);

console.log(n - 1);
