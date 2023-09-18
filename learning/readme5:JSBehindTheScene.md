# JAVASCRIPT BEHIND THE SCENE

## HIGH LEVEL OVERVIEW

- JS is a single threaded, synchronous language.
- JS is a high level, object oriented, multi-paradigm programming language.
- High level: Abstraction from the machine.
   - Garbage collection (automatic memory management)


## JS ENGINE AND RUNTIME

- JS is a single threaded, synchronous language.
- JS Engine: Program that executes JS code. e.g. V8 engine (Chrome, Opera), SpiderMonkey (Firefox), Chakra (Edge), etc.
 - JS Engine has 2 main components:
   - Memory Heap: Memory allocation happens here.
   - Call Stack: Code execution happens here.

      - COMPILATION VS INTERPRETATION
            - ```Compilation:``` Entire code is converted to machine code at once and written to a binary file that can be   
                             executed by the computer.
            - ```Interpretation:``` Code is converted to machine code line by line and executed.

            - ```JIT Compilation(Just-in-time):``` Entire code is converted to machine code at once and without being 
                            written to a binary file and is executed immediately by the computer. Most modern JS engines use JIT compilation.

- JS ENGINE
    - STEP 1: Parsing to AST(Abstract Syntax Tree)
        - AST: A tree representation of the abstract syntactic structure of source code written in a programming language.
        - For example, the AST for 1 + 2 * 3 is:
            - ```+```
                - ```1```
                - ```*```
                    - ```2```
                    - ```3```

        - The AST for const x = 23 is:
            - ```
               VariableDeclaration {
                    kind: "const",
                    declarations: [{
                        type: "VariableDeclarator",
                        id: {
                            type: "Identifier",
                            name: "x"
                        },
                        init: {
                            type: "Literal",
                            value: 23,
                            raw: "23"
                        }
                    }]
                }
            ```
    - STEP 2: Compilation
        - Compilation is the process of taking AST and converting it to machine code and running it immediately.(JIT compilation)
        - During compilation, the engine will optimize the code Since it knows the code will be executed immediately.

- JS RUNTIME
    - JS runtime is a container that includes all the things that we need to use JS.
    - JS runtime has 2 main components:

        - ```JS Engine```
            - Memory Heap
            - Call Stack

        - ```Web APIs```
            - DOM(Document Object Model)
            - AJAX(XMLHttpRequest)
            - Timeout(setTimeout, setInterval)
            - Fetch
            - Promises
            - Async/Await

        - ```Callback Queue```
            - Callbacks are pushed to the callback queue when the Web APIs are done.
            - For example, when the setTimeout is done, the callback is pushed to the callback queue. The callback will be pushed to the call stack when the call stack is empty. This can include event handlers, AJAX responses, etc.

        - ```Event Loop```
            - Event loop checks the callback queue and pushes the callback to the call stack when the call stack is empty.

    - NodeJS does not have web APIs. It has C++ bindings and thread pool instead.

## EXECUTION CONTEXT AND THE CALL STACK

- EXECUTION CONTEXT
    - A wrapper to help manage the code that is running.
    - It consists of:
        - Variable Environment:
            - let, const, var, function declarations, arguments object, etc.
        - Scope Chain:
            - Current variable environment, variable environment of the parent execution context, etc.
        - This keyword:
            - Special variable that is created for every execution context. It points to the object that is executing the current function.
            - Arrow functions do not get their own this keyword. They use the this keyword of the parent execution context.

    - #### TYPES OF EXECUTION CONTEXT

        - ```Global execution context(Top level code)``` executes global code, and functions are executed inside the function execution context.
            - Global execution context is created when the JS engine starts up.
            - Global execution context is destroyed when the application quits.
            - Only one global execution context exists.

        - ```Function execution context``` executes function code.
            - Function execution context is created when the function is called.
            - Function execution context is destroyed when the function returns.
            - Every time a function is called, a new function execution context is created.

## SCOPE AND THE SCOPE CHAIN

- ```SCOPPING``` is how our program's variables are organized and accessed.

- ```SCOPE``` is the part of the program in which a certain variable is accessible/declared.
    1. Global scope:
        - Variables declared outside of any function or block.
        - Variables declared in global scope are accessible everywhere.
    2. Function scope:
        - Variables declared inside a function.
        - Variables declared in function scope are only accessible inside the function.
    3. Block scope:
        - Variables declared inside a block.
        - Variables declared in block scope are only accessible inside the block.
        - Example of block scope: if, for, while, switch, etc.
        - Only let and const variables are block scoped. var variables are function scoped.

- ```SCOPE CHAIN``` is the order in which functions are written in the code. The scope chain determines the order in which the functions are executed.
    - Inner scope can access variables of outer scope, but outer scope cannot access variables of inner scope.
    - Inner scope will do a scope lookup to find the variable in the outer scope.
    - If the variable is not found in the outer scope, the scope lookup will continue until the variable is found or the global scope is reached.


- ```LEXICAL SCOPE``` means that a variable defined outside a function can be accessible inside another function defined after the variable declaration.

- ```SCOPE OF A VARIABLE``` is the region of our code where a certain variable can be accessed.

- ```SCOPE CHAIN VS CALL STACK```
    - Scope chain is used to look up variables.
    - Call stack is used to keep track of the execution of our code.


## HOISTING AND THE TDZ

- ```HOISTING``` Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope."
    - Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.

    ||HOISTED|INITIALIZED VALUE|SCOPE|
    |---|---|---|---|
    | function declarations | Yes | Actual Function | Block |
    | var variables |Yes| undefined | Function | 
    | let and const | No | uninitialized, TDZ| Block |
    | function expressions | | Depends if you're using var or let/const | N/A |

    - ```TDZ(Temporal Dead Zone)``` is a zone where we cannot access a variable before it is declared.
         - For example, we cannot access a let or const variable before it is declared.
             ```javascript
                const myName = 'Jonas';

                if (myName === 'Jonas') {
                    console.log(`Jonas is a ${job}`);
                    console.log(`My name is ${myName}`);
                    const age = 2037 - 1989; // age is in the TDZ, therefore, it cannot be accessed before it is declared.
                    console.log(age);
                }
             ```

    - ```HOISTING IN PRACTICE```
        - Don't use a variable before it is declared.
        - Declare all variables at the top of every scope.
        - Declare all functions before using them.
        - Declare all variables using const or let, avoid var.


## THIS KEYWORD
- ```THIS KEYWORD``` is a special variable that is created for every execution context. It points to the object that is executing the current function.
    - ```THIS KEYWORD IN PRACTICE```
        - Method: this = <Object that is calling the method> 
            - Example:
                ```javascript
                    const jonas = {
                        name: 'Jonas',
                        year: 1991,
                        calcAge: function() {
                            console.log(this);
                            console.log(2037 - this.year); // this = jonas, therefore, this.year = jonas.year = 1991
                        }
                    };
                    jonas.calcAge(); // this = jonas
                ```
        - Simple function call: this = undefined (in strict mode), this = global object (in non-strict mode)
            - Always use strict mode.
        - Arrow functions: this = <this of surrounding function (lexical this) AKA parent function>
        - Event listener: this = <DOM element that the handler is attached to>
        - new, call, apply, bind: this = <specified object>
        - ### RULES OF THE THIS KEYWORD
            1. Method: this = <Object that is calling the method> 
            2. Simple function call: this = undefined (in strict mode), this = global object (in non-strict mode)
            3. Arrow functions: this = <this of surrounding function (lexical this) AKA parent function>
            4. Event listener: this = <DOM element that the handler is attached to>
            5. new, call, apply, bind: this = <specified object>

## REGULAR FUNCTIONS VS ARROW FUNCTIONS

- ```REGULAR FUNCTIONS``` can have a this keyword, but arrow functions cannot have a this keyword.
- ```ARROW FUNCTIONS``` 
    - use the this keyword of the parent function. 
    - Hence, arrow functions are lexically scoped.
    - Arrow functions do not get their own this keyword.
    - Arrow functions are not ideal for methods. Never use arrow functions as methods. Because they can possibly get global scope value of this keyword.

## PRIMITIVES VS OBJECTS
- Objects are stored in the heap, and primitives are stored in the call stack.

    - ```PRIMITIVES```
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol
        - BigInt


        - #### EXPLANATION:
            - When we access a primitive value, we access the actual memory address of the value.
            - When we copy a primitive value, we create a new copy of the value. hence, the 2 variables are completely independent of each other. Changing one variable does not affect the other variable.
            - This is because call stack addresses are immutable.

    - ```OBJECTS```
        - Object literal
        - Arrays
        - Functions
        - Many more...

        - #### EXPLANATION:
            - When we create an obkect, we create a new memory address in stack, and the value of that will be a reference to a memory address in the heap. Instead of storing the object in the stack, we store the reference to the object in the stack.
            - This is because objects are too big to be stored in the stack.
            - Changing one variable will affect the other variable because they are pointing to the same memory address in the heap.
            - Const variables can be mutated if they are objects. Because we are not actually changing the value of reference in stack, we are changing the value of the object in the heap.
            - To prevent mutation, we can use Object.assign() method for a shallow copy.
            - For a deep copy, we can use a library like lodash.
            - Example:
                ```javascript
                    const me = {
                        name: 'Jonas',
                        age: 30
                    };

                    const friend = me;
                    friend.age = 27;
                    console.log('Friend:', friend); // Friend: {name: "Jonas", age: 27}
                    console.log('Me:', me); // Me: {name: "Jonas", age: 27}
                ```

                ```javascript
                    // copying objects, shallow copy
                    const me = {
                        name: 'Jonas',
                        age: 30
                    };
                    const meCopy = Object.assign({}, me); // {name: "Jonas", age: 30}
                    meCopy.age = 27;
                    console.log('Friend:', meCopy); // Friend: {name: "Jonas", age: 27}
                ```





