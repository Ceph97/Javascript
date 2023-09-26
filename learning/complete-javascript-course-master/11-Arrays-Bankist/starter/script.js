'use strict';
/*
function head(heading) {
  console.log(`/////////////////////////////////////////////////
            \n////${heading}////
            \n/////////////////////////////////////////////////`);
}

// For Loop
head('For Loop')
const jonas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const i of jonas) {
  if (i % 2 === 0) {
    console.log(`Even number: ${i}`);
  }else{
    console.log(`Odd number: ${i}`);
  }
}
// For each
function oddEven(i) {
  if (i % 2 === 0) {
    console.log(`Even number: ${i}`);
  }else{
    console.log(`Odd number: ${i}`);
  }};

head('For Each');
jonas.forEach(oddEven);

// For Each with Map
head('For Each with Map');
const currencies2 = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies2.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// For Each with Set
head('For Each with Set');
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _ , map) {
  console.log(`${value}: ${value}`);
});

*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
///////   Functions    /////////////////////////
/////////////////////////////////////////////////

// Display Movements
/**
 * @param {Array} movements
 * This function will display the movements of the user
 * This will be like account activity
 */
const displayMovements = function (movements) {

  //Clearing the movements container
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {

    //Deposit or Withdrawal
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //Movement row
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">(${i + 1}). ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    //Inserting the row to the movements container
    /**
     * We are using insertAdjacentHTML because we want to insert the html
     * as a child of the containerMovements
     */
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
// COMPUTING USER NAMES
/////////////////////////////////////////////////
/**
 * @param {Array} accounts
 * This function will compute the user names based on the account owner
 * This will be used to display the user name in the UI
 */
const createUserNames = function (accounts) {
  accounts.forEach(function (account) {
    //creating the user name field in the account object
    account.userName = account.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        //taking the first letter of the name
        return name[0];
      })
      //joining the first letters of the name to form the user name
      .join('');
  });
}
createUserNames(accounts);

/////////////////////////////////////////////////
// COMPUTING BALANCE
/////////////////////////////////////////////////
/**
 * @param {Array} movements
 * This function will compute the balance of the user
 * This will be used to display the balance in the UI
 * We will use reduce method to compute the balance
 */

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce(function (acc, cur) {
    return acc + cur;
  }, 0); //0 is the initial value of the accumulator

  //displaying the balance in the UI
  labelBalance.textContent = `€${balance}`;
}
calcDisplayBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
