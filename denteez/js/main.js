$(function() {
  'use strict';

  
  
  doRequest();

  function doRequest() {
      $.ajax({
          type: "GET",
          headers: {"Authorization": "cc8ce950677315687c234ab23d78e4d40c8f3dec"},
          url: "http://504080.com/api/v1/services/categories",
          dataType: "json",
          success: function (data) {
                var html,
                    content;
                
                html = $('#tmpl').html();
                content = tmpl(html, data);
                $('.row').append(content);
                
            }
      });
  }
  
  
  
  
  
});

