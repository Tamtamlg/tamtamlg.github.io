$(function () {
  'use strict';
  
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false
  });
  
  $('.list').click(function (e) {
    e.preventDefault();
    $('.category-active').removeClass('category-active');
    $(this).parent().addClass('category-active');
  });
  
});

