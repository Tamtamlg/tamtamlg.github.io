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

  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });

  
});

