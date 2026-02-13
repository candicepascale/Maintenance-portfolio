<?php

include 'header.php';

?>

 <h2> Espace Membre</h2>

    <div class="container">
        <form action="espace-membre.php" method="post">
            <fieldset>
                <legend> </legend>
                <div class= "input-container">
                    <div class="aide-surgissante" id="aide-pseudonyme"></div>

                    <label
                        id="label-pseudonyme"
                        class="tooltip"
                        data-balloon-lenght="small"
                        data-balloon-pos="left"
                        aria-label="Veuillez entrer une adresse email comme Pseudonyme" for="email"> Pseudonyme: </label>
                    <input type="email" name="email" id="email" class="email">

                </div>

                <div class= "input-container">

                    <div class="aide-surgissante" id="aide-password"></div>

                    <label
                        id="label-password"
                        class="tooltip"
                        data-balloon-lenght="small"
                        data-balloon-pos="up"
                        aria-label="veuillez saisir votre mot de passe"
                        for="password">Mot de passe: </label>
                    <input type="password"
                    name="password"
                    id="password"
                    class="password" placeholder="Entrer un mot de passe">

                </div>




                <div class= "input-container">
                    <input type="submit" value="Envoyer">
                </div>
            </fieldset>
        </form>
    </div>

    <div class=" container"></div>
<?php include 'footer.php'; ?>

