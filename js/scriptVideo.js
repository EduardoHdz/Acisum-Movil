var loaded = function () {
	/*$("#lista").on("click",function() {	
		var vi="OmNom2.mp4";
		var dirV="videos/"+vi;
		$("#video").attr('src', dirV);
		$("#video").attr('video/mp4');
		$("#video").attr('codecs', 'avc1.42E01E,mp4a.40.2');
		$("#video").attr('poster', 'img/comentar.png');
	});	*/
	/*var url = "http://192.168.1.73/karaokeAna/playlist.php";
	$.get(url, function(data){
		var json = JSON.parse(data);
		if(json.length>=1){	
			var song=json[0];		
			var vi=song+".mp4";
			var dirV="videos/"+vi;
			$("#video").attr('src', dirV);
			$("#video").attr('video/mp4');
			$("#video").attr('codecs', 'avc1.42E01E,mp4a.40.2');
			$("#video").attr('poster', 'img/playlist.png');			
		}
		
	});*/
	

};


$(document).ready(loaded);