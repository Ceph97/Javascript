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


