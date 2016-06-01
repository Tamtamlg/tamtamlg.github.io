$(function () {
  'use strict';
  var input = document.querySelector('#enterYourInterests');
  var btn = document.querySelector('#searchPartners');
  var grid = $('.grid');
  var API_KEY = '2670381-267da34df6c6edc8afe6161ab';
  var html = $('#test').html();
  
  
  function  imgRequest() {
  var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+input.value+"&image_type=photo";
  $.getJSON(URL, function (data) {
    $.each(data.hits, function (i, hit) {
      grid.empty();
      var content = tmpl(html, data);
      $('.grid').append(content);
      input.value = '';
    });
  });
    
  }
  
  imgRequest();
  
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    imgRequest();
  });
  
  input.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      imgRequest();
  }
  });
});


