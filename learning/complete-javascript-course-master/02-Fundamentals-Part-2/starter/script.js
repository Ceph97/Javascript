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
