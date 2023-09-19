'use strict';

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'Olive Garden',
  owner: 'Jonas',
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

//logical assignment operator
rest1.numGuests ||= 10;

console.log(rest1); // 20
console.log(rest2); // 10


// code: line separator
const lineSeparator = function(heading = 'heading'){
  console.log(`--------------------${heading}------------------------`);
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  desserts: ['Tiramisu', 'Cheesecake', 'Ice Cream'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){ // default values
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  
};

const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Cabonara'];
console.log(newMenu); // ["Pizza", "Pasta", "Risotto", "Gnocci"]

// code: Destructuring while passing an object as an argument
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
}); // Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30

//code: Destructuring Objects from the restaurant object
const [first, ,second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria


//code: order
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

// code: Nested destructuring
const {fri: {open, close}} = restaurant.openingHours;
console.log(`Opening: ${open}:00, Closing: ${close}:00`); // 11 23

// 1) COMMENT: Destructuring
// const arr = [2, 3, 4];
// const a = arr[0]; // 2
// const b = arr[1]; // 3
// const c = arr[2]; // 4
/*
* The above code can be written as below
* This is similar to tuple unpacking in python

const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4
*/



lineSeparator('Spread Operator');
// 2) COMMENT: SPREAD OPERATOR
const names = 'Jonas';
const letters = [...names, ' ', 'S.'];
console.log(letters); // ["J", "o", "n", "a", "s", " ", "S."]
console.log(...letters); // J o n a s   S.

console.log(...'Jonas'); // J o n a s

lineSeparator('Rest Operator');
// 1) Destructuring
const arr = [1, 2, ...[3, 4]];
console.log(arr); // (4) [1, 2, 3, 4]
// 2) Functions
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 (3) [3, 4, 5]

lineSeparator('Rest Operator from the restaurant example');
//mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],



const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood); // Pizza Risotto (6) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Gnocci", "Cabonara"]


lineSeparator('Rest Operator in Objects');
// Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays); // {thu: {…}, fri: {…}}


lineSeparator('Rest Operator in Functions');
// Functions
const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
};

add(2); // 5

lineSeparator('Short Circuiting');

// || operator
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

lineSeparator('Short circutting real world example');
// restaurant.numGuests = 0;
restaurant.numGuests = 23;

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

// Short circuiting
const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10

lineSeparator('AND operator');
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas


lineSeparator('Challenge 1');

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

lineSeparator('Challenge 2'); 