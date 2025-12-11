"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// Works like an Array cause we selected all the elements
const btnOpenModal = document.querySelectorAll(".show-modal");

// since it works like an array we can simply iterate through it
for (let i = 0; i < btnOpenModal.length; i++)
  console.log(btnOpenModal[i].textContent);
