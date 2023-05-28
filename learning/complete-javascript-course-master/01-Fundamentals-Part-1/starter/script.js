// VARIABLES AND VALUES

// DATA TYPES
/*
value can be primitive or object
primitive data types: number, string, boolean, undefined, null, symbol, bigint

    +++++++++++++++
    let age = 30;
    let firstName = "Jonas";
    let isMarried = false;
    +++++++++++++++

object data types: object literal, array, function, date, etc.
    +++++++++++++++
    let me = {
        name: "Jonas"
    };
    +++++++++++++++
*/

// let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

// console.log(40 + 8 + 23 - 9);

// let firstName = "Jonas";
// console.log(firstName);

// let JavaScriptIsFun = true;
// // typeof operator, returns the type of the value
// console.log(typeof JavaScriptIsFun);

const yearCur = 2023;
const dob = 1991;
console.log("The year is "+ (yearCur - dob));


// String and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2021;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

// Template literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

// Conditional Statements
const age = 10;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving license 🚗");
}else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}