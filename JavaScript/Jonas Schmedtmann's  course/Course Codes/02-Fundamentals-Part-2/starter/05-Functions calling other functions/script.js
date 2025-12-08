"use strict";

function fruitSlicer(fruit) {
  return fruit * 4;
}

function fruitProcessor(appleNum, orangeNum) {
  const applePieces = fruitSlicer(appleNum);
  const orangePieces = fruitSlicer(orangeNum);

  const juice = `Made A Juice with ${applePieces} Apples and ${orangePieces} Oranges`;

  return juice;
}

console.log(fruitProcessor(10, 20));
