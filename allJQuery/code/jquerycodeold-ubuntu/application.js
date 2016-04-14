$(document).ready(function(){
        $('#forteen').on('click', function(){
        	alert("inside ajax");
        	$.ajax('C:\Users\837460\Desktop\allJQuery\allcode\jquerycodeold\index.html', {
        		success: function(response){
        			$(".ticket").html(response).slideDown();
        		}
        	});
        });
    });