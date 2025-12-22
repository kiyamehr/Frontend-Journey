'use strict';

const body = document.querySelector('body');

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'blue';
  body.addEventListener('click', function () {
    header.style.color = 'green';
  });
})();
