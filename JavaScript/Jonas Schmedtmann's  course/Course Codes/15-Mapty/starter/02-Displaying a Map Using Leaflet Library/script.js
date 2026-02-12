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

      //* Leaflet Map

      const coords = [latitude, longitude];
      console.log(coords);
      const map = L.map('map').setView(coords, 15);

      // 'L' is a funciton that leaflet gives us that we can use its methods on it

      // tileLayer is the way the map is displayed
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();

      console.log(`https://www.google.com/maps/@${longitude},${latitude}`);
    },
    function () {
      //? Second callback function: when fail (could not get the location)
      alert('Could Not Get Your Location!');
    },
  );
}
