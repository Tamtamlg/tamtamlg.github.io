$(function () {
  'use strict';
  
  var html = $('#test').html();
  var data = {
    fotoSrc: 'img/foto.jpg',
    name: 'Подрез Виталий Сергеевич',
    title: 'Специалист по обслуживанию банкоматов',
    answer: [
    'мне это интересно',
    'хочу получать удовольствие от работы',
    'давно об этом мечтал'
      ],
    phone: '+380509746858',
    social: 'https://vk.com/id9417666',
    feedback: 'Если нужно, могу отремонтировать вам банкомат'
  };
  var content = tmpl(html, data);
  
  $('body').append(content);
});