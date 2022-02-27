/*
===============================================================

Hi! Welcome to my little playground!

My name is Tobias Bogliolo. 'Open source' by default and always 'responsive',
I'm a publicist, visual designer and frontend developer based in Barcelona. 

Here you will find some of my personal experiments. Sometimes usefull,
sometimes simply for fun. You are free to use them for whatever you want 
but I would appreciate an attribution from my work. I hope you enjoy it.

===============================================================
*/

$(document).mousemove(function(e){
  //Get 'container' offset:
  o = $('.box').offset();
  //Track mouse position:
  $(".dot").css({
    "top": e.pageY - o.top,
    "left": e.pageX - o.left
  });
});

