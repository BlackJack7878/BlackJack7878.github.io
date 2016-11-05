$(document).ready(function(){

	$(window).bind('scroll', function(event) {
		parallaxScroll();
	});

});

function parallaxScroll(){
	var top = $(window).scrollTop();
	$("#bg-3").css('top', -(top * 0.6) + "px");
	$("#bg-2").css('top', -(top * 0.4) + "px");
	$("#bg-1").css('top', -(top * 0.2) + "px");
}