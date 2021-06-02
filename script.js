const hamburgerIcon = document.getElementById("icon-hamburger");
const hamburgerMenu = document.getElementById("hamburger-menu");
const x = document.getElementById("closing");
const oMnie = document.getElementById("about-me");
const mojeStrony = document.getElementById("moje-strony");
const vanillaJs = document.getElementById("vanilla-js");
const allA = document.getElementsByTagName("a");

hamburgerIcon.addEventListener("click", showMenu);

function showMenu() {
	hamburgerMenu.style.display = "flex";	
}

oMnie.addEventListener("click", function(){
		hamburgerMenu.style.display = "none";
	});
	
mojeStrony.addEventListener("click", function(){
		if (allA.item(1).style.display == "none") {
		allA.item(1).style.display="flex";
		allA.item(2).style.display="flex";
		allA.item(3).style.display="flex";
		}
		
		else {
		allA.item(1).style.display="none";
		allA.item(2).style.display="none";
		allA.item(3).style.display="none";
		}
		});
		
vanillaJs.addEventListener("click", function(){
		if (allA.item(4).style.display =="none") {
		allA.item(4).style.display="flex";
		allA.item(5).style.display="flex";
		}
		
		else {
		allA.item(4).style.display="none";
		allA.item(5).style.display="none";
		}
	});
	
x.addEventListener("click", function(){
		hamburgerMenu.style.display = "none";
	});