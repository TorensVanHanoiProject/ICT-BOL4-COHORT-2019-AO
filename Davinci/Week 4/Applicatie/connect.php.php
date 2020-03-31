<?php

$host = "localhost";
$username = "root";
$password = "";
$database = "school_opdrachten";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$database;", "$username", "$password");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 
} catch (PDOException $e) {
    die("Something went wrong with the database.");
    $e->getMessage();
}
