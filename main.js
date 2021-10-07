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

/*

//etablissement d'un carrousel d'image.--------------------------------------------------------------------------------------

//definitions des url dans des variables
const arcTriomphe = 'images/arcdetriomphe3.jpeg';
const notreDame = 'images/notre-dame-g83dbf15eb_1920.jpg';
const moulinRouge = 'images/moulinrouge.jpeg';
const grevin = 'images/museegrevin.jpeg';
const louvre1 = 'images/Louvre.jpeg';
const louvre2 = 'images/lelouvre3.jpeg';

//url stockés dans des tableaux
const monuments = [arcTriomphe, notreDame, moulinRouge];
const visites = [louvre1, louvre2, grevin];



//appel des differents elements pour creer le carousel à l'intèrieur
const monument = document.querySelector('.monument');
const divArcTriomphe = document.querySelector('.arc-triomphe');

//definition d'un index
let index = 0;
//fonction qui permute les images

function carrousel1() {

  monument.style.backgroundImage = `url(${monuments[index]})`;
  index++;
  index > monuments.length - 1 ? index = 0 : index = index;

}

const interval1 = setInterval(carrousel1, 5000);


function carrousel2() {

  divArcTriomphe.style.backgroundImage = `url(${visites[index]})`;
  index++;
  index > visites.length - 1 ? index = 0 : index = index;

}

const interval2 = setInterval(carrousel2, 6000);



*/