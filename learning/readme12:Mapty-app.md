# MAP APPLICATION

- ### USER STORIES
    1. As a user, I want to log my running workouts with location, distance, time, pace and steps/minute.
    2. As a user, I want to log my cycling workouts with location, distance, time, speed and elevation gain.
    3. As a user, I want to see all my workouts at a glance, so that I can easily track my progress over time.
    4. As a user, I want to also see my workouts on a map, so that I can easily check where I work out the most.
    5. As a user, I want to see all my workouts when I leave the app and come back later, so that I can keep using the app over time.

- ### FEATURES
    - [x] Geolocation
    - [x] Displaying a Map using Leaflet Library
    - [x] Displaying a Map Marker
    - [x] Rendering Workout Input Form
    - [x] Project Architecture
    - [x] Refactoring for Project Architecture
    - [x] Managing Workout Data: Creating Classes
    - [x] Creating a New Workout
    - [x] Rendering Workouts
    - [x] Moving to Marker on Click
    - [x] Working with localStorage
    - [x] Creating a Modal Window
    - [x] Implementing Workout Deletion

- ### FLOW CHART
![Mapty App Architecture](./complete-javascript-course-master/15-Mapty/starter/Mapty-flowchart.png)

- ### ARCHITECTURE
![Mapty App Architecture](./complete-javascript-course-master/15-Mapty/starter/Mapty-architecture-part-1.png)

- ### ARCHITECTURE PART 2
![Mapty App Architecture](./complete-javascript-course-master/15-Mapty/starter/Mapty-architecture-final.png)

### GEOLOCATION API
- The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.

```javascript
// Geolocation API
if (navigator.geolocation)
// getCurrentPosition() method is used to get the current position of the device.
    navigator.geolocation.getCurrentPosition(
        function (position) {
            //destructuring the object for latitude and longitude
            const { latitude } = position.coords;
            const { longitude } = position.coords;
            console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
        },
        function () {
            alert('Could not get your position');
        }
    );
```

### LEAFLET LIBRARY
- Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 39 KB of JS, it has all the mapping features most developers ever need. [Leaflet](https://leafletjs.com/)
    - We can include the Leaflet library in our project by adding the following link to the head of our HTML document.

    ```html
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    ```
    - Add the script before your own JavaScript file to make sure that the Leaflet library is loaded before we start using it.
    
    ```javascript
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // Leaflet Library
    const map = L.map('map').setView([longtude, Latitude], 13);

    // Displaying a Map Marker using openstreetmap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Displaying a Map Marker using mapbox
    L.Marker([latitude, longitude])
        .addTo(map)
        .bindPopup('Youre here.<br> Easily customizable.')
        .openPopup();
  
    ```
    - Add it to the navigator.geolocation.getCurrentPosition() method.
    ```javascript
    navigator.geolocation.getCurrentPosition(
        function (position) {
            const { latitude } = position.coords;
            const { longitude } = position.coords;
            console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
            // Leaflet Library
            const map = L.map('map').setView([latitude, longitude], 13);

            // Displaying a Map Marker using openstreetmap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Displaying a Map Marker using mapbox
            L.Marker([latitude, longitude])
                .addTo(map)
                .bindPopup('Youre here.<br> Easily customizable.')
                .openPopup();
        },
        function () {
            alert('Could not get your position');
        }
    );
    ```
    - We can use tile layer to change the map style. We can use the following link to change the map style/them.
    ```javascript
    
    // Displaying a Map Marker using mapbox
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(map);
    ```
### MULTIPLE JS FILES
- We can split our code into multiple files. This is useful for keeping our code organized and for separating different concerns. For example, we can have one file for the map, one for the workouts, and one for the application controller.
- ```script.js``` will be the main file that will import all the other files, and has unbounded access to all the variables and functions in the other files.
    - However, the other files will not have access to the variables and functions in ```script.js```. since it is added after the other files. If you change the order of the script tags, then the order of the execution will change as well.

### Event handlers on the map
- We can add event handlers on the map. For example, we can add a click event handler on the map, and then get the latitude and longitude of the clicked location.
- Remember that the ```mapEvent``` object contains the latitude and longitude of the clicked location.
- We can use the ```mapEvent``` object to add a marker on the clicked location.
```javascript
// Event handler on the map
map.on('click', function (mapEvent) {
    console.log(mapEvent);
    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
            L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup'
            })
        )
        .setPopupContent('Workout')
        .openPopup();
});
```

### EVENT HANDLERS IN CLASSES 
- Always remember that the ```this``` keyword is only assigned a value when an object calls a method.
- In an event handler function, the ```this``` keyword will point to the DOM element on which the handler is attached. 
- So, in an event handler function, we cannot use the ```this``` keyword to access the properties of the class.
- To solve this problem, we can use the ```bind()``` method to bind the ```this``` keyword to the class.


### LOCAL STORAGE
- The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.
- The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.
- This allows us to store data in the browser and then retrieve it later. This is useful for storing the workout data in the browser, so that we can retrieve it later when the user comes back to the application.
- It is important to note that the data stored in the localStorage is stored as a string. So, we need to convert the data to a number or an object before storing it in the localStorage.
- Do not store sensitive data in the localStorage, since it is not encrypted and can be accessed by anyone.
- Its also a small storage space, so we should not store too much data in it.

```javascript
// localStorage
localStorage.setItem('key', 'value');
localStorage.getItem('key');
localStorage.removeItem('key');
localStorage.clear();
```

- When we recover the data from the localStorage, it is stored as a string. So, we need to convert it back to object or number before using it. Hence we can loose the prototype chain of the object.