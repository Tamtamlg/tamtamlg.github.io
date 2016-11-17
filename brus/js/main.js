
$(function() {
  
  //инициализируем слайдер в табах
  $('.tab-slider').flexslider({
    directionNav: false,
    controlNav: false
  });
  
  // инициализируем слайдер в сайдбаре
  $('.flexslider').flexslider({
    directionNav: false,
    animation: "slide",
    controlNav: false,
    slideshow: true
  });
  
  
  // обратный звонок
  $('.collback').click(function(e) {
    e.preventDefault();
    $('form[name="collback-form"]').toggleClass('hidden');
  });
  
  
  // выпадающее меню
  $('.drop a').click(function(e) {
    e.preventDefault();
    $('.project-list').toggleClass('hidden');
  });
  
  // форма поиска
  $('.search').click(function(e) {
    e.preventDefault();
    $('.drop-search').toggleClass('hidden');
  });
});