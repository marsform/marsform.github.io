$(function(){
	$('.first-block .about .video img').click(function() {
		$('.first-block .about .video .player').show();
	});
	$(document).mousemove(function(e) {
		var x = (e.pageX * -1 / 45), y = (e.pageY * -1 / 45);
		$('.prlx1').css('margin', x + 'px ' + y + 'px');
	});
	$(document).mousemove(function(e) {
		var x = (e.pageX * 1 / 45), y = (e.pageY * 1 / 45);
		$('.prlx2').css('margin', x + 'px ' + y + 'px');
	});
	$(window).scroll(function() {
		if($(this).scrollTop() > 1) {
			$('.header').addClass('top');
		} else {
			$('.header').removeClass('top');
		}
	});
	$('.first-block .header .menu-button, .mobile-menu ul li a').click(function() {
		$('.first-block .header').toggleClass('fx');
		$('.first-block .header .menu-button').toggleClass('other');
		$('.mobile-menu').toggleClass('opened');
	});
	$('.first-block .scroll-link a, .first-block .header ul li a, .mobile-menu ul li a, .footer ul li a').bind("click", function(e){
	  var anchor = $(this);
	  $('html, body').stop().animate({
		 scrollTop: $(anchor.attr('href')).offset().top
	  }, 1000);
	  e.preventDefault();
	});
	if ($(window).width() < 576) {
		$('.media-block .flex').slick({
			arrows: false,
			centerMode: true,
			variableWidth: true
		});
	}
});