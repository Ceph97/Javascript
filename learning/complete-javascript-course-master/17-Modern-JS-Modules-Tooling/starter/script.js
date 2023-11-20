import cloneDeep  from "./node_modules/lodash-es/cloneDeep.js";

const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'pizza', quantity: 5 },
    ],
    user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);
state.user.loggedIn = false;


console.log(stateDeepClone);

// importing module

// import {addToCart, tq } from './shoppingCart.js';
// console.log('Importing module');

// addToCart('bread', 5);
// console.log(tq);

///////////////////////////////////////
// top level await
///////////////////////////////////////
// awaits outside of async functions

// const getLastPost = async function() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     console.log(data);

//     return {
//         title: data[0].title,
//         body: data[0].body
//     }
// };

// const lastPost = await getLastPost();
// console.log(lastPost);

// const shoppingCart2 = (function() {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;

//     const addToCart = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${quantity} ${product} added to cart`);
//         };

//     const orderStock = function(product, quantity) {
//         console.log(`${quantity} ${product} ordered from supplier`);
//     };

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity,
//     };
// })();

///////////////////////////////////////
// commonJS modules
///////////////////////////////////////

