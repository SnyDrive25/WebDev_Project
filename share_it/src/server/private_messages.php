<?php

require "./server.php";

$myid = $_POST["myid"];
$peopleid = $_POST["peopleid"];

header('Content-type: application/json; charset=utf-8');
$query = $pdo->query("SELECT * FROM message WHERE id_users1 = " . $myid . " AND id_users2 = " . $peopleid . " ORDER BY date_m DESC");
$reponse = $query->fetchAll(PDO::FETCH_ASSOC);
print(json_encode($reponse));

?>