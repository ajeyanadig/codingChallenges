"use strict";
// function Car(speed, make) {
//   this.speed = speed;
//   this.make = make;
// }
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`Speed of ${this.make} is now at ${this.speed} km/hr`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`Speed of ${this.make} is now at ${this.speed} km/hr`);
// };
// let bmw = new Car(120, 'BMW');
// let merc = new Car(95, 'Mercedes');
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// merc.accelerate();
// merc.accelerate();
// merc.brake();

// class Car {
//   constructor(speed, make) {
//     this.speed = speed;
//     this.make = make;
//   }
//   //all this goes into prototype and not the literal object itself
//   accelerate() {
//     this.speed += 10;
//     console.log(`Speed of ${this.make} is now at ${this.speed} km/hr`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`Speed of ${this.make} is now at ${this.speed} km/hr`);
//   }
//   get speedUS() {
//     return (this.speed * 5) / 8;
//   }

//   set speedUS(speed) {
//     this.speed = this.speed * 1.6;
//   }
// }
// let bmw = new Car(120, 'BMW');

// console.log(bmw.speedUS);
// bmw.speed = 75;
// console.log(bmw);
// bmw.speedUS = 75;
// console.log(bmw);

// const Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   return 2023 - this.birthYear;
// };

// const Student = function (name, birthYear, course) {
//   Person.call(this, name, birthYear);
//   this.course = course;
// };
// // Student.prototype.__proto__ = Person.prototype;
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`Hey my name is ${this.name} and I study ${this.course}`);
// };
// const mike = new Student('Mike', 1996, 'CSE');
// mike.introduce();
// console.log(mike);
// console.log(mike.calcAge());

class Car {
  constructor(speed, make) {
    this.speed = speed;
    this.make = make;
  }
  accelerate() {
    this.speed += 10;
    console.log(`Speed of ${this.make} is now at ${this.speed} km/hr`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`Speed of ${this.make} is now at ${this.speed} km/hr`);
    return this;
  }
}

class ElectricCar extends Car {
  //pvt field
  #charge;
  constructor(speed, make, charge) {
    super(speed, make);
    this.#charge = charge;
  }
  accelerate() {
    this.#charge--;
    this.speed += 15;
    console.log(
      `Speed of ${this.make} is now at ${
        this.speed
      } km/hr and batterys is down to ${this.#charge}`
    );
    return this;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

let tesla = new ElectricCar(200, "Tesla", 50);
tesla
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(90)
  .accelerate();

console.log(tesla);
//..
