'use strict';

// getting elements from the DOM
console.log(document.querySelector('.message'));
// Then we can read the text content of the element
console.log(document.querySelector('.message').textContent);


// Setting the text content of the element
/**
 * This is a setter, because we set the value of the element
 * We can also use this to change the value of the element in `index.html` on a class named `message`
 */
document.querySelector('.message').textContent = "Correct Number! 🎉";


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// We can also manipulate the value of an input field
/**
 * This is a setter, because we set the value of the element
 * We use the `value` property to set the value of the input field
 */
document.querySelector('.guess').value = 23;

// Event listener
/***
 * We use the `addEventListener` method to add an event listener to an element
 * The first argument is the event type, in this case `click`
 */

document.querySelector('.check').addEventListener('click', function () {
   const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input using the `!` operator falsy values are converted to true
    if (!guess) {
        document.querySelector('.message').textContent = "No number! ⛔️";
    }
});