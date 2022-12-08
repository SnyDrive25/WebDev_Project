<?php

require "./server.php";

$msg = $_POST["msg"];
$titre = $_POST["titre"];
$email = $_POST["email"];
$date = $_POST["date"];

$query = $pdo->exec("INSERT INTO publication (titre, contenu, email, date_m) VALUES (" . $pdo->quote($titre) . ", " . $pdo->quote($msg) . ", " . $pdo->quote($email) . ", " . $pdo->quote($date) . ")");

?>