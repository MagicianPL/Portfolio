const nav = document.querySelector("nav");
const description = document.querySelector("#description");
const allPInDesc = document.querySelectorAll("#description p");
const allDivs = document.querySelectorAll("div");

//Technologies header
const techHeader = document.querySelector(".technologies");

/* logos on technology section */
const techLogos = document.querySelectorAll(".tech-logo");
const logoSection = document.querySelector("#logo-section");

const body = document.querySelector("body");

//three variables - three tiles in main site tiles div
const divLeft = document.querySelector("#Celebrytka");
const divRight = document.querySelector("#Wyczesani");
const divCenter = document.querySelector("#Space-Coff");

//variables - all tiles in main js tiles div
const exchangeRates = document.querySelector("#exchange-rates");
const toDo = document.querySelector("#ToDo");
const checkingForm = document.querySelector("#checking-form");
const magicBall = document.querySelector("#Magic-Ball");
const stopwatch = document.querySelector("#stopwatch");
const stickyNotes = document.querySelector("#sticky-notes");

//react tiles
const bankApplication = document.querySelector("#bank-application");

const tiles = document.querySelector("#tiles");
const tilesJs = document.querySelector("#tiles-js");
const h2 = document.querySelector("h2"); //this is h2 in tiles (sites tiles)

const footer = document.querySelector("footer");

//and all stuff about hamburger case on mobiles or tablets
const hamburgerIcon = document.getElementById("icon-hamburger");
const hamburgerMenuContainer = document.querySelector(".hamb-container");
const xClosing = document.getElementById("closing");
const oMnie = document.getElementById("about-me");
const mojeStrony = document.getElementById("moje-strony");
const vanillaJs = document.getElementById("vanilla-js");
const reactApps = document.querySelector("#react");
const allA = document.getElementsByTagName("a");

/*This function will add opacity to nav when site is scrolled for height of nav.
Function will be triggered in main function, where I have every functions thas requires trigger by scrolling*/
const navOpacity = () => {
  const navHeightInPx = nav.clientHeight;
  const yNav = body.getBoundingClientRect().top + navHeightInPx; //so it's height of nav in fact
  if (yNav < 0) {
    nav.classList.add("opacity");
  } else {
    nav.classList.remove("opacity");
  }
};

//Will blur first description about me when it should - this will be triggered in mainTrigger function
const blurDescription = () => {
  const descRect = description.getBoundingClientRect();
  const descY = descRect.top + descRect.height / 7;

  description.style.transition = "all 2s";

  for (i = 0; i < allPInDesc.length; i++) {
    allPInDesc[i].style.transition = "all 2s";
  }

  if (descY < 0) {
    description.classList.add("scale");
    for (i = 0; i < allPInDesc.length; i++) {
      allPInDesc[i].classList.add("go-away");
    }
  } else {
    description.classList.remove("scale");
    for (i = 0; i < allPInDesc.length; i++) {
      allPInDesc[i].classList.remove("go-away");
    }
  }
};

//For sliding Technologies header
const showTechnologiesHeader = () => {
  const techHeaderY =
    techHeader.getBoundingClientRect().top +
    techHeader.getBoundingClientRect().height / 10;

  if (techHeaderY < window.innerHeight) {
    techHeader.classList.add("slide-from-left");
  }
};

//For showing logos on tech section
const showStack = () => {
  const logoSectionY =
    logoSection.getBoundingClientRect().top +
    logoSection.getBoundingClientRect().height / 8;

  console.log(logoSectionY);
  if (logoSectionY < window.innerHeight) {
    for (i = 0; i < techLogos.length; i++) {
      console.log(i);
      techLogos[i].style.opacity = "1";
    }
  }
};

//Appearing tiles in main site tiles div (three divs) - trigger in mainTrigger
const showSiteTiles = () => {
  const dataDivLeft = divLeft.getBoundingClientRect();
  const yDivLeft = dataDivLeft.top + dataDivLeft.height / 2;
  const dataDivRight = divRight.getBoundingClientRect();
  const yDivRight = dataDivRight.top + dataDivRight.height / 2;
  const dataDivCenter = divCenter.getBoundingClientRect();
  const yDivCenter = dataDivCenter.top + dataDivCenter.height / 2;

  if (yDivLeft < window.innerHeight) {
    divLeft.classList.add("LeftToRight");
  }

  if (yDivRight < window.innerHeight) {
    divRight.classList.add("RightToLeft");
  }

  if (yDivCenter < window.innerHeight) {
    divCenter.classList.add("appearing-from-bottom");
  }
};

//Appearing js tiles in js main div
const showJsTiles = () => {
  const dataExchangeRates = exchangeRates.getBoundingClientRect();
  const yExchangeRates = dataExchangeRates.top + dataExchangeRates.height / 2;
  const dataToDo = toDo.getBoundingClientRect();
  const yToDo = dataToDo.top + dataToDo.height / 2;
  const dataMagicBall = magicBall.getBoundingClientRect();
  const yMagicBall = dataMagicBall.top + dataMagicBall.height / 2;
  const dataStopwatch = stopwatch.getBoundingClientRect();
  const yStopwatch = dataStopwatch.top + dataStopwatch.height / 2;

  if (yExchangeRates < window.innerHeight) {
    exchangeRates.classList.add("LeftToRight");
    stopwatch.classList.add("LeftToRight");
  }

  if (yToDo < window.innerHeight) {
    ToDo.classList.add("appearing-from-bottom");
    stickyNotes.classList.add("appearing-from-bottom");
    bankApplication.classList.add("appearing-from-bottom");
  }

  if (yMagicBall < window.innerHeight) {
    magicBall.classList.add("RightToLeft");
    checkingForm.classList.add("RightToLeft");
  }
};

const translateTilesDiv = () => {
  const dataTilesJs = tilesJs.getBoundingClientRect();
  const tilesY = dataTilesJs.top + dataTilesJs.height / 3;

  if (tilesY < window.innerHeight) {
    tiles.classList.add("translate");
    h2.classList.add("translateh2");
  }
};

//showing footer from bottom - triggered in mainTrigger
const showFooter = () => {
  const dataFooter = footer.getBoundingClientRect();
  const YFooter = dataFooter.top + dataFooter.height / 2;

  if (YFooter < window.innerHeight) {
    footer.classList.add("appearing-footer");
  }
};

const mainTriggerScrolling = () => {
  navOpacity();
  blurDescription();
  showTechnologiesHeader();
  showStack();
  showSiteTiles();
  showJsTiles();
  translateTilesDiv();
  showFooter();
};

//all about hamburger menu
function showHambMenu() {
  hamburgerMenuContainer.style.display = "flex";
}

window.addEventListener("scroll", mainTriggerScrolling);

hamburgerIcon.addEventListener("click", showHambMenu);

oMnie.addEventListener("click", function () {
  hamburgerMenuContainer.style.display = "none";
}); //because it's anchor for section about me, so I'm closing menu

mojeStrony.addEventListener("click", function () {
  if (allA.item(1).style.display == "none") {
    allA.item(1).style.display = "flex";
    allA.item(2).style.display = "flex";
    allA.item(3).style.display = "flex";
  } else {
    allA.item(1).style.display = "none";
    allA.item(2).style.display = "none";
    allA.item(3).style.display = "none";
  }
});

vanillaJs.addEventListener("click", function () {
  if (allA.item(4).style.display == "none") {
    allA.item(4).style.display = "flex";
    allA.item(5).style.display = "flex";
    allA.item(6).style.display = "flex";
    allA.item(7).style.display = "flex";
    allA.item(8).style.display = "flex";
    allA.item(9).style.display = "flex";
  } else {
    allA.item(4).style.display = "none";
    allA.item(5).style.display = "none";
    allA.item(6).style.display = "none";
    allA.item(7).style.display = "none";
    allA.item(8).style.display = "none";
    allA.item(9).style.display = "none";
  }
});

reactApps.addEventListener("click", () => {
  if (allA[10].style.display === "none") {
    allA[10].style.display = "flex";
  } else {
    allA[10].style.display = "none";
  }
});

xClosing.addEventListener("click", function () {
  hamburgerMenuContainer.style.display = "none";
});
