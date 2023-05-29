// // VARIABLES AND VALUES

// // DATA TYPES
// /*
// value can be primitive or object
// primitive data types: number, string, boolean, undefined, null, symbol, bigint

//     +++++++++++++++
//     let age = 30;
//     let firstName = "Jonas";
//     let isMarried = false;
//     +++++++++++++++

// object data types: object literal, array, function, date, etc.
//     +++++++++++++++
//     let me = {
//         name: "Jonas"
//     };
//     +++++++++++++++
// */

// // let js = "amazing";
// // if (js === "amazing") alert("JavaScript is FUN!");

// // console.log(40 + 8 + 23 - 9);

// // let firstName = "Jonas";
// // console.log(firstName);

// // let JavaScriptIsFun = true;
// // // typeof operator, returns the type of the value
// // console.log(typeof JavaScriptIsFun);

// const yearCur = 2023;
// const dob = 1991;
// console.log("The year is "+ (yearCur - dob));


// // String and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2021;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(jonas);

// // Template literals
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

// // Conditional Statements
// const age = 10;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log("Sarah can start driving license 🚗");
// }else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// // False values: 0, '', undefined, null, NaN

// console.log(`Falsy values in JavaScript: 0, '', undefined, null, NaN`);
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//     console.log("Don't spend it all ;)");
// }else {
//     console.log("You should get a job!");
// }


// // checking if a variable is defined
// let height;
// // Since height is not defined, it will return false as UNDEFINED is a falsy value
// if (height) {
//     console.log("YAY! Height is defined");
// }else {
//     console.log("Height is UNDEFINED");
// }

// // Equality Operators == vs === //
// /**
//  * == does type coercion
//  * === does not do type coercion
//  * 
//  */
// const ageNew = "18";
// if (ageNew === 18) console.log("You just became an adult :D (strict)");



// // PROMPT //
// /**
//  * Gets user input from a prompt dialog.
//  */
// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);


// // Different Operators //
// /**
//  * !== does not do type coercion (strict version of !=)
//  * != does type coercion
//  */
// if (favorite !== 23) console.log("Why not 23?");


// // LOGICAL OPERATORS //
// /**
//  * && AND
//  * || OR
//  * ! NOT
//  */

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);



// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// }else {
//     console.log("Someone else should drive...");
// }


// SWITCH STATEMENT //
/**
 * Use switch statement when you have a lot of different cases
 * It does strict comparison
 */
const day = "wednesday";

switch (day) {
    case "monday": // day === "monday"
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;

    case "tuesday":
        console.log("Prepare theory videos");
        break;

    case "wednesday":break;

    case "thursday":
        console.log("Write code examples");
        break;

    case "friday":
        console.log("Record videos");
        break;

    case "saturday":break;

    case "sunday":
        console.log("Enjoy the weekend :D");
        break;

    default: // else, when none of the cases match
        console.log("Not a valid day!");
}


// STATEMENTS AND EXPRESSIONS //
/**
 * Expression: A piece of code that produces a value
 * Statement: A bigger piece of code that is executed and which does not produce a value on itself
 */




// Conditional (ternary) operator //
/** 
 * The conditional operator is the only operator which has 3 operands
 * It is a shortcut to the if statement
 */

const age = 23;
age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink water 💧");

// condition ? case1 : case2;