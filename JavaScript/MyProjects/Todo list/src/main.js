"use strict";

// create element function
const createListItem = function (taskLabel, tasksNum) {
  return `<li
            class="tasks-items flex justify-between border-2 border-x-0 border-t-0 mt-7 dark:border-cyan-800/60 pb-2 sm:justify-baseline sm:gap-56 sm:w-4/6 sm:mx-auto"
          >
            <!-- left side that displays checkbox and task iteself -->
            <section class="flex justify-start items-center">
              <input
                type="checkbox"
                id="checkbox${tasksNum}"
                class="checkbox cursor-pointer"
                name="checkbox"
              />
              <label
                for="checkbox${tasksNum}"
                class="checkbox-label  pl-3 cursor-pointer dark:text-neutral-300 font-bold"
                >${taskLabel}
              </label>
            </section>

            <!-- right section that displays delete button and edit button  -->
            <section>
              <button
                class="bg-yellow-500 px-2 py-1 rounded-xl dark:text-neutral-600 hover:bg-yellow-600 hover:text-neutral-300 transition-all duration-200 active:translate-y-0.5 cursor-pointer"
              >
                <i class="edit-icon fa-solid fa-pen-to-square"></i>
              </button>

              <button
                class="delete-icon bg-red-600 px-2 py-1 rounded-xl dark:text-neutral-300 hover:bg-red-500 hover:text-neutral-600 transition-all duration-200 active:translate-y-0.5 cursor-pointer"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </section>
          </li>`;
};

// adding task to ul
let tasksNum = 0;
const addTask = () => {
  let taskValue = inputTaskEl.value;
  console.log(taskValue);
  // to check if the input value was none
  if (taskValue) {
    inputTaskEl.value = "";
    tasksNum += 1;
    tasksList.insertAdjacentHTML(
      "beforeend",
      createListItem(taskValue, tasksNum)
    );
  } else {
    alert("Empty Value Cannot Be Added as task");
  }
};

// Definings elements inside classes

const inputTaskEl = document.getElementById("input-task");
const btnAddTask = document.getElementById("add-task");

const btnCheckBox = document.querySelectorAll(".checkbox");
const btncheckBoxLabel = document.querySelectorAll(".checkbox-label");
const taskItems = document.querySelectorAll(".tasks-items");
const tasksList = document.getElementById("tasks-list");

const btnDelete = document.querySelectorAll(".delete-icon");
const btnEdit = document.querySelectorAll(".edit-icon");

// Get The taskvalue from input

// add eventListener for add button
btnAddTask.addEventListener("click", addTask);

// Add task when Enter Is Clicked
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") addTask();
});

// add line over text when checkbox is checked
tasksList.addEventListener("change", (e) => {
  // Listens for any change events that happend in the ul
  if (e.target.type === "checkbox") {
    // if the change type was checkbox
    const checkBoxLabel = e.target.nextElementSibling; // select the next element after the input so it would pass the input and select the Label
    checkBoxLabel.classList.toggle("line-through");
  }
});
