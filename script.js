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

window.onload = function() {
  const div = document.querySelector('.hole');
  let isIn = false;
  div.addEventListener('mouseover', function() {
    isIn = true;
  });
  div.addEventListener('mouseout', function() {
    isIn = false;
  });
  div.addEventListener('mousemove', function() {
    if (isIn) {
      div.style.setProperty('--x', event.clientX + 'px');
      div.style.setProperty('--y', event.clientY + 'px');
    }
  });
}
