/// header ///

window.onscroll = function showHeader() {
	if (window.innerWidth > 820) {
		let header = document.querySelector('.header__fixed-wrapper');
		if (window.pageYOffset > 43) {
			header.classList.add('_header-fixed');
		} else {
			header.classList.remove('_header-fixed');
		}
	}
}
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
	}, 100);
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

const swiper = new Swiper(".citys__slider", {
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
	slidesPerView: 1.1,
	// spaceBetween: '28',
	grabCursor: true,
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
	},
	loop: true,
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