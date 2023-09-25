# Arrays

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
