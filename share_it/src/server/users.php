<?php

require "./server.php";

header('Content-type: application/json; charset=utf-8');
$query = $pdo->query("SELECT * FROM users");
$reponse = $query->fetchAll();
print(json_encode($reponse));

?>