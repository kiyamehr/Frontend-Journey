"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

// Works like an Array cause we selected all the elements
const btnOpenModal = document.querySelectorAll(".show-modal");

// since it works like an array we can simply iterate through it

const showModal = function () {
  // // how to click
  // console.log(btnOpenModal[i].textContent);

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", showModal);
}

// we wont add () cause we dont want to js immidietly run the function
btnCloseModal.addEventListener("click", closeModal); // NO "()" Cause we arent calling the function
overlay.addEventListener("click", closeModal);

// this waits for every event that happens on the web
document.addEventListener("keydown", function (event) {
  console.log(event);

  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    closeModal();

  // event.key === "Escape" ? closeModal() : console.log(" Esc wasnt pressed ");
});
