const bill = 275;

const tip =
  bill >= 50 && bill <= 300
    ? Math.trunc((bill / 100) * 15)
    : Math.trunc((bill / 100) * 20);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`);
