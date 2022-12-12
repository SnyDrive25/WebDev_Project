<?php

require "./server.php";

$myid = $_POST["myid"];

header('Content-type: application/json; charset=utf-8');

$query = $pdo->query("SELECT message.* FROM (SELECT * FROM message ORDER BY message.date_m DESC) AS message WHERE (message.id_users1 = " . $myid . ") OR (message.id_users2 = " . $myid . " ) GROUP BY message.id_users2");
$reponse = $query->fetchAll(PDO::FETCH_ASSOC);
print(json_encode($reponse));

?>