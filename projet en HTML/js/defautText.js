const texte = document.querySelector("#email");
texte.addEventListener("focus", avecFocus);
texte.addEventListener("blur", sansFocus);

texte.value = "exemple@gmail.com";

function avecFocus() {
  //Vider champs courriel
  //Si la valeur de l'input text est renseigné on vide la valeur du champs
  if(texte.value=="exemple@gmail.com"){
  texte.value = "";
  }
}

function sansFocus() {
  //Renseigné champs courriel
  //Si la valeur de l'input text est vide on rempli la valeur du champs
  if(texte.value==""){
  texte.value = "exemple@gmail.com";
  }
}

console.log(texte);

const text = document.querySelector("#password");
text.addEventListener("focus", avecFocus);
text.addEventListener("blur", sansFocus);

text.value = "Entrer un mot de passe";

function avecFocus() {
  //Vider champs courriel
  //Si la valeur de l'input text est renseigné on vide la valeur du champs
  if(text.value=="Entrer un mot de passe"){
  text.value = "";
  }
}

function sansFocus() {
  //Renseigné champs courriel
  //Si la valeur de l'input text est vide on rempli la valeur du champs
  if(text.value==""){
  text.value = "Entrer un mot de passe";
  }
}

console.log(text);