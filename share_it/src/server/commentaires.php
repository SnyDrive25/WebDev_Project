<?php

require "./server.php";

header('Content-type: application/json; charset=utf-8');

$id_pub = $_POST["id_pub"];

$query = $pdo->query("SELECT * FROM reponse WHERE id_pub = " . $id_pub . " ORDER BY date_m DESC");
$reponse = $query->fetchAll(PDO::FETCH_ASSOC);
print(json_encode($reponse));

?>