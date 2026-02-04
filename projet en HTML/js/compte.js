// creer un nouveau element HTML en js
const balise = document.createElement("h3");
const item = document.querySelectorAll(".article");

console.log(balise);


//appendchild
document.querySelector("#compter").appendChild(balise).innerText = "Nombre de catégories: " + item.length;
