"use strict";

// create List Item Element
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
                class="bg-yellow-500 rounded-xl dark:text-neutral-600 hover:bg-yellow-600 hover:text-neutral-300 transition-all duration-200 active:translate-y-0.5 cursor-pointer"
              >
                <i class="edit-icon fa-solid fa-pen-to-square px-3 py-2"></i>
              </button>

              <button
                class="delete-icon bg-red-600 rounded-xl dark:text-neutral-300 hover:bg-red-500 hover:text-neutral-600 transition-all duration-200 active:translate-y-0.5 cursor-pointer"
              >
                <i class="fa-solid fa-trash px-3 py-2"></i>
              </button>
            </section>
          </li>`;
};

// adding task to ul
let tasksNum = 0;
const addTask = () => {
  let taskValue = inputTaskEl.value;
  // to check if the input value was none
  if (taskValue) {
    // if it wasn't
    inputTaskEl.value = "";
    tasksNum += 1;
    tasksList.insertAdjacentHTML(
      "beforeend",
      createListItem(taskValue, tasksNum)
    );
  } else {
    // If it was null
    alert("Empty Value Cannot Be Added as task");
  }
};

const removeHiddenClass = (htmlEl) => htmlEl.classList.remove("hidden");
const addHiddenClass = (htmlEl) => htmlEl.classList.add("hidden");
// Definings elements inside Variables

const inputTaskEl = document.getElementById("input-task");
const btnAddTask = document.getElementById("add-task");

const btnCheckBox = document.querySelectorAll(".checkbox");
const btncheckBoxLabel = document.querySelectorAll(".checkbox-label");
const taskItems = document.querySelectorAll(".tasks-items");
const tasksList = document.getElementById("tasks-list");

const btnDelete = document.querySelectorAll(".delete-icon");
const btnEdit = document.querySelectorAll(".edit-icon");

const overlay = document.getElementById("overlay");
const editModal = document.getElementById("edit-modal");
const btnClostModal = document.getElementById("close-modal-button");

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

// Event listener for the buttons that get clicked inside the ul
tasksList.addEventListener("click", function (e) {
  // Delete Icon
  // find the element that has the class fa-trash
  const deleteButton = e.target.closest(".fa-trash");
  // if deleteButton = null then do nothing
  if (!deleteButton) return;

  // Search the li that owns the delete button and remove it
  deleteButton.closest("li").remove();
});

// Edit Button
// opening editing modal on editbutton click
tasksList.addEventListener("click", function (e) {
  const editButton = e.target.closest(".fa-pen-to-square");
  if (editButton) {
    removeHiddenClass(overlay);
    removeHiddenClass(editModal);
  }
});

// X button to close the modal
btnClostModal.addEventListener("click", function () {
  addHiddenClass(overlay);
  addHiddenClass(editModal);
});

// when overlay is clicked close the modal
overlay.addEventListener("click", function () {
  addHiddenClass(editModal);
  addHiddenClass(overlay);
});

// close the modal with escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    addHiddenClass(overlay);
    addHiddenClass(editModal);
  }
});
