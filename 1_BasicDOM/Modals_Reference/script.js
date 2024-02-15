// 'use strict';
// const button = document.querySelectorAll('.show-modal');
// const modalEle = document.querySelector('.modal');
// const closeButton = document.querySelector('.close-modal');
// const overlayEle = document.querySelector('.overlay');
// //setting up event listeners for buttons
// button.forEach(ele => {
//   ele.addEventListener('click', showModalFunc);
// });
// //2 functions to show and remove modals using element.classList.remove/add/toggle
// function showModalFunc() {
//   modalEle.classList.remove('hidden');
//   overlayEle.classList.remove('hidden');
// }
// function hideModalFunc() {
//   modalEle.classList.add('hidden');
//   overlayEle.classList.add('hidden');
// }
// //escape key work
// document.body.addEventListener('keydown', e => {
//   //console.log(e);//just to see what happens, which property of event contains the value
//   if (e.key == 'Escape') {
//     hideModalFunc();
//   }
// });
// //close button functionality
// closeButton.addEventListener('click', hideModalFunc);
// //clicking outside higher z index modal on lower z index overlay
// overlayEle.addEventListener('click', hideModalFunc);

'use strict';
const buttonsEleList = document.getElementsByClassName('show-modal');
const modalEle = document.getElementsByClassName('modal')[0];
const overlayEle = document.getElementsByClassName('overlay')[0];
const closeModalBtn = document.getElementsByClassName('close-modal')[0];
let modalActiveStatus = false;
function showModalHandler(e) {
  modalEle.classList.toggle('hidden');
  overlayEle.classList.toggle('hidden');
  modalActiveStatus = true;
}
function closeModalHandler(e) {
  modalEle.classList.toggle('hidden');
  overlayEle.classList.toggle('hidden');
  modalActiveStatus = false;
}

for (let i of buttonsEleList) {
  i.addEventListener('click', showModalHandler);
}
closeModalBtn.addEventListener('click', closeModalHandler);
overlayEle.addEventListener('click', closeModalHandler);
document.body.addEventListener('keydown', e => {
  if (modalActiveStatus && e.key === 'Escape') {
    closeModalHandler();
  }
});
