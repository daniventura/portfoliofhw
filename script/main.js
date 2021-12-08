const menu = document.querySelector('.menu')
const menuToggle = document.querySelector('.menu-btn')

menuToggle.addEventListener("click", function(){
	const visibility = menu.getAttribute('visible')

	if (visibility === "false") {
		menu.setAttribute('visible', true)
	} else {
		menu.setAttribute('visible', false)
	}
});
	

