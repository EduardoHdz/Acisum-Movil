<?php
	
	if (isset($_POST["namemesa"])) {
		$mesa = $_POST["namemesa"];		
	}
	
	if (isset($_POST["name"])&&isset($_POST["artista"])) {
		$song = $_POST["name"];
		$artist = $_POST["artista"];	
	}
	
	//$canciones = array();
		
	$link = mysql_connect('localhost', 'root', '')
	    or die('No se pudo conectar: ' . mysql_error());
	//echo 'Connected successfully';
	mysql_select_db('acisum2') or die('No se pudo seleccionar la base de datos');
	//$song="Warriors";
	//$artist="Imagine Dragons";
	$source=mysql_query("SELECT DISTINCT source FROM songs WHERE name_song='".$song."' AND artist='".$artist."'");
	$source= mysql_fetch_array($source, MYSQL_ASSOC);
	$source=implode("", $source);
	//echo $source;
	//$song="Demons";
	//$artist="Imagine Dragons";
	mysql_query("INSERT INTO playlist (name_song, name_user, name_list, source) VALUES ('".$song."', '".$mesa."', '".$song." - ".$mesa."', '".$source."')");
	$vie=mysql_query("SELECT DISTINCT view FROM songs WHERE name_song='".$song."' AND artist='".$artist."'");
	//$vie=intval($vie);
	$vie= mysql_fetch_array($vie, MYSQL_NUM);
	$vie=intval($vie[0]);
	//echo $vie;	
	$vi=$vie+1;
	//echo $vi;
	mysql_query("UPDATE songs SET view='".$vi."' WHERE name_song='".$song."' AND artist='".$artist."'");

	// Realizar una consulta MySQL	
	/*$query = "SELECT DISTINCT name FROM songs WHERE genre='".$gene."' AND artist='".$artist."'";
	$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());

	// Guardarr los resultados en el array	
	while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {	    
	    foreach ($line as $col_value) {	    	
	        array_push($canciones, $col_value);
	    }	    
	}	

	// Liberar resultados
	mysql_free_result($result);
	*/

	// Cerrar la conexión
	mysql_close($link);

	//echo json_encode($canciones);
	


  
?>
