# ARRAYS

## ARRAY METHODS

- ```arr.slice([start], [end])``` - returns a new array from start to end (not including end)
    - You can also use negative numbers to start from the end of the array
    - You can optionally pass a single parameter as the end index
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.slice(1, 3)); // [2, 3]
    ```
    - You can also use slice to copy an array
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    let arr2 = arr.slice();
    console.log(arr2); // [1, 2, 3, 4, 5]
    ```

- ```arr.splice(start, deleteCount, [item1, item2, ...])``` 
    - removes elements from an array and optionally replaces them with new elements
    - It mutates the original array and returns the removed elements
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.splice(1, 2)); // [2, 3]
    console.log(arr); // [1, 4, 5]
    ```
- ```arr.reverse()``` 
    - reverses the order of the elements in an array
    - It mutates the original array
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.reverse()); // [5, 4, 3, 2, 1]
    console.log(arr); // [5, 4, 3, 2, 1]
    ```

- ```arr.concat(arg1, arg2, ...)```
    - merges two or more arrays
    - It does not mutate the original arrays
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.concat([6, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]
    console.log(arr); // [1, 2, 3, 4, 5]
    ```

- ```arr.join(separator)```
    - joins all elements of an array into a string
    - It does not mutate the original array
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.join(' ')); // '1 2 3 4 5'
    console.log(arr); // [1, 2, 3, 4, 5]
    ```

- ```arr.at(index)```
    - It is used to access an element at a given index instaed of using bracket notation ```(arr[index])```
    - returns the element at the specified index
    - It does not mutate the original array
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.at(2)); // 3
    console.log(arr); // [1, 2, 3, 4, 5]
    ```

## FOREACH METHOD
- Easy way to iterate over an array
- It takes a callback function as an argument and runs it once for each element in the array
- The callback function takes three arguments: ```the current element, the index of the current element, and the array itself``` The naming of these arguments is up to you but the order is always the same.
- It does not mutate the original array
```javascript
let arr = [1, 2, 3, 4, 5];
arr.forEach((function(element)) => {
    console.log(retunedValue);
});
```

- Another example
```javascript
jonas = [1991, 1989, 2000, 2010, 2020];

function oddEven(i) {
  if (i % 2 === 0) {
    console.log(`Even number: ${i}`);
  }else{
    console.log(`Odd number: ${i}`);
  }};

// For Each
jonas.forEach(oddEven);
```
- To access the index and the array itself
```javascript
jonas = [1991, 1989, 2000, 2010, 2020];

function oddEven(i, index, array) {
  if (i % 2 === 0) {
    console.log(`Even number: ${i} at index ${index} in array ${array}`);
  }else{
    console.log(`Odd number: ${i} at index ${index} in array ${array}`);
  }};

// For Each
jonas.forEach(oddEven);
```
- ```continue`` and ``break`` do not work in forEach so you have to use a ``for loop`` instead.
 
### FOR EACH WITH MAPS AND SETS
- ```forEach``` also works with maps and sets
- ```forEach``` on a map takes three arguments: ```the value, the key, and the map itself```
- ```forEach``` on a set takes three arguments: ```the value, the key, and the set itself```

```javascript
// Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

// The key and value are the same in sets
// _ is used as a throwaway variable
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
```

## MAP, FILTER, REDUCE METHODS FOR ARRAYS
- ```map``` :
    - returns a new array containing the results of applying an operation on all original array elements
    - Similar to ```forEach``` but it returns a new array
    - It does not mutate the original array
    - It can can access current element, index, and the array itself.
    - Supports chaining
        - ```arr.map().filter().reduce()``` 

    ```javascript
    // Example 1:
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.map((element) => element * 2)); // [2, 4, 6, 8, 10]
    console.log(arr); // [1, 2, 3, 4, 5]

    // Example 2:
    const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    const eurToUsd = 1.1;
    const movementsUSD = movements.map(function (mov) {
      return mov * eurToUsd;
    });
    console.log(movements);
    console.log(movementsUSD);
    ```
  
- ```filter```:
    - returns a new array containing the array elements that passed a specified test condition
    - It does not mutate the original array

    ```javascript
    // Example 1:
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.filter((element) => element % 2 === 0)); // [2, 4]
    console.log(arr); // [1, 2, 3, 4, 5]

    // Example 2:
    const deposits = movements.filter(function (mov) {
      return mov > 0;
    });
    ```

- ```reduce``` 
    - Might be the most powerful array method there is; With it, we can implement any array transformation.
    - returns a single value which is the accumulated result of iterating through the array
    - It does not mutate the original array
    - It can can access current element, index, and the array itself.
    - It takes the following arguments: ```the accumulator, the current element, the current index, and the array itself```
        - The accumulator is like a snowball that keeps growing as it rolls down the hill
        - The accumulator is the value that we ultimately want to return
        - For each iteration, we can update the accumulator, and then return it at the end of the iteration
        - An incrementing counter is a good example of using reduce

    ```javascript
    // Example 1:
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.reduce((accumulator, element) => accumulator + element)); // 15
    console.log(arr); // [1, 2, 3, 4, 5]

    // Example 2: Get the maximum value
    const max = movements.reduce(function (acc, mov) {
      if (acc > mov) {
        return acc;
      } else {
        return mov;
      }
    }, movements[0]); // The second argument is the initial value of the accumulator which is the first element in the array
    ```


## CHAINING METHODS
- ```map```, ```filter```, and ```reduce``` can be chained together
- The order of the methods matters
- ```map``` and ```filter``` return a new array so they can be chained together
- ```reduce``` returns a single value so it cannot be chained before ```map``` or ```filter``` because they expect an array as an argument
- ```reduce``` can be chained after ```map``` or ```filter``` because they return an array
- We should not chain too many methods together because it can make the code hard to read and debug

```javascript
// Example 1:
const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

// Example 2: To debug
const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => {
    console.log(acc);
    return acc + mov;
  }, 0);
```

## FIND METHOD
- returns the first element in the array that satisfies a specified condition
- It does not mutate the original array
- It can can access current element, index, and the array itself.
- It takes the following arguments: ```the current element, the current index, and the array itself```
- You can also add a callback function as a second argument
    - The callback function takes three arguments: ```the current element, the current index, and the array itself```
    - The callback function is optional
    - If the callback function is not provided, the find method will return the first element that is not undefined
- It only returns an element not an array

```javascript
// Example 1:
let arr = [1, 2, 3, 4, 5];
console.log(arr.find((element) => element % 2 === 0)); // 2
console.log(arr); // [1, 2, 3, 4, 5]

// Example 2:
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

// With callback function
const index = movements.findIndex(function (mov) {
  return mov < 0;
});
```

## SOME AND EVERY METHODS
- ```some```:
    - returns true if at least one element in the array satisfies a specified condition
    - It does not mutate the original array
    - It can can access current element, index, and the array itself.
    - It takes the following arguments: ```the current element, the current index, and the array itself```
    - It returns a boolean value
    - It is similar to ```includes``` but it is more flexible because it uses a callback function
    - It is useful for checking if a certain condition is met by at least one element in the array


    ```javascript
    // Example 1:
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.some((element) => element % 2 === 0)); // true
    console.log(arr); // [1, 2, 3, 4, 5]

    // Example 2:
    console.log(movements);
    console.log(movements.includes(-130));

    // With callback function
    const anyDeposits = movements.some((mov) => mov > 0);
    console.log(anyDeposits);
    ```

- ```every```:
    - returns true if all elements in the array satisfy a specified condition
    - It does not mutate the original array
    - It can can access current ```element, index, and the array itself```.
    
    ```javascript
    // Example 1:
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.every((element) => element % 2 === 0)); // false
    ```
    - It is useful for checking if a certain condition is met by all elements in the array


## FLAT AND FLATMAP METHODS
- ```flat```:
    - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
    - It does not mutate the original array
    - It takes a depth argument which is optional, the default value is 1
    - It is useful for flattening nested arrays
    - It is useful for removing empty elements from an array

    ```javascript
    // Example 1:
    const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
    console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

    // Example 2:
    const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
    console.log(arrDeep.flat()); // [Array(2), 3, 4, Array(2), 7, 8]

    // Example 3: with depth argument
    console.log(arrDeep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]
    ```

- ```flatMap```:
    - maps each element using a mapping function, then flattens the result into a new array
    - It does not mutate the original array
    - It is useful for combining ```map``` and ```flat``` methods
    - It is useful for removing empty elements from an array

    ```javascript
    // Example 1:
    const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
    console.log(arr.flatMap((element) => element * 2)); // [2, 4, 6, 8, 10, 12, 14, 16]

    // Example 2:
    const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
    console.log(arrDeep.flatMap((element) => element * 2)); // [2, 4, 6, 8, NaN, 14, 16]
    ```
    - ```flatMap``` only goes one level deep and it does not take a depth argument


## SORT METHOD
- sorts the elements of an array in place and returns the sorted array
- It mutates the original array
- It sorts the elements as strings by default

```javascript
// Example 1:
let arr = [1, 2, 3, 4, 5];
console.log(arr.sort()); // [1, 2, 3, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]

// Example 2: with strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // ['Adam', 'Jonas', 'Martha', 'Zach']

// Example 3: with numbers
console.log(movements);
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]

// Example 4: with numbers ASCENDING(A,B)
movements.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
});

// Example 5: with numbers DESCENDING(B,A)
movements.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
});

```
## ARRAY GENERATION METHOD
- ```Array.fill()```
    - changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length)
    - It mutates the original array
    - It takes the following arguments: ```the value to fill the array with, the start index, and the end index```
    - It is useful for filling an array with a certain value

    ```javascript
    // Example 1:
    let arr = new Array(5);
    arr.fill(1); // [1, 1, 1, 1, 1]
    console.log(arr);
    ```
    
- ```Array.from()```
    - creates a new, shallow-copied Array instance from an array-like or iterable object
    - It does not mutate the original array
    - It takes the following arguments: ```the array-like or iterable object, a map function, and an optional this argument```

    ```javascript
    // Example 1:
    const arr = Array.from({ length: 7 }, () => 1);
    console.log(arr); // [1, 1, 1, 1, 1, 1, 1]

    // Example 2:
    const arr2 = Array.from({ length: 7 }, (_, i) => i + 1);
    console.log(arr2); // [1, 2, 3, 4, 5, 6, 7]

    // Example 3:
    const arr3 = Array.from({ length: 7 }, (_, i) => Math.trunc(Math.random() * 6) + 1);
    console.log(arr3); // [1, 2, 3, 4, 5, 6, 7]
    ```
