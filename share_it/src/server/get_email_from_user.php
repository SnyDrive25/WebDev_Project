<?php

    require "./server.php";

    header('Content-type: application/json; charset=utf-8');

    $user = $_POST["user"];

    $getmail = $pdo->query("SELECT email FROM users WHERE username = '" . $user . "'");
    
    $onlymail = $getmail->fetch(PDO::FETCH_ASSOC);
    
    print(json_encode($onlymail));

?>