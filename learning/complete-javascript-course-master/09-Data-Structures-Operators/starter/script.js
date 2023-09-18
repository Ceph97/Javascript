'use strict';

// code: line separator
const lineSeparator = function(){
  console.log('--------------------------------------------');
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



lineSeparator();
// 2) COMMENT: SPREAD OPERATOR
const names = 'Jonas';
const letters = [...names, ' ', 'S.'];
console.log(letters); // ["J", "o", "n", "a", "s", " ", "S."]
console.log(...letters); // J o n a s   S.