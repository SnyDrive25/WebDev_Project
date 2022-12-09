<?php

require "./server.php";

header('Content-type: application/json; charset=utf-8');

$follows = $pdo->query("SELECT email_suivi FROM users NATURAL JOIN abonnement WHERE userId = " . $userid)
$query = $pdo->query("SELECT * FROM publication ORDER BY date_m DESC WHERE email IN (" .  . ") LIMIT 10");
$reponse = $query->fetchAll(PDO::FETCH_ASSOC);
print(json_encode($reponse));

?>