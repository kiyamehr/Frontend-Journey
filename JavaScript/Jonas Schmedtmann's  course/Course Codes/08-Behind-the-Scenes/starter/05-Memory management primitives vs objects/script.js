'use strict';

const firstName = 'Kiamehr'; // stores in callstack as 2007
const age = calcAge(2007); // 18
let newAge = age; // IS NOT A REFRENCE! it is 19 and can change on its own without effecting the age value
newAge++;

const location = {
  // the object inside the locaiton gets stores in Heap and location is just a refrence to the object in heap
  city: 'Rasht',
  country: 'Iran',
};

const newLocation = location; // The object is NOT in the variable this is a refrence too, so the location and newLocation are both Pointing at one thing
newLocation.city = 'tehran';

console.log(location); // the value of both location and new locatino change becuase they are refrencing the the same thing and they are not seperate objects

function calcAge(year) {
  const now = 2025;
  x = now - year;
  return x;
}
