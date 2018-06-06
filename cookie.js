function login () {
	//tager værdier fra form eller tekstfelter 

	var token;    
	$.ajax({
        url: "http://ec2-18-222-19-131.us-east-2.compute.amazonaws.com:8080/kreditsystem/api/authentication/login",
        crossDomain: true,
        type: 'post',
        xhrFields: { withCredentials: true },
        async: false,
        data: {
            username: "username",
            password: "password"
        }
    }).done(function(response) {
    	//Response er er token 
        token = response;
        //opretter cookien
        createCookie("cyka", token);
        //Gå til forsiden ...
        success = true;
    });
}

function sendRequest () {
	if (readCookieValue(name) != null) {
		jQuery.ajax({
		 url: "http://ec2-18-222-19-131.us-east-2.compute.amazonaws.com:8080/kreditsystem/api/authentication/login",
		 dataType: 'json',
		 method: "GET",
		 //Når folk er logget ind og requester noget
		 beforeSend: funtion(xhr) { 
		 	xhr.setRequestHeader("Authorization", 'Bearer '+readCookieValue(name));
		 }
		 success: function(data) {
		 console.log(data);
		 }
		});
	}
}

function createCookie (name, value) {
	var date = new Date();
	date.setTime(date.getTime()+(360*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();

	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookieValue (name) {
	//navn der skal søges efter
	var nameFind = name+ "=";
	//decoder cookie stringen så den kan klare specielle tegn
	var decodeCookie = decodeURIComponent(document.cookie);
	//splitter cookien op i et array
	var cookieArray = decodeCookie.split(';');

	//Looper igennem cookiearrayet
	for(var i = 0; i < cookieArray.length; i++) {
		var cookie = cookieArray[i];
		while (cookie.charAt(0) == ' ')
			cookie = cookie.substring(1);
		//Hvis cookien er fundet returnere værdien af cookien
		if (cookie.indexOf(name) == 0)
			return cookie.substring(name.length, cookie.length);
	}
	//Når cookien ikke er fundet
	return "";
}

function deleteCookie (name) {
	createCookie(name, "", -1);
} 