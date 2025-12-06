const hasDrivingLicense = true;
const hasGoodVision = false;

console.log(hasDrivingLicense && hasGoodVision); // and operator

console.log(hasDrivingLicense || hasGoodVision); // or operator

console.log(!hasDrivingLicense); // not operator

console.log(hasDrivingLicense && !hasGoodVision); // true

const canDrive = hasDrivingLicense && hasGoodVision;

// if (canDrive) {
//   console.log("Yay!!! You Can Drive!");
// } else {
//   console.log("sorry... you cant drive");
// }

const isTired = false;

console.log(hasDrivingLicense && hasGoodVision && isTired);

if (hasDrivingLicense && !hasGoodVision && !isTired) {
  console.log("Yay!!! You Can Drive!");
} else {
  console.log("sorry... you cant drive");
}
