$(document).ready(function() {
    $("mydiv").click(function() {
        alert("Hello, world!");
    });
    $("em").click(function() {
	    var title = $("em").attr("title"); /* though der r two em's in html, it selects only the first matching em*/
	    alert(title);
	    console.log(title);
	    $("#divid").text(title);
    });
    $("#one").click(function() {
        $("a").attr("href", "https://www.google.com");
    });
    $("#p1").click(function() {
    	alert("hey");
        //$("#p1").addClass("selected seven"); // to add multiple classes jus chain them with space. same applies to toggleClass 
    });
     $("#p1").dblclick(function() {
    	alert("hey2");
        $("#p1").toggleClass("highlighted");
    });
     /*$("#two").find("li").not(".middle").addClass("selected");*/
     var a = $("#two").find("li");
     console.log(a);
     $("#three").find("li").not(".middle").addClass("selected");
     $("#three").find("li").filter(".middle").addClass("highlighted");
     $(".two").add(".three").addClass("selected"); //this adds the class to both the class named two and three

     $("button").click(function(){
     	$(this).replaceWith("<button>newContent</button>");
     });

     $(".four").prepend('<div class="seven"></div>')

     $(".eight").click(function(){
         $('.eight').load('ajax/one.html');
     });
     $("#nine").click(function(){	
         $.getJSON('ajax/one.json', function(jd) {  //  here if i give /ajax/one.json gives error
                  $('#nine').html('<p> Name: ' + jd.name + '</p>');
                  $('#nine').append('<p>Age : ' + jd.age+ '</p>');
                  $('#nine').append('<p> Sex: ' + jd.sex+ '</p>');
         });			
     });

     $.each([ "foo", "bar", "baz" ], function( idx, val ) {
	   console.log( "element " + idx + " is " + val );
	});
	 
	$.each({ foo: "bar", baz: "bim" }, function( k, v ) {
	   console.log( k + " : " + v );
	});
	var myArray = [ 1, 2, 3, 5 ]; 
	if ( $.inArray( 4, myArray ) !== -1 ) {
	   console.log( "found it!" );
	}
	$("#ten").warning();
    var newfunc = function() {
        alert("Hello World!!! Welcome");
    }
    $('#eleven').on('click',newfunc);
    $('#twelve').on('click',function(){
        $('#eleven').off();
    });
    /*
    $('#forteen').on('click', function(){
            alert("inside ajax");
            $.ajax('ajax/index.html', {
                success: function(response){
                    $(".ticket").html(response).slideDown();
                },
                error: function(){
                    alert("error");
                }

            });
        });
*/
     $("#thirteen").click(function(){
         //$('#thirteen').load('ajax/index.html');
         $.ajax('ajax/index.html', {
                success: function(response){
                    $(".ticket").html(response).slideDown();
                },
                error: function(){
                    alert("error");
                },
                complete: function() { 
                    alert("complete");
                }


            });
     });
});