
(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Выяснить, мы получаем шаблон или нам нужно его загрузить
    // обязательно закешировать результат
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Сгенерировать (и закешировать) функцию, 
      // которая будет служить генератором шаблонов
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Сделать данные доступными локально при помощи with(){}
        "with(obj){p.push('" +
       
        // Превратить шаблон в чистый JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // простейший карринг(термин функ. прог. - прим. пер.)
    // для пользователя
    return data ? fn( data ) : fn;
  };
})();

$(function () {
  'use strict';
  
  //scroll
  $('html, body').animate({scrollTop: $('nav').offset().top}, 1500);
  
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

  //menu fixed
  var $menu = $("nav");
    $(window).scroll(function(){
      if ( $(this).scrollTop() > 392 && !$menu.hasClass("fixed") ){
        console.log('hi');
          $menu.addClass("fixed");
      } else 
        if($(this).scrollTop() <= 392 && $menu.hasClass("fixed")) {
          $menu.removeClass("fixed");
      }
    });
});

