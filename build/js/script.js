'use strict';

(function () {
var pageHeader = document.querySelector('.page-header');
var mainNavToggle = pageHeader.querySelector('.main-nav__toggle');

pageHeader.classList.remove('page-header--nojs');

mainNavToggle.addEventListener('click', function () {
  pageHeader.classList.toggle('page-header--open');

  if (pageHeader.classList.contains('page-header--open')) {
    mainNavToggle.classList.add('main-nav__toggle--close');
    mainNavToggle.classList.remove('main-nav__toggle--open');
  } else {
    mainNavToggle.classList.add('main-nav__toggle--open');
    mainNavToggle.classList.remove('main-nav__toggle--close');
  }
});
})();
