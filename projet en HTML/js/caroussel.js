const images = document.querySelectorAll(".conteneur-images img");
const suivante = document.querySelector(".droite");
console.log(suivante);
const precedente = document.querySelector(".gauche");
const cercles = document.querySelectorAll(".cercle");
let index = 0;

suivante.addEventListener("click", changerSuivante);
function changerSuivante() {
    if (index < 4 ){
        // si < 2, on enleve la classe actif, l'image sur le dessus 
        images[index].classList.remove("actif");
        index++;
        images[index].classList.add("actif");
    } else if (index === 4) {
        images[index].classList.remove("actif");
        index = 0;
        images[index].classList.add("actif");
         
    }
    //pour actualliser les cercles  par rapport aux images
    for (i = 0; i < cercles.length; i++){
        if(cercles[i].getAttribute("data-clic") - 1 === index){
            cercles[i].classList.add("actif-cercle");
        } else {
            cercles[i].classList.remove("actif-cercle");
        }
    }
}


precedente.addEventListener("click", changerPrecedente);

function changerPrecedente() {
    if (index > 0 ){
        // si < 2, on enleve la classe actif, l'image sur le dessus 
        images[index].classList.remove("actif");
        index--;
        images[index].classList.add("actif");
        //A la 1ere ligne = revenir a la derniere (clic infini)
    } else if (index === 0) {
        images[index].classList.remove("actif");
        index = 4;
        images[index].classList.add("actif");
         
    }
    //pour actualliser les cercles  par rapport aux images
    for (i = 0; i < cercles.length; i++){
        if(cercles[i].getAttribute("data-clic") - 1 === index){
            cercles[i].classList.add("actif-cercle");
        } else {
            cercles[i].classList.remove("actif-cercle");
        }
    }
}


// Changer les images en appuyant sur les fleches gauches et droite du clavier

document.addEventListener("keydown", presserTouche);

function presserTouche(event) {
    ///www.keycode.info
    if (event.keyCode === 37) {
        changerPrecedente();
    } else if (event.keyCode === 39) {
        changerSuivante();
    }
}

// Cercles
cercles.forEach((cercle)=> {
    cercle.addEventListener("click", function() {
        for (i = 0; i < cercles.length; i++) {
            cercles[i].classList.remove("actif-cercle");
        }
        this.classList.add("actif-cercle");
        images[index].classList.remove("actif");
        index = this.getAttribute("data-clic") - 1;
        images[index].classList.add("actif");
    });
});