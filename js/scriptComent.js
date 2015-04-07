var loaded = function () {	
	$("#env").on("click", function() {
		var nom = $("#nom").val().trim();
		var com = $("#com").val().trim();
		if(nom===""||com==="") {			
			alert("Los campos no deben estar vacios");
		}else {		
			//obtener nombre de usuario
			var mesa = $("#usua").text();
			//enviar comentario	
			$.post("agregarComm.php", { name: nom, comm: com, namemesa: mesa} );
			alert("Comentario Enviado");
			$("#nom").val("");
			$("#com").val("");
		}
	});

};


//funcion inicial que indica que la pagina esta lista
$(document).ready(loaded);