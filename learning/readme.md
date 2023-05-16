## TABLE OF CONTENTS
- [INTRODUCTION TO JS](#intro-js)
    - [JS USAGE](#js-usage)
    - [HOW IS JS EXECUTED?](#js-execution)
        - [JS ENVIRONMENT](#js-env)

## INTRODUCTION TO JS <a name="intro-js"></a>

- JS is a programming language that adds interactivity to your website.
- JS allows you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
- JS is a scripting language, it is not compiled like other programming languages. It complies at runtime(Intepreted language).
- JS is a weakly typed language, meaning you don't have to specify the data type of a variable.
- JS is a dynamically typed language, meaning you can assign different data types to a variable.

### JS USAGE: <a name="js-usage"></a>
- Inline: `<button onclick="alert('Hello World!')">Click Me</button>`
- Internal: `<script> alert('Hello World!'); </script>`
- External: `<script src="myScript.js"></script>`

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


## JS DATA TYPES <a name="js-data-types"></a>
