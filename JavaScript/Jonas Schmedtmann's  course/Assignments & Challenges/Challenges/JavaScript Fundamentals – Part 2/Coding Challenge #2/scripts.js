"use strict";

function johnsTip(bill) {
  const tip =
    bill >= 50 && bill <= 300
      ? Math.trunc((bill / 100) * 15)
      : Math.trunc((bill / 100) * 20);

  return `The bill was ${bill}, the tip was ${tip}, and the total value ${
    bill + tip
  }`;
}

const bills = [125, 555, 44];

const tip1 = johnsTip(bills[0]);
const tip2 = johnsTip(bills[1]);
const tip3 = johnsTip(bills[2]);

const totalMoneySpend = [bills[0] + tip1, bills[1] + tip2, bills[2] + tip3];
console.log(totalMoneySpend);

// summing members of an array:
const tipTotal = bills.reduce((total, currentNum) => total + currentNum, 0); // 0 +10 , 10 + 20

console.log(tip2);
console.log(tip3);
