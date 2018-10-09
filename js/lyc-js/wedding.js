

	$(function(){
	new WOW().init();
})

$(window).scroll(function() {
	if($(window).scrollTop() > $(window).height()) {
		$('.backgo').fadeIn(1000);
	} else {
		$('.backgo').fadeOut();
	}

})
	$('.backgo').click(function() {
		$('html,body').animate({
			'scrollTop': '0px'
		}, 500);
	
	})
