<?php

require "./server.php";

$msg = $_POST["message"];

$query = $pdo->exec("INSERT INTO publication (id, contenu, id_user, date_m) VALUES (1, " . $pdo->quote($msg) . ", 1, '2022-11-28')");

?>