'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const FormInputs = document.querySelectorAll('.form__input');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Global Variables
let map, mapEvent;

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
      map = L.map('map').setView(coords, 15);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      //? Leaflet event Listener on map
      map.on('click', function (mapE) {
        // Giving the event to a global variable
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });

      // console.log(`https://www.google.com/maps/@${longitude},${latitude}`);
    },
    function () {
      //? Second callback function: when fail (could not get the location)
      alert('Could Not Get Your Location!');
    },
  );
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  inputDistance.value =
    inputCadence.value =
    inputDuration.value =
    inputElevation.value =
      '';

  // Displaying Map Marker
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng], { riseOnHover: true })
    .addTo(map)
    .bindPopup(
      L.popup({
        maxwidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      }),
    )
    .setPopupContent('Workout')
    .openPopup();

  form.classList.add('hidden');
});

inputType.addEventListener('change', function () {
  // This way allways one is hidden and one is showing
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputDistance.closest('.form__row').classList.toggle('form__row--hidden');
});
