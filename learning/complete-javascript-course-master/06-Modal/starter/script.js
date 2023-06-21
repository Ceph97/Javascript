'use strict';
// comment
// This adds an overlay to the page when buttons is clicked

// Selecting all elements we are going to use

// code 
// Modal class has a display of none in the css file
// It is currently hidden
const modal = document.querySelector('.modal');

// Overlay class has a display of none in the css file
const overlay = document.querySelector('.overlay');

// close-modal class has a display of none in the css file
const btnCloseModal = document.querySelector('.close-modal');

// comment
// selecting all the buttons
/**
 * querySelectorAll returns a node list (like an array) of all the elements that match the selector
 * querySelector returns the first element that matches the selector
 * If you want to select multiple elements, use querySelectorAll
 */
// code
const btnsOpenModal = document.querySelectorAll('.show-modal');



for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log(`Button ${i+1} clicked`);

    // Removing the hidden class from the modal and overlay
    modal.classList.remove('hidden');

    overlay.classList.remove('hidden');
  });
}

// function to close the modal
function closeModal() {
    // Adding the hidden class to the modal and overlay
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Event listener for the close the overlay button
// Notice that we are not calling the function closeModal
// We are passing the function closeModal as an argument
btnCloseModal.addEventListener('click', closeModal);

// Event listener for the overlay itself
// If overlay is clicked, the modal will close
overlay.addEventListener('click', closeModal);

//comment
// Event listener for the escape keyboard event
/**
 * 
 */

document.addEventListener('keydown', function (event){
    console.log(event);
    console.log(event.key);

    // if the escape key is pressed and the modal does not have the hidden class
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }

});