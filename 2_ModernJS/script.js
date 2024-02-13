//Jonas Schmedtmann - coding heroes- The Complete JavaScript Course 2024: From Zero to Expert!
//Resource page : - https://github.com/jonasschmedtmann/complete-javascript-course
//////////////////////////////////////////////////////////////////////////////////////////////
"use strict";
//A deep reference to every one of these topics
console.log(`Modern Operators :\n\n`);
//destructuring arrays,objects, spread operator, rest patterns and parameters,short circuiting, nullish coalescing operator and logical assignment operator
console.log("coding challenge 1");
/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
Your tasks:
1. Createoneplayerarrayforeachteam(variables'players1'and 'players2')
2. Thefirstplayerinanyplayerarrayisthegoalkeeperandtheothersarefield players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Createanarray'allPlayers'containingallplayersofbothteams(22 players)
4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Basedonthegame.oddsobject,createonevariableforeachodd(called 'team1', 'draw' and 'team2')
6. Writeafunction('printGoals')thatreceivesanarbitrarynumberofplayer names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. Theteamwiththeloweroddismorelikelytowin.Printtotheconsolewhich team is more likely to win, without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//important, destructuring nested arr from inside an object without accessing .players of game obj
// nested-hit the keywords and access it according to the val inside like x:{} or x:[],etc
const {
  players: [players1, players2],
} = game;
let [gk, ...fieldPlayers] = players1;
// const allPlayers = players1.concat(players2);
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1, players2, allPlayers, players1Final);
let {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, team2, draw);
///spread and rest in arrays
function printGoals(...rest) {
  for (let i = 0; i < rest.length; i++) {
    //console.log(`${rest[i]} scored ${i + 1} goals`); //too many outputs
  }
}
printGoals(...allPlayers);

team1 < team2 && console.log(`${game.team1} is likely to win`);
team1 > team2 && console.log(`${game.team2} is likely to win`);

console.log("\n- - - - - - - - - - - - - - - - - - - \n\n");
console.log("coding challenge 2");
/* TOPICS AND NOTES

1.for-of loop(also break is there) for arrays( array.entries() along with keys and values give Iterators, and return a Iterator on even logging, hence spread and wrap an Iterator like [...array.entries()] to access properly and will give an array of key val arrays where key is index), 
2.Enhanced object literals(direct property assignment and prop:function(){} is replacable by
  {
    ...
    someMethod(){
      ...
    }
  }
  kinda reminds you of classes
  property name can be computed with [] notation and [] expects an expression for key
3.optional chaining, 
  obj?.prop1?.prop2?.methodName?.()
  check if left side in not undefined THEN go for accessing property
  and for method, check if method even exists, then access it as a propery of object THEN call it
  no need for nested ifs, if(coditions with &&s going deeper down the nest), ternary operators or repeated shortCiruiting
  Saves a lot of lines
  There's a chance for undefined return values so pair it with ||(?? is better as 0 is falsy too) 'Doesn't exist msg' or continue in loops
  ?? and .? are meant to compliment each other and be used together to avoid holes and account for false values and play with nullish values instead
4.looping objects-Object entries,keys,values
  They don't give iterables but full existing nested arrays and arrays basically PROPERLY defined value, PRETTY cool

  
*/

/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
1. Loopoverthegame.scoredarrayandprinteachplayernametotheconsole, along with the goal number (Example: "Goal 1: Lewandowski")
2. Usealooptocalculatetheaverageoddandlogittotheconsole(Wealready studied how to calculate averages, you can go check if you don't remember)
3. Printthe3oddstotheconsole,butinaniceformattedway,exactlylikethis:
Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉
4. Bonus:Createanobjectcalled'scorers'whichcontainsthenamesofthe players who scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
       Gnarby: 1,
       Hummels: 1,
       Lewandowski: 2
}*/

for (let [key, playerName] of game.scored.entries()) {
  console.log(`Goal ${key + 1}: ${playerName}`);
}
let total = 0;
for (let val of Object.values(game.odds)) {
  total += val;
}
total /= Object.values(game.odds).length;
console.log(total);
//TOUGH only cause old code to remember and keep track, but keep it coming
//can make it a little more readable later
for (let [key, val] of Object.entries(game.odds)) {
  console.log(`Odd of ${game[key] ? `victory ${game[key]}` : `draw`} : ${val}`);
}
//brute force , BASIC way, simplicity rn
const scorers = {};
for (let i = 0; i < game.scored.length; i++) {
  let count = 1;
  for (let j = i + 1; j < game.scored.length; j++) {
    if (game.scored[j] == game.scored[i]) {
      count++;
    }
  }
  scorers[game.scored[i]] ||= count;
}
console.log(scorers);
//level up - sorted array and simple O(n^2), no logical operator required
let gameScorersArr = [...game.scored];
const scorers2 = {};
gameScorersArr.sort();
for (let i = 0; i < gameScorersArr.length; i++) {
  let count = 1;
  for (let j = i + 1; j < gameScorersArr.length; j++) {
    if (gameScorersArr[j] == gameScorersArr[i]) {
      count++;
    }
  }
  scorers2[game.scored[i]] = count;
}
console.log(scorers2);
//level up - IMPORTANT, come back to this later again.
const scorers3 = {};
for (let val of game.scored) {
  scorers3[val] ? scorers3[val]++ : (scorers3[val] = 1);
}
console.log(scorers3);

const newSet = new Set(game.scored);
console.log(newSet);
console.log(newSet.length); // DOES NOT EXIST, .size for Set and this is good for readibility
console.log(newSet.size);

console.log("\n- - - - - - - - - - - - - - - - - - - \n\n");
console.log("coding challenge 3");
/*Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Createanarray'events'ofthedifferentgameeventsthathappened(no duplicates)
2. Afterthegamehasfinished,iswasfoundthattheyellowcardfromminute64 was unfair. So remove this event from the game events log.
3. Computeandlogthefollowingstringtotheconsole:"Aneventhappened,on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loopover'gameEvents'andlogeachelementtotheconsole,marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽   GOAL*/
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1 //set can be directly generated from an iterator, no need to array box it using [...gmEvnts.vals()]
console.log(gameEvents);
const uniqueEvents = [...new Set(gameEvents.values())];
console.log(uniqueEvents);
//2
gameEvents.delete(64);
//3
let totalTime = [...gameEvents.keys()].at(-1);
let resAvg = totalTime / gameEvents.size;
console.log(resAvg);
//4
for (let [key, value] of gameEvents) {
  let half = key <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${key}: ${value}`);
}
