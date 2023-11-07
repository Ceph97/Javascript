'use strict';




//GeoLocation API

let map, mapEvent;

class Workout{
    clicks = 0; // Tracking the number of clicks on the workout

    constructor(coords, distance, duration){
        this.coords = coords; // [lat, lng]
        this.distance = distance; // in km
        this.duration = duration; // in min
        this.date = new Date();
        this.id = (Date.now() + '').slice(-10); //unique id
    }

    _setDescription(){
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

         this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;

    }

    click(){
        this.clicks++;
    };


}

class Running extends Workout{
    type = 'running';
    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration);
        this.cadence = cadence; // in spm
        this.calcPace();
        this._setDescription(); // this is a method in the parent class
    }

    calcPace(){
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class Cycling extends Workout{
    type = 'cycling'; //same as this.type = 'cycling' in the constructor
    constructor(coords, distance, duration, elevationGain){
        super(coords, distance, duration);
        this.elevationGain = elevationGain; // in meters
        this.calcSpeed();
        this._setDescription(); // this is a method in the parent class
    }

    calcSpeed(){
        // km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);

// console.log(run1, cycling1);

///////////////////////////////////////
// APPLICATION ARCHITECTURE
///////////////////////////////////////
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class App {
    #map;
    #mapEvent;
    #mapZoomLevel = 13;
    #workouts = []; // this is an array of workouts

    constructor(){

        // Triggering the geolocation API user's position
        this._getPosition(); 

        // Get data from local storage
        this._getLocalStorage();


        //Attach event handlers
        form.addEventListener('submit', this._newWorkout.bind(this));

        inputType.addEventListener('change', this._toggleElevationField);

        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    }


    // this function gets the geolocation of the user
    _getPosition(){
        // navigator is the browser API that has the geolocation of the user
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
                alert('Could not get your position');
            })       
    }

    // this function loads the map When the user allows the geolocation
    _loadMap(position){
            const { latitude } = position.coords;
            const { longitude } = position.coords;
            console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

            //our cordinates
            const coords = [latitude, longitude];

            // leaflet library
            this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

            // the tile layer is the background of the map and it is from openstreetmap
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(this.#map);

            //add marker to the map
            L.marker(coords).addTo(this.#map)
            .bindPopup('You are here')
            .openPopup();

            // SHOW FORM WHEN CLICKING ON MAP
            this.#map.on('click', this._showForm.bind(this));

            // this is to render the workouts on the map from the local storage
            this.#workouts.forEach(work => {
                this._renderWorkoutMarker(work);
            }
            );
            
            
    }

    // this function shows the form when the user clicks on the map
    _showForm(mapE){
        this.#mapEvent = mapE; //global scopping the mapEvent
            form.classList.remove('hidden');
            inputDistance.focus();
    }

    // this function hides the form when the user clicks on the map
    _hideForm(){
        // Empty inputs
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(() => form.style.display = 'grid', 1000);
    }


    // this function toggles the elevation field between cycling and running
    _toggleElevationField(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }


    // this function is called when the form is submitted
    _newWorkout(e){

        //helper functions
        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(inp => inp > 0);
        e.preventDefault();

        //Get data from form
        const type = inputType.value;
        const distance = +inputDistance.value; // the + sign converts the string to a number
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng;// the latlng is the latitude and longitude of the click
        let workout; // scpopping the workout variable


        //Check if data is valid

        //If workout running, create running object else create cycling object
        if(type === 'running'){
            const cadence = +inputCadence.value;
            //Check if data is valid
            if(!validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)){
                return alert('Inputs have to be positive numbers!');
            }

            workout = new Running([lat, lng], distance, duration, cadence);
        }
        if(type === 'cycling'){
            const elevation = +inputElevation.value;

            if(!validInputs(distance, duration, elevation) || !allPositive(distance, duration)){
                return alert('Inputs have to be positive numbers!');
            }

           workout = new Cycling([lat, lng], distance, duration, elevation);

        }

        //Add new object to workout array
        this.#workouts.push(workout); // adding the workout to the array of workouts
        console.log(this.#workouts);

        //Render workout on map as marker
        this._renderWorkoutMarker(workout);

        //Render workout on list
        this._renderWorkout(workout);

        //Hide form + clear input fields
        this._hideForm();

        // Clear input fields
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    
        // Set local storage to all workouts
        this._setLocalStorage();
        
    }

    // this function renders the marker on the map
    _renderWorkoutMarker(workout){
        L.marker(workout.coords)
          .addTo(this.#map)
            // Bind popup to marker
            .bindPopup(
              L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: `${workout.type}-popup` // this is a class in our css
            }))
            .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️': '🚴'} ${workout.description} km`) // this is the text in the popup
            .openPopup(); // this opens the popup
    }

    // this function renders the workout on the list to the browser
    _renderWorkout(workout){
        let html =`         
            <li class="workout workout--${workout.type}" data-id="${workout.id}">
                <h2 class="workout__title">${workout.description}</h2>
                <div class="workout__details">
                    <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️': '🚴'}</span>
                    <span class="workout__value">${workout.distance}</span>
                    <span class="workout__unit">km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⏱</span>
                    <span class="workout__value">${workout.duration}</span>
                    <span class="workout__unit">min</span>
                </div>
        `;

        if(workout.type === 'running')
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.pace.toFixed(1)}</span>
                    <span class="workout__unit">spm</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">🦶🏼</span>
                    <span class="workout__value">${workout.cadence}</span>
                    <span class="workout__unit">m</span>
                </div>
            </li>
            `;
        
        if (workout.type === 'cycling')
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
           </li>
         `;

        form.insertAdjacentHTML('afterend', html); // this inserts the html after the form as a sibling
    }

    _moveToPopup(e){
        const workoutEl = e.target.closest('.workout'); // this is the closest parent element with the class workout
        console.log(workoutEl);

        if(!workoutEl) return; // this is to prevent an error when the user clicks on the map where there is no workout

        const workout = this.#workouts.find(workout => workout.id === workoutEl.dataset.id); // this is the workout object that has the id of the workoutEl
        console.log(workout);


        // this is the method that moves the map to the workout
        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            animate: true,
            pan: {
                duration: 1
            }
        });

        // workout.click(); // this is to increment the number of clicks on the workout
        workout.click();
    }

    // this function sets the local storage
    _setLocalStorage(){
        //changing the workouts array to a string and storing it in the local storage
        localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    };

    // this function gets the local storage
    _getLocalStorage(){

        //coverting the string to an object
        const data = JSON.parse(localStorage.getItem('workouts'));
        console.log(data);

        if(!data) return;

        this.#workouts = data;

        this.#workouts.forEach(work => {
            this._renderWorkout(work);
        });
    };

    // this function resets the local storage
    reset(){
        localStorage.removeItem('workouts');
        location.reload();
    }
}


const app = new App();




