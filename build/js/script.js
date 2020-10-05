'use strict';
var navWrapper = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageWrapper = document.querySelector('.page-header__wrapper');
var pageCenter = document.querySelector('.page-header__center');
var pageLogo = document.querySelector('.page-header__logo');
var pagePreview = document.querySelector('.page-header__preview');

navWrapper.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navWrapper.classList.contains('main-nav--closed')) {
    navWrapper.classList.remove('main-nav--closed');
    navWrapper.classList.add('main-nav--opened');
    pageWrapper.classList.add('page-header__wrapper--opened');
    pageCenter.classList.add('page-header__center--opened');
    pageLogo.classList.add('page-header__logo--opened');
    pagePreview.classList.add('page-header__preview--opened');
  } else {
    navWrapper.classList.add('main-nav--closed');
    navWrapper.classList.remove('main-nav--opened');
    pageWrapper.classList.remove('page-header__wrapper--opened');
    pageCenter.classList.remove('page-header__center--opened');
    pageLogo.classList.remove('page-header__logo--opened');
    pagePreview.classList.remove('page-header__preview--opened');
  }
});
