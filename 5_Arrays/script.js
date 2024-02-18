"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
function computeUsernames(accountsArr) {
  //this can be shortened by not using var but direct property assignment
  //BUT, keep in mind readibility
  accountsArr.forEach((curr, i, arr) => {
    let username = curr.owner
      .split(" ")
      .map((strToken) => strToken[0].toLowerCase())
      .join("");
    arr[i] = { ...curr, username };
  });
}
computeUsernames(accounts);
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 550, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//global
let currentAccount;

function calcDisplayMovements(movArr) {
  containerMovements.innerHTML = "";
  let movementTemplate = "";
  movArr.forEach((curr, i, arr) => {
    let type = curr < 0 ? "withdrawal" : "deposit";
    movementTemplate = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">i(${
      i + 1
    }) ${type}</div>
          <div class="movements__date">dates later</div>
          <div class="movements__value">${curr}€</div>
        </div>
        <div `;
    containerMovements.insertAdjacentHTML("afterbegin", movementTemplate);
  });
}
//calcDisplayMovements(movements);
function calcPrintBalance(movArr) {
  let balance = movArr.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${balance} EUR`;
  //calc max value
  // let max = movArr.reduce((acc, curr) => {
  //   if (curr > acc) return curr;
  //   else return acc;
  // });
  // console.log(max);
}
//calcPrintBalance(movements);
function calcDisplaySummary(acc) {
  labelSumIn.textContent = acc.movements
    .filter((curr) => curr > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = acc.movements
    .filter((curr) => curr < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumInterest.textContent = acc.movements
    .filter((curr) => curr > 0)
    .reduce((total, curr) => {
      if (curr * 0.012 > 1) return total + (curr * acc.interestRate) / 100;
      else return total;
    }, 0);
}
//calcDisplaySummary(movements);
function loginHandler(e) {
  e.preventDefault();
  let userIp = inputLoginUsername.value;
  let pwdIp = Number(inputLoginPin.value);
  currentAccount = accounts.find((curr) => {
    if (curr.username === userIp) {
      if (curr.pin === pwdIp) {
        return true;
      }
      console.log("Wrong Password");
    }
  });
  if (!currentAccount) {
    console.log("Incorrect credentials, try again");
    alert("Login Failed");
    return;
  }
  containerApp.style.opacity = 1;
  labelWelcome.textContent = `Welcome back ${currentAccount.owner
    .split(" ")
    .at(0)} !`;
  calcDisplayMovements(currentAccount.movements);
  calcDisplaySummary(currentAccount);
  calcPrintBalance(currentAccount.movements);
  //clear Ip fields
  inputLoginPin.value = inputLoginUsername.value = "";
  inputLoginPin.blur();
}
btnLogin.addEventListener("click", loginHandler);
function transferHandler(e) {
  e.preventDefault();
  let recepient = inputTransferTo.value.toLowerCase().trim();
  let amount = Number(inputTransferAmount.value);
  console.log(recepient, amount);
  if (!recepient || !amount || amount < 0) {
    console.log("guard clause 1");
    return;
  }
  console.log(Number.parseInt(labelBalance.textContent));
  if (amount > Number.parseInt(labelBalance.textContent)) {
    console.log("Amt cant exceed balance");
    return;
  }
  let recepientObj = accounts.find((curr) => {
    if (curr.username === recepient) {
      console.log("YAY");
      return true;
    }
  });
  if (!recepientObj) {
    console.log("No such user exists");
    return;
  }
  currentAccount.movements.push(-1 * amount);
  recepientObj.movements.push(amount);
  calcDisplayMovements(currentAccount.movements);
  calcDisplaySummary(currentAccount);
  calcPrintBalance(currentAccount.movements);
}
btnTransfer.addEventListener("click", transferHandler);
