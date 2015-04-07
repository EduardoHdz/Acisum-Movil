<?php
	session_start();

	if(isset($_POST['close']))
	{
		session_destroy();
		header("location:index.php"/*?nologin=false"*/);
	}

	//manejamos en sesion el nombre del usuario que se ha logeado
	if (!isset($_SESSION["id"])){
	    header("location:index.php"/*?nologin=false"*/);    
	}

	$_SESSION["id"];
?>

<!DOCTYPE html>
<html>
<head>
	<title>Acisum</title>
	<link rel="stylesheet" type="text/css" href="css/style.css"/>
</head>

	<body>

		

		<div class="titulo">
			<div id="acisum">
				<p id="aci">ACISUM</p>					
			</div>
			<div id="sesion">
				<p id="usua"><?php echo $_SESSION["name"]; ?></p>				
				<form action="acisum.php" method="post">	
					<input id="close" name="close" type="submit" value="Cerrar Sesion"/>
				</form>
			</div>				
		</div>

		<div class="global">
		

			<div class="divMenu">
				<div id="canciones" class="menu">
					<p>Canciones</p>
				</div>
				<div id="reproduciendo" class="menu">
					<p>Reproduciendo</p>
				</div>
				<div id="comentar" class="menu">
					<p>Comentar</p>
				</div>
			</div>
			<div class="divPrin" id="prin">
				
			</div>
			<div class="divSecu" id="secu">
				
			</div>
		</div>
		<script type="text/javascript" src="js/jquery-2.1.3.min.js"></script>
	    <script type="text/javascript" src="js/script.js"></script>
	</body>
</html>