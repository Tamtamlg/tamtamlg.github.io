/*global $*/
$(function () {
  'use strict';
  
  // подключение слайдера
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false
  });
  
  // меню
  var menu = $('.main-menu');
  $('.bars').click(function (e) {
    e.preventDefault();
    if (menu.css('right') === '-300px') {
      menu.animate({right: 0}, 500);
    } else {
      menu.animate({right: '-300px'}, 500);
    }
  });
  
  //скрываем меню, если клик не на нем
  $(document).mouseup(function (e) {
    if (menu.css('right') === '0px' && !menu.is(e.target) && menu.has(e.target).length === 0) {
      menu.animate({right: '-300px'}, 500);
    }
  });
  
  //список городов
  var cityList = $('.city-list');
  var location = $('.location');
  location.click(function (e) {
    e.preventDefault();
    if (cityList.css('display') === 'none') {
      cityList.show();
    } else {
      cityList.hide();
    }
  });
  
  //скрываем список городов, если клик не на нем
  $(document).mouseup(function (e) {
    if (!cityList.is(e.target) && cityList.has(e.target).length === 0) {
      cityList.hide();
    }
  });
  
  //получаем текущий год в футере
  var today = new Date();
  var year = today.getFullYear();
  $('.year').text(year);
  
});

