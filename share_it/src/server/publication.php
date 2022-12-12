<?php

require "./server.php";

header('Content-type: application/json; charset=utf-8');

#$userid = $_POST["userid"];

#$follows = $pdo->query("SELECT DISTINCT id_suivi FROM abonnement NATURAL JOIN users WHERE users.id = " . $userid)->fetchAll(PDO::FETCH_ASSOC);
$query = $pdo->query("SELECT * FROM publication ORDER BY date_m DESC");
$reponse = $query->fetchAll(PDO::FETCH_ASSOC);
print(json_encode($reponse));

?>