'use strict';

function runOnce() {
  console.log('Hellow World!');
}

// we can Run this as much as we want
runOnce();
runOnce();
runOnce();

// IIFE
(function () {
  console.log('I Will Run Once.');
})(); //? the () after that will run it immidiatly

// IIFE in Arrow
(() => console.log('I Will Also Run Once'))();
