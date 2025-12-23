'use strict';

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

// functions

//* emptying the starter elements
containerMovements.innerHTML = '';

account1.movements.forEach(function (mov, i) {
  // setting the type (withdraw or deposit)
  const type = mov > 0 ? 'deposit' : 'withdrawal';

  // the html element
  const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">
      ${i + 1} ${type}
    </div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>;`;

  // inserting html element
  containerMovements.insertAdjacentHTML('afterbegin', html);
});

// displaying the 'in' 'out' 'intrest' parts in the footer
const calcDisplaySummary = function (movements) {
  // incomes
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  // withdrawals
  const withdraws = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = Math.abs(withdraws);

  const intrest = movements
    .filter(deposit => deposit > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = intrest;
};

calcDisplaySummary(account1.movements);

// extracts the first letter of each word in a name
const createUsernames = function (accs) {
  for (const account of accs) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(mov => mov[0]) // return a new array with the first element in the last array
      .join(''); // join the array with no space
  }
};
createUsernames(accounts);

// calculate movements and print them in the top right corner
const calcPrintBalance = function (movs) {
  const balance = movs
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}€`;
};
// console.log(calcPrintBalance(account2.movements));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// returns the first element that meets the condition
const firstWithdrawal = account1.movements.find(curr => curr < 0);
console.log(firstWithdrawal);

const account = accounts.find(account => account.owner === 'Jonas Schmedtmann');
console.log(account);
/////////////////////////////////////////////////
