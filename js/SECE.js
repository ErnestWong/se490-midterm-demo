(function () {
	document.getElementsByClassName('upload-file')[0].onclick = function(e){
		document.getElementById('file-input').click();
	}

	document.getElementById('file-input').onchange = function() {
  		var fileName = $(this).val().split('/').pop().split('\\').pop();
  		var acceptedFileExtensions = ['.aiff', '.wav', '.mp3'];
  		var fileHasValidExt = false;

  		acceptedFileExtensions.forEach(function(acceptedFileExtension) {
  			if (fileName.endsWith(acceptedFileExtension)) {
  				fileHasValidExt = true;
  			}
  		});

    	if (fileHasValidExt) {
	    	document.getElementsByClassName('progress-barr')[0].style.width = "800px";
	  		document.getElementsByClassName('download-file')[0].style.display = "inline-block";
	  		document.getElementsByClassName('upload-file')[0].style.display = "none";
    	} else {
    		// invalid file is uploaded
    	}
  	}

}());