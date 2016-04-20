(function ($) {
  'use strict';
  
  $.fn.carusel = function () {
    var $slide = $('.ul-carusel'),
      $btnLeft = $('.btn-left'),
      $btnRight = $('.btn-right'),
      offset = 170,
      currentOffset = 0;
    
    $btnLeft.on('click', function () {
      currentOffset -= 170;
      $slide.animate({left: currentOffset + 'px'}, 500);
    });
    
    $btnRight.on('click', function () {
      currentOffset += 170;
      $slide.animate({left: currentOffset + 'px'}, 500);
    });
  };
  
})(jQuery);