const navigation = document.querySelector(".opacity-nav");
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
const tileContainer = document.querySelectorAll(".tile-container");
const reactTiles = document.querySelectorAll(".react-tile");
const reactDescriptions = document.querySelectorAll(".react-desc");

const tiles = document.querySelector("#tiles");
const tilesJs = document.querySelector("#tiles-js");
const h2 = document.querySelector("h2"); //this is h2 in tiles (sites tiles)

const footer = document.querySelector("footer");

//and all stuff about hamburger case on mobiles or tablets
const hamburgerIcon = document.querySelector("#icon-hamb");
const hamburgerMenu = document.querySelector(".nav-overlay");
const closingIcon = document.querySelector("#closing");
const aboutMe = document.querySelector(".about-me");
const myPages = document.querySelector(".hamb-my-pages");
const myPagesOptions = document.querySelector(".hamb-pages-options");
const vanillaJs = document.querySelector(".hamb-vanilla-js");
const vanillaJsOptions = document.querySelector(".hamb-js-options");
const reactHamb = document.querySelector(".hamb-react");
const reactHambOptions = document.querySelector(".hamb-react-options");

hamburgerIcon.addEventListener("click", () => {
  if (hamburgerMenu.style.display === "flex") {
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.style.display = "flex";
  }
});

closingIcon.addEventListener("click", () => {
  hamburgerMenu.style.display = "none";
});

aboutMe.addEventListener("click", () => {
  hamburgerMenu.style.display = "none";
});

myPages.addEventListener("click", () => {
  if (myPagesOptions.style.display === "block") {
    myPagesOptions.style.display = "none";
  } else {
    myPagesOptions.style.display = "block";
  }
});

vanillaJs.addEventListener("click", () => {
  if (vanillaJsOptions.style.display === "block") {
    vanillaJsOptions.style.display = "none";
  } else {
    vanillaJsOptions.style.display = "block";
  }
});

reactHamb.addEventListener("click", () => {
  if (reactHambOptions.style.display === "block") {
    reactHambOptions.style.display = "none";
  } else {
    reactHambOptions.style.display = "block";
  }
});

/****************************************************************** */

/*This function will add opacity to nav when site is scrolled for height of nav.
Function will be triggered in main function, where I have every functions thas requires trigger by scrolling*/
const navOpacity = () => {
  const navHeightInPx = navigation.clientHeight;
  const yNav = body.getBoundingClientRect().top + navHeightInPx; //so it's height of nav in fact
  if (yNav < 0) {
    navigation.classList.add("opacity");
  } else {
    navigation.classList.remove("opacity");
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

  if (logoSectionY < window.innerHeight) {
    for (i = 0; i < techLogos.length; i++) {
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

//For displaying data on React section
const showReactTiles = () => {
  for (i = 0; i < tileContainer.length; i++) {
    const tileContainerY =
      tileContainer[i].getBoundingClientRect().top +
      tileContainer[i].getBoundingClientRect().height / 2;
    if (tileContainerY < window.innerHeight) {
      reactTiles[i].classList.add("show-react-data");
      reactDescriptions[i].classList.add("show-react-data");
    }
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
  showReactTiles();
  showFooter();
};

window.addEventListener("scroll", mainTriggerScrolling);
