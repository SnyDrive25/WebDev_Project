<?php

$servername="esilv.olfsoftware.fr";
$database="mygrp3";
$username="grp3pjhoaw45mr4";
$password="7c16YtNhXooP";
$charset="utf8mb4";

// $servername="localhost";
// $database="shareit";
// $username="root";
// $password="shareit";
// $charset="utf8mb4";

// session_start();

// var_dump($_SESSION);

// $_SESSION[] = isset($_GET[])?$_GET[]:"pas d'utilisateur";

try {
    $dsn="mysql:host=$servername;dbname=$database;charset=$charset";
    $pdo=new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    header("Access-Control-Allow-Origin: *");
    return $pdo;
} catch(PDOException $e) {
    echo "Connection failed: ". $e->getMessage();
}

?>