# JAVASCRIPT ASYNCRONUS

- ```SYNCRONUS CODE``` is code that runs line by line, and waits for each line to finish before running the next. Due to this nature, it is also referred to as ```blocking code```.
    ```javascript
    const secondSync = () => {
        console.log('Second Hello');
    }
    ```

- ```ASYNCRONUS CODE```: is code that runs line by line, and does not wait for lines to finish before running the next. Due to this nature, it is also referred to as ```non-blocking code```.
    - For example ```setTimeout()``` is an asyncronus function.

    ```javascript
    const p = document.querySelector('p');
    setTimeout(() => {
        p.textContent = 'Hello Asyncronus';
        console.log('First Hello');
    }, 5000);
    p.style.color = 'red';
    ```

    - Callback functions doesnt make the code asyncronus, but it is a way to work with asyncronus code.
    - img.src = 'https://source.unsplash.com/random/200x200'; // This is asyncronus code, because it takes time to load the image.
    - AJAX is also asyncronus code.

    ### AJAX
    - AJAX stands for ```Asynchronous JavaScript and XML```. In a nutshell, it is the use of the ```XMLHttpRequest``` object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files. AJAX’s most appealing characteristic is its ```asynchronous``` nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page. 

    - AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.
    
    - XML is rarely used anymore, JSON is the preferred method of data transportation.  

    ### API
    - API stands for ```Application Programming Interface```. An API is a software intermediary that allows two applications to talk to each other. In other words, an API is the messenger that delivers your request to the provider that you’re requesting it from and then delivers the response back to you.

## AJAX
- Free repo for [public API's](https://github.com/public-apis/public-apis)
- Example of AJAX request old way
```javascript
const getCountryData = function (country) {
    const uri =`https://restcountries.com/v3.1/name/${country}`;
    const request = new XMLHttpRequest();
    request.open('GET', uri);
    request.send();
    
    request.addEventListener('load', function () {
      
      //covert to json
      const [data] = JSON.parse(this.responseText);
      console.log(data);
    
      //currency
      //Object.values(data.currencies) returns an array of the values of the object
      const [{name,symbol}] = Object.values(data.currencies)
      const html = `
      <article class="country">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
        <p class="country__row"><span>💰</span>${name}, ${symbol}</p>
      </div>
      
    </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });
};

const countries = ['portugal', 'canada', 'tanzania', 'usa', 'Republic of Ireland', 'Germany', 'russia'];
countries.forEach(country => getCountryData(country));
```

## HOW WEB WORKS: REQUEST AND RESPONSE

- The web is based on a client-server architecture. Client and server communicate using the HTTP protocol, which is based on request-response pairs. 
- A request is sent from the client to the server, which then sends back a response. 
- The request contains a method (also called verb) that tells the server what to do with the resource identified in the URL. The most common HTTP method is GET, which is used to retrieve data. The response contains the requested data, as well as a status code that indicates whether the request was successful.

## CALLBACK HELL
- Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous operations one after the other.
- The code becomes unreadable and difficult to maintain.

- For example, the following code snippet shows a callback hell, where the callbacks are nested within each other.

```javascript
const renderCountryData = function (data, className = '') {
    //Object.values(data.currencies) returns an array of the values of the object
    const [{name,symbol}] = Object.values(data.currencies)

    const html = `
    <article class="country ${className}">
     <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
            <p class="country__row"><span>💰</span>${name}, ${symbol}</p>
        </div>
    <img class="arms__img" src="${data.coatOfArms.svg}" />
  </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;

};

const getCountryAndNeighborData = function (country) {
    const uri =`https://restcountries.com/v3.1/name/${country}`;
    const request = new XMLHttpRequest();
    request.open('GET', uri);
    request.send();
    
    request.addEventListener('load', function () {
      
        //covert to json
        const [data] = JSON.parse(this.responseText);
            console.log(data);

        //Render country
        renderCountryData(data);

        //Get neighbor country using AJAX call 2
        if(!data.borders) return; //for countries with no neighbors

        const [neighbor] = data.borders;
        console.log(neighbor);

        
      
        //AJAX call 2 Fetching neighbor country
        const neighborUri = `https://restcountries.com/v3.1/alpha/${neighbor}`;


        const neighborRequest = new XMLHttpRequest();
        neighborRequest.open('GET', neighborUri);
        neighborRequest.send();

        neighborRequest.addEventListener('load', function () {
            const [neighborData] = JSON.parse(this.responseText);
            console.log(neighborData);
            renderCountryData(neighborData, 'neighbour');
        });
    });
};



getCountryAndNeighborData('Thailand');
```

## PROMISES AND FETCH API
- ```A promise``` is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    - In simpler terms it is a placeholder for a future value to be returned by an asynchronous operation.
    - A response from an AJAX call is a promise.
    - Promise that you will win money in the lottery.

- A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
- ```A promise``` is in one of these states:
    - ```pending```: initial state, neither fulfilled nor rejected.
    - ```fulfilled```: meaning that the operation was completed successfully.
    - ```rejected```: meaning that the operation failed.

- ```A promise``` is settled if it’s not pending (it has been resolved or rejected). Sometimes people use resolved and settled to mean the same thing: not pending.
- For example, the following code snippet shows a promise that is resolved after 1 second.

```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 1000);
});
```
- You can either ```consume``` the promise returned from an API or ```build``` it yourself.

### Consuming Promises
- Consuming a promise means that you are using a promise returned from an API.
- A promise returns a stream of data, which you can consume using the ```then()``` method.
- You will need to pass ```response.json()``` to the response object to convert the response to JSON format for it to be readable. However .json() returns a promise, so you will need to use another ```then()``` method to consume the promise.

```javascript
fetch('https://restcountries.com/v3.1/name/Thailand')
    .then(response => response.json())
    .then(data => console.log(data));

    //Another way to write it
    const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            console.log(response);
            return response.json(); //returns a promise as well so need to chain another .then
        }).then(function (data) {
            console.log(data);
            renderCountryData(data[0]);
        });
    };
```
- You can consume a promise using the ```then()``` method. The ```then()``` method takes two arguments: a callback for success and another for failure.

### Chaining Promises
- You can chain promises using the ```then()``` method. The ```then()``` method returns a promise, which allows you to chain another ```then()``` method.
    - Hence when you return a .json() promise, you can chain another .then() method to consume the promise.
- Enables flat chain of asyncronus operations without nesting callbacks.
- Always return a promise in a .then() method to enable chaining.

```javascript
const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            return response.json(); //returns a promise as well so need to chain another .then
        }).then(function (data) {
            renderCountryData(data[0]);

            if (!data[0].borders) return;
            const neighbor = data[0].borders[0];
            console.log(neighbor);
         
            //Country 2
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            [data] = data; //destructure the array
            renderCountryData(data, 'neighbour');
        });
}

getCountryData('Japan');
```

### Handling Rejected Promises
- You can handle rejected promises using the ```catch()``` method. The ```catch()``` method takes a callback function as an argument.
- The second argument of the ```then()``` method is equivalent to the ```catch()``` method.
```.then(successCallback, failureCallback)``` is the same as ```.then(successCallback).catch(failureCallback)```.

```javascript
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            return response.json(); //returns a promise as well so need to chain another .then()
            //catch errors
        

        },err => alert(err));

        //Another way to write it
        fetch(`https://restcountries.com/v3.1/name/${country}`).then(respose => response.json(), err => alert(err));

```
- A better way of handling errors is to use the ```catch()``` method at the end of the promise chain.
  - This will catch any errors that occur in any of the promises in the chain regardless of where they occur.

```javascript
const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            return response.json(); //returns a promise as well so need to chain another .then()
            //catch errors
        

        }).then(function (data) {
            renderCountryData(data[0]);

            if (!data[0].borders) return;
            const neighbor = data[0].borders[0];
            console.log(neighbor);
         
            //Country 2
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            [data] = data; //destructure the array
            renderCountryData(data, 'neighbour');
        }).catch(function (err) {
            // alert(`${err} 💥💥💥`);
            console.error(`${err} 💥💥💥`);
            renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
        });
}
```

### FINALLY METHOD
- The ```finally()``` method is used to run a piece of code regardless of the outcome of the promise.

### THROWING ERRORS MANUALLY
- You can throw errors manually using the ```throw``` keyword.
- The ```throw``` keyword is used to throw a custom error.
- The ```throw``` keyword is used to throw an error when a condition is met.
- The ```throw``` keyword is used to throw an error when a promise is rejected.

```javascript
if (!response.ok) throw new Error(`Country not found (${response.status})`);
```
```new Error()``` is a constructor function that creates a new error object.
- This error object can be handled using the ```catch()``` method.


### ASYNCHRONUS BEHING THE SCENES: THE EVENT LOOP
- JS has one thread of execution, which means that it can only do one thing at a time.
- All assyncronus code is executed in the background, this is the ```web API environment``` not the JS engine.
    - This will enable the JS engine to continue executing the code line by line synchronusly in its callstack.
    - When the asyncronus code is done executing, it will be placed in the ```callback queue```.
        - This is an array of all the callback functions that are ready to be executed.
    - The ```event loop``` will check if the callstack is empty, if it is empty, it will take the first callback function in the callback queue and place it in the callstack to be executed. this is called ```event loop tick```.

- With the above behaviour in mind, you can see there is no concept of time in the JS engine. It doesnt know how long it takes for the asyncronus code to execute. It just knows whatever is in the callback queue, it will execute it when the callstack is empty.
- This how to JS engine can continue executing code line by line synchronusly, while executing asyncronus code in the background.
- Callback of ```promises``` is placed in the ```microtask queue``` not the callback queue.
    - This is because promises are not part of the web API environment, it is part of the JS engine.
    - The microtask queue has higher priority than the callback queue.
    - This means that the event loop will first check the microtask queue before checking the callback queue.
    - This is why promises are executed before callback functions.
    - Microtask can starve the callback queue, because the event loop will always check the microtask queue first.

    ```javascript
    console.log('Test start');
    setTimeout(() => console.log('0 sec timer'), 0);
    Promise.resolve('Resolved promise 1').then(res => console.log(res));
    console.log('Test end');

    //Filling up the microtask queue to see how it affects the callback queue
    Promise.resolve('Resolved promise 2').then(res => {
    for (let i = 0; i < 1000000000; i++) { }
    console.log(res);
    });
    ```
    - From the example, if you have 1000 callback functions in the callback queue, and 1 promise in the microtask queue, the event loop will execute the promise first before executing the callback functions regardless of the order of the callback functions in the callback queue.
    - If microtask takes too long, our setTimeout() will be delayed.
    - This is why you shouldnt use promises for long running tasks.

### BUILDING PROMISES
- You can build your own promises using the ```Promise()``` constructor function.
    - ```javascript 
        new Promise(function(resolve, reject) { ... } );
      ```
    - It takes exactly one argument, which is a callback function.
        - The callback function takes two arguments: ```resolve``` and ```reject```.
            - ```resolve``` is a function that is called when the promise is fulfilled.
            - ```reject``` is a function that is called when the promise is rejected.
            - This can be accessed using the ```then()``` and ```catch()``` methods respectively.
    - Example of a promise:
    ```javascript
    const lotteryPromise = new Promise(function (resolve, reject) {
        console.log('Lottery draw is happening 🔮');
        setTimeout(function () {
            if (Math.random() >= 0.5) {
                resolve('You WIN 💰');
            } else {
                reject(new Error('You lost your money 💩'));
            }
        }, 2000);
    });

    lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
    ```
- Promises are immediately executed, they are not placed in the callback queue.
- Promisifying is the process of converting callback based asynchronous functions into promise based asynchronous functions.
    - This is done by wrapping the callback based asynchronous function in a promise.
    - Example of promisifying setTimeout():
    ```javascript
    const wait = function (seconds) {
        return new Promise(function (resolve) {
            setTimeout(resolve, seconds * 1000);
        });
    };
    ```
    - We not adding a reject function because setTimeout() will never fail.
    - We are returning the promise so that we can chain the ```then()``` method to it.
    - Example of using the promisified setTimeout():
    ```javascript
    wait(2).then(() => {
        console.log('I waited for 2 seconds');
        return wait(1);
    }).then(() => console.log('I waited for 1 second'));
    ```
- Easy way of resolving a promise immedietly:
    ```javascript
    Promise.resolve('abc').then(x => console.log(x));
    Promise.reject(new Error('Problem!')).catch(x => console.error(x));
    ```
    ```

### PROMISIFYING THE GEOLOCATION API
- Example of promisifying the geolocation API:
```javascript
const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

getPosition().then(pos => console.log(pos));

//chain the then() method to the promise
getPosition().then(pos => {return pos.coords}).then(coords => { return coords.accuracy}).then(acc => console.log(acc));

```

### CONSUMING PROMISES WITH ASYNC/AWAIT
- ```async/await``` is a modern way of consuming promises.
    - ```async/await``` is syntactic sugar for consumming promises.
    - ```async/await``` makes code look like synchronous code.
    - ```async/await``` makes code look like it is blocking code.

Example of using ```async/await```:
```javascript
const whereAmI = async function (country) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    console.log(res);
};

whereAmI('Japan');
console.log('FIRST');

//Another way to write it
const whereAmI = async function (country) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await res.json();
    console.log(data);
};
```

- Await works like .then() method, it waits for the promise to be fulfilled.
- Anothr way to write it:
```javascript
const whereAmI = async function (country) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await res.json();
    renderCountryData(data[0]);
};
```

### ERROR HANDLING WITH TRY...CATCH
- You can handle errors using the ```try...catch``` statement.
- The ```try...catch``` statement is used to handle errors in synchronous code.
- The ```try...catch``` statement is used to handle errors in asynchronous code.

Example of using ```try...catch```:
```javascript
const whereAmI = async function (country) {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        const data = await res.json();
        renderCountryData(data[0]);
    } catch (err) {
        console.error(`${err} 💥💥💥`);
        renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    }
};
```