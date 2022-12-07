<?php

    // session_start();

    // var_dump($_SESSION);

    //$_SESSION[] = isset($_GET[])?$_GET[]:"pas d'utilisateur";
    
    $User = $_POST["user"];
    $UserPW = $_POST["mdp"]; //password is hashed

    $SQL = "SELECT * FROM users WHERE username = '$User'";
    $query = $pdo->exec("SELECT mdp FROM users WHERE username = '$User'");
    $valid = $pdo->exec("SELECT COUNT(mdp) FROM users WHERE username = '$User'");

    if ($valid != 0) {
        if ($query != $UserPW) {
            $Message = "Wrong password";
        } else {
            $Message = "Success";
        }
    } else {
        $Message = "No account connected";
    }

    $response[] = array("Message" => $Message);
    print(json_encode($response));
?>