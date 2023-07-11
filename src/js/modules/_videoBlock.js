'use strict'

export function videoBlock() {
	const callBlock = document.querySelector('.call')
	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

	if (!isMobile) {
		let video = document.createElement('div')
		video.innerHTML = `<video poster="./assets/images/bg-call.jpg" autoplay muted loop class="call__video"
			src="./assets/images/video.mp4">
		</video>`
		callBlock.append(video)
	} else {
		callBlock.style.background = 'url(./assets/images/bg-call.jpg) center center / cover no-repeat'
	}

	if (window.innerWidth <= 570) {
		callBlock.style.background = '#074631'
	}
}