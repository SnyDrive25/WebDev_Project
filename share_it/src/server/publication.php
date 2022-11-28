<?php

require "./server.php";

header('Content-type: application/json; charset=utf-8');
$query = $pdo->query("SELECT * FROM publication");
$reponse = $query->fetchAll(PDO::FETCH_ASSOC);
print(json_encode($reponse));

?>