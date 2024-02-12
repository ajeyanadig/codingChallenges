//Assigments from Jonas Schmedtmann - coding heroes- The Complete JavaScript Course 2024: From Zero to Expert!
//Resource page https://codingheroes.io/assignments
"use strict";
console.log("\n- - - - - - - - - - - - - - - - - - - - - - - - - - - -\n ");
console.log(`ASSIGNMENTS - FUNDAMENTALS PART 1: \n\n`);

const country = "India",
  continent = "Asia",
  isIsland = false;
let population = 1_600_000_000,
  languages = "English, Hindi, and much more";

console.log(
  `Half of population of ${country} is ${
    population / 2
  }, a new baby was born as you're reading this hence population is now ${++population} and is the country's population more than the average population of a country(33,000,000) ? ${
    population > 33_000_000
  }`
);

console.log(
  "Is population of " +
    country +
    " more than Finland(6 million) ? " +
    (population > 6000000 ? "yup" : "nope")
);

console.log(
  `${country} is in ${continent} and its ${population} people speak ${languages}`
);

// let numCountries = Number(
//   window.prompt("How many neighbours does your country have ?")
// );
let numCountries = 9;
//strict vs loose equality was checked here
if (numCountries === 1) {
  console.log("Only 1 border");
} else if (numCountries > 1) {
  console.log("More than 1 border");
} else {
  console.log("No neighbours");
}

////

if (
  population < 50_000_000 &&
  isIsland === false &&
  languages.includes("English")
) {
  console.log("You should live in " + country + " :) ");
} else {
  console.log(country + " ain't suitable for Sarah");
}

console.log("\n- - - - - - - - - - - - - - \n ");
console.log(`ASSIGNMENTS - FUNDAMENTALS PART 2: \n\n`);

function describeCounty(country, population, capital) {
  return `${country} has ${population} people and it's capital is ${capital}`;
}
let res1 = describeCounty(country, population, "Delhi"),
  res2 = describeCounty("Finland", 6000000, "Helsinki"),
  res3 = describeCounty("Japan", 15_000_000, "Tokyo");
console.log(res1, res2, res3);
let worldPopulation = 8_100_000_000;
function percentageOfWorld1(population) {
  return ((population / worldPopulation) * 100).toFixed(2) + "%";
}
let chinaPop = 1_800_000_000,
  FinlandPop = 6000000,
  JapanPop = 1_200_000_000;
console.log(
  `China's world population(curr population ${chinaPop}) is equal to ${percentageOfWorld1(
    chinaPop
  )}`
);
console.log(
  `Finland's world population(curr population ${FinlandPop}) is equal to ${percentageOfWorld1(
    FinlandPop
  )}`
);
console.log(
  `India's world population(curr population ${population}) is equal to ${percentageOfWorld1(
    population
  )}`
);
const percentageOfWorld2 = (pop) =>
  ((pop / worldPopulation) * 100).toFixed(2) + "%";
console.log(
  `Japan's world population(curr population ${JapanPop}) is equal to ${percentageOfWorld1(
    JapanPop
  )}`
);

const populations = [population, JapanPop, FinlandPop, chinaPop];
const percentages = [];
console.log(populations.length === 4);
for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld2(populations[i]));
}
console.log(populations);
console.log(percentages);
const neighboursOfIndia = new Array(
  "Afghanistan",
  "Nepal",
  "Maldives",
  "Bhutan",
  "Pakistan",
  "Bangladesh",
  "Myanmar",
  "China",
  "Sri Lanka"
);
neighboursOfIndia.push("Utopiaaaa");
console.log(`Neighbours of India ${neighboursOfIndia.join(", ")}`);
neighboursOfIndia.pop();
console.log(`Neighbours of India are : ${neighboursOfIndia.join(", ")}`);
neighboursOfIndia.includes("Germany")
  ? console.log("This is a central Europian country")
  : console.log("Prolly not a central Europian country");
neighboursOfIndia.unshift("Germany");
neighboursOfIndia.includes("Germany")
  ? console.log("This is a central Europian country")
  : console.log("Prolly not a central Europian country");
let resultIndex = neighboursOfIndia.indexOf("China");
console.log(resultIndex);
if (resultIndex === -1) {
  //neighboursOfIndia.splice(resultIndex, 1, "Ching Chong Ping Pong");
  console.log("404");
} else {
  neighboursOfIndia[resultIndex] = "Meow meow";
}
console.log(neighboursOfIndia);

const myCountry = {
  country,
  language: languages,
  population,
  neighbours: neighboursOfIndia,
  capital: "Delhi",
  desciption: function () {
    return `${this.country} has ${this.population} people and it's capital is ${this.capital}`;
  },
  checkIsIsland: function () {
    return (this.isIsland = this.neighbours.length === 0 ? true : false);
  },
};
myCountry.population -= 2000000;
console.log(myCountry.desciption());
myCountry["population"] = myCountry["population"] + 2000000;
console.log(myCountry.checkIsIsland());

const listOfNeighbours = [
  ["Australia"],
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++) {
  if (listOfNeighbours[i].length > 1) {
    let neighbourStr = listOfNeighbours[i][0] + "'s neighbours : ";
    // console.log("neighbour string status outer : " + neighbourStr);
    for (let j = 1; j < listOfNeighbours[i].length; j++) {
      // console.log("neighbour string status inner : " + neighbourStr);
      neighbourStr += listOfNeighbours[i][j] + " ";
    }
    console.log(neighbourStr);
  } else {
    console.log(listOfNeighbours[i] + " has no neighbours !");
  }
}
