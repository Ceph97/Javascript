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
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300000],
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
const displayMovements = function (movements, sort = false) {

  //Clearing the movements container
  containerMovements.innerHTML = '';

  //Sorting the movements
  const movs = sort ? movements //if sort is true then sort the movements
  .slice() //creating a shallow copy of the movements array
  .sort((a, b) => a - b) : movements; //AB = ascending order, BA = descending order

  movs.forEach(function (mov, i) {

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

const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce(function (acc, cur) {
    return acc + cur;
  }, 0); //0 is the initial value of the accumulator

  //adding the balance to the account object for future use
  account.balance = balance;

  //displaying the balance in the UI
  labelBalance.textContent = `€${balance}`;
}


/////////////////////////////////////////////////
// COMPUTING SUMMARY DEBIT, CREDIT AND INTEREST
/////////////////////////////////////////////////
/**
 * @param {Array} movements
 * This function will compute the summary of the user
 * This will be used to display the summary in the UI
 * We will use reduce method to compute the summary
 * We are chaining the filter and map method to compute the interest
 */

const calcDisplaySummary = function (account) {

  //computing the credit
  const incomes = account.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (acc, cur) {
      return acc + cur;
    }, 0);
  //displaying the summary in the UI
  labelSumIn.textContent = `€${incomes}`;
  
  //computing the debit
  const out = account.movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (acc, cur) {
      return acc + cur;
    }, 0);
  //displaying the summary in the UI
  labelSumOut.textContent = `€${Math.abs(out)}`;

  //computing the interest
  const interest = account.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .map(function (deposit) {
      return deposit * account.interestRate / 100;
    })
    //filtering the interest greater than 1
    .filter(function (int, i, arr) {
      return int >= 1;
    })
    .reduce(function (acc, int) {
      return acc + int;
    }, 0);
  labelSumInterest.textContent = `€${interest}`;
}


/////////////////////////////////////////////////
// LOGIN FUNCTIONALITY
/////////////////////////////////////////////////


//Creating a global variable to store the current account
let currentAccount;

//Event Handler
btnLogin.addEventListener('click', function (e) {
  //Preventing the form from submitting as it defalt HTML behaviour
  e.preventDefault();

  //Getting the user name
  const userName = inputLoginUsername.value;

  //Getting the pin
  const pin = Number(inputLoginPin.value);

  //Checking if the user name is present in the accounts array
  currentAccount = accounts.find(function (acc) {
    return acc.userName === userName;
  });

  //Checking if the pin is correct
  // ?. is optional chaining operator 
  // It will not check the pin if the currentAccount is undefined
  if (currentAccount?.pin === pin) {
    //Displaying the UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    // Changing the opacity of the UI to 100 to be visible
    containerApp.style.opacity = 100;

    //Clearing the input fields and removing the focus
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Updating the UI
    updateUI(currentAccount);
  }
});

/////////////////////////////////////////////////
// TRANSFER FUNCTIONALITY
/////////////////////////////////////////////////
/**
 * @param {Object} account
 * This function will transfer the amount from one account to another
 * 
 */

//Event Handler
btnTransfer.addEventListener('click', function (e) {
  //Preventing the form from submitting as it defalt HTML behaviour
  e.preventDefault();

  //Getting the amount
  const amount = Number(inputTransferAmount.value);

  //Getting the user name
  const receiverAccount = accounts.find(function (acc) {
    return acc.userName === inputTransferTo.value;
  });

  //Clearing the input fields and removing the focus
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();

  //Checking if the amount is greater than 0 and the current account has enough balance
  if (amount > 0 
      && receiverAccount //Checking if the receiver account is present
      && currentAccount.balance >= amount //Checking if the current account has enough balance
      && receiverAccount?.userName !== currentAccount.userName //Checking if the receiver account is not the current account
      ) {
    
    //Doing the transfer
    currentAccount.movements.push(-amount); // subtracting the amount from the current account
    receiverAccount.movements.push(amount); // adding the amount to the receiver account

    //Updating the UI
    updateUI(currentAccount);
  }
});

/////////////////////////////////////////////////
// LOAN FUNCTIONALITY
/////////////////////////////////////////////////
/**
 * 
 * @param {Object} account
 * This function will give the loan to the user
 * We are using some method to check if any of the movement is greater than 0
 * /
*/
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  //Getting the amount
  const amount = Number(inputLoanAmount.value);

  //Checking if the amount is greater than 0 and any of the movement is greater than 0
  if (amount > 0 && currentAccount.movements.some(function (mov) {
    return mov >= amount * 0.1;
  })) {
    //Adding the movement
    currentAccount.movements.push(amount);

    //Updating the UI
    updateUI(currentAccount);
  }
  //Clearing the input fields and removing the focus
  inputLoanAmount.value = '';
});


/////////////////////////////////////////////////
// CLOSE ACCOUNT FUNCTIONALITY
/////////////////////////////////////////////////
/**
 * @param {Object} account
 * This function will close the account
 * We will use findIndex method to find the index of the account
 * 
 */
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  //Getting the user name
  if (inputCloseUsername.value === currentAccount.userName
    && Number(inputClosePin.value) === currentAccount.pin) {

    //Finding the index of the account
    const index = accounts.findIndex(function (acc) {
      return acc.userName === currentAccount.userName;
    });

    //Deleting the account
    accounts.splice(index, 1);

    //Hiding the UI
    containerApp.style.opacity = 0;
  }else{
    alert(`user name or pin are incorrect\n
    Please try again !!!`);

  }

});

/////////////////////////////////////////////////
// SORT FUNCTIONALITY
/////////////////////////////////////////////////
/**
 * @param {Array} movements
 * This function will sort the movements
 * We will use sort method to sort the movements
 * Will Set the sorted to true to sort the movements
 */
let sorted = false; //initially the movements are not sorted
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  //Updating the UI
  displayMovements(currentAccount.movements, !sorted); //if sorted is true then sort the movements
  sorted = !sorted; //if sorted is true then set it to false and vice versa

});


/////////////////////////////////////////////////
// UPDATE UI
/////////////////////////////////////////////////

const updateUI = function (account) {
  //Displaying the movements
  displayMovements(account.movements);

  //Displaying the balance
  calcDisplayBalance(account);

  //Displaying the summary
  calcDisplaySummary(account);
}



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
