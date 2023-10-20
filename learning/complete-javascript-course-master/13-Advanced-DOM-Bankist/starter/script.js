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
    // //getBoundingClientRect() returns the size of an element and its position relative to the viewport
    // const s1coords = section1.getBoundingClientRect();

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

    // new way
    section1.scrollIntoView({ behavior: 'smooth' });
  });

  /////////////////////////////////////////////////////
  // Page navigation
  /////////////////////////////////////////////////////
  document.querySelectorAll('.nav__link').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      const id = this.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
  });

///////////////////////////////////////////////
// Event Delegation
///////////////////////////////////////////////


  // using a common parent element to handle events
  // 1. Add event listener to common parent element
  // 2. Determine what element originated the event

  document.querySelector('.nav__links')
  .addEventListener('click', function(e) {
    e.preventDefault();



    // matching strategy to check if 
    //the element clicked contains the class nav__link
    if(e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });



  /////////////////////////////////////////////////////
  // EVENT HANDLERS
  /////////////////////////////////////////////////////

  // const h1 = document.querySelector('h1');

  // // mouseenter event
  // h1.addEventListener('mouseenter', function(e) {
  //   alert('addEventListener: Great! You are reading the heading :D');
  // });

  /////////////////////////////////////////////////
  // Event propagation / Event Bubbling
  /////////////////////////////////////////////////

  // rgb(255, 255, 255)

/*  const randomInt = (min, max) => 
    Math.floor(Math.random() * (max - min + 1) + min);

  const randomColor = () => 
    `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
*/

/////////////////////////////////////////////////
// DOM Traversing
/////////////////////////////////////////////////
/*
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));

//first child
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// closest parent element with class header
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// all siblings
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el) {
  if(el !== h1) el.style.transform = 'scale(0.5)';
});
*/

/////////////////////////////////////////////////
// Tabbed component
/////////////////////////////////////////////////

// tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


//event delegation
tabsContainer.addEventListener('click', function(e) {

  //which element originated the event
  const clicked = e.target.closest('.operations__tab');

  // guard clause
  if(!clicked) return;

  // remove active classes to hide the content
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // activate tab
  clicked.classList.add('operations__tab--active');

  // activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active');
});

/////////////////////////////////////////////////
// Menu fade animation
/////////////////////////////////////////////////
const nav = document.querySelector('.nav');

const handleHover = function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

// passing arguments into event handlers
nav.addEventListener('mouseover',handleHover.bind(0.5));

// passing arguments into event handlers
nav.addEventListener('mouseout', handleHover.bind(1));


/////////////////////////////////////////////////
// Sticky navigation
/////////////////////////////////////////////////
/*
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function() {
  if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/
/////////////////////////////////////////////////
// Sticky navigation: Intersection Observer API
/////////////////////////////////////////////////
const obsCallback = function(entries, observer) {
  entries.forEach(entry => {
      // console.log(entry);
  });
};

const obsOptions = {
  root: null, // the element that is used as the viewport for checking visibility of the target. if null, the viewport is used
  threshold: 0.1, // the percentage of the target element that is visible before the callback is called
  rootMargin: '-90px', // margin around the root. values are similar to css margin property
};

const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(section1);

/////////////////////////////////////////////////
// Sticky navigation: Intersection Observer API
/////////////////////////////////////////////////
const head = document.querySelector('.header');

const stivkyNav = function(entries) {
  const [entry] = entries;

  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerOberserver = new IntersectionObserver
  (stivkyNav, {
    root: null,
    threshold: 0,
    rootMargin: '-90px'
  });

headerOberserver.observe(head);

