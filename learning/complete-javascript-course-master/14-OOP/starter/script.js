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

console.log(jonas.__proto__); // Person.prototype
console.log(jonas.__proto__.__proto__); // Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // null

console.log(Person.prototype.constructor); // Person

const arr = [3, 6, 4, 5, 6, 9, 3, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);

// Add new method to Array prototype
Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log(arr.unique());


///////////////////////////////////////
// ES6 Classes
///////////////////////////////////////
// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there 👋');
        console.log(this);
    }
}

const jessica = new PersonCl('Jessica Alba', 1996);
jessica.calcAge();