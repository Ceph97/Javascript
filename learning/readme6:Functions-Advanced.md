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

    
## THE CALL, APPLY AND BIND METHODS
- ```call()``` and ```apply()``` are methods that allow us to manually set the this keyword.

    ```javascript
    const lufthansa = {
        airline: 'Lufthansa',
        iataCode: 'LH',
        bookings: [],
            
        // book: function () {}
        book(flightNum, name) {
            console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
            this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
        },
    };

    lufthansa.book(239, 'Jonas Schmedtmann');
    lufthansa.book(635, 'John Smith');

    const eurowings = {
        airline: 'Eurowings',
        iataCode: 'EW',
        bookings: [],
    };

    const book = lufthansa.book;

    // DOES NOT WORK
    // because the this keyword is undefined and is not pointing to the eurowings object
    book(23, 'Sarah Williams');
    ```
- Fixing the problem with ```call()```:
    - ```call()``` allows us to manually set the this keyword for any function call.
    - This helps us to use a method on a different object.

    ```javascript
    book.call(eurowings, 23, 'Sarah Williams');
    console.log(eurowings);
    ```

- ```apply()``` is similar to ```call()```, but it does not receive a list of arguments after the this keyword. Instead, it takes an array of arguments.
    ```javascript
    const flightData = [583, 'George Cooper'];
    book.apply(eurowings, flightData);
    console.log(eurowings);
    ```

- ```bind()``` is similar to ```call()```, but it does not immediately call the function. Instead, it returns a new function where the this keyword is bound.
    - Then, we can store the new function in a variable and call it later.

    ```javascript
    const bookEW = book.bind(eurowings);
    bookEW(23, 'Steven Williams');
    ```
- ```bind()``` can also be used to set arguments.
    ```javascript
    const bookEW23 = book.bind(eurowings, 23);
    bookEW23('Jonas Schmedtmann');
    ```

## PARTIAL APPLICATION
- Partial application is the process of producing a function with a smaller number of parameters.
    - This is because we can preset parameters before we call the function.
    - ```bind()``` is a good way to do this.
    ```javascript
    const addTax = (rate, value) => value + value * rate;
    console.log(addTax(0.1, 200)); // 220

    // We can preset the rate parameter to 0.23
    // This will return a new function with the rate parameter set to 0.23
    // null is used because we don't need the this keyword
    const addVAT = addTax.bind(null, 0.23);
    console.log(addVAT(100)); // 123
    ```

## IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
- A function that we just need to run once and then never again.
- We can use an IIFE to create a new scope that is hidden from the outside scope.
    - This is useful to hide variables from the global scope.
    - This is also called the **data privacy** pattern.
    ```javascript
    (function() {
        const isPrivate = 23;
    })();
    ```
    - ```()``` is used to call the function.
    - We hide the variable ```isPrivate``` from the global scope.
    - We can't access it from the outside. But we can access global variables from inside the function.

## CLOSURES
- A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone.
- A closure gives a function access to all the variables of its parent function, even after that parent function has returned.
- The function keeps a reference to its outer scope, which preserves the scope chain throughout time. its like a backpack that a function carries around wherever it goes. Whenevr we need a variable, and it's not in the scope, the function will look into its backpack.
- A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place.
- A closure is not a feature that we explicitly use. Instead, it's a feature that just happens automatically in certain situations.
- When you see ```[[scope]]``` in the console, it means that the function has access to the variables in the scope chain. But we can't access it directly.
