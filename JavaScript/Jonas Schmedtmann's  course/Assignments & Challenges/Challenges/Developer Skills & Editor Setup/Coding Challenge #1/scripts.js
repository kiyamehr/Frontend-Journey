"use strict";

const printForecast = function (tempretures) {
  let tempInC = [];
  let forecasting = " ... ";

  for (let i = 0; i < tempretures.length; i++) {
    tempInC.push(tempretures[i] + "ºC");

    forecasting += `${tempInC[i]} in ${i + 1} days` + " ... ";
  }
  return forecasting;
};

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

// for (let i = 0; i < forecast.length; i++) {
// }
console.log(printForecast(temps1));
console.log(printForecast(temps2));
