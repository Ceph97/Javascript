## DATA STRUCTURES, MODERN OPERATORS AND STRINGS

- ### Array destructuring
  - We use square brackets to destructure an array
  ```javascript
  const arr = [2, 3, 4];
  const [x, y, z] = arr;
  console.log(x, y, z); // 2 3 4
  ```
  - The original array is not affected
  - To take first and third element, we can leave blank element

    ```javascript
    const [first, , second] = restaurant.categories;
    console.log(first, second); // Italian Vegetarian
    ```
  - To switch variables we can just swap them

    ```javascript
    let [main, , secondary] = restaurant.categories;
    console.log(main, secondary); // Italian Vegetarian
    [main, secondary] = [secondary, main];
    console.log(main, secondary); // Vegetarian Italian
    ```

  - Nested arrays destructuring

    ```javascript
    const nested = [2, 4, [5, 6]];
    const [i, , j] = nested;
    console.log(i, j); // 2 [5, 6]
    const [i, , [j, k]] = nested;
    console.log(i, j, k); // 2 5 6
    ```

  - Default values

    ```javascript
    const [p = 1, q = 1, r = 1] = [8, 9];
    console.log(p, q, r); // 8 9 1
    ```
    - The default values are used only if the value is undefined

- ### Destructuring objects
  - We use curly braces instead of square brackets

  ```javascript
  const { name, openingHours, categories } = restaurant;
  console.log(name, openingHours, categories);
  // Classico Italian {thu: {…}, fri: {…}, sat: {…}} (3) ["Italian", "Pizzeria", "Vegetarian"]
  ```
  - We can change the name of the variables
   - By using colon to assign new variable nameA

    ```javascript
    const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
    console.log(restaurantName, hours, tags);
    // Classico Italian {thu: {…}, fri: {…}, sat: {…}} (3) ["Italian", "Pizzeria", "Vegetarian"]
    ```

  - Default values
    - We can set default values for variables that don't exist in the object
    - We use equal sign to assign default value

    ```javascript
    const { menu = [], starterMenu: starters = [] } = restaurant;
    console.log(menu, starters);
    // [] (4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]
    ```

  - Mutating variables
    - We need to wrap the whole destructuring assignment in parentheses
        - Otherwise, JavaScript will think that it's a block of code

    ```javascript
    let a = 111;
    let b = 999;
    const obj = { a: 23, b: 7, c: 14 };
    ({ a, b } = obj);
    console.log(a, b); // 23 7
    ```

  - Nested objects
    - We can also reassign the variable names using colon

    ```javascript
    const { fri: { open: o, close: c } } = openingHours;
    console.log(o, c); // 11 23
    ```

- ### Spread operator
  - We use spread operator to expand an array into all its elements
  - We use spread operator to create a new array
  - We use spread operator to pass multiple values into a function
  - We use ```...``` to use spread operator

    ```javascript
    const arr = [7, 8, 9];
    const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
    console.log(badNewArr); // (5) [1, 2, 7, 8, 9]
    const newArr = [1, 2, ...arr];
    console.log(newArr); // (5) [1, 2, 7, 8, 9]
    ```
  - We can only use spread operator when building an array or when we pass values into a function
  - We can also use it to create a shallow copy of an array

    ```javascript
    const mainMenuCopy = [...restaurant.mainMenu];
    console.log(mainMenuCopy); // (4) ["Pizza", "Pasta", "Risotto", "Focaccia"]
    ```

  - Join 2 arrays
    
    ```javascript
    const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
    console.log(menu); // (7) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Risotto"]
    ```
    
    - It works on all Iterables: arrays, strings, maps, sets. NOT objects
     - ```...``` will unpack all the elements of an irritable into a new array

  - Pass multiple args in a function
    - We can use spread operator to pass multiple arguments into a function

    ```javascript
    const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
    console.log(ingredients); // (3) ["garlic", "olive oil", "spinach"]
    restaurant.orderPasta(...ingredients);
    ```

  - We can also do shallow copies of objects in the newer versions of javascript

    ```javascript
    const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
    console.log(newRestaurant);
    // {foundedIn: 1998, name: "Classico Italian", location: "Via Angelo Tavanti 23, Firenze, Italy", categories: Array(3), starterMenu: Array(4), …}
    ```

- ## REST OPERATOR
    - We use rest operator to pack elements into an array
    - We use ```...``` to use rest operator
    - We use rest operator to collect multiple elements and condense them into an array
    - We use rest operator to retrieve a part of an array
    - Its the opposite of spread operator and its used on the left side of the assignment operator
    - Remaining elements are collected and put into an array

    ```javascript
    // 1) Destructuring
    const arr = [1, 2, ...[3, 4]];
    console.log(arr); // (4) [1, 2, 3, 4]
    // 2) Arrays
    const [a, b, ...others] = [1, 2, 3, 4, 5];
    console.log(a, b, others); // 1 2 (3) [3, 4, 5]

    // 3) Objects
    const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

    // 4) Passing multiple elements to a Functions
    const add = function (...numbers) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) sum += numbers[i];
      console.log(sum);
    };
    add(2, 3); // 5
    add(5, 3, 7, 2); // 17
    add(8, 2, 5, 3, 2, 1, 4); // 25
    ```
    - This is similar to args in python

- ## SHORT CIRCUITING (&& and ||)

    - ### OR (||)
        - We use short circuiting to write short code
        - If the first value is truthy, it will not check the second value
        - If the first value is falsy, it will return the second value
        - Return the first truthy value or the last value if all are falsy

        ```javascript
        console.log(3 || "Jonas"); // 3
        console.log("" || "Jonas"); // Jonas
        console.log(true || 0); // true
        console.log(undefined || null); // null
        console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello

        //Real world example
        restaurant.numGuests = 23;

        const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
        console.log(guests1); // 23

        // Using short circuiting
        const guests2 = restaurant.numGuests || 10;
        ```

    ``
    - ### && (AND)
        - Only true if all the values are truthy
        - Return thr first falsy value or the last value if all are truthy
        - We can use it to check if a property exists before accessing it, for example as a replacement for if statement

        ```javascript
        console.log(0 && "Jonas"); // 0
        console.log(7 && "Jonas"); // Jonas
        console.log("Hello" && 23 && null && "Jonas"); // null

        // Real world example
        if (restaurant.orderPizza) {
          restaurant.orderPizza("mushrooms", "spinach");
        }

        // Using short circuiting
        restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
        ```

    - ## NULLISH COALESCING OPERATOR (??)
        - We use nullish coalescing operator to check for null or undefined
        - We use ```??``` to use nullish coalescing operator
        - Works with nullish values: null and undefined (NOT 0 or '')
        - It short circuits the evaluation if the value is null or undefined
        - It does not check for 0 or ''

            ```javascript
            restaurant.numGuests = 0;
            const guests = restaurant.numGuests || 10;
            console.log(guests); // 10

            // Nullish: null and undefined (NOT 0 or '')
            const guestCorrect = restaurant.numGuests ?? 10;
            console.log(guestCorrect); // 0
            ```
- ## LOGICAL ASSIGNMENT OPERATORS
    - ### OR (||)
       - We use to assign a value to a variable if the variable is falsy
       - We use ```||``` to use logical assignment operator

       ```javascript
         restaurant.numGuests = 0;
         const guests = restaurant.numGuests || 10;
         console.log(guests); // 10
        ```



- ## for-of Loop
    - We use for-of loop to loop over an array
    - We use ```for-of``` to use for-of loop

        ```javascript
        const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

        for (const item of menu) console.log(item);
        ```
    - We can use continue and break statements in for-of loop

        ```javascript
        for (const item of menu) {
          if (item === "Pizza") continue;
          console.log(item);
        }

        for (const item of menu) {
          if (item === "Pizza") break;
          console.log(item);
        }
        ``` 
    - We can also get the index of the array using entries method

        ```javascript
        for (const item of menu.entries()) {
          console.log(`${item[0] + 1}: ${item[1]}`);
        }
        // i = index, el = element
        for (const [i, el] of menu.entries()) {
          console.log(`${i + 1}: ${el}`);
        }
        ```
    - You can destructure the array in the for-of loop

        ```javascript
        for (const [i, el] of menu.entries()) {
          console.log(`${i + 1}: ${el}`);
        }
        ```

- ## ENHANCED OBJECT LITERALS
    - method: function
    - We can add methods to objects without using the function keyword

    - We can add properties to objects without using the colon and value

    - We can compute property names

        ```javascript
        const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

        const openingHours = {
          [weekdays[3]]: {
            open: 12,
            close: 22,
          },
          [weekdays[4]]: {
            open: 11,
            close: 23,
          },
          [`day-${2 + 4}`]: {
            open: 0, // Open 24 hours
            close: 24,
          },
        };
        ```
    
- ## OPTIONAL CHAINING
    - We use optional chaining to check if a property exists in an object
    - We use ```?.``` to use optional chaining
    - It will return undefined if the property does not exist
    - It will not throw an error if the property does not exist

        ```javascript
        if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
        // 12

        // With optional chaining
        console.log(restaurant.openingHours.mon?.open); // 12
        console.log(restaurant.openingHours?.mon?.open); // 12

        // Example
        const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

        for (const day of days) {
          const open = restaurant.openingHours[day]?.open ?? "closed";
          console.log(`On ${day}, we open at ${open}`);
        }

        // Methods
        console.log(restaurant.order?.(0, 1) ?? "Method does not exist"); // ["Focaccia", "Bruschetta"]
        console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist"); // Method does not exist

  
- Looping Objects: Object Keys, Values, and Entries
    - ### Object Keys
        - We use ```Object.keys()``` to loop over the keys of an object
        - We use ```Object.values()``` to loop over the values of an object
        - We use ```Object.entries()``` to loop over the keys and values of an object

        ```javascript
        // Property NAMES
        const properties = Object.keys(openingHours);
        console.log(properties); // (3) ["thu", "fri", "sat"]

        let openStr = `We are open on ${properties.length} days: `;
        for (const day of properties) {
          openStr += `${day}, `;
        }
        console.log(openStr); // We are open on 3 days: thu, fri, sat,

        // Property VALUES
        const values = Object.values(openingHours);
        console.log(values); // (3) [{…}, {…}, {…}]

        // Entire object
        const entries = Object.entries(openingHours);
        console.log(entries); // (3) [Array(2), Array(2), Array(2)]

        // [key, value]
        for (const [key, { open, close }] of entries) {
          console.log(`On ${key} we open at ${open} and close at ${close}`);
        }
        ```

- ## SETS
    - We use sets to create a collection of unique values
    - We use ```new Set()``` to create a new set
    - We pass an iterable to the set, most commonly an array
    - You cannot get data out of a set by using an index
    - We use set to remove duplicate values from an array so we cannot replace an array with a set

    ```javascript
    const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]);
    console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Risotto"}

    //size
    console.log(ordersSet.size); // 3

    //add element
    ordersSet.add("Garlic Bread");

    //delete element
    ordersSet.delete("Risotto");

    //clear set
    ordersSet.clear();
    ```

 
- ## MAPS

    - We use maps to map values to keys, similar to dictionaries in python
    - We use ```new Map()``` to create a new map
    - We use ```map.set(key,value)``` to add a new key-value pair to the map
    - We use ```map.get(key)``` to retrieve the value of a key
    - We use ```map.has(key)``` to check if a map has a certain key
    - We use ```map.delete(key)``` to delete a key-value pair from the map, however it is safer to use ```map.clear()``` to clear the map.

        ```javascript
        const rest = new Map();

        // adding elements
        rest.set("name", "Classico Italian");
        rest.set(1, "Firenze, Italy");

        // Getting elements
        console.log(rest.get("name")); // Classico Italian

        // Chaining
        rest
        .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
        .set("open", 11)
        .set("close", 23)
        .set(true, "We are open :D")
        .set(false, "We are closed :(");


        // Checking if a map has a certain key
            console.log(rest.has("categories")); // true
        ```

    - Another wat to create a map is to pass an array of arrays to the map constructor

        ```javascript
        // 1st element is the key, 2nd element is the value
        const question = new Map([
        ["question", "What is the best programming language in the world?"],
        [1, "C"],
        [2, "Java"],
        [3, "JavaScript"],
        ["correct", 3],
        [true, "Correct 🎉"],
        [false, "Try again!"],
        ]);
        ```
    - Looping is the same as an object

    - convert object to map

        ```javascript
        const hoursMap = new Map(Object.entries(openingHours));
        console.log(hoursMap); // Map(3) {"thu" => {…}, "fri" => {…}, "sat" => {…}}
        ```
    
    - convert map to array

        ```javascript
        console.log([...question]); // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
        ```
    - ### WHEN TO USE MAPS, SETS, OBJECTS, OR ARRAYS 
        - Use maps over objects when you need keys that are not strings
            - Maps are also easier to iterate over
        - Use objects when you need to include functions (methods)
            - Objects are also easier to write and access
        - Use sets to remove duplicate values from arrays
            - Sets are faster than arrays when it comes to checking if an element exists
        - Use arrays when you need ordered data

- ## STRINGS
    - strings are primitive values

    - We can index strings
    - We can get the length of a string
    - We can get the index of a character in a string
    - We can get a substring of a string using ```slice()``` and passing the start and end index of the substring
        - If we don't pass the end index, it will go to the end of the string
        - If we pass a negative index, it will start from the end of the string
    - We can get the index of the last character in a string using ```lastIndexOf()```
    - We can get the index of the first occurrence of a character in a string using ```indexOf()```

    - We can convert a string to uppercase using ```toUpperCase()```
    - We can convert a string to lowercase using ```toLowerCase()```
    - We can check if a string includes a certain character using ```includes()``` and returns a boolean.
    - We can check if a string starts with a certain character using ```startsWith()```. 
        - Returns true or false
    - We can check if a string ends with a certain character using ```endsWith()```
        - Returns true or false
    - We can check if a string is a part of another string using ```split()```
        - You can pass a separator to split the string
        - It returns an array
            ```javascript
            console.log("a+very+nice+string".split("+")); // (4) ["a", "very", "nice", "string"]

            // Destructuring
            const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
            ```
            
    - We can join an array into a string using ```join()```
        - You can pass a separator to join the string
        - It returns a string
            ```javascript
            const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
            console.log(newName); // Mr. Jonas SCHMEDTMANN
            ```
    - ```trim()``` removes whitespace from the beginning and end of a string
    - ```replace()``` replaces a part of a string with another string. 
        - It only replaces the first occurrence of the string
        - To replace all occurrences of a string, we need to use regular expressions
        ```javascript
        const announcement = "All passengers come to boarding door 23. Boarding door 23!";
        console.log(announcement.replace("door", "gate")); // All passengers come to boarding gate 23. Boarding door 23!
        ```
    - ```replaceAll()``` replaces all occurrences of a string with another string, however it is not supported in all browsers
    - ```padStart()``` adds a certain number of characters to the beginning of a string
        - You can pass the number of characters to add and the character to add
        - It returns a string
            ```javascript
            const message = "Go to gate 23!";
            console.log(message.padStart(25, "+")); // +++++++++Go to gate 23!
            ```
    - ```padEnd()``` adds a certain number of characters to the end of a string
        - You can pass the number of characters to add and the character to add
        - It returns a string
            ```javascript
            const message = "Go to gate 23!";
            console.log(message.padEnd(25, "+")); // Go to gate 23!++++++++++
            ```
    - ```repeat()``` repeats a string a certain number of times
        - You can pass the number of times to repeat the string
        - It returns a string
            ```javascript
            const message2 = "Bad weather... All departures delayed... ";
            console.log(message2.repeat(5));
            ```
    - Masking a credit card number
        ```javascript
        const maskCreditCard = function (number) {
          const str = number + "";
          const last = str.slice(-4);
          return last.padStart(str.length, "*");
        };
        console.log(maskCreditCard(43378463864647384)); // ************7384
        ```

