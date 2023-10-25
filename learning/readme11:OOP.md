# OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT

## Introduction

1. What is OOP?
   - Object Oriented Programming is a programming paradigm that uses objects and their interactions to design applications and computer programs.
   - We use objects to model real world things that we want to represent inside our programs, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of.
    - Objects can contain related data and code, which represent information about the thing you are trying to model, and functionality or behavior that you want it to have.
    - Interaction between objects happen through the use of methods that they expose through their API (Application Programming Interface).
    - OOP was developed to increase the reusability and maintainability of source code.

2. 4 Pillars of OOP:
   - ```Encapsulation```
      - Bundling of data and methods that work on that data within one unit, e.g. a class or object, reducing complexity and increasing reusability.
      - Encapsulation also allows us to hide the implementation details of an object from the rest of the world.
      - Hide data and expose only necessary features.
        - Prevents external code from modifying internal state of an object.
        - Allows us to change internal implementation without breaking external code.
      ```javascript
        User {
            name
            email
            password
            private employeeId // private field

            login(password) {
                // check if password is correct
                this.encryptPassword(password);
            }

            sendEmail(email) {
                this.employeeId = 1234; // set employeeId
                // send email
            }

            // private method to encapsulate password encryption from the outside world
            private encryptPassword(password) {
                // encrypt password
            }
        }

      ```

   - ```Inheritance```
        - Eliminates redundant code by reusing existing code.
        - A class can inherit properties and methods from another class.
        - The class that inherits from another class is called a subclass or derived class.
        ```javascript
        class Animal {
            constructor(name) {
                this.name = name;
            }
            makeSound() {
                console.log('Generic Animal Sound!');
            }
        }

        // Dog class inherits from Animal class and adds additional properties and methods
        class Dog extends Animal {
            constructor(name, breed) {
                super(name); // calls the constructor of the parent class
                this.breed = breed;
            }
            makeSound() {
                console.log('Woof! Woof!');
            }

            getBreed() {
                return this.breed;
            }
        }
        ```


   - ```Polymorphism```
        - Allows us to override inherited methods without affecting other instances of the same class.
        - For example, we can override the makeSound() method in the Dog class without affecting the makeSound() method in the Animal class.
            - However, we can still access the makeSound() method in the Animal class by using the super keyword.
            - Having the same method in different classes with different implementations is called method overriding.
        ```javascript
        class Animal {
            constructor(name) {
                this.name = name;
            }
            makeSound() {
                console.log('Generic Animal Sound!');
            }
        }

        class Dog extends Animal {
            constructor(name, breed) {
                super(name); // calls the constructor 
            }
            // override makeSound() method from Animal class
            makeSound() {
                console.log('Woof! Woof!');
            }
        }
        ```
    - ```Abstraction```
        - Allows us to hide complexity and only show the essentials.
        - Reduces complexity and isolate impact of changes.
        - Hide details that don't matter, allowing us to focus on what matters.
          - For example, we don't need to know how the engine works to drive a car.
          - The details of the engine are abstracted away.
          
        ```javascript
        class Animal {
            constructor(name) {
                this.name = name;
            }
            makeSound() {
                console.log('Generic Animal Sound!');
            }
        }
        ```
3. What is a class
    - A class is a blueprint for creating objects with pre-defined properties and methods.
    ```javascript
    // Class Declaration representing a Person not an actual JS syntax
    User {
        name
        email
        password

        login(password) {
            // check if password is correct
        }

        sendEmail(email) {
            // send email
        }
    }

    // Object Creation AKA Instantiation
    const user1 = new User('John', 'john@gmail','123456');

    cpnsole.log(user1.name); // John
    console.log(user1.email); // john@gmail
    ```

## OOP IN JAVASCRIPT
 - Object Oriented Programming in JavaScript is based on ```prototypes```, not classes.
    - A prototype is simply a blueprint of an object.
    - Prototype-based programming is a style of object-oriented programming in which classes are not explicitly defined, but rather derived by adding properties and methods to an instance of another class or, less frequently, adding them to an empty object.
    - We can create an object based on a prototype using the ```new``` keyword.
    - Objects are linked to a prototype object. and they delegate to their prototype.

    ### How to create a Prototype and Objects in JavaScript

    - ```Constructor function```:
        - A constructor function is a function that returns an object.
        - This is how built-in objects like Arrays, Maps, Sets, etc. are actually implemented in JavaScript.
        - We can create our own constructor functions to create objects.
        - Use a capital letter to name constructor functions.
        - Arrow functions don't work as constructor functions due to the way they handle the ```this``` keyword.
        - We can use ```instanceof``` to check if an object is an instance of a constructor function.
        - Never add methods to a constructor function, instead add them to the prototype.

        ```javascript

        // 1. new Object() is created
        // 2. function is called, this = {}
        // 3. {} linked to prototype
        // 4. function automatically returns {}

        // Constructor function
        function User(name, email, password) {
            // instance properties
            this.name = name;
            this.email = email;
            this.password = password;

            // instance methods: methods that are available on each instance of the object hence never do this it is bad practice especially if you have a lot of instances
            this.login = function(password) {
                // check if password is correct
            }
            this.sendEmail = function(email) {
                // send email
            }
        }

        // Object Creation AKA Instantiation
        const user1 = new User('John', 'john@gmail','123456');

        // check if user1 is an instance of User constructor function
        console.log(user1 instanceof User); // true
        ```
        - Remember, we should never add methods to a constructor function, instead add them to the prototype.
            - All objects derived from the same constructor function will have access to the same prototype.
            - This is more efficient than adding methods to the constructor function.
            - We can add methods to the prototype using the ```prototype``` keyword:
                ```javascript
                User.prototype.login = function(password) {
                    // check if password is correct
                }

                //The instance can then call the prototype method
                console.log(user1.login('123456'));
                ```
            - Each method has ```__proto__``` property which points to the prototype of the constructor function.
                ```javascript
                console.log(user1.login.__proto__ === User.prototype); // true
                ```
            - We can use ```Object.getPrototypeOf()``` to get the prototype of an object.
                ```javascript
                console.log(Object.getPrototypeOf(user1) === User.prototype); // true
                ```
            - We can use ```isPrototypeOf()``` to check if an object is the prototype of another object.
                ```javascript
                console.log(User.prototype.isPrototypeOf(user1)); // true
                ```

            - We can add properties to the prototype as well.
                ```javascript
                User.prototype.age = 30;
                console.log(user1.age); // 30
                ```
                - These are not instance properties, they are prototype properties.
                - We can use ```hasOwnProperty()``` to check if a property is an instance property or a prototype property.
                    ```javascript
                    console.log(user1.hasOwnProperty('age')); // false
                    ```

    - ```ES6 Classes```:
        - ES6 classes are just syntactic sugar over constructor functions.
        - They are not like classes in other languages.
        - They are just a different way to create constructor functions and prototypes.
        - Under the hood, they are still using prototypes.

    - ```Object.create()```:
        - The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
        - Easiest and most straightforward way to create prototypes and objects.