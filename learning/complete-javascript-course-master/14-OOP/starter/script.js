'use strict';
/*
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

///////////////////////////////////////
// Setters and Getters
///////////////////////////////////////
const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
}

console.log(account.latest);

account.latest = 50;

///////////////////////////////////////
// Static Methods
///////////////////////////////////////
PersonCl.hey = function () {
    console.log('Hey there 👋');
    console.log(this);
}

///////////////////////////////////////
// Object.create
///////////////////////////////////////
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.init('Steven', 1991);
steven.calcAge();
*/

////////////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
////////////////////////////////////////////////////////
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.dir(Student.prototype.constructor); // Person

// To change the constructor of the prototype
Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor); // Student


////////////////////////////////////////////////////////
//  Another Class Example
////////////////////////////////////////////////////////

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public interface
    deposit(val) {
        this._movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);