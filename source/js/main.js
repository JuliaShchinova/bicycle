'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header-js');
  var mainNavToggle = pageHeader.querySelector('.toogle-js');

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

  window.addEventListener('DOMContentLoaded', function () {
    function setCursorPosition(pos, elem) {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    }

    var input = document.querySelector('#tel');

    function mask(event) {
      var matrix = '+7 (___) ___ ____';
      var i = 0;
      var def = matrix.replace(/\D/g, '');
      var val = input.value.replace(/\D/g, '');
      if (def.length >= val.length) {
        val = def;
      }

      input.value = matrix.replace(/./g, function (a) {
        if (/[_\d]/.test(a) && i < val.length) {
          return val.charAt(i++);
        } else if (i >= val.length) {
          return '';
        } else {
          return a;
        }
      });

      if (event.type === 'blur') {
        if (input.value.length === 2) {
          input.value = '';
        }
      } else {
        setCursorPosition(input.value.length, input);
      }
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
  });

  var anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();

      var blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
})();
