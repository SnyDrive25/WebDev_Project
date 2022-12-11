<?php

require "./server.php";

$email = $_POST("email")
$pseudo = $_POST["pseudo"];
$date_m = $_POST["date_m"];

$request1 = $pdo->exec("SELECT id FROM users WHERE email = " . $pdo->quote($email));
$myid = $request1->fetchColumn(0);
$request2 = $pdo->exec("SELECT id FROM users WHERE username = " . $pdo->quote($pseudo));
$peopleid = $request2->fetchColumn(0);

$query = $pdo->exec("INSERT INTO message (content, id_users1, id_users2, date_m) VALUES ("'Hey'", " . $myid . ", " . $peopleid . ", " . $pdo->quote($date_m) . ")");

?>