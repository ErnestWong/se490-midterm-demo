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
            $("#attenuate-err").html("File does not meet requirements");
    	}
  	}



}());

function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}