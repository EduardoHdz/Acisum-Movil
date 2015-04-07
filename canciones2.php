<?php
	

	$songs = array();
	
	$link = mysql_connect('localhost', 'root', '')
	    or die('No se pudo conectar: ' . mysql_error());
	//echo 'Connected successfully';
	mysql_select_db('acisum2') or die('No se pudo seleccionar la base de datos');

	// Realizar una consulta MySQL
	$query = 'SELECT id_song,name FROM songs';
	$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());

	// Guardarr los resultados en el array	
	while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {	    
	    foreach ($line as $col_value) {
	        array_push($songs, $col_value);
	    }	    
	}	

	// Liberar resultados
	mysql_free_result($result);
	

	// Cerrar la conexión
	mysql_close($link);

	
	echo json_encode($songs);
	

?>