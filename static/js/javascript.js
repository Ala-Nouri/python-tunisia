let daynight = document.querySelector('.daynight')
let togglemenu = document.querySelector('.togglemenu')
let body = document.querySelector('body')
let navigation =document.querySelector('.navigation')


function dark(){
	if (localStorage.getItem('theme') == 'dark') {
		body.classList.toggle('dark')
		daynight.classList.toggle('active')
	  }}
	
	
	
	daynight.onclick = function(){
		body.classList.toggle('dark')
		daynight.classList.toggle('active')
		if (localStorage.getItem('theme') == '')
		localStorage.setItem('theme', 'dark');
		else
		localStorage.setItem('theme', '');
	}
	
	togglemenu.onclick= function(){
		togglemenu.classList.toggle('active')
		navigation.classList.toggle('active')
	}
	
	window.onload=dark;

