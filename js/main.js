$(document).ready(function(){
	$('#projects').click(function(){
		$('.overlay').addClass('open');
	})

	$('.overlay').click(function(){
		$(this).removeClass('open');
	})

});