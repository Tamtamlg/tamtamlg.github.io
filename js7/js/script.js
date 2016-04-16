$(function () {
  'use strict';
  var $links = $('.links'),
    $tabsItem = $('.tabs-item');
  
  $('ul').on('click', function (event) {
    var $active = $('.active'),
      $activDiv = $('#tabs-1');
    
    $links.removeClass('active');
    if (!event.target.classList.contains('active')) {
      event.target.classList.add('active');
    }
    
    $active = $('.active');
    $activDiv = $($active.attr('href'));
    
    $tabsItem.removeClass('tabs-item-active');
    if (!$activDiv.hasClass('tabs-item-active')) {
      $activDiv.addClass('tabs-item-active');
    }
  });
});