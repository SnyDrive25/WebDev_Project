<?php

    require "./server.php";

    header('Content-type: application/json; charset=utf-8');

    $user = $_POST["user"];

    $getmail = $pdo->query("SELECT email, id FROM users WHERE username = '" . $user . "'");
    
    $mail_and_id = $getmail->fetchAll(PDO::FETCH_ASSOC);
    
    print(json_encode($mail_and_id));

?>