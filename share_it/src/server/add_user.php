<?php

require "./server.php";

$email = $_POST["email"];
$username = $_POST["username"];
$mdp = $_POST["mdp"];
$statut = $_POST["statut"];

$query = $pdo->exec("INSERT INTO users (email, mdp, username, statut) VALUES (" . $pdo->quote($email) . ", " . $pdo->quote($mdp) . ", " . $pdo->quote($username) . ", " . $pdo->quote($statut) . ")");

?>