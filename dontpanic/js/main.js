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
      $('.open-menu').css('display', 'block');
    } else {
      menu.animate({right: '-300px'}, 500);
      $('.open-menu').css('display', 'none');
    }
  });
  
  //скрываем меню, если клик не на нем
  $(document).mouseup(function (e) {
    if (menu.css('right') === '0px' && !menu.is(e.target) && menu.has(e.target).length === 0) {
      menu.animate({right: '-300px'}, 500);
      $('.open-menu').css('display', 'none');
    }
  });
  
  //список городов
  var cityList = $('.city-list');
  var cityListItem = $('.city-list li a');
  var location = $('.location');
  var city = $('.city');
  location.click(function (e) {
    e.preventDefault();
    if (cityList.css('display') === 'none') {
      cityList.slideDown();
      city.css('color', 'transparent');
    } else {
      cityList.hide();
      city.css('color', '#fff');
    }
  });
  
  //выбор города
  cityListItem.click(function (e) {
    e.preventDefault();
    city.text($(this).text());
    cityList.hide();
    city.css('color', '#fff');
  });
  
  //скрываем список городов, если клик не на нем
  $(document).mouseup(function (e) {
    if (!cityList.is(e.target) && cityList.has(e.target).length === 0) {
      cityList.hide();
      city.css('color', '#fff');
    }
  });
  
  //получаем текущий год в футере
  var today = new Date();
  var year = today.getFullYear();
  $('.year').text(year);
  
  //бронирование игры (заполняем название, время, стоимость)
  $('#reservation').on('show.bs.modal', function (e) {
    if ($(e.relatedTarget).hasClass('t-active')) {
      e.preventDefault();
    }
    if ($('.room-title').text()) {
      $('.room-name').text('"' + $('.room-title').text() + '"');
    } else {
      $('.room-name').text('"' + $(e.relatedTarget).parents('.schedule').children('h2').children('a').text() + '"');
    }
    $('.room-time').text('Время: ' + $(e.relatedTarget).children('.game-time').text());
    $('.room-price').text('Стоимость: ' + $(e.relatedTarget).children('.game-price').text() + ' грн');
    
    $('#reservation').submit(function () {
      $(e.relatedTarget).removeClass('t-info t-warning t-success t-danger').addClass('t-active');
    });
  });
  
  
  // подключение слайдера расписания
  $('.shedule-slider').flexslider({
    animation: 'slide',
    controlNav: false,
    directionNav: true,
    slideshow: false
  });
  
  
  
});

