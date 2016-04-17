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

//  $('.jcarousel-pagination').jcarouselPagination({
//    item: function (page) {
//      return '<a href="#' + (page) + '">' + (page) + '</a>';
//    }
//  });
  
  //select
  $('select').styler();
  
  //checkbox jquery
  $('.jqr').on('click', function () {
    if ($(this).find('input:checked').length) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });

  
  //MENU
   
  var $dropdownList = $('.dropdown-list');
  
  $dropdownList.hover(function () {
    $(this).children('.submenu').slideToggle().animate({
      backgroundColor: '#0000ff'
    }, 400);
    $(this).children('.submenu').css({'backgroundColor': '#000077'});
  }
      );
  
});

