$(document).ready(function(){
	//fade in contact information on click
	$('#contact').click(function(){
		$('.contact').fadeIn("fast");
	});

	//fade out contact information on click of another link 
	$('#myName').click(function(){
		$('.contact').fadeOut("fast");
	});
});