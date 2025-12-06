const age = 23;

// with Ternary
age >= 18
  ? console.log("I like To Drink Wine 🍷")
  : console.log("I like To Drink Water 💧");

const drink = age >= 18 ? "Wine 🍷" : "Water 💧";
console.log(drink);

// with if / else statements
let drink2;
if (age >= 18) {
  drink2 = "Wine 🍷";
} else {
  drink2 = "Water 💧";
}
console.log(drink2);

// can also be used in template literals:
console.log(`I like To Drink ${age >= 18 ? "Wine 🍷" : "Water 💧"}`);
