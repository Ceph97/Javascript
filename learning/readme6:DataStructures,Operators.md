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

