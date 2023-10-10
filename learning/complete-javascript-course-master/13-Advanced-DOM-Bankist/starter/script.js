'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  // prevent default behaviour
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Lecture
///////////////////////////////////////

// Selecting elements
const header = document.querySelector('.header');

/////////////////////////////////////////////////
// inserting cookies message
/////////////////////////////////////////////////

const message = document.createElement('div');

// Add class to the element
message.classList.add('cookie-message');

// Insert text content into the element
message.textContent = 'We use cookies for improved functionality and analytics.';

// we can also use innerHTML to insert HTML content
message.innerHTML = `
      We use cookies for improved functionality and analytics. 
      <button class="btn btn--close-cookie">Got it!</button>
      `;

// Insert the element into the DOM at the end of the header
header.append(message);

// remove element from the DOM after ok button is clicked
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();

    //USING THE OLD WAY
    // message.parentElement.removeChild(message);
  });

  /////////////////////////////////////////////////////
  // Styles
  /////////////////////////////////////////////////////

  // set inline style for cookie message
  message.style.backgroundColor = '#37383d';
  message.style.width = '120%'; // this will be converted to inline style

  // get the style of the element
  console.log(getComputedStyle(message).color);

  message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

  // set css variable
  document.documentElement.style.setProperty('--color-primary', 'orangered');


  /////////////////////////////////////////////////////
  // Smooth scrolling
  /////////////////////////////////////////////////////
  const btnScrollTo = document.querySelector('.btn--scroll-to'); //learn more button
  const section1 = document.querySelector('#section--1'); // section 1

  btnScrollTo.addEventListener('click', function(e) {
    //getBoundingClientRect() returns the size of an element and its position relative to the viewport
    const s1coords = section1.getBoundingClientRect();

    // console.log(s1coords);

    // console.log(e.target.getBoundingClientRect()); // get the size of the button

    // // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

    // // you can also get the height and width of the viewport
    // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

    // // // Scrolling
    // // window.scrollTo(s1coords.left + window.pageXOffset,
    // //                 s1coords.top + window.pageYOffset);
    // // // old way
    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset, 
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth'
     
    // });

    // // new way
    section1.scrollIntoView({ behavior: 'smooth' });
  });