let daynight = document.querySelector('.daynight')
let togglemenu = document.querySelector('.togglemenu')
let body = document.querySelector('body')
let navigation =document.querySelector('.navigation')

const currentTheme = localStorage.getItem("theme");
 
if (currentTheme === "dark") {
    body.classList.toggle('dark')
    daynight.classList.toggle('active')
  }
daynight.onclick = function(){
	body.classList.toggle('dark')
	daynight.classList.toggle('active')
	localStorage.setItem("theme", "dark");
}

togglemenu.onclick= function(){
	togglemenu.classList.toggle('active')
	navigation.classList.toggle('active')
}