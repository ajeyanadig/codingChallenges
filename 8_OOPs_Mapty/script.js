'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//DOM Selectors
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

///////////i added a temp marker in line 119, also potential for further improving project

////////// PROJECT WORKOUT DATA ////////////

class Workout {
  date = new Date();
  clicks = 0;
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords; //[lat,lng]
    this.distance = distance; //km
    this.duration = duration; //min
    //in java you'd set property values here, but ES2020+ does this automatically, setting before constructor won't initialise at load time. very important to remember
  }
  _setDescription() {
    this.description = `${this.type[0].toUpperCase() + this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  click() {
    this.clicks++;
  }
}
class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    //mins/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    //mins/km
    this.speed = this.distance / (this.duration / 60); //kmph
    return this.speed;
  }
}
////////
//////////////  PROJECT APP ARCHITECTURE  /////////////
class App {
  //_newWorkout method is kind of the heart of the app
  #map;
  #mapEvent;
  #mapZoomLevel = 13;
  #tempMarker;
  #workouts = [];
  constructor() {
    //get position from navigator
    this._getPosition();

    //get data from local storage
    this._getLocalStorage();

    //Attatch event handlers
    form.addEventListener('submit', this._newWorkout.bind(this)); //most important part of app
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopop.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), e => {
        alert("Couldn't get coordinates");
      });
  }

  _loadMap(position) {
    let { latitude } = position.coords;
    let { longitude } = position.coords;
    let coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
    this.#map.setView(coords, this.#mapZoomLevel);
    L.marker(coords).addTo(this.#map);
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputCadence.focus();
    //temp marker
    if (this.#tempMarker) {
      this.#tempMarker.removeFrom(this.#map);
    }
    let { lat, lng } = mapE.latlng;
    this.#tempMarker = L.marker([lat, lng]).addTo(this.#map);
  }
  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => {
      form.style.display = 'grid';
    }, 500);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();
    //input validator function, check if number and positive
    const validateInputs = (...rest) => {
      return rest.every(ele => Number.isFinite(ele));
    };
    const validatePositive = (...rest) => {
      return rest.every(ele => ele > 0);
    };

    //get data
    let type = inputType.value;
    let distance = +inputDistance.value;
    let duration = +inputDuration.value;
    let cadence, elevation;
    let workoutObj;

    //CREATE WORKOUT OBJECTS
    if (type == 'running') {
      cadence = +inputCadence.value;
      //validate data with guard clause
      if (
        !validateInputs(distance, duration, cadence) ||
        !validatePositive(distance, duration, cadence)
      ) {
        return alert('Please enter valid positive numbers');
      }
      let { lat, lng } = this.#mapEvent.latlng;
      workoutObj = new Running([lat, lng], distance, duration, cadence);
    }
    if (type == 'cycling') {
      elevation = +inputElevation.value;
      //validate data, elev can be negative
      if (
        !validateInputs(distance, duration, elevation) ||
        !validatePositive(distance, duration)
      ) {
        return alert('Please enter valid numbers');
      }
      let { lat, lng } = this.#mapEvent.latlng;
      workoutObj = new Cycling([lat, lng], distance, duration, elevation);
    }

    //PUSH OBJECTS
    this.#workouts.push(workoutObj);

    //RENDER MARKER
    this._renderWorkoutMarker(workoutObj);

    //RENDER WORKOUT ON UI
    this._renderWorkout(workoutObj);

    //Form clear and hide
    this._hideForm();

    //set Local Storage
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map, { setView: false })
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type == 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id=${workout.id}>
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type == 'running' ? '🏃‍♂️' : '🚴‍♀️'
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>
   `;
    if (workout.type == 'running') {
      html += ` 
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>`;
    }
    if (workout.type == 'cycling') {
      html += ` 
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>`;
    }

    form.insertAdjacentHTML('afterend', html); //i want form always at the top, container.insertAdj would've made my form render below the list of workouts
  }
  _moveToPopop(e) {
    //classic event delegation where elements to click and listen to aren't even rednered yet, hence attach stuff to it's parent container and make the function run when event bubbles up from the target we want. Event propogation for the win
    const workoutEle = e.target.closest('.workout'); //what if event starts inside card, inner elements are tatget, hence return the closest parent card --> .workout list
    if (!workoutEle) return; // on cotntainer but outside cards.

    //now find corresponding workout obj from arr, luckily we attatched data-id in template
    const workout = this.#workouts.find(work => {
      return work.id === workoutEle.dataset.id;
    });
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });
    workout.click();

    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;
    this.#workouts = data;
    this.#workouts.forEach(work => {
      work.__proto__ =
        work.type == 'running'
          ? Object.create(Running.prototype)
          : Object.create(Cycling.prototype);
    });
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}
const app = new App();
