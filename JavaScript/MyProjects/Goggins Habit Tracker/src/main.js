'use strict';

//* Selecting DOM Elements
const body = document.querySelector('body');

// Header
const headerQuote = document.querySelector('#quote');

// tracking box
const trackingTotalHabitsEl = document.querySelector('#total-habits');
const trackingBestStreakEl = document.querySelector('#best-streak');
const trackingTotalRepsEl = document.querySelector('#total-reps');
const trackingCompletedtodayDecimal = document.querySelector(
  '#completed-today-decimal'
);
const trackingCompletedtodayPercentage = document.querySelector(
  '#completed-today-percentage'
);

// status buttons
const statusAll = document.querySelector('#status-all');
const statusCompleted = document.querySelector('#status-completed');
const statusMissed = document.querySelector('#status-missed');
const SectionStatus = document.querySelector('#habits-status');

// add habit +
const openAddHabitModal = document.querySelector('#open-add-habit-modal');

const addHabitOverlay = document.querySelector('#add-habit-overlay');
const addHabitModal = document.querySelector('#add-habit-modal');

// Habits list
const ulHabitEl = document.querySelector('#habits-ul');
const habitButtonEl = document.querySelector('.habit-didtoday-checkbox');

const noHabitMessageEl = document.querySelector('#no-habit-message');
const noHabitMessageText = document.querySelector('#no-habit-message-text');

// Overlay
const btnClose = document.querySelector('#modal-close-icon');
const inputAddHabit = document.querySelector('#add-habit-modal-input');
const btnCancel = document.querySelector('#add-habit-modal-cancel');
const btnAddHabit = document.querySelector('#add-habit-modal-add-habit');
const addHabitFormEl = document.querySelector('#add-habit-modal-form');
//* Datas

// Quote Array
const quotes = [
  'Most people only tap into 40% of their potential.',
  'You are in danger of living a life so comfortable and soft.',
  "The most important conversations you'll ever have are the ones you'll have with yourself.",
  'Suffering is the true test of life.',
  "Don't stop when you're tired. Stop when you're done.",
  "While you're sleeping, someone else is training.",
  "They Don't Know Me Son!",
  'Whose Gonna Carry The Boats?!',
  'The only easy day was yesterday.',
  'The governor is in your mind. You have to kill that motherfucker.',
];

// Habit Objects Array
const habits = [
  {
    id: 1,
    habitName: 'Run 5 Miles',
    habitStreak: 15,
    didToday: false,
  },
  {
    id: 2,
    habitName: 'Increase German Score On Duolingo',
    habitStreak: 280,
    didToday: false,
  },
];

//* Functions

// calculating best Streak
const calcTotalHabits = habits =>
  (trackingTotalHabitsEl.textContent = habits.length);

const calcBestStreak = habits => {
  const bestStreak = Math.max(...habits.map(habit => habit.habitStreak));

  bestStreak !== -Infinity
    ? (trackingBestStreakEl.textContent = bestStreak)
    : (trackingBestStreakEl.textContent = 0);
};

const calcHabitsCompletedToday = habits => {
  const completed = habits.filter(habit => habit.didToday === true);

  trackingCompletedtodayDecimal.textContent = `${completed.length}/${habits.length}`;

  const calcCompletedPercent = Math.trunc(
    (completed.length / habits.length) * 100
  );
  trackingCompletedtodayPercentage.textContent = `${
    habits.length !== 0 ? calcCompletedPercent : 0
  }% Completed`;
};

const calcTotalReps = function (habits) {
  const reps = habits.filter(habit => habit.didToday === true);
  trackingTotalRepsEl.textContent = reps.length;
};

const updateTracking = function (habits) {
  // Total Habits
  calcTotalHabits(habits);

  // Best Streak
  calcBestStreak(habits);

  // Habits that are completed today with decimal and percentage
  calcHabitsCompletedToday(habits);

  // calculating total reps did today
  calcTotalReps(habits);
};
updateTracking(habits);

// calculating all habits statuces, all, completed, missed

const calcHabitAll = habits =>
  (statusAll.textContent = `All (${habits.length})`);

const calcHabitCompleted = habits => {
  const trueHabits = habits.filter(habit => habit.didToday === true);
  statusCompleted.textContent = `Completed (${trueHabits.length})`;
};

const calcHabitMissed = habits => {
  const falseHabits = habits.filter(habit => habit.didToday === false);
  statusMissed.textContent = `Missed (${falseHabits.length})`;
};

const updateHabitStatus = function (habits) {
  // displaying all(habits.length)
  calcHabitAll(habits);

  // displaying habits that are 'checked' today
  calcHabitCompleted(habits);

  // displaying habits that are 'missed' today
  calcHabitMissed(habits);
};
updateHabitStatus(habits);

// structure of the habit <li> which we want to add
const habitStructure = function (name, streak = 0, didtoday = false) {
  const activeStateLi = didtoday ? 'checked-box-habit' : '';
  const activeStateChectText = didtoday ? 'opacity-100' : 'opacity-0';
  const activeStateTotalCount = didtoday ? 'opacity-100' : 'opacity-0';
  const activeStateBtnCheck = didtoday ? 'checked-button-habit' : '';
  const activeStateFire = didtoday ? 'checked-box-fire-color' : '';

  return `
  <li class="relative flex mb-2 items-center rounded-sm gap-4 py-5 px-7 bg-[#18181b] border-2 border-[#27272a] transition duration-300 ${activeStateLi}">

              <!-- Check button -->
              <button
                type="button"
                aria-label="Mark habit as done"
                class="${activeStateBtnCheck} habit-didtoday-checkbox w-7 h-7 shrink-0 rounded-full border-2 border-[#52525c] transition duration-300 hover:scale-110 cursor-pointer">
                <i class='fa fa-check  ${activeStateChectText} duration-300'></i>
              </button>

              <!-- Content -->
              <div class="flex-1">
                <p class="habit-name text-xl font-bold text-neutral-200">${name}</p>

                <div class="flex items-center text-sm text-neutral-300">
                  <i class="${activeStateFire} fa fa-fire mr-2 duration-300"></i>

                  <span class='${activeStateFire} fire-text duration-300'>
                    ${streak} day streak
                  </span>

                  <span class="ml-4 text-stone-500 ${activeStateTotalCount} total-count duration-300">
                    • 1 total
                  </span>
                </div>
              </div>

              <!-- Delete -->
              <button
                type="button"
                aria-label="Delete habit"
                class="absolute right-7 text-neutral-400 transition duration-300 hover:text-red-700 cursor-pointer">
                <i class="fa fa-trash"></i>
              </button>

            </li>`;
};

// If there is no habit unhide 'no habit message' element
const checkHabitZeroMessage = function (habits, customMessage) {
  if (habits.length === 0) {
    noHabitMessageText.textContent = customMessage;
    noHabitMessageEl.classList.remove('hidden');
  } else {
    noHabitMessageEl.classList.add('hidden');
  }
};

// remove hidden class
const toggleHidden = element => element.classList.toggle('hidden');

// return all habit objects
const allHabitsArr = habits => habits;

const completedHabitsArr = habits =>
  habits.filter(habit => habit.didToday === true);

const missedHabitsArr = habits =>
  habits.filter(habit => habit.didToday === false);

// Adding the All habit elements in 'habits' array
const addHabitElements = function (habits) {
  ulHabitEl.insertAdjacentHTML(
    'afterbegin',
    habits
      .map(habit =>
        habitStructure(habit.habitName, habit.habitStreak, habit.didToday)
      )
      .join('') // since map returns an array, this removes the ','
  );
};
// Showing Habits in ul
addHabitElements(allHabitsArr(habits));

// reusable add habit button function
const addHabitButtonFunciton = function (e) {
  e.preventDefault();

  // inputValue = inputAddHabit.value;
  const lastId = Math.max(...habits.map(habit => habit.id));

  const habitObject = {
    id: lastId + 1,
    habitName: `${inputValue}`,
    habitStreak: 0,
    didToday: false,
  };

  if (habitObject.habitName) {
    habits.push(habitObject);
    inputValue = inputAddHabit.value = '';

    toggleHidden(addHabitOverlay); // hide overlay
    toggleHidden(addHabitModal); // hide modal
    body.classList.toggle('overflow-y-hidden');
    setButtonToDisabled();
  }

  updateHabitStatus(habits);
  updateTracking(habits);
  ulHabitEl.insertAdjacentHTML(
    'afterbegin',
    habitStructure(habitObject.habitName)
  );
};

// toggling add habit's button disabled attribute
const toggleDisabled = function (button) {
  if (inputValue) {
    btnAddHabit.removeAttribute('disabled'); // toggles again and again
  } else btnAddHabit.setAttribute('disabled', '');
};

const setButtonToDisabled = function () {
  inputValue = inputAddHabit.value;
  if (inputValue) {
    btnAddHabit.removeAttribute('disabled'); // toggles again and again
  } else btnAddHabit.setAttribute('disabled', '');
};

const removeClass = (el, cla) => el.classList.remove(cla);

const setActiveStatus = function (activeBtn) {
  [statusAll, statusCompleted, statusMissed].forEach(btn =>
    btn.classList.remove('active-button-status')
  );

  const includesActive = activeBtn.classList.contains('active-button-status');

  // checking if its Not acitve
  if (!includesActive) {
    activeBtn.classList.add('active-button-status');
  }
};

// if animation is active, then no hover animation is applied
const syncHoverWithActiveState = function (activeBtn) {
  if (activeBtn.classList.contains('active-button-status')) {
    activeBtn.classList.toggle('hover:border-red-600!');
  }
};

//? EventListener Codes here --------------------------------------------------------------------------

//* Header Quote --------------------------------------------------

// Random Quote For Header
let randomQuoteNumber = Math.trunc(Math.random() * quotes.length);
headerQuote.textContent = quotes[randomQuoteNumber];

//* Add Habit Button-----------------------------------------

// toggle habit hidden class
const toggleAddHabitModalStatus = () => {
  toggleHidden(addHabitModal);
  toggleHidden(addHabitOverlay);
  inputAddHabit.focus(); //! remove this later
  body.classList.toggle('overflow-y-hidden');
};

// The big button in the modal, Opens the add habit modal
openAddHabitModal.addEventListener('click', function () {
  toggleAddHabitModalStatus();
});

let inputValue;
// toggling add button's disabled property
addHabitModal.addEventListener('input', setButtonToDisabled);

// Implementing Add Habit
btnAddHabit.addEventListener('click', addHabitButtonFunciton);

//? Closing Modal ------------
// close with the X button
btnClose.addEventListener('click', toggleAddHabitModalStatus);

// close with cancel button
btnCancel.addEventListener('click', function (e) {
  e.preventDefault();
  toggleAddHabitModalStatus();
  inputAddHabit.value = '';
});

// close modal with Esc
document.addEventListener('keydown', function (e) {
  if (!addHabitOverlay.classList.contains('hidden'))
    if (e.key === 'Escape') toggleAddHabitModalStatus();
  if (e.key === 'Enter') addHabitButtonFunciton(e);
});

//* All Completed Missed Status -----------------------------
// All
statusAll.addEventListener('click', function () {
  setActiveStatus(statusAll);

  ulHabitEl.innerHTML = '';
  addHabitElements(allHabitsArr(habits));
});
syncHoverWithActiveState(statusAll);

// Completed
statusCompleted.addEventListener('click', function () {
  setActiveStatus(statusCompleted);
  syncHoverWithActiveState(statusCompleted);

  ulHabitEl.innerHTML = '';
  addHabitElements(completedHabitsArr(habits));
});

// Missed
statusMissed.addEventListener('click', function () {
  setActiveStatus(statusMissed);
  syncHoverWithActiveState(statusMissed);

  ulHabitEl.innerHTML = '';
  checkHabitZeroMessage(
    missedHabitsArr(habits),
    "No Habits Missed! That's What im Talking about"
  );
  addHabitElements(missedHabitsArr(habits));
});

//* Habits list ---------------------------------------------
// Implementing Check Animations and logic + habit Delete Button
ulHabitEl.addEventListener('click', function (e) {
  // if the button was clicked
  const btnCheck = e.target.closest('.habit-didtoday-checkbox');
  const btnDelete = e.target.closest('.fa-trash');

  // Implementing Delete Button
  if (btnDelete) {
    // selecting elements from li
    const li = btnDelete.closest('li');
    const delHabitName = li.querySelector('.habit-name');

    const selectedHabit = habits.find(
      habit => habit.habitName === delHabitName.textContent
    );

    // removing the habit from object
    habits.splice(
      habits.findIndex(habit => habit.id === selectedHabit.id),
      1
    );

    // removing element from DOM
    btnDelete.closest('li').remove(); // method 1

    checkHabitZeroMessage(habits, 'Comfort won Again... Fix it!');
    updateHabitStatus(habits);
    updateTracking(habits);
  }

  // Implementing Check button
  if (!btnCheck) return;

  // selecting Els from parent element which is <li>
  const li = btnCheck.closest('li');
  const checkText = li.querySelector('.fa-check');
  const totalcount = li.querySelector('.total-count');
  const fireIcon = li.querySelector('.fa-fire');
  const fireText = li.querySelector('.fire-text');
  const habitName = li.querySelector('.habit-name');

  const isChecked = li.classList.toggle('checked-box-habit'); // so we dont run into bugs like if it was checked and an unchecked animaiton runs
  // toggling classes

  checkText.classList.toggle('opacity-0', !isChecked); // isChecked === false = button 'wasn't' clicked
  checkText.classList.toggle('opacity-100', isChecked); // isChecked === true = button 'was' clicked

  totalcount.classList.toggle('opacity-0', !isChecked);
  totalcount.classList.toggle('opacity-100', isChecked);

  btnCheck.classList.toggle('checked-button-habit', isChecked);
  fireIcon.classList.toggle('checked-box-fire-color', isChecked);
  fireText.classList.toggle('checked-box-fire-color', isChecked);

  // Making state True & +1 Day to Streak ----------------------

  // Implementing adding 1 to daystreak
  const arrayHabitNames = habits.map(habit => habit.habitName);

  // iterating through habits objects
  for (const hn of arrayHabitNames) {
    if (habitName.textContent === hn) {
      const checkedHabitObject = habits.find(habit => habit.habitName === hn);

      if (checkedHabitObject.didToday !== true) {
        checkedHabitObject.didToday = true; // setting didToday = true
        checkedHabitObject.habitStreak += 1; // adding one to object's day streak
        fireText.textContent = `${checkedHabitObject.habitStreak} day streak `; // changing the elements text
        updateHabitStatus(habits);
        updateTracking(habits);
      } else {
        checkedHabitObject.didToday = false;
        checkedHabitObject.habitStreak -= 1;
        fireText.textContent = `${checkedHabitObject.habitStreak} day streak `;
        updateHabitStatus(habits);
        updateTracking(habits);
      }
    }
    // Adding Box For when there are no habits
  }

  // Delete Button ----------------------
});
