//Jonas Schmedtmann - coding heroes- The Complete JavaScript Course 2024: From Zero to Expert!
//Resource page : - https://github.com/jonasschmedtmann/complete-javascript-course
//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////

"use strict";
console.log(`FUNDAMENTALS PART 1:\n\n`);

//Fundamentals Part 1:
/*
  1-console.log,alert,prompt,values and varialbles,
  2-data types : primitives and objects
    primitives : Number,String,Boolean,null,undefined, Symbol, BigInt (constructor or add n at end end like 1240421293n (9 quadrillion ish is the limit for Numbers))
    Objects - everything other than primitives, even arrays
  3-let const(better, ES6) var(hoisted)
  4-Operators and Operator Precedence
  5-Strings and Template literals: `${}'
  6-if,else, else if(){}
  7-Type Conversion(explicit Constructors and methods) and Coerction(implicit, in contitions, 
    eqalities, operators like + concats - forced Number conversion sometimes gives NaN etc)
  8-Truthy and False Values:
    The 5 falsy values  - 0, '' , undefined ,null , NaN **important**
    truthy- {},3,"a"  
  9- (==) vs (===): loosely equal to and strict equality operator
    === for the win, == forces type coercion and other weird behaviours
  10- boolean logic (OR, AND, NOT gates)
  11-logical operators: (||, &&, !)
  12-switch statement: 
    switch(val){
      case 1:
        xyz
        break;
      ...
      ...
      default:
        console.log("Not valid");  
    }
  13-Statements vs Expressions: (basically statements are instructions and expression produdce values)
  14-Condtional Operator or Ternary Operator:
    condition?(return val for true case):(false case);
  
14 topics total
 */

//////////////////////////////////////////////////////////////////////////////////////////////
//CHALLENGES

/*
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.*/
//SOLUTION

let massMark = 78,
  massJohn = 92,
  BMIMark,
  BMIJohn;
const heightMark = 1.69,
  heightJohn = 1.95;
BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher ? : " + markHigherBMI);

/*CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.*/

//SOLUTION
console.log("- - - - - - - - - - - - - - - -");

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else if (BMIMark < BMIJohn) {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}!`);
} else {
  console.log("Both BMIs are equal : (" + BMIJohn + ")");
}

/*CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.*/

//SOLUTION
console.log("- - - - - - - - - - - - - - - -");

let scoreDolphins = (96 + 108 + 89) / 3,
  scoreKoalas = (88 + 91 + 110) / 3;
console.log(`score dolphins : ${scoreDolphins} score koalas: ${scoreKoalas}`);
if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins win the trophy`);
} else if (scoreDolphins < scoreKoalas) {
  console.log(`Koalas win the trophy`);
} else {
  console.log("Both win the trophy");
}

/*
CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430*/

//SOLUTION
console.log("- - - - - - - - - - - - - - - -");

let billVal = 275;
let tipVal, totalVal;

tipVal = billVal > 50 && billVal < 300 ? billVal * 0.15 : billVal * 0.2;

totalVal = billVal + tipVal;
console.log(
  `The bill was ${billVal}, the tip was ${tipVal}, and the total value ${totalVal}.`
);
//////////////////////////////////////////////////////////////////////////////////////////////

console.log("\n- - - - - - - - - - - - - - - - - - - - - - - - - - - -\n ");
console.log(`\nFUNDAMENTALS PART 2:\n\n`);

//Fundamentals Part 2:
/*
  1. Stict Mode and why it's a lifesaver : extra error pointers and you can avoid bad practices 
  2. Functions, Function Declerations, Function Expressions :
    declerations are hoisted  and expressions are stored in variables(JS has 1st class functions never forget just another value)
  3. Arrow Functions : const gimmeRemainder16 = x => x%16;
  4. Reviewing Functions as a whole.
  5. Arrays
  6. Basic Array Methods
  7. Objects
  8. Dot vs Bracket Notation
  9. Methods: Functions in arrays
  10. Loops, Backward Looping, Nested Loops : FOR loops
  11. while loops, also do{}while check once

  Write their summary at night like you've done in fundamentals part 1 
 */

/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
function checkWinner(dScore, kScore) {
  if (dScore > 2 * kScore) {
    console.log(`Dolphins win (${dScore} vs. ${kScore})`);
  } else if (kScore > 2 * dScore) {
    console.log(`Koalas win (${kScore} vs. ${dScore})`);
  } else {
    console.log("No team wins...");
  }
}

let scoreDolphins2 = calcAverage(85, 54, 41);
let scoreKoalas2 = calcAverage(23, 34, 27);
checkWinner(scoreDolphins2, scoreKoalas2);

/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
And now let's use arrays! So, create an array called bills containing the test data below.
Create an array called tips containing the tip value for each bill, calculated from the function you created before.
BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/
const calcTip = (bill) => (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2);
const bills = [125, 555, 44],
  tips = [],
  totals = [];

tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));

totals.push(bills[0] + tips[0]);
totals.push(bills[1] + tips[1]);
totals.push(bills[2] + tips[2]);

console.log(bills);
console.log(tips);
console.log(totals);

/*CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).
Your tasks:
For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.
Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/

const johnObj = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  caclBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
johnObj.caclBMI();
const markObj = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  caclBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
johnObj.caclBMI() > markObj.caclBMI()
  ? console.log(
      `${johnObj.fullName}'s BMI (${johnObj.BMI}) is higher than ${markObj.fullName}'s (${markObj.BMI})!`
    )
  : console.log(
      `${markObj.fullName}'s BMI (${markObj.BMI}) is higher than ${johnObj.fullName}'s (${johnObj.BMI})!`
    );

/*CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
Create an array called bills containing all 10 test bill values.
Create empty arrays for the tips and the totals (tips and totals)
Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.*/

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [],
  totals2 = [];
for (let i = 0; i < bills2.length; i++) {
  tips2[i] = calcTip(bills2[i]);
  totals2[i] = bills2[i] + tips2[i];
}
console.log(bills2, tips2, totals2);
let i = 7;
bills[i];
