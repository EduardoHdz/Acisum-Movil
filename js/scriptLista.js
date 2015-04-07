var loaded = function () {

	var url = "http://192.168.0.104/karaoke/playlist.php";
	$.get(url, function(data){
		var json = JSON.parse(data);		
		if(json.length>=1){
			json.forEach(function(list, pos) {	
				$("#lista").append("<div id='lis"+pos+"' class='divSong'>"+list+"</div>");
				$("#lis"+pos).click(function(){
					reproducir(list);
					$("#lista>div").removeClass("selecDivSong");
					$("#lis"+pos).addClass("selecDivSong");
				});																	
			});		
		}
		
	});

	var reproducir=function(list) {
		$.post("videoSource.php", { playlist: list}, function(data){
				var json = JSON.parse(data);
				if(json.length>=1){
						var source=json[0];							
						var vi=source+".mp4";
						var dirV="videos/"+vi;
						$("#video").attr('src', dirV);
						$("#video").attr('video/mp4');
						$("#video").attr('codecs', 'avc1.42E01E,mp4a.40.2');
						$("#video").attr('poster', 'img/playlist.png');
					
				}
			}											
		);
	};	
	
};


//funcion inicial que indica que la pagina esta lista
$(document).ready(loaded);