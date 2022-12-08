<?php

    // session_start();

    // var_dump($_SESSION);

    //$_SESSION[] = isset($_GET[])?$_GET[]:"pas d'utilisateur";

    require "./server.php";

    header('Content-type: application/json; charset=utf-8');

    $User = $_POST["user"];
    $UserPW = $_POST["mdp"]; //password must be hashed

    $valid = $pdo->query("SELECT COUNT(mdp) FROM users WHERE username = " . $pdo->quote($User) . " AND mdp = " . $pdo->quote($UserPW));

    $valid2 = $valid->fetchColumn(0);

    print(json_encode($valid2 != 0));
?>