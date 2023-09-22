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

// transformer('JavaScript is the best!', upperFirstWord);
// console.log('---');
// transformer('JavaScript is the best!', oneWord);


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

// greeterHey('Jonas'); // this is the inner function

// greet('Hello')('Jonas'); // this is the same as the above

//THE CALL AND APPLY METHODS
console.log('--- THE CALL AND APPLY METHODS ---');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
        
        // book: function () {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// DOES NOT WORK
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);


//more objects
const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Bind method
console.log('--- Bind method ---');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// with event listeners
lufthansa.planes = 300;
//You can add a field to an object using object.field = value
lufthansa.airport = "Frankfurt Airport";

lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// immediately invoked function expressions (IIFE)
console.log('--- immediately invoked function expressions (IIFE) ---');

// This is not IIFE
const runOnce = function () {
    console.log('This will never run again');
};runOnce();

// This is IIFE
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();

// CLOSURES
console.log('--- CLOSURES ---');

const secureBooking = function () {
    let passengerCount = 0;
    
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
};

const booker = secureBooking();