$(document).ready(function(){
	$('#projects, #experience, #coursework').click(function(){
		$(this).addClass('categoryActive');
		$('.overlay').addClass('open');
	})

	$('.overlay').click(function(){
		$(this).removeClass('open');
		$('#projects, #experience, #coursework').removeClass('categoryActive');
	})

});