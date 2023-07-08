'use strict'
import Swiper, { Autoplay, FreeMode, Navigation } from 'swiper'
export function initSlider() {
	const catalog = document.querySelector('.feedback__slider-container')
	const port = new Swiper('.mySwiper', {
		modules: [Navigation, Autoplay, FreeMode],
		slidesPerView: 1,
		loop: true,
		speed: 1000,
		spaceBetween: 10,
		autoplay: {
			delay: 10000,
		},
		breakpoints: {
			569: {
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			}
		}
	})
}