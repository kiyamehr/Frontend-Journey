"use strict";

const friends = ["Chandler", "Pheobe", "Ross", "Joey", "Monica", "Rachel"];

// add memebers
friends.push("Janice");
const friendsOHMYGOD = friends.push("Janice"); // we can save it in a new array function

console.log(friends);
console.log(friendsOHMYGOD);

// add members to the start

friends.unshift("Bruce Willis");
console.log(friends);

// remove members (end)
friends.pop();
console.log(friends);

// remove members (begining)
friends.shift();
console.log(friends);

// locaion of a member
console.log(friends.indexOf("Ross"));

// if member exists (returns true/false)

console.log(friends.includes("Ross"));

// example
if (friends.includes("Janice")) {
  friends.pop("Janice");
  console.log(friends);
}
