"use strict";
//If you understand the outputs of this code with no throttling and slow 3G
// while caching is disabled, you understand this topic
// Jainuinely
let startTimer = Date.now() / 1000;
console.log(`startTimer : ${startTimer}`);
console.log(
  "Messing around with callbacks, setTimeouts,Promises and Fetch like a madman " +
    (Date.now() / 1000 - startTimer)
);
setTimeout(() => {
  console.log(
    "--- Racing : Callback with setTimeout 0 " +
      (Date.now() / 1000 - startTimer)
  );
}, 0);

const newProm2 = new Promise((res, rej) => {
  //messing around creating a callback for CB queue instead of microtasks queue cause I can and I will.
  console.log(
    "--- Weird log within promise(exercutor function)  : " +
      (Date.now() / 1000 - startTimer)
  );
  setTimeout(() => {
    res(
      "--- Odd Racing : Promise resolved value(timeout of 0 within Promise 2) " +
        (Date.now() / 1000 - startTimer)
    ); //attatched to normal callback queue probably, losing out
  }, 0);
});
newProm2.then((data) => {
  console.log(data);
});
Promise.resolve(
  "Promise.resolve() helper function for direct microtask demonstration instead of building a new Object"
).then((data) => console.log(data));
const newProm1 = new Promise((res, rej) => {
  //I'm the winner, the down one, as in tasks priority vs callback queues properly demonstrated
  res("--- Racing : Promise resolved value");
});
newProm1.then((data) => {
  console.log(data);
});
fetch(`https://restcountries.com/v3.1/name/${"Germany"}`)
  .then((data) => {
    // I will take time to even be retrieved and triggered bro, very dependent on network speed, play around with no throttling and slow 3G to see some cool results !!
    console.log(data);
    setTimeout(() => {
      console.log(
        "Callback attatched to Portugal promose w time 0 " +
          (Date.now() / 1000 - startTimer)
      );
    }, 0);
    return fetch(`https://restcountries.com/v3.1/name/${"Portugal"}`);
  })
  .then((data) => {
    console.log(data);
    setTimeout(() => {
      console.log(
        "Callback attatched to Iceland promose w time 3s " +
          (Date.now() / 1000 - startTimer)
      );
    }, 3000);
    return fetch(`https://restcountries.com/v3.1/name/${"Iceland"}`);
  })
  .then((data) => {
    console.log(data);
    setTimeout(() => {
      console.log(
        "Callback attatched to Brazil promose w time 0 " +
          (Date.now() / 1000 - startTimer)
      );
    }, 0);
    return fetch(`https://restcountries.com/v3.1/name/${"Brazil"}`);
  })
  .then((data) => {
    console.log(data);
    setTimeout(() => {
      console.log(
        "Callback attatched to Australia promose w time 0 " +
          (Date.now() / 1000 - startTimer)
      );
    }, 0);
    return fetch(`https://restcountries.com/v3.1/name/${"Australia"}`);
  })
  .then((data) => {
    console.log(data);
    setTimeout(() => {
      console.log(
        "Callback attatched to end of promise chain w time 0 " +
          (Date.now() / 1000 - startTimer)
      );
    }, 0);
    setTimeout(() => {
      console.log(
        "Callback attatched to end of promise chain w time 1s " +
          (Date.now() / 1000 - startTimer)
      );
    }, 1000);
  });
setTimeout(() => {
  console.log(
    "Normal Callback setTimeout w time 0 " + (Date.now() / 1000 - startTimer)
  );
}, 0);
setTimeout(() => {
  console.log("Normal Callback setTimeout w time 1s" + Date.now());
}, 1000);

for (let i = 0; i < 500; i++) {
  new Promise((res, rej) => {
    res(`i val : ${i} time `);
  }).then((data) => console.log(data + (Date.now() / 1000 - startTimer)));
}
//okay, this is proof these are really run first irrespective
//JS has NO time sense xD, it's literally just ticking in APIs, Queues and Call Stack by Event Loop aka the Orchestrator

//ALSO, 30 promise resolved logs in ONE MICROSECOND, V8 engine is a beast
//Also, callback queue was STARVED here
setTimeout(() => {
  console.log("last 3 timeouts in code with 0s");
}, 0);
setTimeout(() => {
  console.log("last 3 timeouts in code with 0s");
}, 0);
setTimeout(() => {
  console.log("last 3 timeouts in code with 0s");
}, 0);
//below thing comes after ONE promise logging(the one in executor) as this line is at the end, there's reoptimisation happening in the background after the first DOM parsing(for tree) and compilation, code starts executing right away and some things are run before reaching the last line for optimisation. This here is proof
console.log("- - - - - - - Messing arounds ENDS here - - - - - - - - ");
