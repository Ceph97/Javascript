## TABLE OF CONTENTS
- [INTRODUCTION TO JS](#intro-js)
    - [JS USAGE](#js-usage)
    - [HOW IS JS EXECUTED?](#js-execution)
        - [JS ENVIRONMENT](#js-env)
- [VARIABLES AND CONSTANTS](#variables)
- [JS DATA TYPES](#js-data-types)
- [JS OPERATORS](#js-operators)
- [STRING TEMPLATE LITERALS](#string-template-literals)
- [CONDITIONALS](#conditionals)
- [TYPE CONVERSION](#type-conversion)
- [TRUTHY AND FALSY VALUES](#truthy-falsy)
- [EQUALITY OPERATORS '==' vs '==='](#equality-operators)
   - [DIFFERENT OPERATOR '!=' vs '!=='](#different-operator)
   - [BOOLEAN LOGICAL OPERATORS](#boolean-logical-operators)
- [PROMPT](#prompt)
- [SWITCH STATEMENTS](#switch-statements)
- [STATEMENTS AND EXPRESSIONS](#statements-expressions)
- [CLICK HERE TO GO TO THE NEXT SECTION 2 (FUNCTIONS etc..)](readme2.md)



## INTRODUCTION TO JS <a name="intro-js"></a>

- JS is a programming language that adds interactivity to your website.
- JS allows you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
- JS is a scripting language, it is not compiled like other programming languages. It complies at runtime(Intepreted language).
- JS is a weakly typed language, meaning you don't have to specify the data type of a variable.
- JS is a dynamically typed language, meaning you can assign different data types to a variable.
- We use semicolons to end statements in JS.
- JS code is executed line by line from top to bottom.

### JS USAGE: <a name="js-usage"></a>

- Inline: `<button onclick="alert('Hello World!')">Click Me!</button>`

- Internal: `<script> alert('Hello World!'); </script>`
    - Not recommended because it mixes HTML and JS.

- External: `<script src="myScript.js"></script>`
    - Recommended because it separates HTML and JS
    - The external JS file must contain only JS code.
    - This must be placed in the `<head>` tag or the `<body>` tag for non critical functions.
    - ```defer``` attribute: Tells the browser to continue downloading the HTML content while the script is being downloaded and executed.
             ```<script src="myScript.js" defer></script>```
    - If you put the  script tags at the end of the body tag, the browser will execute the JS code after the HTML content is loaded. 



### HOW IS JS EXECUTED? <a name="js-execution"></a>
- Uses the browser's JS engine to execute the code.
- Different browsers have different JS engines eg, Chrome uses V8 engine, Firefox uses SpiderMonkey, Safari uses JavaScriptCore, etc.
- JS is single threaded, meaning it can only execute one task at a time on a single call stack.
- JS is synchronous, meaning it can only execute one task at a time on a single call stack.
- It is possible to write asynchronous code in JS using callbacks, promises, async/await.

- It runs in two phases:
    - Compilation phase: The JS engine parses the code and checks for syntax errors. If there are no errors, it compiles the code and converts it into machine code.
    - Execution phase: The compiled code is executed line by line.

- <h3>JS runs on a host environment, which provides the JS engine and other APIs to interact with the environment:</h3><a name="js-env"></a>
    - The host environment can be a browser:
        - This was the original use case of JS.
        - The browser provides the JS engine and the DOM API.
        - The DOM API allows JS to interact with the DOM.
        - The DOM API is not part of the JS language, it is provided by the browser.
        - Cant access local FS and OS.
        - ```DOM``` stands for Document Object Model, it is a tree like structure that represents the HTML document.

    - Other host environments:
        - NodeJS: Provides the JS engine and the Node API.(Its a Google V8 engine extracted from Chrome to run JS outside the browser)
        - Node API allows JS to interact with the local FS and OS.
        - Cant access the DOM.

## VARIABLES AND CONSTANTS<a name="variables"></a>
- Variables are used to store data values.

    - ```let```: keyword to declare a variable that might be changed. but you dont have to use let to reassign a variable.
        - ```let``` is block scoped, meaning it is only available within the block it is declared in.

    - ```const```: is used to declare a constant variable, meaning it cannot be reassigned.
        - ```const``` is also block scoped.
        - It always has to be initialized with a value. ```const num;``` is not allowed. ```const num = 3;``` is allowed.

    - ```var```: is used to declare a variable, but it is function scoped, meaning it is available anywhere within the function it is declared in.
        - ```var``` is not recommended because it can be reassigned and it is function scoped.
        - It is for legacy reasons. old way of declaring variables.


- We can declare multiple variables in a single line.
    - ```let num1 = 3, num2 = 4, num3 = 5;```

- We can reassign a variable without redefining it.
    - ```let num = 3; num = 4;```

- Some naming conventions:
    - Use camelCase for variable names.
    - Use descriptive names for variables.
    - Use uppercase for constants. ```const PI = 3.14;```
    - Use underscore for private variables. ```_myVar```
    - Use ```$``` or ```_``` for special variables.
    - Snake case is not used in JS. ```my_var``` is not used.
    - You cant start a variable name with a number. ```1myVar``` is not allowed.


- JS is case sensitive. ```myVar``` and ```myvar``` are different variables.


## JS DATA TYPES <a name="js-data-types"></a>
- Number: ```let num = 3;```
- String: ```let str = "Hello World!";``` single or double quotes can be used.
- Boolean: ```let bool = true;```
- Null: ```let nullVar = null;```
    - null is an empty value. But it is an object in JS, which is a bug. ```typeof nullVar;``` will return ```object```.
    - The bug is not fixed because it will break existing code.
    - ```null``` is used to explicitly set a variable to empty.

- Undefined: ```let undefVar;```
    -  In JS the variable type is determined by the value it holds. ```let num = 3;``` is a number type variable.
    -  ```typeof``` operator is used to check the type of a variable. ```typeof num;``` will return ```number```.

## JS OPERATORS <a name="js-operators"></a>
- Operators are used to perform operations on variables and values.

    - Arithmetic operators: ```+ - * / % **```
        - Increment/decrement operators: ```++ --```
    - Assignment operators: ```= += -= *= /= %= **=```
    - Comparison operators: ```== === != !== > < >= <=```
        - Result of a comparison operator is a boolean.
        - Case study: Consider the following ```console.log(2022 - 1991 > 2023 - 1991)``` will return ```false```.
            - How will JS execute this? 
                - Arithmetic operators have higher precedence than comparison operators.
                - So ```2022 - 1991``` and ```2023 - 1991``` will be executed first.
                - Then the comparison operator will be executed.
                - So the above statement will be equivalent to ```console.log(31 > 32)```.
                - Which will return ```false```.
                - [Operator precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
                
    - Logical operators: ```&& || !```
    - Bitwise operators: ```& | ^ ~ << >> >>>```
    - String operators: ```+```
    - Conditional (ternary) operator: ```condition ? exprIfTrue : exprIfFalse```
    - Comma operator: ```expr1, expr2, expr3```
    - Unary operators: ```delete typeof void```
    - Relational operators: ```in instanceof```
    - Ourput: ```console.log()```
        - This will execute the code and print the output to the console.
    - typeof: ```typeof num;```
        - This will return the type of the variable.

### String template literals <a name=string-template-literals></a>
- String template literals are used to create strings.
- They are enclosed in backticks and starts with ```$``` sign.
- For example:
    - ```let firstName = "John";```
    - ```let lastName = "Doe";```
    - ```let fullName = `${firstName} ${lastName}`;```
    - ```console.log(fullName);``` will print ```John Doe```.
    - ```console.log(`${firstName} ${lastName}`);``` will also print ```John Doe```.

- They can also used with multi line strings.
    - 
    ```javascript
    let str = `This is a 
    multi line string
    As you can see`;
    ```
   
    - ```console.log(str);``` will print ```This is a 
    multi line string```.

## IF ELSE STATEMENTS <a name="conditionals"></a>
- If else statements are used to execute code based on a condition.
```javascript
        if (condition) {
            // code to execute if condition is true
        }else {
            // code to execute if condition is false
        }
```
- For example:

```javascript
    const age = 20;
    const isOldEnough = age >= 18;

    if (isOldEnough) {
        console.log("Sarah can start driving license 🚗");
    }else {
        const yearsLeft = 18 - age;
        console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
    }
```
- When ```if``` only has one line of code, we can omit the curly braces. ``` if (isOldEnough) console.log("Sarah can start driving license 🚗");```

## TYPE CONVERSION AND COERCION <a name="type-conversion"></a>
- ```Type conversion``` is converting a value from one type to another.
    - For example:
    ```javascript
    const inputYear = "1991";
    console.log(Number(inputYear), inputYear);
    console.log(Number(inputYear) + 18);
    ```
    - ```Number(inputYear)``` will convert the string ```inputYear = "1991"``` to a number to handle our arithmetic operations.
    - If we want to convert a number to a string, we can use ```String()``` function.
    - If we try to convert a string to a number, but the string is not a valid number, it will return ```NaN```.
        - ```NaN``` is a special value in JS which means ```Not a Number```.

- ```Type coercion``` is converting a value from one type to another implicitly by JS.
    - When we use the ```+``` operator, JS will convert the values to strings and concatenate them.
    - For example:
    ```javascript
    console.log("I am " + 23 + " years old");
    ```
    - ```23``` will be converted to a string and concatenated with the other strings.
    - Not all operators will coerce the values to strings.
        - ```- * /``` will convert the values to numbers.
        - ```+``` will convert the values to strings.

## TRUTHY AND FALSY VALUES <a name="truthy-falsy"></a>

- There are 5 falsy values in JS.
    - Falsy values will be converted to ```false``` when we use them in a boolean context. For example:
        - ```0```
        - ```""``` empty string
        - ```undefined```
        - ```null```
        - ```NaN```
    - Example: else block will be executed as height is undefined, evaluated to false.
        ```javascript
        let height;
        // Since height is not defined, it will return false as "UNDEFINED" is a falsy value
        if (height) {
            console.log("YAY! Height is defined");
        }else {
            console.log("Height is UNDEFINED");
        }
        ```
    - Example 2: Imagine we are getting the height of a user from a server and it is set to ```0```.
  
        ```javascript
        let height = 0;
        // Since height is defined, it is supposed to return true however 0 is also a falsy value hence the else block will be executed.
        if (height) {
            console.log("YAY! Height is defined");
        }else {
            console.log("Height is UNDEFINED");
        }
        ```

## EQUALITY OPERATORS: == VS === <a name="equality-operators"></a>

- ```==``` is the loose equality operator.
    - It will perform type coercion.
    - ```"18" == 18``` will return ```true``` 
    - NOTE: a String and a Number equal to each other as we are converting one data type to match another then comparison.
    - Avoid using ```==``` as it can lead to bugs.

- ```===``` is the strict equality operator.
    - It will not perform type coercion.
    - ```"18" === 18``` will return ```false```.

    ### Different operators '!==' and '!=' <a name="different-operators"></a>

    - ```!=``` is the loose inequality operator.
        - It will perform type coercion.
        - ```"18" != 18``` will return ```false``` 
        - NOTE: a String and a Number equal to each other as we are converting one data type to match another then comparison.
        - Avoid using ```!=``` as it can lead to bugs.

    - ```!==``` is the strict inequality operator.

    ### BOOLEAN LOGIC <a name="boolean-logic"></a>

    - && (AND) OPERATOR
        - ```true && true``` will return ```true```
        - ```true && false``` will return ```false```
        - ```false && true``` will return ```false```
        - ```false && false``` will return ```false```

    - || (OR) OPERATOR
        - ```true || true``` will return ```true```
        - ```true || false``` will return ```true```
        - ```false || true``` will return ```true```
        - ```false || false``` will return ```false```

    - ! (NOT) OPERATOR
        - ```!true``` will return ```false```
        - ```!false``` will return ```true```


## PROMPT <a name="prompt"></a>
- ```prompt()``` is a function that will display a dialog box to the user with a message and an input field.
    ```javascript
        const inputYear = prompt("Enter your birth year");
        console.log(Number(inputYear), inputYear);
        console.log(Number(inputYear) + 18);
    ```

## SWITCH STATEMENT <a name="switch-statement"></a>
- ```switch``` statement is used to select one of many code blocks to be executed.
- ```switch``` statement is similar to ```if else``` statement.
- ```switch``` statement is used when we have a lot of ```else if``` statements evaluating the same expression.

    ```javascript
        const day = "monday";

        switch (day) {
            case "monday":
                console.log("Plan course structure");
                console.log("Go to coding meetup");
                break;
            case "tuesday":
                console.log("Prepare theory videos");
                break;
                
            default:
                console.log("Not a valid day!");
        }
    ```
    - ```switch``` statement will evaluate the expression ```day``` and compare it to the cases. If the expression matches the case, the code block will be executed.
    - ```break``` statement is used to exit the ```switch``` statement.
    - ```default``` statement is used when none of the cases match the expression.

## STATEMENTS AND EXPRESSIONS <a name="statements-expressions"></a>

- ```Expression``` is a piece of code that produces a value.
    - ```3 + 4```
    - ```1991```
    - ```true && false && !false```

- ```Statement``` is a bigger piece of code that is executed and which does not produce a value on itself.
    - 
    ```javascript
    if (23 > 10) {
        const str = "23 is bigger";
    }

    while (x === 23) {
        // do something
    }
    ```
    - ```if else``` statement is a statement as it does not produce a value.
    - ```while``` loop is a statement as it does not produce a value.
    - You cannot add statements in string like ```console.log(if (23 > 10) { const str = "23 is bigger"; })```

    ### CONDITIONAL (TERNARY) OPERATOR <a name="conditional-operator"></a>
    - ```Conditional (ternary) operator``` is a short hand version of ```if else``` statement.
    - ```condition ? if true : if false```
    - It is an expression as it produces a value. so we store it in a variable.
    - Example:
        ```javascript
        const age = 23;
        age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");
        ``` 