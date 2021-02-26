"use strict";

/// SWIPER ///
// new Swiper(".citys__slider", {
// 	/ Стрелки ///
// 	navigation: {
// 		nextEl: '.feedback__text-button-next',
// 		prevEl: '.feedback__text-button-prev'
// 	},
// 	pagination: {
// 		el: '.citys__slider-progressbar',
// 		type: 'progressbar',
// 	},
// 	/ Скроллбар ///
// 	scrollbar: {
// 		el: '.citys__slider-scrollbar',
// 		draggable: true,
// 	},
// 	/ Количество показываемых слайдов ///
// 	slidesPerView: 1.1,
// 	/ Расстояние между слайдами ///
// 	spaceBetween: '10px',
// 	/ Сменить курсор на руку ///
// 	grabCursor: true,
// 	/ Пагинация ///
// 	pagination: {
// 		el: '.swiper-pagination',
// 		type: 'bullets',
// 	},
// 	/ Автовоспроизведение ///
// 	autoplay: {
// 		delay: 1000,
// 		disableOnInteraction: false,
// 	},
// 	loop: true,
// 	speed: 1000,
// 	breakpoints: {
// 		1707: {
// 			slidesPerView: 3,
// 		},
// 		1440: {
// 			slidesPerView: 2,
// 		},
// 		0: {
// 			slidesPerView: 1,
// 		}
// 	}
// });
/// ТАБЫ ///
// var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
// 	jsContents = document.querySelectorAll('.js-tab-content');
// jsTriggers.forEach(function (trigger) {
// 	trigger.addEventListener('click', function () {
// 		var id = this.getAttribute('data-tab'),
// 			content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
// 			activeTrigger = document.querySelector('.js-tab-trigger.active'),
// 			activeContent = document.querySelector('.js-tab-content.active');
// 		activeTrigger.classList.remove('active'); // 1
// 		trigger.classList.add('active'); // 2
// 		activeContent.classList.remove('active'); // 3
// 		content.classList.add('active'); // 4
// 	});
// });
/// ДЕЙСТВИЕ ПРИ КЛИКЕ ///
// $(function () {
// 	$(".listing__bottom-btn").click(function () {
// 		$(".listing__bottom-text-hidden").slideToggle();
// 		$(".listing__bottom-text").toggleClass('active')
// 		// if ($(".listing__bottom-text").hasClass("active")) {
// 		// 	$(".listing__bottom-text").removeClass("active");
// 		// 	$(".listing__bottom-btn").text('читать полностью')
// 		// } else {
// 		// 	$(".listing__bottom-text").addClass("active");
// 		// 	$(".listing__bottom-btn").text('скрыть')
// 		// }
// 	})
// });
/// БУРГЕР ///
// $('.header__burger').on('click', function () {
// 	if (!$(this).hasClass('active')) {
// 		$('.header__burger, .header__menu, .header__menu-list').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	} else {
// 		$('.header__burger, .header__menu, .header__menu-list').removeClass('active');
// 		$('body').removeClass('lock');
// 	}
// });
/// IBG ///
// function ibg() {
// 	let ibg = document.querySelectorAll(".ibg");
// 	for (var i = 0; i < ibg.length; i++) {
// 		if (ibg[i].querySelector('img')) {
// 			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
// 		}
// 	}
// }
// ibg();
/// АНИМАЦИЯ ПРИ СКРОЛЛЕ ///
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
} /// Фиксированная шапка ///


window.onscroll = function showHeader() {
  if (window.innerWidth > 820) {
    var header = document.querySelector('.header');

    if (window.pageYOffset > 43) {
      header.classList.add('_header-fixed');
    } else {
      header.classList.remove('_header-fixed');
    }
  }
}; // window.onscroll = function(){
// 	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
// 	var o=document.getElementById('sticky');
// 	if (scrolled > 300) o.setAttribute('class','fix');
// 	else o.setAttribute('class','not_fix');
// }