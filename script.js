//kursor
$(document).mousemove(function(e){
  //Get 'container' offset:
  o = $('.box').offset();
  //Track mouse position:
  $(".dot").css({
    "top": e.pageY - o.top,
    "left": e.pageX - o.left
  });
});

//navbar
$(function() {
	$('nav.navabr a').bind('click',function(event){
    event.preventDefault();
		var $anchor = $(this);
    console.log($anchor.attr('href'))
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		event.preventDefault();
	});
});