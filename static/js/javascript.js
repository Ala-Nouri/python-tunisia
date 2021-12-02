let daynight = document.querySelector('.daynight')
let togglemenu = document.querySelector('.togglemenu')
let body = document.querySelector('body')
let navigation =document.querySelector('.navigation')

daynight.onclick = function(){
	body.classList.toggle('dark')
	daynight.classList.toggle('active')
}

togglemenu.onclick= function(){
	togglemenu.classList.toggle('active')
	navigation.classList.toggle('active')
}