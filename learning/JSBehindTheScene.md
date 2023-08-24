# JAVASCRIPT BEHIND THE SCENE

## HIGH LEVEL OVERVIEW
- JS is a high level, object oriented, multi-paradigm programming language.
- High level: Abstraction from the machine.
   - Garbage collection (automatic memory management)


## JS ENGINE AND RUNTIME
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

    - TYPES OF EXECUTION CONTEXT

        - ```Global execution context(Top level code)``` executes global code, and functions are executed inside the function execution context.
            - Global execution context is created when the JS engine starts up.
            - Global execution context is destroyed when the application quits.
            - Only one global execution context exists.

        - ```Function execution context``` executes function code.
            - Function execution context is created when the function is called.
            - Function execution context is destroyed when the function returns.
            - Every time a function is called, a new function execution context is created.
