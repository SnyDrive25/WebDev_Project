<?php

// $servername="localhost";
// $database="mygrp3";
// $username="grp3pjhoaw45mr4";
// $password="7c16YtNhXooP";
// $charset="utf8mb4";

$servername="localhost";
$database="shareit";
$username="root";
$password="shareit";
$charset="utf8mb4";

try {
    $dsn="mysql:host=$servername;dbname=$database;charset=$charset";
    $pdo=new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
} catch(PDOException $e) {
    echo "Connection failed: ". $e->getMessage();
}

?>