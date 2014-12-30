$(document).ready(function(){
	var fadeSpeed = 600; 
	$('#projects, #experience, #coursework').click(function(){
		$(this).addClass('categoryActive');
		// $('.overlay').addClass('open');
		$('.overlay').fadeIn(fadeSpeed);
	})

	$('#projects').click(function(){
		$('#projectsContainer').fadeIn(fadeSpeed);
	})

	$('#experience').click(function(){
		$('#experienceContainer').fadeIn(fadeSpeed);
	})

	$('#coursework').click(function(){
		$('#courseworkContainer').fadeIn(fadeSpeed);
	})

	//close overlay
	$('.overlay').click(function(){
		$('.overlay').hide();
		$('#projects, #experience, #coursework').removeClass('categoryActive');
		$('#projectsContainer, #experienceContainer, #courseworkContainer').hide();
	})
	$('#projectsContainer, #courseworkContainer').click(function(){
		$('.overlay').hide();
		$('#projects, #experience, #coursework').removeClass('categoryActive');
		$('#projectsContainer, #experienceContainer, #courseworkContainer').hide();
	})


});