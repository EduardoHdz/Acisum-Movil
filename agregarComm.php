<?php
	
	if (isset($_POST["namemesa"])) {
		$mesa = $_POST["namemesa"];		
	}
	
	if (isset($_POST["name"])&&isset($_POST["comm"])) {
		$name = $_POST["name"];
		$com = $_POST["comm"];		
	}
	
	//$canciones = array();
		
	$link = mysql_connect('localhost', 'root', '')
	    or die('No se pudo conectar: ' . mysql_error());
	//echo 'Connected successfully';
	mysql_select_db('acisum2') or die('No se pudo seleccionar la base de datos');

	//$song="Demons";
	//$artist="Imagine Dragons";
	mysql_query("INSERT INTO comments (name_comment, comment, name_user) VALUES ('".$name."', '".$com."', '".$mesa."')");
	
	// Cerrar la conexión
	mysql_close($link);

	//echo json_encode($canciones);
	


  
?>
