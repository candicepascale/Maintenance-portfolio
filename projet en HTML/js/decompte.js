function compterRebours () {
    //On crée une variable pour sélectionner la div HTML.
    /*const dateActuelle = new Date ().getTime();*/
    const decompte = document.querySelector("#decompte")
    //On crée une variable pour la date actuelle.
    const dateActuelle = new Date ().getTime();
    //Syntaxe : Mois Jour Heures:Minutes:Secondes Année. 
    //mettre le nom du mois en anglais, 
    //et ne garder que les 3 premières lettres.
    const dateEvenement = new Date ("Jan 15 00:00 2024").getTime();
    //Les variables des deux dates sont en millisecondes. 
    //On calcule la différence entre les deux dates
    //puis on les divise par 1000 afin d'avoir une différence en secondes.
    const totalSecondes = (dateEvenement - dateActuelle) / 1000;
    if (totalSecondes < 0) {
        clearTimeout(compterRebours);
    } 
    
    if (totalSecondes > 0){
    // A faire, tous nos calculs
    //Le nombre étant en secondes, 1 jour = 60 x 60 x 24 secondes.
        const jours = Math.floor(totalSecondes / (60 * 60 * 24));
            
    //1 heure = 60 x 60 secondes, 
    //la différence divisée par ce nombre nous permet d'obtenir le nombre d'heures restantes.
    //pour les jours, on récupère le plus grand entier inférieur ou égal à la valeur retournée.
        const heures = Math.floor((totalSecondes - (jours * 60 * 60 * 24)) /  (60 * 60));
        const minutes = Math.floor((totalSecondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        const secondes = Math.floor(totalSecondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
        console.log(jours, heures, minutes, secondes);
    // On affiche le résultat
    decompte.innerText = jours + "j " + heures + "h " + minutes + "m et " + secondes + "s";
    }
    //si total seconde == 0
    else{
        decompte.innerText = "Compte a rebours terminé !";
    }
    //rafraichir le chrono toutes les 1 secondes
    let actualisation = setTimeout(compterRebours, 1000);
    }
    
    compterRebours();
    