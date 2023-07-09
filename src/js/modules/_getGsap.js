'use strict'
import { gsap } from "gsap"


export function getGsap() {
	gsap.registerPlugin(ScrollTrigger)

	ScrollTrigger.defaults({
		markers: false,
		// restart pause resume none
		toggleActions: "play pause resume reset",
	})

	// gsap.utils.toArray('section').forEach((panel, i) => {
	// 	console.log('panel', panel, i)

	// 	let tl = gsap.timeline()
	// 	tl.from(panel.querySelector('.animation-wrapper'), {
	// 		scaleX: 0,
	// 		duration: 0.25
	// 	})
	// 		.from(panel.querySelector('.subtitle'), {
	// 			yPercent: 100,
	// 			duration: 0.65,
	// 		})

	// 	ScrollTrigger.create({
	// 		animation: tl,
	// 		trigger: panel,
	// 		start: 'top 10%',
	// 		scrub: false
	// 	})
	// })

	/// case accordion

	let groups = gsap.utils.toArray('.accordion__group')
	let menus = gsap.utils.toArray('.accordion__title')
	let menuToggles = groups.map(createAnimation)

	const toggleMenu = (clickedMenu) => {
		menuToggles.forEach((toggleFn) => toggleFn(clickedMenu))
	}

	menus.forEach((menu) => {
		menu.addEventListener('click', () => toggleMenu(menu))
	})

	function createAnimation(element) {
		let menu = element.querySelector('.accordion__title')
		let box = element.querySelector('.accordion__content')
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

	toggleMenu(menus[0])
}