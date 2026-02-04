const boutonLirePlus = document.querySelectorAll(".bouton-lire-plus");
const texte = document.querySelectorAll(".texte");

for (let i = 0;i < 3; i++ ){
boutonLirePlus[i].addEventListener("click", function(){
    texte[i].classList.toggle("voirplus");
    if (boutonLirePlus[i].innerHTML === '<i class="fa-regular fa-circle-down"></i>'){
        boutonLirePlus[i].innerHTML = '<i class="fa-solid fa-circle-arrow-up"></i>';
    } else{
        boutonLirePlus[i].innerHTML = '<i class="fa-regular fa-circle-down"></i>';
    }
});
}