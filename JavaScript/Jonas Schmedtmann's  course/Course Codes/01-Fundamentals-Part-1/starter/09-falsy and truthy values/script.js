// falsy values: 0, '', null, undefined, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("kia")); // true
console.log(Boolean({})); // true

let money = 0;

if (money) {
  // it will turn to flase cause zero is a falsy value
  console.log("you should get a job");
} else {
  console.log("You're rich!!!");
}

let height;

if (height) {
  console.log("Height is Defined?!!!!!");
} else {
  console.log("height is undefined");
}
