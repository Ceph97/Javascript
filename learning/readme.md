## TABLE OF CONTENTS
- [INTRODUCTION TO JS](#intro-js)
    - [JS USAGE](#js-usage)
    - [HOW IS JS EXECUTED?](#js-execution)
        - [JS ENVIRONMENT](#js-env)
- [VARIABLES AND CONSTANTS](#variables)

## INTRODUCTION TO JS <a name="intro-js"></a>

- JS is a programming language that adds interactivity to your website.
- JS allows you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
- JS is a scripting language, it is not compiled like other programming languages. It complies at runtime(Intepreted language).
- JS is a weakly typed language, meaning you don't have to specify the data type of a variable.
- JS is a dynamically typed language, meaning you can assign different data types to a variable.
- We use semicolons to end statements in JS.

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

    - ```let``` keyword to declare a variable. but you dont have to use let to reassign a variable.
        - ```let``` is block scoped, meaning it is only available within the block it is declared in.

    - ```const``` is used to declare a constant variable, meaning it cannot be reassigned.
        - ```const``` is also block scoped.

    - ```var``` is used to declare a variable, but it is function scoped, meaning it is available anywhere within the function it is declared in.
        - ```var``` is not recommended because it can be reassigned and it is function scoped.

- Some naming conventions:
    - Use camelCase for variable names.
    - Use descriptive names for variables.
    - Use uppercase for constants.
    - Use underscore for private variables.
    - Use ```$``` or ```_``` for special variables.
    - Snake case is not used in JS. ```my_var``` is not used.

- JS is case sensitive. ```myVar``` and ```myvar``` are different variables.


## JS DATA TYPES <a name="js-data-types"></a>
- Number: ```let num = 3;```
- String: ```let str = "Hello World!";``` single or double quotes can be used.
- Boolean: ```let bool = true;```
- Null: ```let nullVar = null;``` 
