$(document).ready(function(){	

	$("#log").click(function() {
		var usuario = $("#user").val().trim();
		var contra = $("#pass").val().trim();		
			if(usuario==""){
				alert("Ingrese el usuario");
			}
			else if (contra==""){
				alert("Ingrese la contrase\u00f1a");
			}
			/*else {
				//alert("Inicio de sesion correcto");
				//$.post("index.php", {login: log, user: usuario, pass: contra} );
				//window.location.href="acisum.html"; 				
			}*/
	});

	$("#user").on("keypress",function() {
		var usuario = $("#user").val().trim();
		var contra = $("#pass").val().trim();
		var tecla=event.keyCode;
		if (tecla===13) {
			if(usuario==""){
				alert("Ingrese el usuario");
			}
			else if (contra==""){
				alert("Debe ingresar la contrase\u00f1a");
			}
			/*else {
				alert("Inicio de sesion correcto");
			}*/			
		}
	});

	$("#pass").on("keypress",function() {
		var usuario = $("#user").val().trim();
		var contra = $("#pass").val().trim();
		var tecla=event.keyCode;
		if (tecla===13) {
			if(usuario==""){
				alert("Debe ingresar el usuario");
			}
			else if (contra==""){
				alert("Ingrese la contrase\u00f1a");
			}
			/*else {
				alert("Inicio de sesion correcto");
			}*/			
		}
	});	
	
	
});


