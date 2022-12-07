<?php

require "./server.php";

$content = $_POST["content"];
$email1 = $_POST["email1"];
$email2 = $_POST["email2"];
$date_m = $_POST["date_m"];

$query = $pdo->exec("INSERT INTO message(content, email_users1, email_users2, date_m) VALUES (" . $pdo->quote($content) . ", " . $pdo->quote($email1) . ", " . $pdo->quote($email2) . ", " . $pdo->quote($date_m) . ")");

?>