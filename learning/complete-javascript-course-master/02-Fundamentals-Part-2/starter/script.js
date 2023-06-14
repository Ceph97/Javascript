// STRICT MODE
/**
 * 1. Prevents us from accidentally creating global variables
 * 2. Prevents us from using reserved keywords as variable names
 * 3. Makes it easier for us to write "secure" JavaScript
 * 4. Strict mode forbids us to do certain things
 * 5. Strict mode makes it easier for the JavaScript engine to do certain optimizations
 */
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; 
// if (hasDriversLicense) console.log('I can drive :D');

// prevent us from using reserved keywords as variable names etc.
//const interface = 'Audio';


// FUNCTIONS
/**
 * 1. A function is a piece of code that we can reuse over and over again
 * 2. A function is a value
 * 3. A function is an object
 * 4. A function is a first-class citizen
 * 5. A function is a callable object
 * 
 * 1. Functions allow us to write reusable, modular code
 * 
 * 2. We use functions to implement the DRY principle*/

function logger() {
    console.log('My name is Jonas');
}

// logger(); // calling / running / invoking function


// Example 2
function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
// fruitProcessor(5, 0);
// console.log(fruitProcessor(5, 0));

// Function declaration vs. function expression

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);


// ARROW FUNCTIONS
birthYear => 2037 - birthYear;


// Calling functions inside functions
console.log(`=========Calling functions inside functions=========`);
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} slices of apples and ${orangePieces} slices of oranges.`;
    return juice;
}

// console.log(fruitProcessor(2, 3));

///////////////////////////////////////////////
//                ARRAYS                    //
///////////////////////////////////////////////

// 1. Arrays are a data structure
// 2. Arrays are a big container where we can dump variables

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// 1. Arrays are 0-based
console.log(friends[0]);

//length property
console.log(friends.length);

//last element
console.log(friends[friends.length - 1]);

//change element
friends[2] = 'Jay';
console.log(friends);

// Arrays can hold different data types
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Array methods

// push method
/**
 * 1. push method adds elements to the end of an array
 * 2. push method returns the new length of the array
 */
const friends2 = ['Michael', 'Steven', 'Peter'];
const newLength = friends2.push('Jay');

console.log(friends2);
console.log(newLength);

// pop method
/**
 * 1. pop method removes the last element of an array
 * 2. pop method returns the removed element
*/
console.log(`Pop element: ${friends2.pop()}`); // Last
console.log(friends2);

// unshift method
/**
 * 1. unshift method adds elements to the beginning of an array
*/
const friends3 = ['Michael', 1, 29, 'Steven', 'Peter'];
const newLength3 = friends3.unshift('John');

console.log(friends3);
console.log(newLength3);

//Index of
/**
 * 1. indexOf method returns the index of the element
 * 2. indexOf method returns -1 if the element is not in the array
*/

console.log(` Index of Steven is ${friends3.indexOf('Steven')}`);

// includes
/**
 * 1. includes method returns true if the element is in the array
*/

console.log(`Steven is in the array "include()": ${friends3.includes('Steven')}`);



///////////////////////////////////////////////
//                OBJECTS                   //
///////////////////////////////////////////////
console.log(`=========OBJECTS=========`);
/**
 * 1. Objects are another data structure
 * 2. Objects are a big container where we can dump variables in a key-value pair
*/

const jonasObject = {
firstName: 'Jonas',
lastName: 'Schmedtmann',
age: 2037 - 1991,
job: 'teacher',
friends: ['Michael', 'Peter', 'Steven']
};

// Dot vs. Bracket notation
console.log(`=========Dot vs. Bracket notation=========`);
// Dot notation
console.log(jonasObject.lastName);

// Bracket notation
console.log(jonasObject['lastName']);
console.log(jonasObject.friends[1]);


// Object methods
console.log(`=========Object methods=========`);
const jonasObject2 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function (birthYear) {
        return 2037 - birthYear;
    }
};

console.log(jonasObject2.calcAge(jonasObject2.birthYear));
console.log(jonasObject2['calcAge'](jonasObject2['birthYear']));



///////////////////////////////////////////////
//                LOOPS                      //
///////////////////////////////////////////////

// for loop keeps running while condition is TRUE
console.log(`=========for loop keeps running while condition is TRUE=========`);

console.log(friends3)

//Empty array
const types = {};

// Adding objects to the array

for (let i = 0; i < friends3.length; i++) {
    console.log(friends3[i],typeof(friends3[i]));
    types[friends3[i]] = typeof(friends3[i]) ;
}

console.log(types);

//example 2
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(`ages are ${ages}`);

// continue and break
console.log(`=========continue and break=========`);
console.log(`=========continue=========`);
for (let i = 0; i < friends3.length; i++) {
    if (typeof friends3[i] !== 'string') continue;
    console.log(friends3[i],typeof(friends3[i]));
}

console.log(`=========break=========`);
for (let i = 0; i < friends3.length; i++) {
    if (typeof friends3[i] !== 'string') break;
    console.log(friends3[i],typeof(friends3[i]));
}

// Looping backwards
console.log(`=========Looping backwards=========`);
for (let i = friends3.length - 1; i >= 0; i--) {
    console.log(friends3[i]);
}

// Loop inside a loop
// For each repetition of the outer loop, the inner loop will run completely n amount of times
console.log(`=========Loop inside a loop=========`);
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`=========Starting exercise ${exercise}=========`);
    for (let rep = 1; rep < 4; rep++) {
        console.log(`   Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏿`);
    }
}

// While loop
console.log(`=========While loop=========`);

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weight repetition ${rep} 🏋🏿`);
    rep++;
}
console.log(`\n`)

// Random dice roll
console.log(`=========Random dice roll=========`);
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}


// let x = 0;
// while(x < 10) {
//     console.log(`x is ${x}`);
    
//     x++;
// }

// fixme

// bug 

// comment


