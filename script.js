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
const opis = divyAll.item(11);

window.addEventListener("scroll", function() {
	const dataOpis = opis.getBoundingClientRect();
	const Y = dataOpis.top + dataOpis.height/1.5;
	
	if (Y < window.innerHeight) {
		opis.classList.add("appearing-from-bottom");
	}
	
	const divLeft = divyAll.item(13);
	const divRight = divyAll.item(17);
	const divCenter = divyAll.item(15);
	const divLeftJs = divyAll.item(20);
	const divRightJs = divyAll.item(22);
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
	
	
	
	/*const tiles = document.getElementById("tiles");
	dataTiles = tiles.getBoundingClientRect();
	const YTiles = dataTiles.top + dataTiles.height/2.2;
	
	if (YTiles < window.innerHeight) {
		tiles.classList.add("appearing-from-bottom");
	}
	
	const tilesJs = document.getElementById("tiles-js");
	dataTilesJs = tilesJs.getBoundingClientRect();
	const YTilesJs = dataTilesJs.top + dataTilesJs.height/2;
	
	if (YTilesJs < window.innerHeight) {
		tilesJs.classList.add("appearing-from-bottom");
	}*/
})


/*17 15 13*/

