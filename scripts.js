var nav = document.querySelector(".nav");
var wrapper = document.querySelector(".wrapper");

var navHeight = nav.offsetHeight;
var topOfNav = nav.offsetTop;
console.log(topOfNav);
var windowHeight = window.innerHeight;

var wrapperHeight = document.querySelector(".wrapper").offsetHeight;
console.log(wrapperHeight);

function fixNav () {
var currentScroll = window.scrollY;

	if (currentScroll >= topOfNav) {
		document.body.style.paddingTop = navHeight;
		nav.classList.remove('bottom');
		nav.classList.add('top');
	} 
	else {
		nav.classList.remove('top');
		nav.classList.add('bottom');
	}
	if (windowHeight - scrollY - navHeight<= wrapperHeight) {
		wrapper.style.display = 'none';
	} 
	else {
		wrapper.style.display = 'block';
	}
	}

window.addEventListener('scroll', fixNav);