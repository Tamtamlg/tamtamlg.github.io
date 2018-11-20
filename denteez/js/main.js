$(function() {
  'use strict';

  
  
  doRequest();

  function doRequest() {
      $.ajax({
          type: "GET",
          headers: {"Authorization": "c4656a5749cc470eb5ebfb400f8958e0515b2477"},
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

