<?php

    require "./server.php";

    header('Content-type: application/json; charset=utf-8');

    $id = $_POST["id"];

    $getuser = $pdo->query("SELECT username FROM users WHERE id = " $id );
    
    $onlyuser = $getuser->fetch(PDO::FETCH_ASSOC);
    
    print(json_encode($onlyuser));

?>