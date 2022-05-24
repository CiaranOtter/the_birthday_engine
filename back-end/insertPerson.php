<?php

    include(conf.php);

    $fname = $_REQUEST['fname'];
    $lname = $_REQUEST['lname'];
    $desc = $_REQUEST['desc'];

    $conn = openConn();

    $query ="insert into Person (fname, lname, desc) values ('$fname', '$lanme', '$desc')";

    $conn->query($query);

    closeConn();

?>