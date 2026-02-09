'use strict';

const PersonProto = {
  calcAge() {
    return 2026 - this.birthYear;
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const kia = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
mmd.introduce = function () {
  return `Hi im ${this.firstName}`;
};

const mmd = Object.create(StudentProto);

mmd.init('Mmd', 2005, 'Accountant');
console.log(mmd.calcAge());
console.log(mmd.introduce());
