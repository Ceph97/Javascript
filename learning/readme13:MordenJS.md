# MODERN JAVASCRIPT

- What is Modern Javascript?
  - The use of modules to organize code into separate files, instead of having all of the code in one file.
  - The modules are bundled together using a tool like ```Webpack``` or ```Parcel``` and deployed to a server.
    - Bundling is the process of taking separate files and combining them into one file (the bundle).
    - It is done to reduce the number of requests to the server and making the code more efficient and lightweight.
    - Parcel is a zero-configuration bundler and is a good choice for beginners.
- NPM is used as a package manager to install and manage the dependencies of a project.
- Babel is used to convert modern Javascript code into code that is compatible with older browsers.

## Modules
- Modules are reusable pieces of code that can be exported from one program and imported for use in another program.
- Usually stand-alone files that export one or more objects.
- Any code a module imports is called a dependency.
- Modules are imported using the ```import``` keyword.
- You can import whole modules or just pieces of them, like functions, objects, or variables.
- Allows us to reuse code in different projects.

```javascript
import { data } from './example.js';
```

- Starting from ES6, Javascript has built-in modules.
    - Modules are stored in a file, exactly one module per file.
- Modules vs Scrips
|    | ES6 Modules | Scripts |
| --- | --- | --- |
| Scope | Top-level scope | File scope |
| Top-level variables | Not added to global scope | Added to global scope |
| Execution | Runs in strict mode | Runs in sloppy mode |
| Hoisting | No | Yes |
| Import | Static | Dynamic |
| Export | Static | No |
|HTML link | ```<script type="module" src="..."></script>``` | ```<script src="..."></script>``` |

- Imports execute first, before the code in the module body. 
- They are imported synchronously and only once.
- Imports are live links to the exported data, which means that changes to the exported data are reflected in the imported module.

## Exporting
- We can export functions, objects, and primitive values from a module.
 - You need to use the ```export``` keyword to export a module.
 - You can export multiple objects from a module using the ```export``` keyword.
 - ```javascript
    export const data = [1, 2, 3];
    export const add = (x, y) => {
        return x + y;
    }
    ```
    ```javascript
    import { data, add } from './example.js';
    console.log(add(1, 2));
    ```
    - The above is called named import as we are importing the objects by their names and enclosed in curly braces.

- You can import everything from a module using the ```*``` symbol.
    - ```javascript
        import * as example from './example.js';
        console.log(example.add(1, 2));
        ```
    - The above is called namespace import as we are importing all the objects from the module and storing them in a namespace called ```example```.

- You can also export objects as ```default``` from a module.
    - ```javascript
        export default function add(x, y) {
            return x + y;
        }
        ```
    - You can import the default object using any name.
    - ```javascript
        import add from './example.js';
        console.log(add(1, 2));
        ```
    - You can use a different name for the default object.
    - ```javascript
        import addition from './example.js';
        console.log(addition(1, 2));
        ```
    - You can also import the default object along with other objects, but it is not recommended since it can be confusing.

    - ```javascript
        import add, { data } from './example.js';
        console.log(add(1, 2));
        console.log(data);
        ```
*** Imports are a live connection to the exported data. Any changes to the exported data are reflected in the imported module. ***


## TOP LEVEL AWAIT
- ```await``` can only be used inside an ```async``` function.
- With modules, you can use ```await``` at the top level of a module frome ES6.
- ```javascript
    const res = await fetch('https://example.com/data');
    export { res };
    const data = await res.json();
    export { data };
    ```
- This will block the execution of the module until the promise is resolved. since it is outside of any assync function.
    - This can be useful when you want to export data from a module that is fetched from an API.
    - However, this is not recommended since it can block the execution of the module.
- This is only allowed in modules, not in scripts.

## MODULE PATTERNS
- There are different ways to export and import modules.
- The module patterns only return the objects that are to be consumed by other modules.
- The module patterns are used to hide the implementation details of a module.

```javascript
const shoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
        };

    const orderStock = function(product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();
```

- The above is called the ```module pattern```. and only the objects that are returned are accessible outside the module.
- We use closures to be able to access the variables inside the module which is the function that has already been called leaving the variables in memory, which are accessible for the lifetime of the application.


## COMMON JS MODULES
- Common JS modules are used in Node.js.
- One module per file.
- It does not work on the browser environment only on Node.js.
- ```javascript
    // Export
    module.exports = { add, multiply };
    // Import
    const { add, multiply } = require('./math.js');
    ```
- To import a module, you need to use the ```require``` function.
- To export a module, you need to use the ```module.exports``` object.
- You cannot use common JS without a module bundler like ```Webpack``` or ```Parcel```.

## NPM
- NPM is a package manager for Javascript.
- It is used to install and manage the dependencies of a project.
- It is also used to publish and share packages with the community.

```shell

# check npm version
npm -v

# initialize a project for package.json is created for the project info
npm init

# install a package, the package is installed in the node_modules folder
npm install <package-name>

npm install lodash-es

# install a package from a package.json file
npm install

# install a package as a dev dependency that is only used during development but not in our production code / application
npm install <package-name> --save-dev

```
--
- Never include the node_modules folder into the version control system. as it will slow you down.

### BUNDLING CODE WITH PARCEL
- Parcel is a zero-configuration bundler.
```shell
npm install parcel --save-dev
```
- You can run parcel using the ```npx``` command.
    - npx is a comand line tool that allows you to run packages without installing them globally.
```shell
npx parcel index.html
```
- Parcel will create a ```dist``` folder and put the bundled code in it.
- And it will start a development server on port 1234, serving the bundled code. from
- Whenever you make changes to the code, parcel will automatically rebuild the code and reload the browser.
- module hot reloading is enabled by default in parcel.
```javascript
if (module.hot) {
    module.hot.accept();
}
```
- State is preserved in the browser, so you don't lose the state when the code is reloaded.
- Another way of running locally installed packages is to use the ```scripts``` property in the ```package.json``` file.
```json
"scripts": {
    "start": "parcel index.html"
}
```
- You can run the script using the ```npm run``` command.
```shell
npm run start
```
- You can also pass arguments to the script.
```shell
npm run start -- --port 8080
```
- To build the code for production, you can use the ```build``` command.
```shell
npm run build
```

- To uninstall a package, you can use the ```uninstall``` command.
```shell
npm uninstall parcel
```
- To install a package globally, you can use the ```-g``` flag.
```shell
npm install parcel -g
```

- You can pass the build in script to the ```scripts``` property in the ```package.json``` file.
```json
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
}
```
- You can also insta;; parcel globally using the ```-g``` flag.
```shell
npm install parcel -g
```
- Always install tools locally, so that you can have different versions of the same tool for different projects.

### BABEL AND POLYFILLS
- Babel is a tool that converts modern Javascript code into code that is compatible with older browsers.


### DEPLOYING TO NETLIFY
- Netlify is a hosting service for static websites.
- It is free to use and it is very easy to deploy a website to Netlify.
- You can deploy a website to Netlify by connecting your Github account to Netlify.
- You just drag and drop the project artefact folder to Netlify and it will deploy the website bu