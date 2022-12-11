<?php

require "./server.php";

$myid = $_POST["myid"];

header('Content-type: application/json; charset=utf-8');

$query = $pdo->query("SELECT * FROM message WHERE (id_users1 = " . $myid . ") OR (id_users2 = " . $myid . " ) GROUP BY id_users2 ORDER BY date_m DESC;");
$reponse = $query->fetchAll(PDO::FETCH_ASSOC);
print(json_encode($reponse));

?>