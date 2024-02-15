'use strict';
//CODING CHALLENGE 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

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
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

function displayResults(arg) {
  if (typeof arg == 'string') {
    document.body.append(
      `The results of the poll are ${poll.answers.join(',')}`
    );
  } else {
    console.log('answers' + poll.answers);
    console.log(arg);
  }
}

//CODING CHALLENGE 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
