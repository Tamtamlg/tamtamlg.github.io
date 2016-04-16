$(function () {
  'use strict';
  var parentElem,
    inputContainer,
    $title = $('[data-title]'),
    $btn = $('.btn');
  
  $title.on('mouseover', function (event) {
    if (event.target.getAttribute('data-title')) {
      var elemTargetId = event.target.getAttribute('id');
      parentElem = document.createElement('div');
      parentElem.classList.add('title-div');
      parentElem.innerHTML = event.target.getAttribute('data-title');
      inputContainer = document.getElementById(elemTargetId).parentNode;
      inputContainer.appendChild(parentElem);
    }
  });
  
  $title.on('mouseout', function () {
    if (parentElem) {
      inputContainer.removeChild(parentElem);
    }
  });
  
  $btn.on('click', function () {
    $title.trigger('mouseover');
  });
});