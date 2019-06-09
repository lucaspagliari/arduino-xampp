<?php

	include "conexao.php";
    
    $sql = "SELECT * FROM arduino";
    $result = $conn->query($sql);
    $data = "";

    if ($result->num_rows > 0) {
        foreach ($result as $row) {
            $data .= $row["inf"] . ",";
        }
        echo $data;
    } else {
        echo "0 results";
    }
    // echo json_encode($data);
    // Fecha Conexão
    mysqli_close($conn);

?>