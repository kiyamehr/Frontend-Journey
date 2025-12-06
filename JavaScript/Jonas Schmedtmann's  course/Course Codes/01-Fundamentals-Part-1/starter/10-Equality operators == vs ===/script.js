console.log(false === 0); // false (it does NOT do type coersion)
console.log(false == 0); // true (it does do type coersion)

let age = "18";
console.log(age === 18); // false
console.log(age == 18); // true

const favoriteNumber = Number(prompt("Whats Your Favorite Number"));
console.log(favoriteNumber);
console.log(typeof favoriteNumber);

// if (favoriteNumber === 23) console.log("Number 23 is amazing!!");

if (favoriteNumber === 23) {
  console.log("Number 23 is amazing!!");
} else if (favoriteNumber === 9) {
  console.log("nine is also amazing!!!");
} else {
  console.log("Your Numbers arent 23 or 9");
}

// != loose diffrent, !== strict diffrent (use this one)
if (favoriteNumber !== 23) console.log("Why Not 23!?");
