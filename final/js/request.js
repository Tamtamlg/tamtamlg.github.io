$(function () {
  'use strict';
  var input = document.querySelector('#enterYourInterests');
  var btn = document.querySelector('#searchPartners');
  var grid = $('.grid');
  var API_KEY = '2670381-267da34df6c6edc8afe6161ab';
  var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('')+"&image_type=photo";
  $.getJSON(URL, function (data) {
    $.each(data.hits, function (i, hit) {
      $('<img>').attr('src', hit.webformatURL).appendTo('.grid').wrap('<div class="grid-item">');
      if (i === 6) {
        return false;
      }
    });
  });
  
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    grid.empty();
    var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+input.value+"&image_type=photo";
    $.getJSON(URL, function (data) {
      $.each(data.hits, function (i, hit) {
        $('<img>').attr('src', hit.webformatURL).appendTo('.grid').wrap('<div class="grid-item">');
        if (i === 6) {
          return false;
        }
      });
    });
    input.value = '';
  });
});


