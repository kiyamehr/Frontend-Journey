"use strict";

function totalHours(workingHours) {
  return workingHours.reduce((reserve, current) => reserve + current, 0);
}

const averageDailyHoursWorked = (workingHours) =>
  `You Have Worked " ${Math.trunc(
    totalHours(workingHours) / workingHours.length
  )} " Hours on Average`;

const dayWithMostHours = function (workingHours) {
  let biggestNumber = -1;
  for (let i = 0; i < workingHours.length; i++) {
    if (workingHours[i] >= biggestNumber) {
      biggestNumber = workingHours[i];
    } else {
      continue;
    }
  }

  return `Your highest Working Hours in a day is: ${biggestNumber} Hours`;
};

const analayzeWorkWeek = function (workingHours) {
  const th = totalHours(workingHours);
  const averageWork = averageDailyHoursWorked(workingHours);
  const mostHours = dayWithMostHours(workingHours);

  return `Your Have Worked a Total of '${th}'\n Hours With An Average of '${averageWork}'\n and Your Highest hours worked is: '${mostHours}'`;
};

let workingHours = [3, 4, 9, 10, 2, 1, 4];

console.log(totalHours(workingHours));
console.log(averageDailyHoursWorked(workingHours));
console.log(dayWithMostHours(workingHours));
console.log(analayzeWorkWeek(workingHours));
