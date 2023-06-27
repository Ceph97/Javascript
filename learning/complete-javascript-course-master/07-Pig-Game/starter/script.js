'use strict';

// comment
/**
 * getElement by id is faster than querySelector
 *  */
// code
// player 0 and player 1
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// Selecting using id
const score0El = document.querySelector('#score--0');
// Selecting using id
const score1El = document.getElementById('score--1');
// Hide the dice buy adding the hidden class in css
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Selecting buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Initial score
score0El.textContent = 0;
score1El.textContent = 0;
// hide the dice
diceEl.classList.add('hidden');


// for the variables to be accessible outside the function
let scores, currentScore, activePlayer, playing;
// init function
const init = function () {
    // Current score
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    // hide the dice
    diceEl.classList.add('hidden');

    // reset player 0 and player 1
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

// call the init function to initialize the game
init();
    

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // toggle is used to add or remove a class
    player0El.classList.toggle('player--active');       
};

// code for rolling the dice
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 2. Display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // 3. Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;

            document.getElementById(
                `current--${activePlayer}`
            ).textContent = currentScore;

            //current0El.textContent = currentScore; // Change later
        }else {
            // Switch to next player
            switchPlayer();
    
        }
    }
});

//code for holding the score button
btnHold.addEventListener('click', function () {
    if (playing) {

        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 20) {
            playing = false;
            // Hide the dice if the player wins
            diceEl.classList.add('hidden');
            // Finish the game
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }else {
        // 4. Switch to the next player
            switchPlayer();
        }
    }

});

// code for resetting the game
btnNew.addEventListener('click', function () {
    init();
});