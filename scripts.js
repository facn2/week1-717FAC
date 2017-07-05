const nav = document.querySelector(".nav");
const wrapper = document.querySelector(".wrapper");

const navHeight = nav.offsetHeight;
const topOfNav = nav.offsetTop;
console.log(topOfNav);
const windowHeight = window.innerHeight;

const wrapperHeight = document.querySelector(".wrapper").offsetHeight;
console.log(wrapperHeight);

// console.log(wrapperHeight)

function fixNav () {
const currentScroll = window.scrollY;
// console.log(currentScroll);

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