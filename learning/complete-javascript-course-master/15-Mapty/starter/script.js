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


//GeoLocation API

if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

        //our cordinates
        const coords = [latitude, longitude];

        // leaflet library
        // 'map' is a class in our html
        // L is an object in leaflet library, like an entry point
        // the other numbers are zoom level from 1 to 20
        const map = L.map('map').setView(coords, 13);

        // the tile layer is the background of the map and it is from openstreetmap
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // the marker is the pin on the map
        L.marker(coords).addTo(map)
            .bindPopup('You are here.<br> Cant hide.')
            .openPopup();

        // the popup is the text that appears when you click on the marker
        map.on('click', function (mapEvent) {
            console.log(mapEvent);
            // the latlng is the latitude and longitude of the click
            const { lat, lng } = mapEvent.latlng;

            // Add marker to the map using the click position
            L.marker([lat, lng]).addTo(map)
            // Bind popup to marker
                .bindPopup(L.popup({
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: 'running-popup' // this is a class in our css
                }))
                .setPopupContent('Workout') // this is the text in the popup
                .openPopup(); // this opens the popup
        });
    }, function () {
        alert('Could not get your position');
    })

