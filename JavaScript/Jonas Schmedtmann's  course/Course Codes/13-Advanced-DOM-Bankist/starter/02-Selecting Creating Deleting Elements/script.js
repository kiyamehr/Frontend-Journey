'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((_, i) => {
  btnsOpenModal[i].addEventListener('click', openModal);
});
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
//* Lectures

// Selecting

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
document.querySelector('.section'); // returns a nodeList

document.getElementById('section--1');

// returns an HTML Collection
const allBtns = document.getElementsByTagName('button');
console.log(allBtns);

// returns an HTML Collection
console.log(document.getElementsByClassName('btn'));

// Creating
// .insertadjacent

const message = document.createElement('div');
message.classList.add('cookie-message');
// // message.textContent = blablalba
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// start of the element
header.prepend(message);

// end of the element
header.append(message);
// header.append(message.cloneNode(true)); // this creates a copy

// as siblings (not inside header)
// header.before(message);
// header.after(message);

// Delete
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();

    message.parentElement.removeChild(message);
  });
