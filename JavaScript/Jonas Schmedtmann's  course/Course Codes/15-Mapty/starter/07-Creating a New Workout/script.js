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

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, duration, distance) {
    this.coords = coords; // [lat, lng]
    this.duration = duration; // in km
    this.distance = distance; // in min
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, duration, distance) {
    super(coords, duration, distance);
    this.calcPace();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, duration, distance) {
    super(coords, distance, duration);
    this.calcSpeed();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// -------------------------------------
// Application Architecture
class App {
  #map;
  #mapEvent;
  #workout = [];

  constructor() {
    //? The constructor function gets launched when the page loads  \n
    //? so when the page loads the loadmap method will get launched too so we dont have to call it outside of the class
    this._loadMap();

    // in event listener the 'this' goes to form
    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField.bind(this));
  }

  _toggleElevationField() {
    // This way allways one is hidden and one is showing
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputDistance.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _loadMap() {
    if (navigator.geolocation) {
      // getting user's current location
      navigator.geolocation.getCurrentPosition(
        this._getPosition.bind(this),
        function () {
          //? Second callback function: when fail (could not get the location)
          alert('Could Not Get Your Location!');
        },
      );
    }
  }

  _getPosition(position) {
    //? First callback function: when success (could get the location)

    const { latitude } = position.coords;
    const { longitude } = position.coords;

    //* Leaflet Map

    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //? Leaflet event Listener on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _newWorkout(e) {
    //? ...inputs means get all inputs which returns an array
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;

      // Check if data is valid
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    // Add new object to workour array
    this.#workout.push(workout);

    // Render workout on map as marker
    this.renderWorkoutMarker(workout);
    // Render workout on list

    // Hide form + Clear input fields
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        '';

    form.classList.add('hidden');
  }

  renderWorkoutMarker(workout) {
    L.marker(workout.coords, { riseOnHover: true })
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxwidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        }),
      )
      .setPopupContent('workout')
      .openPopup();
  }

  _showForm(mapE) {
    // Giving the event to a global variable
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }
}

const app = new App();
