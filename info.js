$(function(){
    $('#LoginForm').on('submit',function(){
    var formData = JSON.stringify($("#LoginForm").serializeArray());
	var that = $(this), 
		url = that.attr('action')
		type = that.attr('method'),   
		data = {};
        
	console.log(formData);
	that.find('[name]').each(function(index, value) {
		var that = $(this),
			name = that.attr('name'),
			value = that.val();
		data[name] = value; 
        console.log(data[name]);
    });
	console.log(data)
        
	$.ajax({
		url: url,
		type: type,
		data: JSON.stringify(data),
        contentType: "application/JSON",
		success: function(response){
            console.log(response);
        },
	});
	return false;
});
});