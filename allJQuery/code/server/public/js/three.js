$(document).ready(function(){
	$(".amount").on('click',function(){
		//var price = $('<p>From $399.89</p>');
		$(this).parents('.vacation').css({'background-color':'rgb(255, 244, 213)'});

		var price = $(this).parents('.vacation').data('price'); //$(this).closest('#first').data('price');
		$(this).after(price);
		$(this).closest(".vacation").find('.many').show();
		$(this).closest(".vacation").find('.total').text(price);
		$(this).remove();
	});
	$('.vacation').on('keyup','.quantity',function(){
		var cost = +$(this).closest('.vacation').data('price');
		var quantity = +$(this).val();
		$(this).closest(".vacation").find('.total').text(cost*quantity);
	});
	$('#filters').on('click','.onsale-filter',function(){
		$('.high').removeClass('high');
		$('.vacation').filter('.sale').addClass('high');
	});
	$('#filters').on('click','.expiring-filter',function(){
		$('.high').removeClass('high');
		$('.vacation').filter('.expire').addClass('high');
	});
	$(".name").click(function(){
		$(this).toggleClass('load');
		$(this).animate({'margin-left':'30px'},'slow');
		$(this).closest(".vacation").find('.details').slideToggle();
		//$(this).removeClass('load');
	});
	$(".ticket").click(function(){
		$(this).remove();
		$('#filters').addClass('load');
		//$.ajax('http://localhost:8085/ajax/ticket.html',{
		//$.ajax('http://localhost:3000/posts.json',{	
		//$.ajax('http://localhost:3000/posts/7',{	// or // $.ajax('http://localhost:3000/posts/'+2,{
		$.ajax('http://localhost:3000/newshow/',{	
			
			dataType: 'json',
			data: {id: 1},
			//data: { post: { name: "allnew", title: "allnew" } },
			//contentType:'json', #dont do this. it gives error from rails side
			success: function(response){
				console.log("success");
				console.log(response);	
				if ($.isArray(response) == true){			
					console.log("true");
					$.each( response, function( index, value ){
					    var msg = $("<p></p>");
					    msg.append("Name: "+value.name+' and ');
					    msg.append("Title: "+value.title+' . ');
					    $('#ajax').append(msg);
					});
				}
				else
				{
						console.log("false");
						var msg = $("<p></p>");
					    msg.append("Name: "+response.name+' and ');
					    msg.append("Title: "+response.title+' . ');
					    $('#ajax').append(msg);
				}
					//$('#ajax').html(response);
				$('#filters').removeClass('load');
			},
			error: function(req,type,msg){
				console.log(req);
				console.log('Error req:' + req + 'type:' + type + 'msg: ' + msg  );
			},
			beforeSend: function(){
				//alert("before sending");
			}, 
			complete: function(){
				//alert("completed");
			} 
		});
	});
/*
$(".ticket").click(function(){
		$(this).remove();
		$('#filters').addClass('load');
		$.ajax('http://localhost:3000/posts.json',{	
		//$.ajax('http://localhost:3000/posts/7',{	// or // $.ajax('http://localhost:3000/posts/'+2,{
		//$.ajax('http://localhost:3000/newshow/',{	
			
			dataType: 'json',
			//data: {id: 1},
			//data: { post: { name: "allnew", title: "allnew" } },
			//contentType:'json', #dont do this. it gives error from rails side
			success: function(response){
				console.log("success");
				console.log(response);	
				if ($.isArray(response) == true){			
					console.log("true");
					$.each( response, function( index, value ){
					    var msg = $("<p></p>");
					    msg.append("Name: "+value.name+' and ');
					    msg.append("Title: "+value.title+' . ');
					    $('#ajax').append(msg);
					});
				}
				else
				{
						console.log("false");
						var msg = $("<p></p>");
					    msg.append("Name: "+response.name+' and ');
					    msg.append("Title: "+response.title+' . ');
					    $('#ajax').append(msg);
				}
					//$('#ajax').html(response);
				$('#filters').removeClass('load');
			},
			error: function(req,type,msg){
				console.log(req);
				console.log('Error req:' + req + 'type:' + type + 'msg: ' + msg  );
			},
			beforeSend: function(){
				//alert("before sending");
			}, 
			complete: function(){
				//alert("completed");
			} 
		});
	});
*/
	
	$('form').on('submit',function(event){
		event.preventDefault(); // without dis it was sending an ajax request and also doing a full page refresh.
		alert("post");
		console.log($(this));
		console.log("serialized");
		console.log($('form').serialize());
		console.log("serialized end");
		$.ajax('http://localhost:3000/posts',{
			type : 'POST',
			dataType: 'json',
			/*
			data: {
				"name": "ajax",
				"title":"ajax text"
			},
			//data: { post: { name: "ajax", title: "whatever" } },
			*/

			data: { post: { name: $('#destination').val(), title: $('#quantity').val() } },
			success: function(response){
				console.log(response);
				//$('form').remove();
				//$('#ajax2').html(response).fadeIn();
				var msg = $("<p></p>");
				msg.append("Post Name: "+response.name+' and ');
				msg.append("Post Title: "+response.title+' . ');
				//$('#ajax2').append(msg);
				$('form').html(msg);
			},
			error: function(req,type,msg){
				console.log("error");
				console.log(req);
				console.log('Error req:' + req + 'type:' + type + 'msg: ' + msg  );
			},
			beforeSend: function(){
				$('#filters').addClass('load');
				//alert("before Receiving");
			}, 
			complete: function(){
				$('#filters').removeClass('load');
				//alert("after receiving");
			} 
		});
	});

 //WORKS PERFECTLY FINE
	$(".ticket5").click(function(){
		alert("one");
		$(this).remove();
		$('#filters').addClass('load');
		$.ajax('http://localhost:8085/ajax/ticket.html',{
		//$.ajax('http://localhost:3000/posts',{	
			success: function(response){
				console.log("success");
				console.log(response);
				console.log("txt");
				console.log($('#ajax').text());
				console.log("txt end");
				$('#ajaxnew').append('<p class="text2"></p>');  // here $ is not necessary
				$('.text2').html(response);
				//$('#ajaxnew').html(response);
				//$('#ajax').text(response);
				$('#filters').removeClass('load');
			},
			error: function(req,type,msg){
				console.log(req);
				console.log('Error req:' + req + 'type:' + type + 'msg: ' + msg  );
			},
			beforeSend: function(){
				//alert("before sending");
			}, 
			complete: function(){
				//alert("completed");
			} 
		});
	});
	
	
	$(".ticket2").click(function(){
		alert("one");
		$(this).remove();
		$('#filters').addClass('load');
		//$.ajax('http://localhost:8085/ajax/ticket.html',{
		$.ajax('http://localhost:8085/ajax/ticket.txt',{
			success: function(response){
				console.log("success");
				console.log(response);
				$('#ajaxnew').append('<p class="text"></p>');  // here $ is not necessary
				$('.text').text(response);
				$('#filters').removeClass('load');
			},
			error: function(req,type,msg){
				console.log(req);
				console.log('Error req:' + req + 'type:' + type + 'msg: ' + msg  );
			},
			beforeSend: function(){
				//alert("before sending");
			}, 
			complete: function(){
				//alert("completed");
			} 
		});
	});
	
	
	$(".ticket3").click(function(){
		alert("one");
		$(this).remove();
		$('#filters').addClass('load');
		$.ajax('http://localhost:8085/ajax/detail.json',{
			success: function(response){
				console.log("success");
				console.log(response);
				var msg = $("<p></p>");
				$.each(response,function(i,v) { 
					console.log(i); console.log(v);
					msg.append(i + ':' + v + '<br>');
					console.log(msg);
				});
				//$('#ajaxnew').html(msg);
				$('#ajaxnew').append(msg);
				$('#filters').removeClass('load');
			},
			error: function(req,type,msg){
				console.log(req);
				console.log('Error req:' + req + 'type:' + type + 'msg: ' + msg  );
			},
			beforeSend: function(){
				//alert("before sending");
			}, 
			complete: function(){
				//alert("completed");
			} 
		});
	});
    
    $(".ticket4").click(function(){
		$(this).remove();
		$('#filters').addClass('load');
	    $.ajax('http://localhost:8085/ajax/sample.xml',{
	             success: function(xml) {
	                 $(xml).find('label').each(function(){
	                     var id_text = $(this).attr('id')
	                     var name_text = $(this).find('name').text()

	                     $('<li></li>').html(name_text + ' (' + id_text + ')').appendTo('#ajaxnew');
						 $('#filters').removeClass('load');
	                 }); //close each(
	             }
	         }); //close $.ajax(
      });

   //How to getta particular data on a get request(even with json) without rails
   //How to post and get the response back
   //jquery ajax - delete method
   //try using node js along with it.
   //use cases of beforeSend and AfterSend
   //Diff btw $.each(cells, function(i) { ... }) instead of $(cells).each(function...)
   //how to reload ?
   //send data along with get request
   //ajax using javacript
   //does it work widout datatype:json or xml 
   //what is jsonp 
   //http methods which jquery supports 
   //how to unbind events
   //inline specific delegate
   //remove one particular element
   //execution of jquery

});

