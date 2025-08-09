const galleryEl = document.querySelector('.gallery')

document.addEventListener('keydown', event => {
	if (event.key === 'ArrowRight') {
		galleryEl.scrollBy({ left: 500 })
	}
	if (event.key === 'ArrowLeft') {
		galleryEl.scrollBy({ left: -500 })
	}
})
const inputNumEl = document.querySelector('input-num')
const createElement = document.querySelector('create-element')
const distroyElement = document.querySelector('distroy-element')
const boxesEl = document.querySelector('#boxes')
function createBoxes(amount) {
	for (let i = 0; i < amount; i++) {
		const divEl = document.createElement('div')
		boxesEl.append(divEl)
	}
}
console.log(createBoxes(20))
