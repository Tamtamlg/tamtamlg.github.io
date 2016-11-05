$(function () {
  'use strict';
  
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false
  });
  
  $('.list').click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('category-active');
  });
  
});

