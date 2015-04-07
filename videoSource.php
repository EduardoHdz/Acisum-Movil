<?php
	$list = array();
	
	if (isset($_POST["playlist"])) {
		$source = $_POST["playlist"];		
	}

	$link = mysql_connect('localhost', 'root', '')
	    or die('No se pudo conectar: ' . mysql_error());
	//echo 'Connected successfully';
	mysql_select_db('acisum2') or die('No se pudo seleccionar la base de datos');

	// Realizar una consulta MySQL
	$query = "SELECT source FROM playlist WHERE name_list='".$source."'";	
	$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());		
	// Imprimir los resultados en HTML
	//echo "<table>\n";
	while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
	    //echo "\t<tr>\n";
	    
	    foreach ($line as $col_value) {
	        //echo "\t\t<td>$col_value</td>\n";

	        array_push($list, $col_value);
	    }
	    //echo "\t</tr>\n";
	}	
	//echo "</table>\n";

	// Liberar resultados
	mysql_free_result($result);

	// Cerrar la conexión
	mysql_close($link);




	//$list = array("Demons");

	/*if (isset($_POST["song"])) {
		$song = $_POST["song"];		

		array_push($list, $song);			
	}*/
	echo json_encode($list);

	//$json = JSON.parse($list);
	/*for ($i=0; $i<3; $i=$i+1) {
				echo "<div id='dragons' class='selecDivSong'>$list[$i]</div>";
			}*/

?>