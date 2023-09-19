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



