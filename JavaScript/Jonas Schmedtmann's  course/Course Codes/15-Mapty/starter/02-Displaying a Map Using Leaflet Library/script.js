'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// If the user's browser supported geolocation (old browsers don't)
if (navigator.geolocation) {
  // getting user's current location
  navigator.geolocation.getCurrentPosition(
    function (position) {
      //? First callback function: when success (could get the location)

      const { latitude } = position.coords;
      const { longitude } = position.coords;

      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    },
    function () {
      //? Second callback function: when fail (could not get the location)
      alert('Could Not Get Your Location!');
    },
  );
}
