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





