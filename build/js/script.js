'use strict';
var navWrapper = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navWrapper.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navWrapper.classList.contains('main-nav--closed')) {
    navWrapper.classList.remove('main-nav--closed');
    navWrapper.classList.add('main-nav--opened');
  } else {
    navWrapper.classList.add('main-nav--closed');
    navWrapper.classList.remove('main-nav--opened');
  }
});
