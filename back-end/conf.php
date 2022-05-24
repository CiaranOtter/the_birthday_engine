<?php

function openConn(){
    $host = "sql30.cpt3.host-h.net";
    $username = "tectobhjww_22";
    $password = "f4J1N69PCU59zRaASFB8";
    $db = "sudocode";

    $conn = new mysqli($host,$username,$password,$db);

    if ($conn->connect_error) {
        die("Connection failed: ". $conn->connect_error);
    }

    return $conn;
}

function closeConn() {
    $conn->close();
}


?>