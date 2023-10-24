## ADVANCED DOM MANIPULATION

## HOW DOM WORKS BEHIND THE SCENES
- Interface between JS and browser
- DOM tree is generated from an HTML document

1. NODES
- Every HTML element is a node
- Text inside HTML elements are also nodes
- Comments are also nodes
- Node contains all the information about the element
   - Element's
        - ID
        - Class
        - Attributes
        - Text content
        - Children
    - Text
    - Comment
    - Document
- All children inherit properties from their parents
- Event target is also a node:
    - Event target is the element on which the event occured
    - It sits at the very top of the DOM tree and is called the root node
    - It access the node and the window object

### SELECTING ELEMENTS
1. Special methods:
    - These methods are part of the document object and do not require a query selector
        - ```document.documentElement```
            - Selects the entire HTML document
        - ``document.head``
            - Selects the head element
        - ```document.body```
            - Selects the body element

2. Selecting elements:
    - ```document.querySelector()```
        - Selects the first element that matches the selector.
        - Accepts any CSS selector ```.seletor```, ```#selector```.
        - Returns null if no element found.

    - ```document.querySelectorAll()```
        - Selects all the elements that match the selector, returns a node list.
    
    - ```document.getElementById()```
        - Selects the element with the specified ID.
        - Returns null if no element found.
        - ID must be unique.
    
    - ```document.getElementsByClassName()```
        - Selects all the elements with the specified class.
    
    - ```document.getElementsByTagName()```
        - Selects all the elements with the specified tag name.
        - Returns a HTML collection, which is live (updates automatically) This behaviour is different from node list.

3. Creating and inserting elements:
    - ```document.createElement()```
        - Creates a new element tags.
        - Does not insert it into the DOM.
        - Returns the new element. You can use the newly created element to insert it into the DOM.
    
        ```javascript
        const message = document.createElement('div');

        // Add class to the element
        message.classList.add('cookie-message');

        // Insert text content into the element
        message.textContent = 'We use cookies for improved functionality and analytics.';

        // we can also use innerHTML to insert HTML content
        message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

        // Insert the element into the DOM
        //prepend adds the element as the first child of the parent
        header.prepend(message);

        //append adds the element as the last child of the parent
        header.append(message);

        //cloneNode() clones the element and returns the new element, the original element is not changed and can be used again to insert into the DOM
        header.append(message.cloneNode(true));


        //before() inserts the element as a previous sibling
        header.before(message);

        //after() inserts the element as a next sibling
        header.after(message);

        //remove() removes the element from the DOM
        document.querySelector('.btn--close-cookie').addEventListener('click', function() {
            message.remove();
        });

        //Before remove() was introduced, we had to use the parent element to remove the child element
        message.parentElement.removeChild(message);
        

        ```

    - ```document.insertAdjacentHTML()```
        - Inserts a string as HTML into the DOM.
        - Does not return anything.
        - ```'beforebegin'```
            - Inserts the HTML string as a previous sibling.
        - ```'afterbegin'```
            - Inserts the HTML string as the first child.
        - ```'beforeend'```
            - Inserts the HTML string as the last child.
        - ```'afterend'```
            - Inserts the HTML string as a next sibling.
        ```javascript
        const header = document.querySelector('.header');
        const message = `
        <div class="cookie-message">
            We use cookies for improved functionality and analytics.
            <button class="btn btn--close-cookie">Got it!</button>
            </div>`
        header.insertAdjacentHTML('afterbegin', message);
        ```
4. Deleting elements:
    - ```remove()```
        - Removes the element from the DOM.
        - Does not return anything.

    - ```removeChild()```
        - Removes a child element from the DOM.
        - Returns the removed child element.
        - Requires a parent element to be called on.
        - Requires the child element to be passed in as an argument.
        ```javascript
        // Remove the element
        message.remove();

        // Remove the child element
        message.parentElement.removeChild(message);
        ``` 

5. Styling elements:

    - ```style```
        - Can only access inline styles.
        - Can only access styles that are set in the HTML document.
        - Returns an empty string if style is not set in the HTML document.
        ```javascript
        console.log(message.style.color); // returns empty string

        //to get the color set in the CSS document, use getComputedStyle()
        console.log(getComputedStyle(message).color); // returns the color set in the CSS document
        //getComputedStyle() returns a CSSStyleDeclaration object which contains all the styles set in the CSS document

        console.log(message.style.backgroundColor); // returns the color set in the HTML document
        ```

        - Can only access styles that are set in the style attribute.
        ```javascript

        // Set the style
        message.style.backgroundColor = '#37383d';
        message.style.width = '120%';
        ```
        - We can use ```setProperty()``` to set the style and ```getPropertyValue()``` to get the style
        
        ```javascript
        //document.documentElement is the root element containing the entire HTML document
        // root css element is the element at the very top of the DOM tree
        document.documentElement.style.setProperty('--color-primary', 'orangered');

        //root css:
        :root {
            --color-primary: #5ec576;
            --color-secondary: #ffcb03;
            --color-tertiary: #ff585f;
            --color-primary-darker: #4bbb7d;
            --color-secondary-darker: #ffbb00;
            --color-tertiary-darker: #fd424b;
            --color-primary-opacity: #5ec5763a;
            --color-secondary-opacity: #ffcd0331;
            --color-tertiary-opacity: #ff58602d;
            --gradient-primary: linear-gradient(to top left, #39b385, #9be15d);
            --gradient-secondary: linear-gradient(to top left, #ffb003, #ffcb03);
            }
        ```
    
        
6. Working with Attributes:
    - Attributes contain extra information about an element.
    - Attributes are not the same as properties.
    - Attributes are defined in the HTML document.
    - Properties are defined in the DOM.
    - Non-standard attributes are not accessible through the DOM, hence we use ```getAttribute()``` to access them.
    - Examples of attributes:
        - ```src```
        - ```alt```
        - ```class```
        - ```id```
        - ```href```
        - ```designer``` // you can create your own attributes
  


    ```javascript
    const logo = document.querySelector('.nav__logo');
    console.log(logo.alt); // returns the alt attribute
    console.log(logo.src); // returns the src attribute
    console.log(logo.className); // returns the class attribute

    //to get the non-standard attributes, use getAttribute()
    console.log(logo.getAttribute('designer')); // returns the value of the designer attribute
    
    //to set the attribute, use setAttribute()
    logo.setAttribute('company', 'Bankist');

    logo.alt = 'Beautiful minimalist logo'; // sets the alt attribute to the new value
 
    ```

7. Data attributes:
    - Data attributes are used to store data in the HTML document.
    - Data attributes are accessible through the DOM.
    - Data attributes are prefixed with ```data-```.
    - Data attributes are camelCased in the DOM where there is a hyphen.
    - They are used to store data that is not visible to the user.

    ```javascript
    //HTML
    <a class="nav__link nav__link--btn" href="#" data-version-number="3">Sign up</a>

    //JS
    console.log(logo.dataset.versionNumber); // returns the value of the data-version-number attribute
    ```

8. Classes:
    - Classes are used to style elements.
    ```javascript
    //to add a class, use classList.add()
    logo.classList.add('c', 'j'); // adds the classes c and j to the element

    //to remove a class, use classList.remove()
    logo.classList.remove('c', 'j'); // removes the classes c and j from the element

    //to toggle a class, use classList.toggle()
    logo.classList.toggle('c'); // if the class c is present, it will be removed, if it is not present, it will be added

    //to check if a class is present, use classList.contains()
    logo.classList.contains('c'); // returns true if the class c is present, returns false if the class c is not present

    //don't use className to add or remove classes, it will overwrite all the classes
    logo.className = 'jonas'; // this will overwrite all the classes
    ```


## EVENTS TYPES AND EVENT HANDLERS
- Signals that something has happened on the webpage.
- We can react to events by using event handlers.
- How to listen for events:
    - Inline event handlers:
        - Inline html event handlers are not recommended.
        ```javascript
        <button onclick="alert('Hello World!')">Click me!</button>

        //onmouseenter
        h1.onmouseenter = function(e) {
            alert('Hello World!');
        }
        ```
    - Traditional event handlers
        ```javascript
        const btn = document.querySelector('.btn--close-cookie');
        btn.onclick = function() {
            alert('Hello World!');
        }
        ```
    - Modern event handlers
        - Preferred method of adding event handlers, allows us to add multiple event handlers to the same element.
        ```javascript
        const btn = document.querySelector('.btn--close-cookie');
        btn.addEventListener('click', function() {
            alert('Hello World!');
        });

        //multiple event handlers
        btn.addEventListener('click', function() {
            alert('Hello World!');
        });

        const alertH1 = function() {
            alert('Hello World!');
        }

        btn.addEventListener('click', alertH1);

        //remove event handler
        btn.removeEventListener('click', alertH1);

        // Add event handler to multiple elements afer timeout
        btn.addEventListener('click', alertH1);


        ```
    - Event listeners
        ```javascript
        const btn = document.querySelector('.btn--close-cookie');
        btn.addEventListener('click', function() {
            alert('Hello World!');
        });
        ```
    
    ### EVENT PROPAGATION: BUBBLING AND CAPTURING
    - Event propagation is the process of an event bubbling up through the DOM tree.
    - Event propagation has 3 phases:
        - Capturing phase
            - The event is captured on the root element.
            - The event goes down to the target element down the DOM tree passing through all the parent elements.
            - By default, event handlers are not attached to the capturing phase. but you can attach them using ```addEventListener()``` and passing in a third argument ```true```.
        - Target phase
            - The event reaches the target element.
            - The actual event are handled in this phase.
        - Bubbling phase
            - The event bubbles up from the target element up the DOM tree passing through all the parent elements until it reaches the root element.
            - When an event bubbles up, it triggers all the event handlers on the parent elements as if the event was triggered on the parent element.
            - For example, if we have a button inside a div, and we click on the button, the event will bubble up to the div and trigger the event handler on the div as if the event was triggered on the div.
            - To prevent the event from bubbling up, we can use ```e.stopPropagation()```.
                - This will prevent the event from bubbling up to the parent elements.
                - Its not recommended to use ```e.stopPropagation()``` because it makes the code harder to maintain.
            - To check which element triggered the event, we can use ```e.target```.
            - To check which element the event handler is attached to, we can use ```e.currentTarget```. The currentTarget is the original element on which the event handler is attached to.

    - EXAMPLE:
        ```javascript
        //HTML
        <div class="nav">
            <ul class="nav__links">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </div>
        
        //JS

        // Generate random color
        const randomInt = (min, max) => 
            Math.floor(Math.random() * (max - min + 1) + min);

        const randomColor = () => 
            `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

        // Event propagation: Bubbling and capturing
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
        ```
    ### EVENT DELEGATION
    - Event delegation is the process of attaching an event handler to a parent element and waiting for the event to bubble up to the parent element.
    - For example in a Nav bar, we can attach an event handler to the common parent element and wait for the event to bubble up to then we can determine where the event happen by using ```e.target```.
    - This is efficient way of adding event handlers to multiple elements. instead of adding event handlers to each element, we can add one event handler to the parent element.
    - This is useful when we have an element with lots of child elements that we want to add event handlers to.
    - It is not recommended to use event delegation when we have an element with lots of child elements that we don't want to add event handlers to.
    - Also not recommended to use event delegation when we have an element with lots of child elements that we want to add event handlers to but we want to add different event handlers to each element.

    - We can also use event delegation to add event handlers to elements that are not yet in the DOM. For example elements that are dynamically added to the DOM during runtime.
        - As we know, event handlers are not attached to elements that are not yet in the DOM.

        ```javascript
        //HTML
        <div class="nav">
            <ul class="nav__links">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </div>

        //JS
        //calling event for each element
        //this is not efficient
          document.querySelectorAll('.nav__link').forEach(function(el){
                el.addEventListener('click', function(e) {
                e.preventDefault();
                const id = this.getAttribute('href');
                document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
                });
            });

        //USING EVENT DELEGATION
            // using a common parent element to handle events
            // 1. Add event listener to common parent element
            // 2. Determine what element originated the event
        document.querySelector('.nav__links').addEventListener('click', function(e) {
            e.preventDefault();
            // matching strategy to check if 
            //the element clicked contains the class nav__link
            if(e.target.classList.contains('nav__link')) {
            const id = e.target.getAttribute('href');
            document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
            }
        });
        ```
    ### DOM TRAVERSING
    - Moving up and down the DOM tree.
    ```javascript
    //DOM traversing
    const h1 = document.querySelector('h1');
    
    // Going downwards: child
    console.log(h1.querySelectorAll('.highlight'));
    
    console.log(h1.childNodes); // returns a node list of all the child nodes

    console.log(h1.children); // returns a HTML collection of all the child elements. HTML collection is live, it updates automatically

    h1.firstElementChild.style.color = 'white'; // changes the color of the first child element
    
    ```
    - You can get the first and last child element using ```firstElementChild``` and ```lastElementChild```.
    - You can get the closest parent element using ```closest()```.
    - We can use ```parentElement``` and ```parentNode``` to get the parent element.
    ```javascript
    // Going upwards: parents
    console.log(h1.parentNode); // returns the parent node
    console.log(h1.parentElement); // returns the parent element
    ```

    - We can select sibling elements using ```nextElementSibling``` and ```previousElementSibling```.
      - We can select sibling nodes using ```nextSibling``` and ```previousSibling```.
      - Sibling nodes include text nodes.
    ```javascript
    // Going sideways: siblings
    console.log(h1.previousElementSibling); // returns the previous sibling element
    console.log(h1.nextElementSibling); // returns the next sibling element
    console.log(h1.previousSibling); // returns the previous sibling node
    console.log(h1.nextSibling); // returns the next sibling node
    ```

### BUILDING A TAB COMPONENT
- A tab component is a component that allows us to switch between different sections of content.
- We can use event delegation to add event handlers to the tab buttons.
- We can use ```closest()``` to get the closest parent element.
- We can use ```dataset``` to get the data attributes.
- We can use ```classList``` to add and remove classes.
- We can use ```forEach()``` to loop through a node list.
- We can use ```addEventListener()``` to add event handlers.
- We can use ```querySelectorAll()``` to select multiple elements.

    ```javascript
    //HTML
    <div class="operations__tab-container">
            <button class="btn operations__tab operations__tab--1 operations__tab--active" data-tab="1">
                <span>01</span>Instant Transfers
            </button>
            <button class="btn operations__tab operations__tab--2" data-tab="2">
                <span>02</span>Instant Loans
            </button>
            <button class="btn operations__tab operations__tab--3" data-tab="3">
                <span>03</span>Instant Closing
            </button>
            </div>

    //JS
    // Tabbed component
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

    // remove active classes to hide content
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    // activate tab
    clicked.classList.add('operations__tab--active');

    // activate content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
    });
    ```

### PASSING ARGUMENTS TO EVENT HANDLERS

- We can pass arguments to event handlers by using an anonymous function.
- We will use menu fade animation as an example.
- We can use ```bind()``` to pass arguments to event handlers.
    - Bind returns a new function with the arguments passed in.
    - Bind does not call the function, it only returns a new function.
    - We will need to add the ```this``` keyword to the function to make it work.

    ```javascript
    //HTML
    <nav class="nav">
            <img src="img/logo.png" alt="Bankist logo" class="nav__logo" id="logo">
            <ul class="nav__links">
                <li class="nav__item">
                    <!-- #section--1 are called anchors -->
                    <a class="nav__link" href="#section--1">Features</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#section--2">Operations</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link" href="#section--3">Testimonials</a>
                </li>
                <li class="nav__item">
                    <a class="nav__link nav__link--btn btn--show-modal" href="#">Open account</a>
                </li>
            </ul>
        </nav>

    //JS

    // Handler function can only take one argument which is the event object
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
    //if you want to pass multiple args to bind, you can pass them in as an array

    nav.addEventListener('mouseover',handleHover.bind(0.5));

    // passing arguments into event handlers
    nav.addEventListener('mouseout', handleHover.bind(1));

    ```

### IMPLEMENTING A STICKY NAVIGATION: THE SCROLL EVENT
- We can use the scroll event to implement a sticky navigation.
- We set the position of the navigation to ```fixed``` when the scroll position is greater than the initial position of the navigation.
- We can use ```getBoundingClientRect()``` to get the position of an element relative to the viewport.
- We can use ```pageYOffset``` to get the scroll position.
- We can use ```scrollY``` to get the scroll position.
- We can use ```scrollTo()``` to scroll to a specific position.
- We can use ```scrollIntoView()``` to scroll to a specific element.

```javascript
//JS
// Sticky navigation
const nav = document.querySelector('.nav');
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function() {
  if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
```
- Using the above method to implement a sticky navigation is not efficient because the scroll event is fired a lot of times.
    - This can cause performance issues especially on mobile devices.

### A BETTER WAY OF IMPLEMENTINS STICKY NAV: THE INTERSECTION OBSERVER API
- The intersection observer API is a new API that allows us to observe changes to the way a target element intersects another element or the way it intersects the viewport.
- The intersection observer API is an alternative to the scroll event.
- The intersection observer API is more efficient than the scroll event.
- The intersection observer API is an asynchronous API.
- The intersection observer API is used to implement lazy loading of images.
    - To use the intersection observer API, we need to create an observer object and pass in a callback function.
    ```javascript
    //JS
    const observer = new IntersectionObserver(obsCallback, obsOptions);
    ```
    - ```obsCallback``` is the callback function that is called whenever the observed element intersects the target element or the viewport.
    - ```obsOptions``` is an object that contains the options for the observer.

    ```javascript
        const section1 = document.querySelector('#section--1'); // section 1

        //JS
        const obsCallback = function(entries, observer) {
            entries.forEach(entry => {
                console.log(entry);
            });
        };


        const obsOptions = {
            root: null, // the element that is used as the viewport for checking visibility of the target. if null, the viewport is used
            threshold: 0.1, // the percentage of the target element that is visible before the callback is called
            rootMargin: '-90px', // margin around the root. values are similar to css margin property
        };

        const observer = new IntersectionObserver(obsCallback, obsOptions);

        //observe the target element
        observer.observe(section1);
    ```

    - ```entries``` is an array of entries.
    - ```observer``` is the observer object.
    - ```root``` is the element that is used as the viewport for checking visibility of the target. if null, the viewport is used.

    - EXAMPLE:
    ```javascript
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
    ```



### REVEALING ELEMENTS ON SCROLL
- We can use the intersection observer API to reveal elements on scroll.
- We can use ```classList``` to add and remove classes.
- Revealing elements on scroll is a common technique used in modern websites.
- We can add a hidden class to the elements we want to reveal.
```javascript

//HTML
<section class="section section--hidden" id="section--1">
</section>

//CSS
.section--hidden {
    opacity: 0;
    transform: translateY(8rem);
}

//JS
//The idea is to remove the hidden class when the element is intersecting the viewport
//and add the hidden class when the element is not intersecting the viewport

const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
    const [entry] = entries;

    if(!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});
```

### LAZY LOADING IMAGES
- Lazy loading images is a technique used to improve the performance of websites.
    - Images are one of the most resource intensive elements on a webpage.
    - Lazy loading images is a technique used to improve the performance of websites by loading images only when they are needed.

```javascript


//HTML
//We use a placeholder image as the src attribute with a low resolution image, and we use the data-src attribute to store the high resolution image
// As we scroll down the page, we replace the src attribute with the data-src attribute
//lazy-img is a filter that we use to apply a blur to the image as the image is crappy
<img
    src="img/digital-lazy.jpg"
    data-src="img/digital.jpg"
    alt="Computer"
    class="features__img lazy-img"
/>

//CSS
.lazy-img {
    filter: blur(20px);
    transition: filter 0.3s;
}

//JS
//Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');


function loadImg(entries, observer) {
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;

  // remove blur class after image is loaded instead of using transition
  //entry.target.classList.remove('lazy-img');

  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg,{
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));
```




### BUILDING A SLIDER COMPONENT: PART 1 and 2
- A slider component is a component that allows us to switch between different slides.

- We can use ```transform``` to move elements.
   - Transform is a CSS property that allows us to move elements.
- We can use ```transition``` to add animations to elements.
- We can use ```translateX()``` to move elements horizontally.
- We can use ```translateY()``` to move elements vertically.

```javascript

//HTML
<div class="slider">
    <button class="slider__btn slider__btn--left">&larr;</button>
    <button class="slider__btn slider__btn--right">&rarr;</button>
    <div class="slider__dots"></div>
</div>

//CSS
.slider {
    position: relative;
    display: flex;
    overflow: hidden;
}

.slider__container {
    display: flex;
    width: 100%;
}

.slider__slide {
    position: relative;
    min-width: 100%;
    overflow: hidden;
}


//JS
const slides = document.querySelectorAll('.slide');
//buttons
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0; // current slide
const maxSlide = slides.length; // total number of slides

// set the slides to the right position, one after the other
// instead of stacking them on top of each other
const goToSlide = function(slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
}
goToSlide(0); // initial position is 0% "//-100%(left slide), 0%(middle), 100%(right slide)"

// next slide
const nextSlide = function() {
  if(curSlide === maxSlide - 1) {
    curSlide = 0; // go to the first slide after the last slide
  } else {
    curSlide++; //increment the current slide
  }
  goToSlide(curSlide);
  activateDot(curSlide);
}
//next slide button event listener
btnRight.addEventListener('click', nextSlide);

// previous slide
const prevSlide = function() {
  if(curSlide === 0) {
    curSlide = maxSlide - 1; // go to the last slide after the first slide
  } else {
    curSlide--; //decrement the current slide
  }
  goToSlide(curSlide);
  activateDot(curSlide);
}

//previous slide button event listener
btnLeft.addEventListener('click', prevSlide);

// keyboard events
document.addEventListener('keydown', function(e) {
  if(e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide(); // short circuiting way
});

// dots
const dotContainer = document.querySelector('.dots');

// create dots
const createDots = function() {
  slides.forEach(function(_, i) {
    dotContainer.insertAdjacentHTML('beforeend', 
    `<button class="dots__dot" data-slide="${i}"></button>`);
  });
}; createDots();

// activate dots
const activateDot = function(slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => 
    dot.classList.remove('dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide="${slide}"]`)
  .classList.add('dots__dot--active');
}

// Event listener for the dots
dotContainer.addEventListener('click', function(e) {
  if(e.target.classList.contains('dots__dot')) {
    const {slide} = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

```

### LIFECYCLE DOM EVENTS
- DOM lifecycle events are events that are fired at different stages of the DOM lifecycle.
- DOM lifecycle events are fired when the DOM is created, updated or deleted.
- The first event that is fired is ```DOMContentLoaded.``` This event is fired when the HTML document is loaded and parsed.
    - It does not wait for stylesheets, images and subframes to finish loading.
    - It does not wait for the external resources to finish loading.
    - We do not need to add an event listener to listen for this event, as we add the script tag at the end of the body tag.
    - We can also add an event listener to listen for this event.
    ```javascript
    document.addEventListener('DOMContentLoaded', function(e) {
        console.log('HTML parsed and DOM tree built!', e);
    });
    ```

- The second event that is fired is ```load```. This event is fired when the HTML document is loaded and parsed and all the external resources are loaded.
    - It waits for stylesheets, images and subframes to finish loading.
    - It waits for the external resources to finish loading.
    - We can add an event listener to listen for this event.
    ```javascript
    window.addEventListener('load', function(e) {
        console.log('Page fully loaded', e);
    });
    ```

- The third event that is fired is ```beforeunload```. This event is fired when the user tries to leave the page.
    - We can add an event listener to listen for this event.
    ```javascript
    window.addEventListener('beforeunload', function(e) {
        e.preventDefault();
        console.log(e);
        e.returnValue = ''; // Mesaage to display to the user but it is not supported in all browsers
    });
    ```
    - We can use it to prevent the user from leaving the page. by asking the user if they are sure they want to leave the page.

### EFFICIENT SCRIPT LOADING: DEFER AND ASYNC
- Using the ```defer``` attribute on the script tag allows us to load the script after the HTML document is parsed.
    - Use ```defer``` when you want to execute the script after the HTML document is parsed.
    - Useful when you want to import a script that depends on another script.
    - This is the recommended way of loading scripts.
    ```javascript
    <script defer src="script.js"></script>
    ```
- Using the ```async``` attribute on the script tag allows us to load the script asynchronously.
- Using the regular script tag without the ```defer``` or ```async``` attribute will block the HTML document from parsing until the script is loaded.