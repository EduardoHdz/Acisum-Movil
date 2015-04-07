var loaded = function () {
	/*var url1 = "http://192.168.1.73/karaoke/canciones.php";
	$.get(url1, function(data){
		var json1 = JSON.parse(data);
		if(json1.length>=1){
			for (var i=0; i<json1.length; i+=2) {				
				$("#songs").append("<div id='"+json1[i]+"'' class='divSong'>"+json1[i+1]+"</div>");				
			}
		}		
	});*/
	//var url1 = "http://192.168.1.73/karaoke/generos.php";
	//var url2 = "http://192.168.1.73/karaoke/artistas.php";
	$.get("generos.php", function(data){
		var json1 = JSON.parse(data);
		if(json1.length>=1){
			json1.forEach(function(gene, pos1) {				
				$("#generos").append("<div id='gen"+pos1+"' class='divSong'>"+gene+"</div>");				
				$("#gen"+pos1).click(function(){
					$("#generos>div").removeClass("selecDivSong");
					$(this).addClass("selecDivSong");
					$("#artistas>div").remove();
					$("#songs>div").remove();
					//cargar artistas de ese genero
					$.post("artistas.php", { name: gene}, function(data){
							var json2 = JSON.parse(data);
							if(json2.length>=1){
								json2.forEach(function(artist, pos2) {												
									$("#artistas").append("<div id='art"+pos2+"' class='divSong'>"+artist+"</div>");
									$("#art"+pos2).click(function(){
										$("#artistas>div").removeClass("selecDivSong");
										$(this).addClass("selecDivSong");
										$("#songs>div").remove();
										//cargar canciones de ese artista y ese genero
										$.post("canciones.php", { genero: gene, artista: artist}, function(data){
												var json3 = JSON.parse(data);
												if(json3.length>=1){
													json3.forEach(function(song, pos3) {	
																	
														$("#songs").append("<div id='ca"+pos3+"' class='divSong'>"+song+"</div>");
														$("#ca"+pos3).click(function(){
															//alert("abrir "+song);
															confirmar(song,artist);
														});							
													});
												}
											}											
										);
									});							
								});
							}
						}						
					);					
				});							
			});
		}		
	});

	var confirmar=function(song,artist) {
		var confirma = confirm("¿Desea cantar la cancion: "+song+" - "+artist+"?");
		if (confirma == true) {	
			//obtener nombre de usuario
			var mesa = $("#usua").text();		
			//agregar a playlist											
			$.post("agregarSong.php", { name: song, artista: artist, namemesa: mesa } );
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

	/*var getart=function(url2) {
		$.get(url2, function(data){
							var json2 = JSON.parse(data);
							if(json2.length>=1){
								json2.forEach(function(artist, pos2) {				
									$("#artistas").append("<div id='art"+pos2+"' class='divSong'>"+artist+"</div>");
									//alert("hfh"+artist);
									$("#art"+pos2).click(function(){
												
									});							
								});
							}		
						});
	};*/
	
	
	//$("#generos").append("<div id='rock' class='divSong'>Rock</div>");
    //$("#generos").append("<div id='electro' class='divSong'>Electronica</div>");

    /*var confirmar=function(cancion,url1) {
		var confirma = confirm("Desea cantar la cancion: "+cancion+"?");
		if (confirma == true) {
			//$(this).addClass("selecDivSong");
			//var song="Demons";
			$.post(url1, cancion, function(data) {

			});
			$("#generos>div").remove();
			$("#artistas>div").remove();
			$("#songs>div").remove();
			$("#divTop>div").remove();
			$("#songs").append("<h1>Ya has agregado una cancion</h1>");
			$("#divTop").append("<h2>Ya has agregado una cancion</h2>");
		}
	};*/

    /*$("#demonsTop").on("click", function() {
		confirmar();									
	});

	$("#rock").on("click", function() {
		$("#artistas>div").remove();
		$("#songs>div").remove();
		$("#artistas").append("<div id='imagine' class='divSong'>Imagine Dragons</div>");
		$("#artistas").append("<div id='nirvana' class='divSong'>Nirvana</div>");

			$("#imagine").on("click", function() {
				$("#songs>div").remove();
				$("#songs").append("<div id='demons' class='divSong'>Demons</div>");
				$("#songs").append("<div id='warriors' class='divSong'>Warriors</div>");

				$("#demons").on("click", function() {
					confirmar();									
				});



				$("#artistas>div").removeClass("selecDivSong");
				$(this).addClass("selecDivSong");				
			});

			$("#nirvana").on("click", function() {
				$("#songs>div").remove();
				$("#songs").append("<div id='smells' class='divSong'>Smells Like Teen Spirit</div>");
				
				$("#artistas>div").removeClass("selecDivSong");
				$(this).addClass("selecDivSong");				
			});

		$("#generos>div").removeClass("selecDivSong");
		$(this).addClass("selecDivSong");
	});
	$("#electro").on("click", function() {
		$("#artistas>div").remove();
		$("#songs>div").remove();
		$("#artistas").append("<div id='avicii' class='divSong'>Avicii</div>");
		$("#artistas").append("<div id='daft' class='divSong'>Daft Punk</div>");

			$("#avicii").on("click", function() {
				$("#songs>div").remove();
				$("#songs").append("<div id='hey' class='divSong'>Hey Brother</div>");
				$("#songs").append("<div id='wake' class='divSong'>Wake Me Up</div>");

				$("#artistas>div").removeClass("selecDivSong");
				$(this).addClass("selecDivSong");				
			});

			$("#daft").on("click", function() {
				$("#songs>div").remove();
				$("#songs").append("<div id='demons' class='divSong'>Get Lucky</div>");
				
				$("#artistas>div").removeClass("selecDivSong");
				$(this).addClass("selecDivSong");				
			});

		$("#generos>div").removeClass("selecDivSong");
		$(this).addClass("selecDivSong");
	});*/
	
};


//funcion inicial que indica que la pagina esta lista
$(document).ready(loaded);