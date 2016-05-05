$(function () {
  'use strict';
  var button = document.querySelector('#button');
  var input = document.querySelector('#search');
  button.addEventListener('click', function () {
        
    var urlFull = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=' + input.value + '&callback=GoogleCallback&context=?';
            
    $.ajax({
    // AJAX-specified URL
      url: urlFull,
      dataType : "jsonp",
       // Handle the success event
      success: function (data, textStatus) {
        var ul = document.createElement("ul");
          // build results set
        $.each(data.results,
              function (i, val) {
            var li = document.createElement("li");
            li.innerHTML = '<a href="' + val.url + '" title="' + val.url + '" target="_blank">' + val.title + "</a> - " + val.content;
            urlFulll.appendChild(li);
          }
            );
        $('.content').html(ul);
      }
    });
    return false;
  });
});
    
function GoogleCallback (func, data) {
  window[func](data);
}