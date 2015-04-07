var loaded = function () {	
	cargaruno("http://192.168.1.73/karaoke/top10.html");
	cargardos("http://192.168.1.73/karaoke/songs.html");
	$("#canciones").addClass("selected");
	menu();

};

var menu = function() {	
	var dire="http://192.168.1.73/karaoke/";
	//funciones para las 3 opciones del menu
	$("#canciones").on("click",function() {		
		cargaruno(dire+"top10.html");
		cargardos(dire+"songs.html");
		$("#canciones").addClass("selected");
		$("#reproduciendo").removeClass("selected");
		$("#comentar").removeClass("selected");		
	});
	$("#reproduciendo").on("click",function() {		
        cargaruno(dire+"video.html");
        cargardos(dire+"lista.html");
		$("#reproduciendo").addClass("selected");
		$("#canciones").removeClass("selected");
		$("#comentar").removeClass("selected");
		//$("#lista").on("click",function() {	
			//$("#video").src("videos/Omom.mp4");
		//});
	});
	$("#comentar").on("click",function() {		
		cargaruno(dire+"tituloComentar.html");
		cargardos(dire+"comentar.html");
		$("#comentar").addClass("selected");
		$("#reproduciendo").removeClass("selected");
		$("#canciones").removeClass("selected");
	});
};
//funcion para cargar el contenido en el div superior
var cargaruno = function(dir) {	
    $("#prin").text("Cargando...");
	$("#prin").load(dir);
};
//funcion para cargar el contenido en el div inferior
var cargardos = function(dir) {
	$("#secu").text("Cargando...");
	$("#secu").load(dir);    
};

//funcion inicial que indica que la pagina esta lista
$(document).ready(loaded);