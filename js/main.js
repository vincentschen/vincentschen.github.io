$(document).ready(function(){
	$('#projects').click(function(){
		$('.projects').show("slow");
	})

	$('#myName').click(function(){
		$('.projects').hide("slow");
	})

	$( "#email" ).hover(function() {
    	$( this ).append( $( "<h1> ***</h1>" ) );
  	}, function() {
    	$( this ).find( "h1:last" ).remove();
  }
);

});


});