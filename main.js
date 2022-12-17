const nav = document.querySelector('nav')
const opnMenu = document.querySelector('.opn-menu')
const clsMenu = nav.querySelector('.cls-menu')
const navCont = nav.querySelector('.nav-items-container')


opnMenu.addEventListener('click', () => {
	navCont.style.transform = "translateX(0)"
})

clsMenu.addEventListener('click', () => {
	navCont.style.transform = "translateX(2000px)"
	
})
