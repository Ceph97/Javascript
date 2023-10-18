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