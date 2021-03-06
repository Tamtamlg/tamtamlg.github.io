$(function () {
  'use strict';
  var input = document.querySelector('#enterYourInterests');
  var btn = document.querySelector('#searchPartners');
  var grid = $('.grid');
  var API_KEY = '2670381-267da34df6c6edc8afe6161ab';
  var html = $('#test').html();
  
  
  // masonry
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
    gutter: 10
  });
  $grid.imagesLoaded().progress(function () {
    
  
  $('.grid-item').imagefill();
  $grid.masonry();
  });
  

  // запрос картинок
  function imgRequest() {
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+input.value+"&image_type=photo&callback=?";
    
    $.ajax({
        url: URL,
        dataType: "jsonp",
        success: function (data) {
      var $img = $('.grid-img');
      var $title = $('.title');
      for (var i = 0; i < 7; i++) {
        $img[i].src = data.hits[i].webformatURL;
        $title[i].innerHTML = data.hits[i].tags;
      }
    }
        
    });
    input.value = '';
  }
  
  imgRequest();
  
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    imgRequest();
  });
  
  input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      imgRequest();
  }
  });
  
  
  //slider
  $('.jcarousel').jcarousel({
    wrap: 'circular'
  })
    .jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: false
    });

  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });
});



