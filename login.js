$(function(){
    $('#getLogin').on('click',function(){
        alert("heyeyeye")
    var formData = JSON.stringify($("#LoginForm").serializeArray());
	var that = $(this), 
		url ="http://ec2-18-222-19-131.us-east-2.compute.amazonaws.com:8080/kreditsystem/api/customer",
		type = that.attr('method'),   
		data = {};
        
	$.ajax({
		url: url,
		type: type,
		data: JSON.stringify(data),
        contentType: "application/JSON",
		success: function(response){
            localStorage.setItem("JWT", /*response*/"sdlkfjsdlfkjsdflkjsdflkjsdflksjdflsk");
            //alert(this.responseText);
            //console.log(this.responseText);
        },
        error: function(){
            alert("error")
        }
	});
	return false;
});
});