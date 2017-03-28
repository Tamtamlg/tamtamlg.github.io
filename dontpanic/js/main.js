/*global $*/
$(function () {
  'use strict';
  
  // подключение слайдера
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false
  });
  
  // меню
  var flag = false;
  $('.bars').click(function () {
    var menu = $('.main-menu');
    if (!flag) {
      menu.animate({right: 0}, 500);
    } else {
      menu.animate({right: '-300px'}, 500);
    }
    flag = !flag;
  });
  
});

