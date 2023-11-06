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
        map = L.map('map').setView(coords, 13);

        // the tile layer is the background of the map and it is from openstreetmap
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // the marker is the pin on the map
        L.marker(coords).addTo(map)
            .bindPopup('You are here.<br> Cant hide.')
            .openPopup();

        // Handling clicks on map
        // the popup is the text that appears when you click on the marker
        map.on('click', function (mapE) {

            mapEvent = mapE; //global scopping the mapEvent

            //render workout form
            form.classList.remove('hidden');
            inputDistance.focus(); // this puts the cursor in the input field


        });
    }, function () {
        alert('Could not get your position');
    })

// form submit event
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear input fields
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

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

// the inputType is the dropdown menu
inputType.addEventListener('change', function () {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden'); // this hides the inputElevation
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden'); // this hides the inputCadence
});
