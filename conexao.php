<?php
	//Definindo variáveis, de acordo com seu db
	$host = "localhost";
	$user = "root";
	$pass = "";
	// Nome do banco
	$banco = "aula";
	// Conecta no banco passando os parâmetros
	$conn = mysqli_connect ($host, $user, $pass) or die(mysql_error());
	mysqli_select_db ($conn, $banco) or die(mysql_error());
?>