//Создать объект с методами, которые будут динамически генерировать DOM вот такой страницы. Это будет тест,
// который мы будем разрабатывать в следующих заданиях. Сейчас вам нужно только динамически создать html,
// методы должны храниться в одном объекте. Для того чтоб страница выглядела красиво можете использовать Bootstrap
// и создавать DOM-элементы с готовыми бутстраповскими классами. Изначально на странице должен быть только <body>,
// вызывая методы объекта нужно создать dom-элементы

window.addEventListener('load', function fullLoad() {
  'use strict';
  var numQuestions,
    numAnswers,
    mainObject = {
      questionsArray: [
        {
          questionText: 'Вопрос №1',
          answer: [
            {
              text: 'Вариант ответа №1(вопрос1)',
              correct: true
            },
            {
              text: 'Вариант ответа №2(вопрос1)',
              correct: false
            },
            {
              text: 'Вариант ответа №3(вопрос1)',
              correct: false
            },
            {
              text: 'Вариант ответа №4(вопрос1)',
              correct: false
            }
          ]
        },
        {
          questionText: 'Вопрос №2',
          answer: [
            {
              text: 'Вариант ответа №1(вопрос2)',
              correct: true
            },
            {
              text: 'Вариант ответа №2(вопрос2)',
              correct: false
            },
            {
              text: 'Вариант ответа №3(вопрос2)',
              correct: false
            }
          ]
        },
        {
          questionText: 'Вопрос №3',
          answer: [
            {
              text: 'Вариант ответа №1(вопрос3)',
              correct: true
            },
            {
              text: 'Вариант ответа №2(вопрос3)',
              correct: false
            },
            {
              text: 'Вариант ответа №3(вопрос3)',
              correct: false
            },
            {
              text: 'Вариант ответа №4(вопрос3)',
              correct: false
            },
            {
              text: 'Вариант ответа №5(вопрос3)',
              correct: false
            }
          ]
        }
      ],
      // создание DOM-элемента
      create: function (tag, param, parentElement) {
        tag = document.createElement(tag);
        parentElement.appendChild(tag);
        tag.classList.add(param);
      },
      // вставка текста в элемент
      inner: function (element, someText) {
        element.innerHTML = someText;
      },
      // создание input type="checkbox"
      createInput: function (tag, text) {
        tag.innerHTML = '<label>' + '<input type="checkbox">' + text + '</label>';
      }
    },
    heading,
    questions,
    QuestionsLi,
    InputArr,
    button,
    form,
    mainForm,
    i,
    l,
    j;
  //количество вопросов
  numQuestions = mainObject.questionsArray.length;
  //заголовок
  mainObject.create('h1', 'heading', document.body);
  heading = document.querySelector('h1');
  mainObject.inner(heading, 'Тест по программированию');
  //форма
  mainObject.create('form', 'main-form', document.body);
  form = document.querySelector('form');
  form.setAttribute('id', 'mainForm');
  mainForm = document.getElementById('mainForm');
  //список
  mainObject.create('ol', 'questions', mainForm);
  questions = document.querySelector('ol');
  for (i = 0; i < numQuestions; i += 1) {
    mainObject.create('li', 'questionsItem', questions);
  }
  QuestionsLi = document.getElementsByClassName('questionsItem');
  //вопросы
  for (i = 0; i < QuestionsLi.length; i += 1) {
    mainObject.inner(QuestionsLi[i], mainObject.questionsArray[i].questionText);
  }
  //варианты ответов
  for (i = 0; i < QuestionsLi.length; i += 1) {
    for (j = 0; j < mainObject.questionsArray[i].answer.length; j += 1) {
      mainObject.create('div', 'answers', QuestionsLi[i]);
    }
    InputArr = QuestionsLi[i].getElementsByClassName('answers');
    for (l = 0; l < InputArr.length; l += 1) {
      mainObject.createInput(InputArr[l], mainObject.questionsArray[i].answer[l].text);
    }
  }
  //кнопка
  mainObject.create('div', 'btn', mainForm);
  button = document.getElementsByClassName('btn');
  button[0].setAttribute('id', 'submit');
  button[0].innerHTML = '<input type="submit" value="Проверить мои результаты">';
});
