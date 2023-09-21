# FUNCTIONS - ADVANCED

## DEFAULT PARAMETERS

```javascript
function greet(name = 'John Doe') {
  return `Hello ${name}`;
}
```
- If no argument is passed, the default value will be used.

## HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE

- When we pass a primitive type, a copy of the value is created and passed to the function.
- When we pass an object, a reference to the object is created and passed to the function. This means that if we change the object inside the function, the changes will be visible outside the function. This is called **passing by reference**.
    - Javascript does not have passing by reference, but it simulates it.
    - Javascript only has **passing by value** by default.
    - If we want to avoid this, we can create a copy of the object inside the function and return it.
    - Using object.assign() is a good way to do this.
    ```javascript
    const person = {
      name: 'John',
      age: 20
    };
    
    function birthday(person) {
      const newPerson = Object.assign({}, person);
      newPerson.age++;
      return newPerson;
    }
    ```

## FIRST-CLASS AND HIGHER-ORDER FUNCTIONS
- **First-class function:** Javascript treats functions as first-class citizens.
    - This means that functions are simply values.
    - Functions are just another type of object.

- **Higher-order function:** functions are functions that receive another function as an argument, or that return a new function.
    - This is possible because functions are values.
    - ```addEventListener()``` is an example of a higher-order function.
    -  Function can return other functions.
        ```javascript
        function greet() { //higher-order function
          return function() { //Returned function
            console.log('Hello');
          }
        }
        ```

## METHODS AND PROPERTIES OF FUNCTIONS
- ```call()```: allows us to call a function and manually set the this keyword.
    ```javascript
    const john = {
        name: 'John',
        age: 20,
        greet: function() {
        console.log(`Hello, my name is ${this.name}`);
        }
    };
    
    const jane = {
        name: 'Jane',
        age: 20
    };
    
    john.greet.call(jane); // Hello, my name is Jane
    ```
- ```name``` property: returns the name of the function.
    ```javascript
    function greet() {
        console.log('Hello');
    }
    
    greet.name; // greet
    ```


## JAVASCRIPT CALL BACK FUNCTIONS
- Callback functions are functions that are passed as arguments to other functions. As a result, they are called back by the other functions.
- It makes the code more readable and reusable.
- Enables Abstraction: hiding the details and complexity of the implementation and only exposing the essential features.

- Callback functions are used in asynchronous programming.
- ```setTimeout()``` is an example of a callback function.
    ```javascript
    function greet() {
        console.log('Hello');
    }
    
    setTimeout(greet, 1000);
    ```
- Another example for callback:

    ```javascript

    // First function
    const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
    }

    // Second function
    const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
    }

    // Higher-order function
    const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    //   name is a property of the function object
    console.log(`Transformed by: ${fn.name}`);
    }

    transformer('JavaScript is the best!', upperFirstWord);
    transformer('JavaScript is the best!', oneWord);
    ```

## FUNCTIONS RETURNING FUNCTIONS
- Functions can return other functions.
    ```javascript
    function greet(greeting) { //higher-order function
      return function(name) { //Returned function
        console.log(`${greeting} ${name}`);
      }
    }

    const greeter = greet('Hey');

    greeter('Jonas'); //Hey Jonas

    // We can also call it like this:
    greet('Hey')('Jonas'); //Hey Jonas
    ```
- The use of arrow functions makes this even more concise.
    ```javascript
    const greet = greeting => name => console.log(`${greeting} ${name}`);
    ```

- Use cases for functions returning functions:
    - Currying: process of converting a function that takes multiple arguments into a function that takes them one at a time.
    - Partial application: process of producing a function with a smaller number of parameters.
    
    
