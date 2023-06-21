#  TABLE OF CONTENTS


#  1. [Introduction](#introduction)
#  2. [Selecting Elements](#selecting-elements-by-id)
#  3. [What is the DOM?](#what-is-the-dom)
#  4. [Handling Events](#handling-events)
#  5. [Setting input field value](#setting-input-field-value)
#  6. [Manipulating CSS classes](#manipulating-css-classes)
#  7. [Manipulating classes](#manipulating-classes)




## Introduction <a name="introduction"></a> [↩](#toc)
- In Javascript We can select elements by their id, class, tag name, or any other CSS selector.

### Selecting Elements <a name="selecting-elements-by-id"></a> [↩](#toc)
- We can select elements by their id, class, tag name, or any other CSS selector.
    - `document.querySelector('#id')`: returns the first element that matches the given CSS selector.
        - `#` is used to select by id ```#id```
        - `.` is used to select by class ```.class```

    - `document.querySelectorAll('#id')`: returns a list of elements that match the given CSS selector.

    - `document.getElementById('id')`: returns the element with the given id.

## What is the DOM? <a name="what-is-the-dom"></a> [↩](#toc)
- The DOM is a tree-like structure that represents the HTML of a webpage. It is created when the browser loads a page, and it can be modified with Javascript.

- ![DOM](./references/images/dom.png)

    - Parent: The element that contains another element. 
        - Child: An element that is contained inside another element.
            - Content: The content of an element, not including the element's tag.
                - Tag: The name of an element, surrounded by angle brackets.
                    - Attribute: A property of an element, specified in the opening tag.


## Handling Events <a name="handling-events"></a> [↩](#toc)
- An event is an action that occurs on a webpage. Examples of events include clicking a button, resizing a window, or submitting a form.

- We can use Javascript to listen for events and trigger code when they occur.
    - You need to select the element you want to listen for events on.

    ```javascript
    const button = document.querySelector(.button);
    ```

    - You need to tell the browser which event you want to listen for.

    ```javascript
    button.addEventListener('click', function() {
        console.log('Button clicked');
    });
    ```

    - The first argument is the name of the event, and the second argument is the function that should be called when the event occurs.


### Setting input field value <a name="setting-input-field-value"></a> [↩](#toc)

- We can set the value of an input field using the `value` property.

```javascript
const input = document.querySelector('input');
input.value = 'Hello world';
```
- The `value` property is a string, so it can be set to any string value.

- We can also get the value of an input field using the `value` property.

```javascript
const input = document.querySelector('input');
console.log(input.value);
```

- Do not save values inside the DOM. Save them in a variable instead using `let` or `const`. This way, you can use the value in multiple places without having to select the element again.

```javascript
const input = document.querySelector('input');
const value = input.value;
console.log(value);
```

### Manipulating CSS classes <a name="manipulating-css-classes"></a> [↩](#toc)

- To change styles, we can add or remove CSS classes from elements.
- These are just inlines styles, so they will override any styles set in a stylesheet.
    ## STEPS:
    - You need to select the element you want to change the class of.

    ```javascript
    const element = document.querySelector('p');
    ```

    - Then you need to use ```.style``` to access the element's styles. Then the property you want to change.

    ```javascript
    element.style.color = 'red';
    ```

    - This will change the color of the element to red.
    ```javascript
    document.querySelector('p').style.color = 'red';
    ```

    - You can also add or remove classes from an element using the `classList` property.

    ```javascript
    const element = document.querySelector('p');
    element.classList.add('error');
    element.classList.remove('error');
    ```


# Manipulating classes <a name="manipulating-classes"></a> [↩](#toc)

- We can add or remove classes from an element using the `classList` property.

```javascript
const element = document.querySelector(<class name>);
```
- ClassList is an object that contains methods for adding, removing, and toggling classes.
    - Many of these methods take a class name as an argument.
    - We can remove a class from an element using the `remove` method.
    - We can toggle a class on an element using the `toggle` method.
    - We can check if an element has a class using the `contains` method.


    - Adding a class `add` to your element.

        ```javascript
        element.classList.add('error');
        ```
    - Removing a class `remove` from your element.

        ```javascript
        element.classList.remove('error');
        ```
    - Toggling a class `toggle` on your element.

        ```javascript
        element.classList.toggle('error');
        ```
    - Checking if an element has a class `contains`.

        ```javascript
        element.classList.contains('error');
        ```
    
    - Do not use ```.className``` in classList methods as you would in querySelector. Only pass in the classname as a string.

  
  # Handling Keyboard Events <a name="handling-keyboard-events"></a> [↩](#toc)
  - These are events that occur when a user presses a key on their keyboard.
  - These are also called global events because they occur on the entire page, not just a single element.

  - 3 types of keyboard events:
    - `keydown`: occurs when a key is pressed down.
    - `keyup`: occurs when a key is released.
    - `keypress`: occurs when a key is pressed down and released.

    - We can listen for keyboard events on the `document` object.
    
        ```javascript
        document.addEventListener('keydown', function() {
            console.log('Key pressed');
        });
        ```
    - The first argument is the name of the event, and the second argument is the function that should be called when the event occurs.
    - This covers all keys on the keyboard, including letters, numbers, and special characters.
    - We can use the `key` property to get the name of the key that was pressed. we addend the `event` parameter to the function, and then we can access the `key` property on the event object. The argument name can be anything, but `event` is the most common.
        
        ```javascript
        document.addEventListener('keydown', function(event) {
            console.log(event);
            console.log(event.key);
        });
        ```