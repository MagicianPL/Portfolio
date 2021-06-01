const hamburgerIcon = document.getElementById("icon-hamburger");
const hamburgerMenu = document.getElementById("hamburger-menu");
const x = document.getElementById("closing");
const mojeStrony = document.getElementById("moje-strony");
const vanillaJs = document.getElementById("vanilla-js");
const allA = document.getElementsByTagName("a");
hamburgerIcon.addEventListener("click", showMenu);

function showMenu() {
	hamburgerMenu.style.display = "flex";
	
	mojeStrony.addEventListener("click", function(){
		allA.item(0).style.display="flex"
		allA.item(1).style.display="flex"
		allA.item(2).style.display="flex"
		})
		
	vanillaJs.addEventListener("click", function(){
		allA.item(3).style.display="flex"
		allA.item(4).style.display="flex"
		allA.item(5).style.display="flex"
	})
	
	x.addEventListener("click", function(){
		hamburgerMenu.style.display = "none";
	})
}