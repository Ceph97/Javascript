'use strict';
/***** 
// // getting elements from the DOM
// console.log(document.querySelector('.message'));
// // Then we can read the text content of the element
// console.log(displayMessage());


// // Setting the text content of the element
// /**
//  * This is a setter, because we set the value of the element
//  * We can also use this to change the value of the element in `index.html` on a class named `message`
//  */
// displayMessage() = "Correct Number! 🎉";



// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // We can also manipulate the value of an input field
// /**
//  * This is a setter, because we set the value of the element
//  * We use the `value` property to set the value of the input field
//  */
// Comment
// document.querySelector('.guess').value = 23;


// Event listener
/***
 * We use the `addEventListener` method to add an event listener to an element
 * The first argument is the event type, in this case `click`
 */

// Random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

// Score
let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;

// message
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
   const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (score > 0){
        // When there is no input using the `!` operator falsy values are converted to true
        if (!guess) {
            displayMessage("No number! ⛔️");
        
        // When player wins
        }else if (guess === secretNumber) {
            displayMessage("Correct Number! 🎉");

            // Changing the background color of the body when player wins
            document.querySelector('body').style.backgroundColor = "#60b347";
            document.querySelector('.number').style.width = "30rem";
            document.querySelector('.number').textContent = secretNumber;
            if (score > highScore) {
                document.querySelector('.highscore').textContent = score;
            }
        }
        // When guess is different either higher or lower
        else if(guess !== secretNumber) {
            displayMessage(guess > secretNumber ? 'Wrong Number! Go lower 🤦‍♂️':'Wrong Number! Go lower 🤦‍♂️'); 
            score--;
            document.querySelector('.score').textContent = score;
        }
    }else {
        displayMessage("You lost the game! 😭");
    }
});

// Resetting the game
// We jus need to reassign the value of the variables
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage("Start guessing...");
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    // Resetting the secret number to a new random number 
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});

// Handling high scores
// We need to create a variable to store the high score
