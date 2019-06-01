<?php
	// inclue o arquivo conexão
	include "conexao.php";
	
	// define variável a ser recebida pelo http
	$inf = $_GET["inf"];

	if($inf != null){		
		// Escreve no banco de dados
		$sql = mysqli_query($conn, "INSERT INTO arduino (inf) VALUES ('$inf')");
		if($sql){
			echo "Cadastrou";
		}else{
			echo "Não cadastrou";
		}	
	}
	else{	
		echo "Valor Inválido ou Nulo";
	}

	mysqli_close($conn);
?>