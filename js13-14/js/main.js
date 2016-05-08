$(function () {
  'use strict';
  
  var html = $('#test').html();
  var data = {
    questionsArray: [
      {
        questionText: 'Какой результат операции 1+1 ?',
        answer: [
          {
            text: '1+1 будет 2',
            correct: true
          },
          {
            text: '1+1 будет 3',
            correct: false
          },
          {
            text: '1+1 будет 4',
            correct: false
          },
          {
            text: '1+1 будет 5',
            correct: false
          }
        ]
      },
      {
        questionText: 'Какой результат операции 2+2 ?',
        answer: [
          {
            text: '2+2 будет 4',
            correct: true
          },
          {
            text: '2+2 будет 5',
            correct: false
          },
          {
            text: '2+2 будет 6',
            correct: false
          }
        ]
      },
      {
        questionText: 'Какой результат операции 3+3 ?',
        answer: [
          {
            text: '3+3 будет 6',
            correct: true
          },
          {
            text: '3+3 будет 7',
            correct: false
          },
          {
            text: '3+3 будет 8',
            correct: false
          },
          {
            text: '3+3 будет 9',
            correct: false
          },
          {
            text: '3+3 будет 10',
            correct: false
          }
        ]
      }
    ]
  };
  
  //записываем вопросы в localStorage
  localStorage.setItem('saveTest', JSON.stringify(data));
  
  //если в localStorage что-то есть, записать в getTest
  if (localStorage) {
    var getTest = JSON.parse(localStorage.getItem('saveTest'));
  }
  
  var content = tmpl(html, getTest);
  $('body').append(content);
  
  //количество правильных ответов пользователя
  var count = 0;
  //количество правильных ответов в тесте
  var countTrue = 0;
  for (var i = 0; i < $("input:checkbox").length; i++) {
       if ($("input:checkbox")[i].value == 'true') {
         countTrue++;
       }
    };
  
  //проверка результатов
  var popupText;
  var popup = document.querySelector('.popup');
  var popupP = document.querySelector('.popup p');
  $('button').on('click', function() {
    $(this).css({display: "none"});
    for (var s = 0; s < $("input:checkbox:checked").length; s++) {
       if ($("input:checkbox:checked")[s].value == 'true') {
         count++;
       }
    }
    if (count == countTrue && count === $("input:checkbox:checked").length) {
      popupText = 'Тест пройден';
    } else {
      popupText = 'Тест провален';
    }
    $('.popup p').append(popupText)
    $('.popup').addClass('vis');
    count = 0;
  });
  
  //закрыть окно Х
  var closePopup = document.querySelector('.close');
  closePopup.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.remove('vis');
    popupP.innerHTML = '';
    $("input:checkbox:checked").removeAttr('checked');
    $('button').css({display: "block"});
  });
  
});


















