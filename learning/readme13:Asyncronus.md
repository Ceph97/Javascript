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
