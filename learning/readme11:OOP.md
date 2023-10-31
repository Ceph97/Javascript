# OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT

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

## PROTOTYPAL INHERITANCE
- Inheritance is one of the core concepts of OOP.
- Inheritance allows us to create new classes based on existing classes.
- The new classes inherit the properties and methods of the existing classes.
- The existing classes are called ```base``` or ```parent``` classes.

    ### How does the new keyword work?
    ```javascript
    new Object(field_1, field_2, ...);
    ```
    - Creates a new empty object.
    - ```this``` keyword points to the new empty object.
        - Thats why we use the this keyword inside the constructor function when setting fields.
    - The new object is linked to the prototype. (```__proto__``` property)
    - Object.create() does not use the new keyword.
    - If a function is not found in the object, the search moves to the object's prototype. This is called prototypal inheritance.
    
    ### Prototype chain
    - The prototype chain is a series of links between objects.
    - It is used to implement inheritance and shared properties.
    - Every object has a prototype except the root object.
    - The root object is the base object in the prototype chain.
    - The root object does not have a prototype.
    - The root object is the ```Object.prototype``` object.
    - The ```Object.prototype``` object is the top of the prototype chain.
    - The ```Object.prototype``` object is the base object for all objects.
    - The ```Object.prototype``` object has a prototype of ```null```.
    - If we don't find a property or method in an object, we look for it in the prototype of the object.
    - To check object's prototype, we can use ```__proto__``` property. If we want to check the prototype of the prototype, we can use ```__proto__.__proto__```. This is the root object.

       - console.log(jonas.__proto__); // Person.prototype
       - console.log(jonas.__proto__.__proto__); // Object.prototype
       - console.log(jonas.__proto__.__proto__.__proto__); // null

       - We can use some object methods on the prototype chain (```__proto__``` property):
            - ```hasOwnProperty()```
            - ```isPrototypeOf()```
            - ```Object.getPrototypeOf()```

    ### function.prototype
    - Every function has a prototype property.
    - The prototype property is an object.
    ```javascript
    function Person() {
        // ...
    }

    console.log(Person.prototype); // Person {}
    ```

    - Also arrays have a prototype property.
        ```javascript
            const arr = [1, 2, 3];
            console.log(arr.__proto__); // Array(0) []
        ```
        - This contains all the array methods.
        - With this, we can add our own methods to the array prototype. That all arrays will inherit. for example:
        - Extending prototypes of builtin objects is not recommended because it can cause problems with other libraries.
        
        ```javascript
        Array.prototype.unique = function() {
            return [...new Set(this)];
        };

        console.log(arr.unique()); // [1, 2, 3]
        ```

    ### HTML ELEMENTS PROTOTYPE
    - HTML elements also have a prototype.
    - We can use the ```__proto__``` property to access the prototype of an HTML element.
    - This is why we can use methods like ```click()``` on HTML elements because at the end of the prototype chain, there is the ```HTMLElement.prototype``` object.

## ES6 CLASSES
- ES6 classes are just syntactic sugar over constructor functions.
- All functions added to the class are added to the prototype.
    ```javascript
    class Person {
        constructor(name, birthYear) {
            this.name = name;
            this.birthYear = birthYear;
        }

        calcAge() {
            return 2021 - this.birthYear;
        }
    }
    ```
- We can add new methods directly to the prototype using the ```prototype``` keyword.
    ```javascript
    Person.prototype.greet = function() {
        console.log(`Hey ${this.name}`);
    }
    ```
- Clases are not hoisted.
    - We can only use them after they are declared.
- Classes are first-class citizens.
    - We can pass them into functions and return them from functions.
- Classes are executed in strict mode.
- We can only add methods to classes, not properties.
    - Properties must be added inside the constructor function.


## SETTERS AND GETTERS
- Getters and setters are special methods that are used to define properties.
- They get and set the value of a property.
    - Getters and setters are used to add an extra layer of security to our data.
    - We can also use them to perform additional actions when getting and setting values.
- We do not need to use getters and setters, but they are useful in some cases.

    ```javascript
    class Person {
        constructor(fullname, birthYear) {
            this.fullname = fullname;
            this.birthYear = birthYear;
        }

        calcAge() {
            return 2021 - this.birthYear;
        }

        // Getter
        get age() {
            return 2021 - this.birthYear;
        }

        // Setter
        set fullName(name) {
            if (name.includes(' ')) {
                this._fullName = name; // _fullName is a convention to indicate that this is a private property since we are conflicting with the constructor parameter
            } else {
                alert(`${name} is not a full name!`);
            }
        }

        get fullName() {
            return this._fullName;
        }
    }

    //To use the getter and setter, we don't need to call them like methods, we can use them like properties.

    const jonas = new Person('Jonas Schmedtmann', 1991);
    console.log(jonas.age); // 30
    console.log(jonas.fullName); // Jonas Schmedtmann
    ```

## STATIC METHODS
- Static methods are methods that are available on the class, but not on the instances.
- For example ```Array.from()``` is a static method.
    - You cannot call it on an array, you call it on the Array class.
    - ```Array.from(document.querySelectorAll('h1'));```
    - But it will not work for array instance like ```[1, 2, 3].from()``` because it is not available on the array instance.
- Use case is mainly helper functions that are not tied to a particular object but are relevant to all objects of a certain class.

    ```javascript
    class Person {
        constructor(fullname, birthYear) {
            this.fullname = fullname;
            this.birthYear = birthYear;
        }
        /////////////////////////////////
        // Instance method
        /////////////////////////////////
        calcAge() {
            return 2021 - this.birthYear;
        }

        // Getter
        get age() {
            return 2021 - this.birthYear;
        }

        // Setter
        set fullName(name) {
            if (name.includes(' ')) {
                this._fullName = name; // _fullName is a convention to indicate that this is a private property since we are conflicting with the constructor parameter
            } else {
                alert(`${name} is not a full name!`);
            }
        }

        get fullName() {
            return this._fullName;
        }
        /////////////////////////////////
        // Static method
        /////////////////////////////////
        static hey() {
            console.log('Hey there!');
        }
    }
    ```

    - Another way of creating a static method
        - This will not be available on the prototype of the class.
        ```javascript
        Person.hey = function() {
            console.log('Hey there!');
        }
        ```

## OBJECT.CREATE()
- There is an idea of prototypal inheritance in JavaScript. but there is no classes.
- We create objects and then we can use prototypal inheritance to create new objects based on existing objects.
- For example:
    ```javascript
    // Prototype object
    const PersonProto = {
        calcAge() {
            return 2021 - this.birthYear;
        },

        // Init method, can be used as a constructor
        init(firstName, birthYear) {
            this.firstName = firstName;
            this.birthYear = birthYear;
        }
    };

    // Create an object based on the prototype object
    const steven = Object.create(PersonProto);

    steven.init('Steven', 1991);
    console.log(steven.calcAge()); // 30
    ```
    - As you can see, it is very straightforward to create objects based on a prototype object.


## INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS
- We can use constructor functions to implement inheritance.
- For example, we can create a ```Student``` constructor function that inherits from the ```Person``` constructor function.
- To make sure the 2 constructor functions are linked, we need to set the prototype of the ```Student``` constructor function to the ```Person``` constructor function.
- For example:
```javascript

// Person constructor function
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

// Add a method to the Person prototype
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

// Student constructor function
// Person.call(this, firstName, birthYear);
const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

// Student.prototype.constructor = Student;
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();
```
## INHERITANCE BETWEEN "CLASSES": ES6 CLASSES
- We can also use ES6 classes to implement inheritance.
    - We use the ```extends``` keyword to inherit from another class.
    - We use the ```super()``` function to call the constructor function of the parent class.
        - Super must be called first. It is used to create the ```this``` keyword.
        - We can also add new properties to the child class.
- For example:
```javascript
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

// Student class inherits from Person class
class Student extends Person {
    constructor(firstName, birthYear, course) {
        // Super must be called first
        super(firstName, birthYear);
        // Add new properties
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.firstName} and I study ${this.course}`);
    }
}

const mike = new Student('Mike', 2020, 'Computer Science');
```
- If you do not require any new properties, you can omit the constructor function in the child class.
    - For example:
    ```javascript
    class Student extends Person {
        constructor(firstName, birthYear, course) {
            super(firstName, birthYear);
            this.course = course;
        }

        introduce() {
            console.log(`My name is ${this.firstName} and I study ${this.course}`);
        }
    }
    ```
    - Can be written as:
    ```javascript
    class Student extends Person {

    }
    ```
    - This will still work because the child class will inherit the constructor function from the parent class.
    - However, if you do not have a constructor function in the child class, you cannot add new properties to the child class.

## INHERITANCE BETWEEN "CLASSES": OBJECT.CREATE()
- We can also use ```Object.create()``` to implement inheritance.
- For example:
```javascript
// Person prototype object
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

// Student prototype object
const StudentProto = Object.create(PersonProto);

// Add new properties to Student prototype object
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

// Add new method to Student prototype object
StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

// Create a new object based on the Student prototype object
const mike = Object.create(StudentProto);
mike.init('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();
```

<h3>NOTE: We can create more fields in the constructor that are not based from any args, these are called Protected properties</h3>

```javascript
class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;

        // Protected property
        this._movements = [];
        this.locale = navigator.language;

        // We can execute a code block inside the constructor when the object is created
        console.log(`Thanks for opening an account, ${owner}`);
    }

    //we can add values to the protected property using a public interface
    deposit(val) {
        this._movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }
```

## ENCAPSULATION: PROTECTED PROPERTIES AND METHODS
- Encapsulation is the bundling of data and methods that work on that data within one unit, e.g. a class or object.
- We use encapsulation to hide implementation details from the outside world. This is called data privacy.
    - This is important because we don't want code outside of our class to manipulate our data in unexpected ways.
- Also allows us to change implementation without breaking external code.
- In JS we do not have truly private properties and methods called ```protected properties```, at the moment it is just conversional.
    - We use the ```_``` underscore to indicate that a property or method is protected.

## TRULY PRIVATE CLASS FIELDS AND METHODS (ES2021)
- We can use ```#``` to indicate that a property or method is truly private.
- This is a new feature in ES2021, so it is not supported by all browsers yet by the time of writing this. That is subject to change in the future.
    - Public fields
        - ```this.locale = navigator.language;```
    - Private fields
        - ```#movements = [];```
    - Public methods
        - ```deposit(val){}```
    - Private methods
        - ```#approveLoan(val){}```
- For example:
```javascript
class Account {
    // Public fields (instances)
    locale = navigator.language;

    // Private fields (instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        //Public
        this.owner = owner;
        this.currency = currency;
        
        // Private property
        this.#movements = [];
        this.#pin = pin;
        this.locale = navigator.language;

        // We can execute a code block inside the constructor when the object is created
        console.log(`Thanks for opening an account, ${owner}`);
    }

    //we can add values to the protected property using a public interface
    deposit(val) {
        this.#movements.push(val);
        return this; // return this to enable method chaining
    }

    withdraw(val) {
        this.deposit(-val);
    }

    // Private method
    #approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }

    // Static method
    static helper() {
        console.log('Helper');
    }
}
```

## CHAINING METHODS
- We can chain methods that return ```this```. This is called method chaining.
```javascript
return this;
```

- For example:
```javascript
    deposit(val) {
        this.#movements.push(val);
        return this; // return this to enable method chaining
    }
```