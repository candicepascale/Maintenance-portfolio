const nom = document.querySelector("#nom")
const adresse = document.querySelector("#email");
//const pass = document.querySelector("#password");
//const pass1 = document.querySelector("#password1");

const erreurNom = document.querySelector("#erreurNom");
const erreurMail = document.querySelector("#erreurEmail");
//const erreurPass = document.querySelector("#erreurPass");
//const erreurPass1 = document.querySelector("#erreurPass1");
const nomLabel= document.querySelector("#nomLabel");
const mailLabel= document.querySelector("#emailLabel");
//const passLabel = document.querySelector("#passLabel");
//const pass1Label = document.querySelector("#pass1Label");

document.querySelector("#formulaire").addEventListener("submit", validerRegexEmail);
let regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/;
function validerRegexEmail(e) {

    if (nom.value == "") {
        e.preventDefault();
        erreurNom.textContent = "Veuillez renseigner votre nom";
        nom.className = "invalide";
        nomLabel.className = "label";
        nom.focus();
        return false;
      }

      
      if (nom.value.length < 3) {
        e.preventDefault();
        erreurNom.textContent =
          "Le nom doit contenir au moins 3 caractères";
        nom.className = "invalide";
        nomLabel.className = "label";
        nom.focus();
        return false;
      }


   

    if (regexEmail.test(adresse.value) == false){
      e.preventDefault();

      erreurMail.textContent = "Entrez une adresse mail valide";
      adresse.className = "invalide";
      mailLabel.className = "label"
      adresse.focus();
      
    }

    if (adresse.value == "") {
        e.preventDefault();
        adresse.className = "invalide";
        mailLabel.className = "label";
        erreurMail.textContent = "Entrez une adresse mail";
        adresse.focus();
        
      }

}
nom.addEventListener("blur", verifierNom, true);
function verifierNom() {
        if (nom.value != "" && nom.value.length >= 3) {
          nom.className = "valide";
          nomLabel.className = "labelOk";
          erreurNom.textContent = "";
          adresse.focus();
          return true;
        }
}
verifierNom();


     
    



adresse.addEventListener("blur", verifierRegexEmail, true);

function verifierRegexEmail(){
    if(adresse.value != "" && regexEmail.test(adresse.value) != false ){
        console.log("test");
        adresse.className = "valide";
        mailLabel.className = "labelOk";
        erreurMail.textContent = "";
        return true;
    }
}
verifierRegexEmail();



