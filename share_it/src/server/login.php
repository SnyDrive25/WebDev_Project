<?php

    session_start();

    var_dump($_SESSION);

    //$_SESSION[] = isset($_GET[])?$_GET[]:"pas d'utilisateur";
    $UserEmail = $decodedData['Email'];
    $UserPW = ($decodedData['Password']); //password is hashed

    $SQL = "SELECT * FROM newuser WHERE UserEmail = '$UserEmail'";
    $exeSQL = mysqli_query($conn, $SQL);
    $checkEmail =  mysqli_num_rows($exeSQL);

    if ($checkEmail != 0) {
        $arrayu = mysqli_fetch_array($exeSQL);
        if ($arrayu['UserPw'] != $UserPW) {
            $Message = "pw WRONG";
        } else {
            $Message = "Success";
        }
    } else {
        $Message = "No account yet";
    }

    $response[] = array("Message" => $Message);
    print(json_encode($response));