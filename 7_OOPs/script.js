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
    //risk of recursion if setting an auxiollary property with same name again, always pay heed to this. WILL cause stack overflow
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
//Object.create() type beat(for OOPS), w/o constructor functions or classes
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
Your tasks:
1. Use a constructor function to implement an ElectricCar (called'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'
3. Implementan'accelerate'methodthatwillincreasethecar'sspeedby20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism 😉
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
 */

class Car {
  #password = ["BRO CHECKING"];
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`Car has Accelerated, speed is now ${this.speed}`);
    this.#password.push("val1");
  }
  brake() {
    this.speed -= 5;
    this.speed <= 0
      ? console.log(`Car is at rest. Speed is ${(this.speed = 0)}`)
      : console.log(
          `${this.constructor.name} has applied brakes, speed is now ${this.speed}`
        );
  }
}
const bmw = new Car("gt650", 0);
console.log(bmw);
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();
console.log(bmw);
class ElectricCar extends Car {
  constructor() {
    super("Supra", 180);
    console.log(this);
  }
  addValToPwdArr(val) {}
}
const supra = new ElectricCar();

/*Challenge 4
Coding Challenge #4
Your tasks:
1. Re-createChallenge#3,butthistimeusingES6classes:createan'EVCl' child class of the 'CarCl' class
2. Makethe'charge'propertyprivate
3. Implementtheabilitytochainthe'accelerate'and'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%*/

class CarFinal {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(
      `${this.constructor.name} has Accelerated, speed is now ${this.speed}`
    );
    return this;
  }
  brake() {
    this.speed -= 5;
    this.speed <= 0
      ? console.log(`Car is at rest. Speed is ${(this.speed = 0)}`)
      : console.log(
          `${this.constructor.name} has applied brakes, speed is now ${this.speed}`
        );
    return this;
  }
}
class ElectricCl extends CarFinal {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery() {
    console.log(
      `Battery has gone from ${this.#charge}% to ${(this.#charge = 100)}%`
    );
    return this;
  }
}
const mustang = new ElectricCl("GT Hybrid 650", 200, 80);
console.log(mustang);
mustang.accelerate().brake().chargeBattery().accelerate().brake();
console.log(mustang);
