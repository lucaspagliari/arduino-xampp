<?php

	include "conexao.php";

    $sql = "SELECT id, inf FROM arduino";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "id: " . $row["id"] . " - Value: " . $row["inf"] . "<br>";
        }
    } else {
        echo "0 results";
    }

?>