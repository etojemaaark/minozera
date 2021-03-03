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
    for (var _index = 0; _index < animItems.length; _index++) {
      var animItem = animItems[_index];
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


var menuBurger = document.querySelector('.header__burger');
var menu = document.querySelector('.header__menu-list');
menuBurger.addEventListener('click', function () {
  menuBurger.classList.toggle('_active');
  menu.classList.toggle('_active');
}); /// input mask ///

var maskedInputs = document.querySelectorAll("[data-mask]");

for (var index = 0; index < maskedInputs.length; index++) {
  maskedInputs[index].addEventListener('input', maskInput);
}

function maskInput() {
  var input = this;
  var mask = input.dataset.mask;
  var value = input.value;
  var literalPattern = /[0\*]/;
  var numberPattern = /[0-9]/;
  var newValue = "";

  try {
    var maskLength = mask.length;
    var valueIndex = 0;
    var maskIndex = 0;

    for (; maskIndex < maskLength;) {
      if (maskIndex >= value.length) break;
      if (mask[maskIndex] === "0" && value[valueIndex].match(numberPattern) === null) break; // Found a literal

      while (mask[maskIndex].match(literalPattern) === null) {
        if (value[valueIndex] === mask[maskIndex]) break;
        newValue += mask[maskIndex++];
      }

      newValue += value[valueIndex++];
      maskIndex++;
    }

    input.value = newValue;
  } catch (e) {
    console.log(e);
  }
} /// swiper /// 


var swiper = new Swiper(".citys__slider", {
  // navigation: {
  // 	nextEl: '.swiper-button-next',
  // 	prevEl: '.swiper-button-prev'
  // },
  pagination: {
    el: '.citys__slider-progressbar',
    type: 'progressbar'
  },
  // scrollbar: {
  // 	el: '.citys__slider-scrollbar',
  // 	draggable: true,
  // },
  slidesPerView: 1.1,
  // spaceBetween: '28',
  grabCursor: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  loop: true,
  speed: 1000 // breakpoints: {
  // 	1707: {
  // 		slidesPerView: 3,
  // 	},
  // 	1440: {
  // 		slidesPerView: 2,
  // 	},
  // 	0: {
  // 		slidesPerView: 1,
  // 	}
  // }

});
$(document).ready(function () {
  // Anchor arrow click
  // smooth scroll to anchor tag
  $('a[href*="#"]:not([href="#featured"])').click(function () {
    // Check to see if anchor tag is not carousel's featured link
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        // Smooth scroll to link section
        $('html, body').animate({
          scrollTop: target.offset().top + 50
        }, 900);
        return false;
      }
    }
  }); //highlight navigation

  $(window).scroll(function () {
    var windowpos = $(window).scrollTop();
    $('.sticky__sidebar-link').removeClass('active');
    $('.sticky__progress-bar--circle').removeClass('active');

    if (windowpos > $('#content-item-1').offset().top) {
      $('a[href$="#content-item-1"]').addClass('active');
      $('a[href$="#content-item-1"] .sticky__progress-bar--circle').addClass('active');
    }

    if (windowpos > $('#content-item-2').offset().top) {
      $('a[href$="#content-item-2"]').addClass('active');
      $('a[href$="#content-item-2"] .sticky__progress-bar--circle').addClass('active');
    }

    if (windowpos > $('#content-item-3').offset().top) {
      $('a[href$="#content-item-3"]').addClass('active');
      $('a[href$="#content-item-3"] .sticky__progress-bar--circle').addClass('active');
    }

    if (windowpos > $('#content-item-4').offset().top) {
      $('a[href$="#content-item-4"]').addClass('active');
      $('a[href$="#content-item-4"] .sticky__progress-bar--circle').addClass('active');
    }

    if (windowpos > $('#content-item-5').offset().top) {
      $('a[href$="#content-item-5"]').addClass('active');
      $('a[href$="#content-item-5"] .sticky__progress-bar--circle').addClass('active');
    } // Scrollbar progression
    // pixels scrolled from top


    var scrollTop = $(window).scrollTop() - $('.sticky').offset().top,
        // document height
    docHeight = $('.sticky').height(),
        // window height
    winHeight = $(window).height(),
        // percent of document scrolled
    scrollPercent = scrollTop / docHeight,
        scrollPercentRounded = Math.round(scrollPercent * 100); // incement progress bar as user scrolls

    $('.sticky__progress-bar--increment').css('height', scrollPercentRounded + '%');
  });
});