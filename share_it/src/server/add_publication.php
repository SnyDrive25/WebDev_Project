<?php

require "./server.php";

$msg = $_POST["message"];
$id_user = $_POST["id_user"];

$query = $pdo->exec("INSERT INTO publication (id, contenu, id_user, date_m) VALUES (6, " . $pdo->quote($msg) . ", " . $pdo->quote($id_user) . ", '2022-11-28')");

?>