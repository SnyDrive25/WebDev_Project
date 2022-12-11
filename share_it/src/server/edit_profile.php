<?php

require "./server.php";
// Récupération des données depuis le formulaire
$email = $_POST["email"];
$username = $_POST["username"];
$mdp = hash('sha256', $_POST["mdp"]);
$statut = $_POST["statut"];

// Mise à jour des données dans la base de données 
$sql = "UPDATE users SET username= '".$username."', profil_bio = '".$statut."', WHERE utilisateur_id = ".$utilisateur_id;
if ($connection->query($sql) === TRUE) {
    echo "Profil mis à jour.";
} else {
    echo "Erreur: " . $sql . "<br>" . $connection->error;
}
?>
