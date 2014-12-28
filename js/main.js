$(document).ready(function(){
	$('#projects, #experience, #coursework').click(function(){
		$(this).addClass('categoryActive');
		$('.overlay').addClass('open');
	})

	$('#projects').click(function(){
		$('#projectsContainer').show();
	})

	$('#experience').click(function(){
		$('#experienceContainer').show();
	})

	$('#coursework').click(function(){
		$('#courseworkContainer').show();
	})


	$('.overlay').click(function(){
		$(this).removeClass('open');
		$('#projects, #experience, #coursework').removeClass('categoryActive');
		$('#projectsContainer, #experienceContainer, #courseworkContainer').hide();
	})

});