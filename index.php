<?php
session_start();
$val=true;
      if(isset($_POST['login']))
      {
      	 $db = mysql_connect('localhost', 'root', '');
		 mysql_select_db('acisum2', $db);

		 $name=$_POST['user'];
         $con=$_POST['pass'];
         //$nom="SELECT nombre from users where nocontrol='$ncon'";
         $busqueda="SELECT id_user,name_user,pass FROM users where name_user='$name' AND pass='$con'";
         $result=mysql_query($busqueda);
         $fila= mysql_num_rows($result);
         if ($fila<=0)
         {
             $val=false;
         }
         else
         {
        	 $resul=mysql_fetch_array($result);          
        	 $_SESSION['id']= $resul['id_user'];
             $valido=true;
             $_SESSION["name"]=$name;
             //echo '<script> alert("'.$name.'"); </script>';
             echo '<script> $.post("agregarSong.php", { namemesa: '.$name.' } ); </script>';
             header("location:acisum.php"/*?login=true"*/);
         }               
      }
?>


<html>

<head>
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="css/login.css"/>
    <link href='ico/Logo.png' rel='shortcut icon' type='image/x-icon'/>
</head>

<body>

    <div id="global">

        <div id="Logo">
            <img id="logo" src="ico/Logo.png"/>
        </div>

        <div id="Central">
        <form action="index.php" method="post">
            <input id="user" name="user" type="text" placeholder="Usuario"/>
            <input id="pass" name="pass" type="password" placeholder="Contrase&ntilde;a">
            <input id="log" name="login" type="submit" value="Iniciar"/>
            <?php if ($val==false) 
            {
                echo '<script> alert("Datos incorrectos");</script>';
            }
            ?>
        </form>
        </div>
    </div>
    <script type="text/javascript" src="js/jquery-2.1.3.min.js"></script>
    <script type="text/javascript" src="js/scriptLogin.js"></script>
</body>


</html>