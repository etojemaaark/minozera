"use strict";

/// header ///
window.onscroll = function showHeader() {
  if (window.innerWidth > 820) {
    var header = document.querySelector('.header__fixed-wrapper');

    if (window.pageYOffset > 43) {
      header.classList.add('_header-fixed');
    } else {
      header.classList.remove('_header-fixed');
    }
  }
}; /// anim scroll ///


var animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    for (var index = 0; index < animItems.length; index++) {
      var animItem = animItems[index];
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top;
      var animStart = 4;
      var animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }

  function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }

  setTimeout(function () {
    animOnScroll();
  }, 100);
} /// burger ///


var menuBurger = document.querySelector('header__burger');
var menu = document.querySelector('header__menu');
menuBurger.addEventListener('click', myFunction);

function myFunction() {
  menuBurger.classList.toggle('active');
  menu.classList.toggle('active');
}

;