const mark = {
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = Math.trunc(this.mass / (this.height * 2));
    return this.bmi;
  },
};

const john = {
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = Math.trunc(this.mass / (this.height * 2));
    return this.bmi;
  },
};

john.calcBMI();
mark.calcBMI();

console.log(mark.bmi);
console.log(john.bmi);
