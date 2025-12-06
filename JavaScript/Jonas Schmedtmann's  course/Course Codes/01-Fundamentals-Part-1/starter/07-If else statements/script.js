let personAge = 15;
const isOldEnough = 18;

if (personAge >= isOldEnough) {
  console.log("You Are Old Enough To Drive.");
} else {
  const waitYears = isOldEnough - personAge;
  console.log(`You Are Too Young, Wait ${waitYears} More Years`);
}

// -------

const birthYear = 2007;

let century;
if (birthYear >= 2000) {
  century = 21;
  console.log(`You were born in the ${century}th century`);
} else {
  century = 20;
  console.log(`You were born in the ${century}th century`);
}

console.log(century);
