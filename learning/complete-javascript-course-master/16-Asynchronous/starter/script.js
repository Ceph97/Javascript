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


const country = prompt('Enter a country name');

getCountryAndNeighborData(country);