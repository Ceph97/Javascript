## TABLE OF CONTENTS
- [STRICT MODE](#strict-mode)
- [FUNCTIONS](#functions)
    - [Function Syntax](#function-syntax)
    - [Function Declaration vs. Function Expression](#function-declaration-vs-function-expression)
    - [Arrow function](#arrow-function)
    - [Functions calling other functions](#functions-calling-other-functions)

- [ARRAYS](#arrays)
    - [Array Methods](#array-methods)

- [OBJECTS(Dictionaries)](#objects)
    - [Dot vs. Bracket Notation](#dot-vs-bracket-notation)
    - [Object Methods](#object-methods)

- [LOOPS](#loops)
    - [For Loop](#for-loop)
        - [continue and break](#continue-break)
        - [Looping Backwards](#looping-backwards)
        - [Netsed Loops](#nested-loops)
    - [While Loop](#while-loop)

## STRICT MODE <a name=strict-mode></a>
- Strict mode is a way to introduce better error-checking into your code.
- Strict mode makes it easier to write "secure" JavaScript.
- To invoke strict mode for an entire script, put the exact statement ```"use strict"; (or 'use strict';)``` before any other statements.
- We can also use strict mode inside a function. for a specific block of code.

## FUNCTIONS <a name=functions></a>
- A JavaScript function is a block of code designed to perform a particular task.
- A JavaScript function is executed when "something" invokes it (calls it).

    - #### Function Syntax <a name=function-syntax></a>
        ```javascript
            function logger() {
                console.log('My name is Jonas');
            }

            logger(); // calling / running / invoking function

            //Calling, running, invoking function
            logger();
        ```


    - #### Function Declaration vs. Function Expression <a name=function-declaration-vs-function-expression></a>

        - **Function Declaration**
            - A function without a name is called an anonymous function.
            - A function declaration can be called earlier than it is defined in the code.

            ```javascript
                function calcAge1(birthYear) {
                    return 2037 - birthYear;
                }
                const age1 = calcAge1(1991);
            ```

        - **Function Expression**
            - A function that is stored in a variable is called a function expression.
            - A function expression is created when the execution reaches it and is usable only from that moment.
            - A function expression can always be used as IIFE (Immediately Invoked Function Expression).
            ```javascript
                const calcAge2 = function (birthYear) {
                    return 2037 - birthYear;
                }
                const age2 = calcAge2(1991);
            ```

    - #### Arrow function <a name=arrow-function></a>
        - An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
        - Arrow functions are always anonymous.
        - You can only omit the return keyword and the curly brackets if the function is a single line statement.
        - ```this``` keyword is not bound in arrow functions.

        ```javascript
            const calcAge3 = birthYear => 2037 - birthYear;

            //calling function
            const age3 = calcAge3(1991);
        ```

        - Example 2
        ```javascript
            // When more lines are involved, it is the same as a normal function
            const yearsUntilRetirement = (birthYear, firstName) => {
                const age = 2037 - birthYear;
                const retirement = 65 - age;
                return `${firstName} retires in ${retirement} years`;
            }

            //calling function
            console.log(yearsUntilRetirement(1991, 'Jonas'));
        ```

    - #### Functions calling other functions <a name=functions-calling-other-functions></a>

        ```javascript
            //function 1
            function cutFruitPieces(fruit) {
                return fruit * 4;
            }

            // function 2
            function fruitProcessor(apples, oranges) {
                const applePieces = cutFruitPieces(apples);
                const orangePieces = cutFruitPieces(oranges);

                const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
                return juice;
            }

            console.log(fruitProcessor(2, 3));
        ```

## ARRAYS <a name=arrays></a>
- Arrays are a special type of variable that store multiple values.
- Arrays are zero based, which means that the first item is referenced with an index of 0.

- Example:

    ```javascript
        const friends = ['Michael', 'Steven', 'Peter'];
        console.log(friends); // ["Michael", "Steven", "Peter"]

        // Accessing elements in array
        console.log(friends[0]); // Michael

        //length property
        console.log(friends.length);

        //last element
        console.log(friends[friends.length - 1]);

        //change element
        friends[2] = 'Jay';
        console.log(friends);

        // Array can hold different data types
        const firstName = 'Jonas';
        const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
        console.log(jonas); // ["Jonas", "Schmedtmann", 46, "teacher", Array(3)]
    ```

- Example 2, using ```new Array()``` function:

    ```javascript
        const years = new Array(1991, 1984, 2008, 2020);
        console.log(years); // [1991, 1984, 2008, 2020]

        // Accessing elements in array
        console.log(years[0]); // 1991
    ```

     #### Array Methods <a name=array-methods></a>
    - **push()**:
      - adds element to the end of the array
      - It also returns the new length of the array.
      - Example:
        ```javascript
            const friends = ['Michael', 'Steven', 'Peter'];
            const newLength = friends.push('Jay');
            console.log(friends); // ["Michael", "Steven", "Peter", "Jay"]
            console.log(newLength); // 4
        ``` 

    - **unshift()** 
        - Adds element to the beginning of the array
        - It also returns the new length of the array.

    - **pop()**
        - Removes the last element from an array and returns that element.
        - This method changes the length of the array.
        - It returns the removed element.
        - Example:
            ```javascript
                const friends = ['Michael', 'Steven', 'Peter'];
                const popped = friends.pop();
                console.log(friends); // ["Michael", "Steven"]
                console.log(popped); // Peter
            ```
    - **shift()**
        - Removes the first element from an array and returns that removed element.
        - This method changes the length of the array.
        - It returns the removed element.
        - Example:
            ```javascript
                const friends = ['Michael', 'Steven', 'Peter'];
                const popped = friends.shift();
                console.log(friends); // ["Steven", "Peter"]
                console.log(popped); // Michael
            ```

    - **indexOf()**
        - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
        - Example:
            ```javascript
                const friends = ['Michael', 'Steven', 'Peter'];
                console.log(friends.indexOf('Steven')); // 1
                console.log(friends.indexOf('Bob')); // -1
            ```

    - **includes()**
        - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
        - Example:
            ```javascript
                const friends = ['Michael', 'Steven', 'Peter'];
                console.log(friends.includes('Steven')); // true
                console.log(friends.includes('Bob')); // false
            ```
## OBJECTS <a name=objects></a>
- Objects are a special type of variable that store key-value pairs.
- Similar to dictionaries in Python.
- Example: using object literal syntax
    ```javascript
        const jonas = {
            firstName: 'Jonas',
            lastName: 'Schmedtmann',
            age: 2037 - 1991,
            job: 'teacher',
            friends: ['Michael', 'Peter', 'Steven']
        };
    ```
- Example 2: using ```new Object()``` function
    ```javascript
        const jonas = new Object({
            firstName: 'Jonas',
            lastName: 'Schmedtmann',
            age: 2037 - 1991,
            job: 'teacher',
            friends: ['Michael', 'Peter', 'Steven']
        });
    ```

    - #### Dot vs Bracket Notation <a name=dot-vs-bracket-notation></a>

        - Using dot notation
            - You cannot use expressions.
            - You have to explicitly write the exact property name as it appears in the object.

            ```javascript
                console.log(jonas.lastName); // Schmedtmann
            ```
        - Using bracket notation
            - You can use an expression inside the brackets.
            - You can use any string as the property name.
            ```javascript
                console.log(jonas['lastName']); // Schmedtmann
            ```
    - #### Object Methods <a name=object-methods></a
        - You can add functions as properties to objects.
            - Example:
                ```javascript
                    const jonas = {
                        firstName: 'Jonas',
                        lastName: 'Schmedtmann',
                        birthYear: 1991,
                        job: 'teacher',
                        friends: ['Michael', 'Peter', 'Steven'],
                        hasDriversLicense: true,

                        // calcAge: function(birthYear) {
                        //     return 2037 - birthYear;
                        // }

                        // calcAge: function() {
                        //     // console.log(this);
                        //     return 2037 - this.birthYear;
                        // }

                        calcAge: function() {
                            this.age = 2037 - this.birthYear;
                            return this.age;
                        },

                        getSummary: function() {
                            return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
                        }
                    };
                    console.log(jonasObject2.calcAge(jonasObject2.birthYear));
                    console.log(jonasObject2['calcAge'](jonasObject2['birthYear']));
                    console.log(jonas.calcAge()); // 46
                    console.log(jonas.age); // 46
                    console.log(jonas.age); // 46
                    console.log(jonas.age); // 46
                    console.log(jonas.getSummary()); // Jonas is a 46-year old teacher, and he has a driver's license.
                ```

## LOOPS <a name=loops></a>
- Loops are used to automate repetitive tasks.
    #### For Loop <a name=for-loop></a>
    - Example:
        ```javascript
            for (let i = 1; i <= 10; i++) {
                console.log(`Lifting weights repetition ${rep}`);
            }
        ```
        - ##### Continue and Break <a name=continue-break></a>
            - **continue** keyword exits the current iteration of the loop and continues to the next one.
                ```javascript
                    for (let i = 1; i <= 10; i++) {
                        if (i === 3) {
                            console.log('--- Skipping 3 ---');
                            continue;
                        }
                        console.log(`Lifting weights repetition ${i}`);
                    }
                ```

            - **break** keyword completely terminates the whole loop.
                ```javascript
                    for (let i = 1; i <= 10; i++) {
                        if (i === 3) {
                            console.log('--- Breaking ---');
                            break;
                        }
                        console.log(`Lifting weights repetition ${i}`);
                    }
                ```
        - ##### Looping Backwards <a name=looping-backwards></a>
            - args: 
                - **let i = 10** - start at the highest index
                - **i >= 1** - loop until i is greater than or equal to 1
                - **i--** - decrement i by 1
            - Example:
                ```javascript
                    for (let i = 10; i >= 1; i--) {
                        console.log(`Lifting weights repetition ${i}`);
                    }
                ```

        - ##### Nested Loops <a name=nested-loops></a>
            - For each repetition of the outer loop, the inner loop will run completely ```n``` amount of times.
            - Example:
                ```javascript
                    for (let exercise = 1; exercise < 4; exercise++) {
                        console.log(`----- Starting exercise ${exercise}`);

                        for (let rep = 1; rep < 6; rep++) {
                            console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
                        }
                    }
                ```

    #### While Loop <a name=while-loop></a>
    - While loop is used when we don't know how many iterations we need.
    - While loop will continue to run as long as the condition is true.
    - It is important to increment or decrement the counter variable inside the while loop, otherwise the loop will run forever.

    - It is more versatile than the for loop.

        - ```javascript
            while (condition == true) {
                // keep running code block
            }
        ```

    - Example:

        ```javascript
            let rep = 1;
            while (rep <= 10) {
                console.log(`Lifting weights repetition ${rep}`);
                rep++;
            }
        ```
    - ##### Rolling a Dice <a name=rolling-a-dice></a>
        - Example:
            ```javascript
                let dice = Math.trunc(Math.random() * 6) + 1;
                console.log(dice);

                while (dice !== 6) {
                    console.log(`You rolled a ${dice}`);
                    dice = Math.trunc(Math.random() * 6) + 1;
                    if (dice === 6) console.log('Loop is about to end...');
                }
            ```
            - let dice = Math.trunc(Math.random() * 6) + 1;
            - Math.random() generates a random number between 0 and 1.
            - Multiplying by 6 gives us a number between 0 and 5.
            - Adding 1 gives us a number between 1 and 6.
            - Math.trunc() removes the decimal part of the number.