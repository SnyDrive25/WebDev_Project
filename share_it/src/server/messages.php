<?php

require "./server.php";

header('Content-type: application/json; charset=utf-8');
$query = $pdo->query("SELECT * FROM message NATURAL JOIN users GROUP BY id_users2 ORDER BY date_m DESC");
$reponse = $query->fetchAll(PDO::FETCH_ASSOC);
print(json_encode($reponse));

?>