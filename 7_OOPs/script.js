//Resource for this topic
//Jonas Schmedtmann - coding heroes- The Complete JavaScript Course 2024: From Zero to Expert!
//Resource page : - https://github.com/jonasschmedtmann/complete-javascript-course
//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////

"use strict";
console.log(`OOPs I did it again:\n\n`);

/*
Topics : 
  1) OOPs Traditional
  2) OOPs in JS
  3) Constructor Functions and new keyword
  4) Prototypes
  5) Prototypal Inheritance and The Prototype Chain
  6) Prototypal Inheritance on Built-In Objects
  7) ES6 Classes
  8) Setters and Getters
  9) Static Methods
  10) Object.create()
  11) Inhetitance between classes : Constructor Functions
  12) Inhetitance between classes : Classes
  13) Inhetitance between classes : Object.create()
  14) Classes example(code it out)
  15) Encapsulation (here it's not only the literal meaning but also access modifiers)-Protected
  16) Encapsulation - Private Fields
  17) Chaining Methods(just return object and enjoy life :P )
  18) Summary 
  19) Final Challenge
*/
//////rough
function Person(fname, year) {
  this.name = fname;
  this.birthYear = year;
}
Person.prototype.calcAge = function () {
  this.age = 2024 - this.birthYear;
  return 2024 - this.birthYear;
};
Person.prototype.species = "Homo Sapien";
let ajay = new Person("Ajeya", 1999);
console.log(ajay.__proto__);
console.log(Person.prototype.__proto__ === ajay.__proto__.__proto__);
console.log([]);

//////////////////////////////////////////////////////////////////////////////////////////////
//CHALLENGES

/*
CHALLENGE #1
1. Useaconstructorfunctiontoimplementa'Car'.A car has a'make'anda 'speed' property. The 'speed' property is the current speed of the car in km/h
2. Implementan'accelerate'methodthatwillincreasethecar'sspeedby10, and log the new speed to the console
3. Implementa'brake'methodthatwilldecreasethecar'sspeedby5,andlog the new speed to the console
4. Create2'Car'objectsandexperimentwithcalling'accelerate'and 'brake' multiple times on each of them

*/
//This is gonna be stupid but memey. Need to touch grass. Replace Cat with Car later
//If anyone is reading this help me
//Listen to Sometimes I'm Alone(Lonely Cat) to laugh
function Cat(make, speed) {
  this.make = make;
  this.speed = speed;
}
Cat.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Cat ${this.make} is now at ${this.speed} km/h`);
  console.log(`Cat is catting VRROOOM. Meow.`);
};
Cat.prototype.brake = function () {
  this.speed -= 5;
  if (this.speed < 0) {
    console.log(`Cat is stationary. Meow`);
  } else {
    console.log(`Cat ${this.make} is now at ${this.speed} km/h`);
  }
};

const meow1 = new Cat("Orange", 170);
console.log(meow1);
meow1.accelerate();
meow1.accelerate();
meow1.brake();
console.log(meow1);
const meow2 = new Cat("Scottish Fold", 10);
console.log(meow2);
class Dog {
  constructor(name, bread) {
    this.name = name;
    this.bread = bread;
  }
  bark() {
    console.log(`Woof \nGood boy,\n${this.name}`);
  }
}
const woof1 = new Dog("Bogdan", "I don't breed");
console.log(woof1);
woof1.bark();

/*CHALLENGE #2
1. Re-createChallenge#1,butthistimeusinganES6class(callit'CarCl')
2. Addagettercalled'speedUS'whichreturnsthecurrentspeedinmi/h(divide
by 1.6)
3. Addasettercalled'speedUS'whichsetsthecurrentspeedinmi/h(but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Createanewcarandexperimentwiththe'accelerate'and'brake'
methods, and with the getter and setter.
HELP ME
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(newSpeed) {
    this.speed = newSpeed * 1.6;
  }
}
const ford = new CarCl("Mustang", 208);
ford.accelerate();
console.log(ford);
console.log(ford.speedUS);
ford.speedUS = ford.speedUS;
console.dir(CarCl);

//

const personProto = {
  greet() {
    console.log(`I am ${this.name} ! Nice to meet you`);
  },
  init() {
    this.name = "Ajeya";
  },
};

const person1 = Object.create(personProto);
person1.init();
console.log(person1);
const person2 = Object.create(person1);
console.log(person2);
/*CHALLENGE #3
 */
