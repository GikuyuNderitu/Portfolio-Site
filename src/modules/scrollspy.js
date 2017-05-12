// This module will emulate a scrollspy feature, by attaching itself to trigger dom nodes and animating the scroll of the page appropriately

//TODO: Select All Dom Nodes that will Trigger ScrollSpy

//TODO: Add Speed feature
//TODO: Add registration feature that appends the trigger's target node's height to a data element on the node to allow for less compute time

const selectTriggers = () => {
	document.querySelectorAll('.scroll-spy-trigger').forEach((ele) => {
		let worked = appendScrollEffect(ele)
		if(!worked) console.log('Element was not an anchor')
	});
}

const appendScrollEffect = element => {
	const isAnchor = element.hasAttribute('href')
	if(!isAnchor) return false
	element.onclick = () => {
		// Abstract this out in registration feature
		let currentTop = window.scrollY
		let targetPos = document.querySelector(`${element.getAttribute('href')}`).getBoundingClientRect()
		console.log(targetPos);

		console.log(currentTop);

	}
	let targetPos = document.querySelector(`${element.getAttribute('href')}`).getBoundingClientRect()
	console.log(targetPos);
} 

selectTriggers()