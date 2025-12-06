let markWeight = 78;
const markHeight = 1.69;

let kiamehrWeight = 75;
const kiamehrHeight = 1.8;

let johnWeight = 92;
const johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;

let johnBMI = johnWeight / johnHeight ** 2;

let kiamehrBMI = kiamehrWeight / kiamehrHeight ** 2;

console.log(`Mark's BMI is ${markBMI}`);
console.log(`John's BMI is ${johnBMI}`);
console.log(`Kiamehr's BMI is ${kiamehrBMI}`);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI is Higher ${markBMI}`);
} else if (johnBMI > markBMI) {
  console.log(`John's BMI is Higher ${markBMI}`);
} else if (johnBMI === markBMI) {
  console.log(`John ${johnBMI} and mark ${markBMI} BMIs are equal`);
} else {
  console.log("Invalid Input");
}
