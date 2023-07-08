'use strict'
import { gsap } from "gsap"


export function getGsap() {

	let groups = gsap.utils.toArray('.accordion__group')
	let boxActive = gsap.utils.toArray('.accordion__content_active')
	let menus = gsap.utils.toArray('.accordion__title')
	let menuToggles = groups.map(createAnimation)
	boxActive[0].style.height = 'auto'

	const toggleMenu = (clickedMenu) => {
		menuToggles.forEach((toggleFn) => toggleFn(clickedMenu))
	}

	menus.forEach((menu) => {
		menu.addEventListener('click', () => toggleMenu(menu))
	})

	function createAnimation(element) {
		let menu = element.querySelector('.accordion__title')
		let box = element.querySelector('.accordion__content')
		let boxActive = element.querySelector('.accordion__content_active')
		let plus = element.querySelector('.accordion__title span')

		gsap.set(box, { height: 'auto' })

		let animation = gsap
			.timeline()
			.from(box, {
				height: 0,
				duration: .5,
				ease: 'power1.inOut'
			})
			.to(plus, {
				rotation: -45,
				duration: .5,
				ease: 'power1.inOut'
			}, 0)
			.reverse()


		return function (clickedMenu) {
			if (clickedMenu === menu) {
				animation.reversed(!animation.reversed())
			} else {
				animation.reverse()
			}
		}
	}
}