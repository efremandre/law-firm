'use strict'
export function burger() {
	const burger = document?.querySelector('[data-burger]')
	const nav = document?.querySelector('[data-nav]')
	const navItems = nav?.querySelectorAll('.nav__link')
	const body = document.body
	const pressUp = document?.querySelector('.button-up')
	const height = document.documentElement.clientHeight

	/// закрыть / открыть меню по кнопке бургера
	const setAdaptiveMenu = () => {
		body.classList.toggle('stop-scroll')
		burger.classList.toggle('_active')
		nav.classList.toggle('_nav-active')
		if (pageYOffset > height) pressUp?.classList.toggle('_active-button-up')
	}

	/// закрыть меню при нажатии на пункт меню
	const closeAdaptiveMenu = () => {
		body.classList.remove('stop-scroll')
		burger?.classList.remove('_active')
		nav?.classList.remove('_nav-active')
		pressUp?.classList.toggle('_active-button-up')
	}

	burger.addEventListener('click', setAdaptiveMenu)

	navItems?.forEach(el => {
		el.addEventListener('click', closeAdaptiveMenu)
	})
}