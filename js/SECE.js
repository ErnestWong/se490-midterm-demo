(function () {
	document.getElementsByClassName('upload-file')[0].onclick = function(e){
		document.getElementById('file-input').click();
	}

	document.getElementById('file-input').onchange = function() {
    	document.getElementsByClassName('progress-barr')[0].style.width = "800px";
  		document.getElementsByClassName('download-file')[0].style.display = "inline-block";
  		document.getElementsByClassName('upload-file')[0].style.display = "none";
  	}

}());