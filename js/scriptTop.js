var loaded = function () {

	var url = "http://192.168.1.73/karaoke/topList.php";
	$.get(url, function(data){
		var json = JSON.parse(data);
		if(json.length>=1){
			json.forEach(function(top, pos) {	
				$("#divTop").append("<div id='top"+pos+"' class='divSongTop'>"+top+"</div>");
				$("#top"+pos).click(function(){
					confirmar(top);
				});																	
			});				
		}		
	});

	var confirmar=function(top) {
		var confirma = confirm("Desea cantar la cancion: "+top+"?");
		if (confirma == true) {
			//obtener nombre de usuario
			var mesa = $("#usua").text();
			//agregar a playlist
			$.post("agregarSongTop.php", { name: top, namemesa: mesa } );
			//$(this).addClass("selecDivSong");
			//var song="Demons";
			/*$.post(url1, cancion, function(data) {

			});*/
			$("#generos>div").remove();
			$("#artistas>div").remove();
			$("#songs>div").remove();
			$("#divTop>div").remove();
			$("#songs").append("<h1>Ya has agregado una cancion</h1>");
			$("#divTop").append("<h2>Ya has agregado una cancion</h2>");
		}
	};	
	
};


//funcion inicial que indica que la pagina esta lista
$(document).ready(loaded);