## TABLE OF CONTENTS
- [STRICT MODE](#strict-mode)
- [FUNCTIONS](#functions)
    - [Function Syntax](#function-syntax)
    - [Function Declaration vs. Function Expression](#function-declaration-vs-function-expression)
    - [Arrow function](#arrow-function)
    - [Functions calling other functions](#functions-calling-other-functions)

- [ARRAYS](#arrays)

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