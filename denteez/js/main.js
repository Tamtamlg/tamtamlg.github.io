$(function() {
  'use strict';

  
  
  doRequest();

  function doRequest() {
      $.ajax({
          type: "GET",
          headers: {"Authorization": "0db652546478e50858229ac61e3afc61da0deefa"},
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

