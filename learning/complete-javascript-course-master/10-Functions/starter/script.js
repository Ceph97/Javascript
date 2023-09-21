'use strict';

console.log('--- 10. Functions ---');

const bookings = [];

// you can compute the default value of a function parameter only with params/default values set before it. in order
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123');

// How passing arguments works: value vs reference
console.log('--- How passing arguments works: value vs reference ---');

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    
    if (passenger.passport === 24739479284) {
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);


// FIRST-CLASS AND HIGHER-ORDER FUNCTIONS
console.log('--- FIRST-CLASS AND HIGHER-ORDER FUNCTIONS ---');

console.log('|--- Functions accepting callback functions ---');

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
//   name is a property of the function object
  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
console.log('---');
transformer('JavaScript is the best!', oneWord);


// JS uses callbacks all the time
const high5 = function () {
    console.log('👋');
    };

// document.body.addEventListener('click', high5);

// Functions returning functions
console.log('--- Functions returning functions ---');

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey'); // this is a function

greeterHey('Jonas'); // this is the inner function

greet('Hello')('Jonas'); // this is the same as the above