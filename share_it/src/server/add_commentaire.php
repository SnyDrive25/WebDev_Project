<?php

require "./server.php";

$content = $_POST["content"];
$id_pub = $_POST["id_pub"];
$id_user = $_POST["id_user"];
$email = $_POST["email"];
$date = $_POST["date"];

$query = $pdo->exec("INSERT INTO reponse (content, id_pub, id_user, email, date_m ) VALUES (" . $pdo->quote($content) . ", " . $id_pub . ", " . $id_user . ", " . $pdo->quote($email) . ", " . $pdo->quote($date). ")");

?>