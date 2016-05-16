$(function () {
  'use strict';
  //slider
  $('.jcarousel').jcarousel({
    wrap: 'circular'
  })
    .jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
    });
  
  //pagination
  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function () {
      $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function () {
      $(this).removeClass('active');
    })
    .jcarouselPagination();
  
  
  //accordion
  var $links = $('.accordion div');
  $links.on('click', function () {
    var $p = $(this).siblings('p');
    var $li = $(this).parent('li');
      $li.toggleClass('accordion__item-active');
  });
  
});