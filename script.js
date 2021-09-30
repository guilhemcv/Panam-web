const titre = document.querySelectorAll("h3");
console.log(titre);
const paragraphe = document.querySelectorAll(".text p");
console.log(paragraphe);
const titreH1 = document.querySelector("h1");
console.log(titreH1);

const français = [
    {
        titre: "Premier étage, l'experience du vide",
        para : "Situé à 57 mètres au-dessus du sol, le premier étage de la tour Eiffel propose aux visiteurs de découvrir l’histoire de ce monument mythique de Paris par l’intermédiaire d’un parcours culturel ludique et un spectacle immersif. C’est également à cet étage que la tour Eiffel offre la possibilité de vivre une expérience vertigineuseà ne pas manquer : marcher au-dessus du vide grâce au plancher de verre transparent de son parvis. Un moment étourdissant !",
    },
    {
        titre : "Deuxième étage : une vue a couper le souffle !",
        para : "Après quelques marches, les visiteurs s’élèvent à 115 mètres au-dessus du sol. La vue sur Paris y est spectaculaire ! On y aperçoit de nombreux monument de la capitale, tels que l’Arc de triomphe, le Sacré-Cœur ou la tour Montparnasse et des longues vues permettent d’observer cet extraordinaire panorama plus en détails.",
    },
    {   titre : "Troisième étage : balade au sommet !",
        para : "Le dernier pallier, accessible uniquement par ascenseur, amène les visiteurs à une altitude de 276 mètres. Des longues vues permettent à nouveau d’observer l’incroyable vue sur Paris et le bureau de Gustave Eiffel y est reconstitué.",

    }
];

const anglais = [
    {
        title : "First floor, an experience of emptiness",
        para : "Located 57 meters above the ground, the first floor of the Eiffel Tower offers visitors the opportunity to discover the history of this mythical monument of Paris through a fun cultural route and an immersive show. It is also on this floor that the Eiffel Tower offers the possibility of living a vertiginous experience not to be missed: walking above the void thanks to the transparent glass floor of its square. A dizzying moment!",
    }
];

titreH1.addEventListener("click", function(){
    for (let i=0; i<anglais.length; i++){
        paragraphe.innerHTML = anglais[i].para;
    }
})
