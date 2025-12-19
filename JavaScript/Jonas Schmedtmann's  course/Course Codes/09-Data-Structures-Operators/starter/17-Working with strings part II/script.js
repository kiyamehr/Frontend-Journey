'use strict';

const nameCorrector = function (name) {
  const nameLower = passenger.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  return nameCorrect;
};

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'KiaMeHR';

console.log(nameCorrector(passenger));

// comparing emails
const email = 'hello@kiamehr.io';
let emailLogin = '   Hello@kiamehr.io \n';

const emailloginLower = emailLogin.toLowerCase();
const emailloginTrim = emailloginLower.trim();
console.log(emailloginTrim);

const normalizedEmail = emailLogin.toLowerCase().trim();
console.log(normalizedEmail);

// replacing
const priceGB = '299,29£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceUS);

const hello = 'hello hello hello!';
const hi = hello.replace('hello', 'hi');
const hiAll = hello.replaceAll('hello', 'hi');
console.log(hi);
console.log(hiAll);

// regulare expression
const hiRegulareExpression = hello.replace(/hello/g, 'hi'); // g = global
console.log(hiRegulareExpression);

// Booleans
const plane = 'Airbus 320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new airbus family');
}

// Practice Exersise
const checkBaggage = function (items) {
  // in comparing strings we allways put them into lowercase
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('socks and camera');
checkBaggage('god some snacks and a Gun for protection');
