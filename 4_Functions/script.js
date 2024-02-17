"use strict";
//CODING CHALLENGE 1
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

  // This generates [0, 0, 0, 0]. More in the next section! answers: new Array(4).fill(0),
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    let input = Number(
      prompt(`What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++`)
    );
    this.answers[input]++;
    displayResults([1, 5, 3, 9, 6, 1]);
  },
};
document.body
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

function displayResults(arg) {
  if (typeof arg == "string") {
    document.body.append(
      `The results of the poll are ${poll.answers.join(",")}`
    );
  } else {
    console.log("answers" + poll.answers);
    console.log(arg);
  }
}

//CODING CHALLENGE 2
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.body.addEventListener("click", () => {
    header.style.color = "blue";
  });
})();
//Illustation for proof that when method is extrapolated into a normal function (in variable x), fn is passed and copied not as a reference type wierdly enough, using var for being able to see values in window object. Literally copied off as a variable primitive value so mutation in object isn't changing val of x but obv object prop book is changed. Pretty interesting. same as a prim value in usage.

const bookSpiceJet = {
  airline: "Spice Jet",
  bookings: [],
  book(name, flightNum) {
    let y = 23;
    console.log(
      `${name} booked flight in ${this.airline} ailines and flightNum = ${flightNum}`
    );
    this.bookings.push(`${this.airline}-${name}-${flightNum}`);
  },
};
bookSpiceJet.book("Aj", 635);
console.log(bookSpiceJet);
var x = bookSpiceJet.book;
console.log(this);
bookSpiceJet.book = function (name, flightNum) {
  console.log("function mutated");
};
console.log(bookSpiceJet);
console.log(x);
console.log(this);

const bookAirIndia = {
  airline: "Air India",
  bookings: [],
};

const bookAirIndiaFlight = x.bind(bookAirIndia);
bookAirIndiaFlight("Tom", 777);
console.log(bookAirIndia);
x.call(bookAirIndia, "Bakri", 222);
