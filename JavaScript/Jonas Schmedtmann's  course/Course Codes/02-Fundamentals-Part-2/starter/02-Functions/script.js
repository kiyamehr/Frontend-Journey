"use strict";

function print(input) {
  console.log(input);
}

print("kiamehr");
print("Turned Js Into Python HAHAHAHA!");

function fruitProcessor(appleNum, orangeNum) {
  console.log(appleNum, orangeNum);

  const juice = `Made A Juice with ${appleNum} Apples and ${orangeNum} Oranges`;

  return juice;
}

const applejuice = fruitProcessor(10, 0);
console.log(applejuice);

// console.log(fruitProcessor(2, 10));
print(fruitProcessor(2, 10));
