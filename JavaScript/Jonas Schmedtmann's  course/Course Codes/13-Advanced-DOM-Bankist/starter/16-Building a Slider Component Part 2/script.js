'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

const header = document.querySelector('.header');

const dotContainer = document.querySelector('.dots');
///////////////////////////////////////
// Modal window

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

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////
// Page Navigation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    console.log('link');
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const hovered = e.target;
    const siblings = hovered.closest('.nav').querySelectorAll('.nav__link');
    const logo = document.querySelector('img');

    siblings.forEach(s => {
      if (s !== hovered) s.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Hover Animation
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Gaurd Clause
  if (!clicked) return;

  // old way of gaurd clause
  // if (clicked) {
  // clicked.classList.add('operations__tab--active');
  // }

  // Active Tab
  tabs.forEach(t => {
    t.classList.remove('operations__tab--active');
  });
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu Fade Animation

const handleOpacity = function (e) {
  // this key work is now = the num inside the () when its called

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this; // this = 0.5 || 1
    });
    logo.style.opacity = this; // this = 0.5 || 1
  }
};

// Implemeting Sticky Nav

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = entries => {
  // destrucre since its only 1 member
  const [entry] = entries;
  // if it stopped observing then
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // When zero percent of header is visible start

  // Changing when The header actually end, so it matches the width of the navigation bar
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal on Scroll
const sections = document.querySelectorAll('.section');
const revealSeciton = function (entries, observer) {
  entries.forEach(entry => {
    // Gaurd Clause
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const secitonObserver = new IntersectionObserver(revealSeciton, {
  root: null,
  threshold: 0.15,
});

sections.forEach(section => {
  secitonObserver.observe(section);
  // remove comment later!
  // section.classList.add('section--hidden');
});

// Lazy Loading Images

const loadImage = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  // when am image loads it triggers a 'load' event
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imageTargets = document.querySelectorAll('img[data-src]');

const imgObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  // Images Load Before we reach them
  rootMargin: '200px',
});

imageTargets.forEach(it => imgObserver.observe(it));

const slider = function () {
  // Creating Image slider
  const btnRight = document.querySelector('.slider__btn--right');
  const btnLeft = document.querySelector('.slider__btn--left');
  const slides = document.querySelectorAll('.slide');

  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Right Button
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  btnRight.addEventListener('click', nextSlide);

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Left Button
  btnLeft.addEventListener('click', prevSlide);

  // left keyboard Arrow
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  const activateDot = function (slideNum) {
    document.querySelectorAll('.dots__dot').forEach(dot => {
      dot.classList.remove('dots__dot--active');
    });

    document
      .querySelector(`.dots__dot[data-slide="${slideNum}"]`)
      .classList.add('dots__dot--active');
  };

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `
        <button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event Handler
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};
slider();
