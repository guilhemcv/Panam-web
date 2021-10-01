const hamburger = document.querySelector(".hamburger");
const navBarExtends = document.querySelector(".navbar-extends");
const closeCross = document.getElementById("close-cross");
const titlePanamWeb = document.querySelector(".title-panam-web");
const navbarDesktop = document.querySelector(".navbar-desktop");

hamburger.addEventListener("click", function (e) {
  titlePanamWeb.style.display = "none";
  hamburger.style.display = "none";
  navBarExtends.style.display = "flex";
});

closeCross.addEventListener("click", function (e) {
  navBarExtends.style.display = "none";
  titlePanamWeb.style.display = "flex";
  hamburger.style.display = "flex";
});

window.onresize = function () {
  if (window.matchMedia("(min-width:800px)").matches) {
    navbarDesktop.style.display = "flex";
    titlePanamWeb.style.display = "none";
    hamburger.style.display = "none";
    navBarExtends.style.display = "none";
  } else {
    titlePanamWeb.style.display = "flex";
    hamburger.style.display = "flex";
    navbarDesktop.style.display = "none";
    navBarExtends.style.display = "none";
  }
};