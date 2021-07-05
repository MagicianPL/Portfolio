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
	
	
const divyAll = document.getElementsByTagName("div");
const footer = document.querySelector("footer");
const opis = divyAll.item(12);
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const description = document.querySelector("#description");
const allPInDesc = document.querySelectorAll("#description p");

window.addEventListener("scroll", function() {
	/*Dodaję przezroczystość do nav, kiedy strona jest scrollowana o jego wysokość*/
	navHeight = nav.clientHeight;
	const yNav = body.getBoundingClientRect().top + navHeight;
	if (yNav < 0) {
		nav.classList.add("opacity");
	}
	else {
		nav.classList.remove("opacity");
	};
	
	/*Ustawiam scalowanie i translatowanie w górę na description*/
	const descRect = description.getBoundingClientRect();
	const descY = descRect.top + descRect.height/7;
	description.style.transition = "all 2s";
	for (i=0; i < allPInDesc.length; i++) {
			allPInDesc[i].style.transition = "all 2s";
		};
	
	if (descY < 0) {
		description.classList.add("scale");
		for (i=0; i < allPInDesc.length; i++) {
			allPInDesc[i].classList.add("go-away");
		};
	} else {
		description.classList.remove("scale");
		for (i=0; i < allPInDesc.length; i++) {
			allPInDesc[i].classList.remove("go-away");
		};
	}
	
	
	
	
	const dataOpis = opis.getBoundingClientRect();
	const Y = dataOpis.top + dataOpis.height/1.5;
	
	if (Y < window.innerHeight) {
		opis.classList.add("appearing-from-bottom");
	}
	
	const divLeft = document.querySelector("#Space-Coff"); /*divyAll.item(14);*/
	const divRight = document.querySelector("#Inwestor"); /*divyAll.item(18);*/
	const divCenter = document.querySelector("#Wyczesani"); /*divyAll.item(16);*/
	const divLeftJs = document.querySelector("#Color-Flipper"); /*divyAll.item(21);*/
	const divRightJs = document.querySelector("#Kostka"); /*divyAll.item(23);*/
	const dataDivLeft = divLeft.getBoundingClientRect();
	const YDivLeft = dataDivLeft.top + dataDivLeft.height/2;
	const dataDivRight = divRight.getBoundingClientRect();
	const YDivRight = dataDivRight.top + dataDivRight.height/2;
	const dataDivCenter = divCenter.getBoundingClientRect();
	const YDivCenter = dataDivCenter.top + dataDivCenter.height/2;
	const dataDivLeftJs = divLeftJs.getBoundingClientRect();
	const YDivLeftJs = dataDivLeftJs.top + dataDivLeftJs.height/2;
	const dataDivRightJs = divRightJs.getBoundingClientRect();
	const YDivRightJs = dataDivRightJs.top + dataDivRightJs.height/2;
	const dataFooter = footer.getBoundingClientRect();
	const YFooter = dataFooter.top + dataFooter.height/2;
	
	if (YDivLeft < window.innerHeight) {
		divLeft.classList.add("LeftToRight");
	}
	
	if (YDivRight < window.innerHeight) {
		divRight.classList.add("RightToLeft");
	}
	
	if (YDivCenter < window.innerHeight) {
		divCenter.classList.add("appearing-from-bottom");
	}
	
	if (YDivLeftJs < window.innerHeight) {
		divLeftJs.classList.add("LeftToRight");
	}
	
	if (YDivRightJs < window.innerHeight) {
		divRightJs.classList.add("RightToLeft");
	}
	
	if (YFooter < window.innerHeight) {
		footer.classList.add("appearing-footer");
	}
});







/*17 15 13*/
