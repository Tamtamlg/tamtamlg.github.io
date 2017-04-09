$(function() {
  'use strict';

  
  
  doRequest();

  function doRequest() {
      $.ajax({
          type: "GET",
          headers: {"Authorization": "7152a0091fa89413a92c0bb258907f7cf04ec49a"},
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

