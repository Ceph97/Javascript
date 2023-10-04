# NUMBERS, DATE, INT, TIMERS, MATH

## Math Object
- Math object allows you to perform mathematical tasks on numbers
- Math is not a constructor, so you don't use new with it 
- It does have type conversion methods, so it will convert non-numbers to numbers

    - Math.PI
    - Math.PI.toFixed(2) // 3.14

    - Math.round(4.7) // 5
        - Math.round(4.4) // 4

    - Math.pow(8, 2) // 64

    - Math.sqrt(64) // 8
    - Math.sqrt(32) // 5.656854249492381
    - console.log(25 ** (1/2)) // 5.66

    - Math.abs(-4.7) // 4.7
        - abs = absolute value

    - Math.ceil(4.4) // 5
        - ceil = ceiling

    - Math.floor(4.7) // 4
        - floor = floor

    - Math.sin(90 * Math.PI / 180) // 1
        - sin = sine
        - sine returns the sine of a number

    - Math.random() // 0.12345678910111213
        - random = random
        - random returns a random number between 0 and 1
        - To get a random number between 1 and 100
        ```javascript
        Math.random() * 100 + 1
        ```

    - Math.trunc(4.7) // 4
        - trunc = truncate
        - truncate returns the integer part of a number
        - Removes the decimal part of a number
        ```javascript
        const randomNum = Math.trunc((Math.random() * 100) + 1)

    - Rounding decimals
        - toFixed() returns a string, so convert it to a number
        ```javascript
        const randomNum = Number((Math.random() * 100).toFixed(2)) // 2 decimal places
        ```
    - Rounding integers
        - Math.round()
        - Math.ceil()
        - Math.floor()
        - Math.trunc()

    - Max and Min
        - Math.max(1, 2, 3, 4, 5) // 5
        - Math.min(1, 2, 3, 4, 5) // 1

## Remainder Operator
- Remainder operator returns the remainder left over when one operand is divided by a second operand
- The remainder operator is sometimes incorrectly called the modulus operator
- The remainder operator (%) is used to get the remainder of a division operation

```javascript
console.log(5 % 2) // 1
console.log(8 % 3) // 2
console.log(10 % 2) // 0
console.log(7 % 2) // 1

// Even numbers are divisible by 2
// Odd numbers are not divisible by 2
const isEven = n => n % 2 === 0
console.log(isEven(2)) // true
console.log(isEven(3)) // false

// Lable all even rows in a table
[..document.querySelectorAll('tr')].forEach((tr, i) => {
    if (isEven(i)) {
        tr.style.backgroundColor = 'lightgray'
    }
})
```

## Numeric separators
- Numeric separators are used to make numbers easier to read
- Numeric separators are not allowed at the beginning or end of a number
- It uses the underscore character, but the engine ignores it
- We cam only use one underscore between digits and not between the decimal point and a digit ```10_.00``` is not allowed
- ParseInt() and parseFloat() ignore the underscore as well, but Number() does not



```javascript
const num1 = 100_000_000_000 // 100000000000
```

## BigInt
- BigInt is a new primitive type in JavaScript
- BigInt is used to represent integers that are larger than 2^53 - 1 ```console.log((2**53 -1 ).MAX_SAFE_INTEGER)``` which equals ```9007199254740991``` Adding 1 to this number will result in an incorrect number ```console.log((2**53 -1 ).MAX_SAFE_INTEGER + 1)``` which equals ```9007199254740992``` making it unsafe to use and will result in Bugs

- BigInt is created by appending ```n``` to the end of an integer no matter how large the number is
- To define a BigInt, append ```n``` to the end of the number
```javascript
const huge = 1234567890123456789012345678901234567890n
```
- You can also use the BigInt() function to create a BigInt
```javascript
const huge = BigInt(1234567890123456789012345678901234567890)
```
- You cannot mix BigInt and regular numbers
```javascript
const huge = 1234567890123456789012345678901234567890n
const num = 23
console.log(huge * num) // TypeError: Cannot mix BigInt and other types, use explicit conversions
```
- You can convert a BigInt to a regular number by using the Number() function
```javascript
const huge = 1234567890123456789012345678901234567890n
const num = 23
console.log(Number(huge) * num) // 28397113122757140000000000000000000000000
```
- Math operations are not allowed with BigInts
```javascript
const huge = 1234567890123456789012345678901234567890n
console.log(Math.sqrt(huge)) // TypeError: Cannot convert a BigInt value to a number
```

## Dates and Times
- JavaScript can handle dates and times
- JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated)

- Date objects are created with the new Date() constructor
```javascript
const now = new Date()
console.log(now) // 2021-03-02T20:54:48.000Z

const now = new Date(2021, 2, 2, 20, 54, 48)
console.log(now) // 2021-03-02T20:54:48.000Z

const now = new Date(1614712488000)
console.log(now) // 2021-03-02T20:54:48.000Z

const now = new Date('March 02, 2021')
console.log(now) // 2021-03-02T08:00:00.000Z

const now = new Date('2021-03-02')
console.log(now) // 2021-03-02T08:00:00.000Z

new Date(year, month, day, hours, minutes, seconds, milliseconds)
```
- Date objects can also be created using the Date.parse() method
```javascript
const now = Date.parse('March 02, 2021')
console.log(now) // 1614672000000
```
- Date objects can also be created using the Date.UTC() method
```javascript
const now = Date.UTC(2021, 2, 2, 20, 54, 48)
console.log(now) // 1614712488000
```

- Methods to get the date and time
```javascript
const now = new Date()
console.log(now) // 2021-03-02T20:54:48.000Z

console.log(now.getFullYear()) // 2021
console.log(now.getMonth()) // 2
console.log(now.getDate()) // 2
console.log(now.getDay()) // 2
console.log(now.getHours()) // 20
console.log(now.getMinutes()) // 54
console.log(now.getSeconds()) // 48
console.log(now.getMilliseconds()) // 0
console.log(now.getTime()) // 1614712488000
console.log(now.toISOString()) // 480

//There is also setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds(), setMilliseconds(), setTime()

```

- ## CALCULATE THE TIME IT TAKES TO RUN A FUNCTION
```javascript
const time1 = performance.now()
console.log(time1) // 0.10000000000000009
```

## INTERNATIONALIZATION
- Internationalization is the process of adapting your program to different languages and regions
- Internationalization is often abbreviated as i18n (because there are 18 letters between the first i and the last n)
- Localization is the process of adapting your program to a specific language and region
- Localization is often abbreviated as l10n (because there are 10 letters between the first l and the last n)

```javascript
const num = 123456.789
console.log(num.toLocaleString('en-US')) // 123,456.789

const num = 123456.789
console.log(num.toLocaleString('de-DE')) // 123.456,789

const num = 123456.789
console.log(num.toLocaleString('ar-EG')) // ١٢٣٬٤٥٦٫٧٨٩
```

- You can also use the Intl object to format numbers, dates, and times
```javascript
const num = 123456.789
console.log(new Intl.NumberFormat('en-US').format(num)) // 123,456.789
```

- You can also use units
```javascript
const num = 123456.789
console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num)) // $123,456.79
```
- They are many options for the Intl object


## TIMERS
- Timers are used to execute a function at a set period of time or to execute a function repeatedly
- Timers are created with the setTimeout() and setInterval() methods
- ```setTimeout()``` executes a function once after a set amount of time
- ```setInterval()``` executes a function repeatedly at a set interval

```javascript
setTimeout(() => {
    console.log('Hello')
}, 1000) // Hello after 1 second

setInterval(() => {
    console.log('Hello')
}, 1000) // Hello every 1 second
```

- All arguments passed to the function are passed to the callback function
```javascript
setTimeout((name, age) => {
    console.log(`Hello ${name}, you are ${age} years old`)
}, 1000, 'Brad', 36) // Hello Brad, you are 36 years old
```

- We can cancel a timer with the clearTimeout() and clearInterval() methods
```javascript
const timer = setTimeout(() => {
    console.log('Hello')
}, 1000) // Hello after 1 second

clearTimeout(timer) // Cancel the timer
```

## LOGOUT TIMER
```javascript
const startLogoutTimer = function() {
    // set time to 5 minutes
    let time = 1000 * 60 * 5;

    // Call the timer every second
    setInterval(function (){
        // In each call, print the remaining time to UI
        labelTimer.textContent = `${Math.trunc(time / 60)}:${Math.trunc(time % 60)}`
        // In each call, print the remaining time to UI
        time--;
        // When 0 seconds, stop timer and logout user
    }, 1000)
    
    // When 0 seconds, stop timer and logout user


}
```