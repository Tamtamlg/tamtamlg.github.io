$(function () {
  'use strict';
  
  var data = {
    fotoSrc: 'img/foto.jpg',
    name: 'Подрез Виталий Сергеевич',
    role: 'Специалист по обслуживанию банкоматов',
    answer: [
    'мне это интересно',
    'хочу получать удовольствие от работы',
    'давно об этом мечтал'
      ],
    phone: '+380509746858',
    social: 'https://vk.com/id9417666',
    feedback: 'Если нужно, могу отремонтировать вам банкомат'
  };
  

  var content = _.template($('#test').html());
  document.write(content(data));
});

