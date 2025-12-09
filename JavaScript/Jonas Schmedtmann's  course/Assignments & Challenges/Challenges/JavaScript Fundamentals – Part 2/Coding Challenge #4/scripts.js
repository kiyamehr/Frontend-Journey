const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

// const calcTip = (bill) =>
//   bill >= 20 && bill <= 200 ? Math.trunc((bill / 100) * 15) : Math.trunc((bill / 100) * 20);

function calcTip(bill) {
  // cause this way its an expression we can store it in a variable
  const tip =
    bill >= 20 && bill <= 200
      ? Math.trunc((bill / 100) * 15)
      : Math.trunc((bill / 100) * 20);

  return tip;
}

function calcAverage(billsArray) {
  // calculating avg
  let sumBills = 0;

  for (let i = 0; i < billsArray.length; i++) {
    sumBills = sumBills + billsArray[i];
  }
  sumBills = sumBills / billsArray.length;

  return sumBills;
}

for (let i = 0; i < bills.length; i++) {
  // if (bills[i] >= 20 && bills[i] <= 200) {
  //   tips.push(Math.trunc((bills[i] / 100) * 15));
  // } else {
  //   tips.push(Math.trunc((bills[i] / 100) * 20));
  // }

  const tip = calcTip(bills[i]);

  tips.push(tip);
  total.push(tip + bills[i]);
}

console.log(calcAverage(tips));

console.log(tips);
console.log(total);
