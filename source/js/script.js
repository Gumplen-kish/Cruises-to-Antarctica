'use strict';
var navWrapper = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageWrapper = document.querySelector('.page-header__wrapper');

navWrapper.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navWrapper.classList.contains('main-nav--closed')) {
    navWrapper.classList.remove('main-nav--closed');
    navWrapper.classList.add('main-nav--opened');
    pageWrapper.classList.add('page-header__wrapper--opened');
  } else {
    navWrapper.classList.add('main-nav--closed');
    navWrapper.classList.remove('main-nav--opened');
    pageWrapper.classList.remove('page-header__wrapper--opened');
  }
});
