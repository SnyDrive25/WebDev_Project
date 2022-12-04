<?php

require "./server.php";

$msg = $_POST["message"];
$titre = $_POST["titre"];
$id_user = $_POST["id_user"];
$date = $_POST["date"];

$query = $pdo->exec("INSERT INTO publication(titre, contenu, id_user, date_m) VALUES (" . $pdo->quote($titre) . ", " . $pdo->quote($msg) . ", $id_user, " . $pdo->quote($date) . ")");

?>