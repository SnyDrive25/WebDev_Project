<?php

    require "./server.php";

    header('Content-type: application/json; charset=utf-8');

    $email = $_POST["email"];

    $getpublis = $pdo->query("SELECT * FROM publication WHERE email = " . $pdo->quote($email) . " ORDER BY date_m DESC");
    
    $publis = $getpublis->fetchAll(PDO::FETCH_ASSOC);
    
    print(json_encode($publis));

?>