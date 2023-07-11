'use strict'

export function videoBlock() {
	const callBlock = document.querySelector('.call')
	const videoBlock = document.querySelector('.call__video')

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		videoBlock.remove()
		callBlock.style.background = 'url(../assets/images/bg_call.jpg) center center / cover no-repeat'
	}

	if (window.innerWidth <= 570) {
		console.log('test')
		callBlock.style.background = '#074631'
	}
}