<?php

require "./server.php";

$email_user = $_POST["email_user"];
$pseudo = $_POST["pseudo"];
$date_m = $_POST["date_m"];

$email_suivi = $pdo->exec("SELECT email FROM users WHERE username = " . $pdo->quote($pseudo))->fetchColumn(0);
$query = $pdo->exec("INSERT INTO abonnement (email_user, email_suivi, date_m) VALUES (" . $pdo->quote($email_user) . ", " . $pdo->quote($email_suivi) . ", " . $pdo->quote($date_m) . ")");

?>