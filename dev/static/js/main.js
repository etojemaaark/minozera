/// header ///
// Фиксирование шапки
// function headerFixed() {
// 	const mediaQuery = window.matchMedia('(min-width: 820px)');
// 	if (mediaQuery.matches) {
// 		const header = document.getElementsByClassName('header'),
// 			offsetHeight = header.offsetHeight;
// 		window.addEventListener('load', () => {
// 			const height = window.innerHeight;
// 			let lostY = 0;
// 			document.addEventListener('scroll', () => {
// 				header.classList.add('_header-fixed');
// 				if (lostY >= 900) {
// 					if (window.scrollY > lostY) {
// 						header.classList.add('_header-fixed');
// 					} else {
// 						if (window.scrollY > height || lostY < offsetHeight) header.classList.remove('_header-fixed');
// 					}
// 				}
// 				lostY = window.scrollY;
// 			});
// 		});
// 	}
// }
// headerFixed();
/// anim scroll ///

const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

/// burger ///

let menuBurger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu-list');
menuBurger.addEventListener('click', function () {
	menuBurger.classList.toggle('_active');
	menu.classList.toggle('_active');
})



/// input mask ///

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

			if (mask[maskIndex] === "0" && value[valueIndex].match(numberPattern) === null) break;

			// Found a literal
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
}

/// swiper /// 

const swiperCitys = new Swiper(".citys__slider", {
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev'
	// },
	pagination: {
		el: '.citys__slider-progressbar',
		type: 'progressbar',
	},
	// scrollbar: {
	// 	el: '.citys__slider-scrollbar',
	// 	draggable: true,
	// },
	slidesPerView: 'auto',
	// spaceBetween: '30',
	// loopedSlides: 8,
	// centeredSlides: true,
	grabCursor: true,
	// autoplay: {
	// 	delay: 1000,
	// 	disableOnInteraction: false,
	// },
	// loop: true,
	speed: 1000,
	// breakpoints: {
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

/// swiper /// 

const swiperPlaces = new Swiper(".places__slider", {
	// loop: true,
	// zoom: true,
	speed: 1000,
	// autoplay: {
	// 	delay: 1000,
	// 	disableOnInteraction: false,
	// },
	slidesPerView: 'auto',

	// spaceBetween: '30',
	grabCursor: true,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev'
	},
	pagination: {
		el: '.swiper-pagination-progressbar',
		type: 'progressbar',
	},
	// scrollbar: {
	// 	el: '.citys__slider-scrollbar',
	// 	draggable: true,
	// },
	// breakpoints: {
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
/// swiper /// 

const swiperVideos = new Swiper(".videos__slider", {
	// loop: true,
	// zoom: true,
	speed: 1000,
	// autoplay: {
	// 	delay: 1000,
	// 	disableOnInteraction: false,
	// },
	slidesPerView: 'auto',

	// spaceBetween: '30',
	grabCursor: true,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev'
	},
	pagination: {
		el: '.swiper-pagination-progressbar',
		type: 'progressbar',
	},
	// scrollbar: {
	// 	el: '.citys__slider-scrollbar',
	// 	draggable: true,
	// },
	// breakpoints: {
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

/// scroll sidebar ///

$(document).ready(function () {

	// Anchor arrow click
	// smooth scroll to anchor tag
	$('a[href*="#"]:not([href="#featured"])').click(function () { // Check to see if anchor tag is not carousel's featured link
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
	});

	//highlight navigation
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
		}
		// Scrollbar progression
		// pixels scrolled from top
		var scrollTop = ($(window).scrollTop()) - ($('.sticky').offset().top),
			// document height
			docHeight = $('.sticky').height(),
			// window height
			winHeight = $(window).height(),
			// percent of document scrolled
			scrollPercent = scrollTop / docHeight,
			scrollPercentRounded = Math.round(scrollPercent * 100);

		// incement progress bar as user scrolls
		$('.sticky__progress-bar--increment').css('height', scrollPercentRounded + '%');
	});
});

/// аккордеон ///

var acc = document.getElementsByClassName("footer__title");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

/// header fixed ///

var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function () {
	var scrolled = $(window).scrollTop();

	if (scrolled > 100 && scrolled > scrollPrev) {
		header.addClass('_active');
	} else {
		header.removeClass('_active');
	}
	scrollPrev = scrolled;
});

///

// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
	animationTime = 300,
	framesCount = 90;

anchors.forEach(function (item) {
	// каждому якорю присваиваем обработчик события
	item.addEventListener('click', function (e) {
		// убираем стандартное поведение
		e.preventDefault();

		// для каждого якоря берем соответствующий ему элемент и определяем его координату Y
		let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

		// запускаем интервал, в котором
		let scroller = setInterval(function () {
			// считаем на сколько скроллить за 1 такт
			let scrollBy = coordY / framesCount;

			// если к-во пикселей для скролла за 1 такт больше расстояния до элемента
			// и дно страницы не достигнуто
			if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
				// то скроллим на к-во пикселей, которое соответствует одному такту
				window.scrollBy(0, scrollBy);
			} else {
				// иначе добираемся до элемента и выходим из интервала
				window.scrollTo(0, coordY);
				clearInterval(scroller);
			}
			// время интервала равняется частному от времени анимации и к-ва кадров
		}, animationTime / framesCount);
	});
});


var modal = document.getElementById('header-modal');
var btn = document.getElementById("header-btn");
var cross = document.getElementsByClassName("header__modal-close")[0];
btn.onclick = function () {
	modal.style.display = "flex";
}
cross.onclick = function () {
	modal.style.display = "none";
}
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
var modal = document.getElementById('header-modal');
var btn = document.getElementById("header-btn-2");
var cross = document.getElementsByClassName("header__modal-close")[0];
btn.onclick = function () {
	modal.style.display = "flex";
}
cross.onclick = function () {
	modal.style.display = "none";
}
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}