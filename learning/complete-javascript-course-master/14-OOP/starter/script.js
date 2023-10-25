'use strict';

///////////////////////////////////////
// Constructor Functions and the new Operator
///////////////////////////////////////
function Person(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // }
}

// 1. new Object() is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

///////////////////////////////////////
// Prototypes
///////////////////////////////////////
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

console.log(jonas.calcAge());