<?php
include 'header.php';
?>

    <h2> Accueil</h2>

    <div class = "evenement">
        <div class = "objet">
              <a href="images/bijeven.jpg"  target="_blank" rel="noopener no-referrer"><img src="images/bijeven.jpg" alt="header20" class="header21" title="megaVente" id="even" /></a>
              <h3>Grande solde de bijoux</h3>
            <section>
              <p>Un évenement à ne surtout pas rater!</p>
              <p>venez profiter des petits prix qui vous seront offert. </p>
              <p>Plus que:</p>
            </section>
        <div id="decompte" class="decompte1">
        </div>
        </div>

        <div class = "objet">

              <h3> Une Variété Incroyable</h3>
            <article>
              <a href="images/even1.jpg" target="_blank" rel="noopener no-referrer"><img src="images/even1.jpg" alt="header21" class="header21" title="vitrine de bijoux" id="even0"/></a>
              <p>Nous vous offrons plusieurs variétés de bijoux à savoir: des bracelets, des chaines, des boucles d'oreilles, des montres, des bijoux personnalisés etc... mieux encore pour toutes les categories. que vous soyex un homme, une femme, ou un enfant vous trouverez votre compte. </p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, modi.</p>
            </article>
        </div>

        <div class="objet">
            <h3>Restez connecté</h3>
            <p>Recevez par mail les nouveaux catalogues de nos bijoux. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, accusamus! Lorem ipsum dolor sit, amet consectetur.</p>
        <form action="index.php" method="post">
            <fieldset>
                <legend> </legend>
                <div class= "input-container">
                    <label for="email"> </label>
                    <input type="email" name="email" id="email" class="email" placeholder="Adresse mail">

                </div>

                <div class= "input-container">
                    <input type="submit" value="Envoyer">
                </div>
            </fieldset>
        </form>
        </div>

    </div>
    <a href="vignette.php" class="picture">VIGNETTE DETAILS</a>
    <a href="galerie-mobile.php" class="picture">Galeries</a>
    <div class="conteneur-carrousel">
        <div class="conteneur-images">
          <img src="images/img1.jpg" alt="img1" class="actif">
          <img src="images/img2.jpg" alt="img2" >
          <img src="images/img3.jpg" alt="img3" >
          <img src="images/img4.jpg" alt="img4" >
          <img src="images/img5.jpg" alt="img5" >
        </div>
        <div class="commandes">
          <button class="gauche">
            <img src="images/left.svg" alt="">
          </button>
          <button class="droite">
            <img src="images/right.svg" alt="">
          </button>
        </div>
        <div class="cercles">
          <button data-clic="1" class="cercle actif-cercle"></button>
          <button data-clic="2" class="cercle"></button>
          <button data-clic="3" class="cercle"></button>
          <button data-clic="4" class="cercle"></button>
          <button data-clic="5" class="cercle"></button>
        </div>
    </div>
    <div class=" container"></div>
  <?php include 'footer.php'; ?>

