const hamburgerIcon = document.getElementById("icon-hamburger");
const hamburgerMenu = document.getElementById("hamburger-menu");
const x = document.getElementById("closing");
const oMnie = document.getElementById("about-me");
const mojeStrony = document.getElementById("moje-strony");
const vanillaJs = document.getElementById("vanilla-js");
const allA = document.getElementsByTagName("a");

const divLeft = document.querySelector("#Space-Coff"); /*divyAll.item(14);*/
const divRight = document.querySelector("#Inwestor"); /*divyAll.item(18);*/
const divCenter = document.querySelector("#Wyczesani"); /*divyAll.item(16);*/
const toDo = document.querySelector("#ToDo"); /*divyAll.item(21);*/
const colorFlipper = document.querySelector("#Color-Flipper"); /*divyAll.item(23);*/
const dice = document.querySelector("#Kostka"); /*divyAll.item(25);*/
const magicBall = document.querySelector("#Magic-Ball");
const stopwatch = document.querySelector("#stopwatch");
const stickyNotes = document.querySelector("#sticky-notes");

function showMenu() {
	hamburgerMenu.style.display = "flex";	
};

hamburgerIcon.addEventListener("click", showMenu);

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
		allA.item(6).style.display="flex";
		allA.item(7).style.display="flex";
		allA.item(8).style.display="flex";
		allA.item(9).style.display="flex";
		}
		
		else {
		allA.item(4).style.display="none";
		allA.item(5).style.display="none";
		allA.item(6).style.display="none";
		allA.item(7).style.display="none";
		allA.item(8).style.display="none";
		allA.item(9).style.display="none";
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

const tiles = document.querySelector("#tiles");
const tilesJs = document.querySelector("#tiles-js");
const h2 = document.querySelector("h2");

const translateTiles = () => {
	dataTilesJs = tilesJs.getBoundingClientRect();
	tilesY = dataTilesJs.top + dataTilesJs.height / 2;
	
	if (tilesY < window.innerHeight) {
		tiles.classList.add("translate");
		h2.classList.add("translateh2");
	};
};

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
	};
	
	
	
	
	const dataOpis = opis.getBoundingClientRect();
	const Y = dataOpis.top + dataOpis.height/1.5;
	
	if (Y < window.innerHeight) {
		opis.classList.add("appearing-from-bottom");
	};
	
	
	
	const dataDivLeft = divLeft.getBoundingClientRect();
	const YDivLeft = dataDivLeft.top + dataDivLeft.height/2;
	const dataDivRight = divRight.getBoundingClientRect();
	const YDivRight = dataDivRight.top + dataDivRight.height/2;
	const dataDivCenter = divCenter.getBoundingClientRect();
	const YDivCenter = dataDivCenter.top + dataDivCenter.height/2;
	
	const dataToDo = toDo.getBoundingClientRect();
	const YToDo = dataToDo.top + dataToDo.height/2;
	const dataMagicBall = magicBall.getBoundingClientRect();
	const YMagicBall = dataMagicBall.top + dataMagicBall.height/2;
	const dataStopwatch = stopwatch.getBoundingClientRect();
	const YStopwatch = dataStopwatch.top + dataStopwatch.height/2;
	const dataDice = dice.getBoundingClientRect();
	const YDice = dataDice.top + dataDice.height/2;
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
	
	if (YToDo < window.innerHeight) {
		toDo.classList.add("LeftToRight");
		stickyNotes.classList.add("LeftToRight");
	}
	
	if (YMagicBall < window.innerHeight) {
		magicBall.classList.add("appearing-from-bottom");
		dice.classList.add("RightToLeft");
	}
	
	if (YStopwatch < window.innerHeight) {
		stopwatch.classList.add("RightToLeft");
		colorFlipper.classList.add("appearing-from-bottom");
	}
	
	if (YFooter < window.innerHeight) {
		footer.classList.add("appearing-footer");
	}
	
	translateTiles();
});







/*17 15 13*/
