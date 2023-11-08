'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

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
    // countriesContainer.style.opacity = 1;

};

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
};


///////////////////////////////////////
// Promises and the Fetch API
///////////////////////////////////////


const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(function (response) {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });

 };



 const getCountryData = function (country) {

    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(function (data) {
        renderCountryData(data[0]);

        if (!data[0].borders) throw new Error(`${country} does not have neighbors!`);

        const neighbor = data[0].borders[0];
        console.log(neighbor);
     
        //Country 2
        return getJSON(`https://restcountries.com/v3.1/alpha/${neighbor}`,'Country not found');
    }).then(function (data) {
        [data] = data; //destructure the array
        renderCountryData(data, 'neighbour');
    }).catch(function (err) {
        // alert(`${err} 💥💥💥`);
        console.error(`${err} 💥💥💥`);
        renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    }).finally(function () {
        countriesContainer.style.opacity = 1;
    });
}


btn.addEventListener('click', function () {
    getCountryData('Japan');
});


/*

const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            if (!response.ok) throw new Error(`Country not found (${response.status})`);

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
        }).finally(function () {
            countriesContainer.style.opacity = 1;
        });
}
*/


/*
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


// let country = prompt('Enter a country name');
const country = "Malawi";
getCountryAndNeighborData(country);
*/