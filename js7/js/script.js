$(function () {
  'use strict';
  var $links = $('.links');
  var $tabsItem = $('.tabs-item');
  
  $('ul').on('click', function (event) {
    var $active = $('.active');
    var $activDiv = $($active.attr('href'));
    
    $links.removeClass('active');
    if (!event.target.classList.contains('active')) {
      event.target.classList.add('active');
    }
    
    $tabsItem.removeClass('tabs-item-active');
    if (!$activDiv.hasClass('tabs-item-active')) {
    $activDiv.addClass('tabs-item-active');
    }
  });
});