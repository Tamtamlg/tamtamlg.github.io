(function ($) {
  'use strict';
  
  $.fn.carusel = function () {
    var $slide = $('.ul-carusel'),
      $btnLeft = $('.btn-left'),
      $btnRight = $('.btn-right'),
      offset = 170,
      currentOffset = 0,
      $slideItems = $slide.find('li').length,
      minOffset = -(($slideItems - 5) * offset),
      maxOffset = 0;
    
    $btnLeft.addClass('start');
    
    $btnLeft.on('click', function () {
      if (currentOffset !== minOffset) {
        $btnRight.addClass('start');
        currentOffset -= 170;
        $slide.animate({left: currentOffset + 'px'}, 500);
      }
      if (currentOffset == minOffset) {
        $(this).removeClass('start');
      }
      
    });
    
    $btnRight.on('click', function () {
      if (currentOffset !== maxOffset) {
        $btnLeft.addClass('start');
        currentOffset += 170;
        $slide.animate({left: currentOffset + 'px'}, 500);
      }
      if (currentOffset == maxOffset) {
        $(this).removeClass('start');
      }
      
      
    });
//    function toggleBtn () {
//      if ($btnRight.hasClass('start')) {
//        $btnRight.toggleClass('start');
//      }
//      if ($btnLeft.hasClass('start')) {
//      $btnLeft.toggleClass('start');
//      }
//    }
      
  };
  
})(jQuery);