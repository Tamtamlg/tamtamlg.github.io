window.addEventListener('load', function fullLoad() {
  'use strict';
  var input = document.querySelector('#search');
  var button = document.querySelector('#button');
  var content = document.querySelector('.content');
  button.addEventListener('click', function clickButton() {
    var script;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://en.wikipedia.org/w/api.php?action=parse&page=title&prop=text&section=0&format=json&callback=func');
    script = document.createElement('script');
    script.src = 'http://en.wikipedia.org/w/api.php?action=parse&page=' + input.value + '&prop=text&section=0&format=json&callback=searchArticle';
    window.searchArticle = function view(data) {
      content.innerHTML = '';
      content.innerHTML = data.parse.text['*'];
    };
    document.head.appendChild(script);
  });
});