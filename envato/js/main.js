$(function () {
  'use strict';
  var scrollBtn = $('.scroll-btn'),
      header = $('header');
  
  //scrollTop
  scrollBtn.click(function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: header.offset().top}, 2000);
  });

  
  //accordion
  var plus = $('.schedule-plus');
  plus.click(function () {
    var li = $(this).parent('li');
      li.toggleClass('accordion-active');
  });
  
});