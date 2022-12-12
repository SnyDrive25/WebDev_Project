<?php

require "./server.php";
// Récupération des données depuis le formulaire
$email = $_POST["email"];
$username = $_POST["username"];
$mdp = hash('sha256', $_POST["mdp"]);
$statut = $_POST["statut"];

// Mise à jour des données dans la base de données 
$sql = $pdo->exec("UPDATE users SET username = " . $pdo->quote($username) . ", statut = " . $pdo->quote($statut) . ", mdp = " . $pdo->quote($mdp) . " WHERE email = " . $pdo->quote($email));

?>