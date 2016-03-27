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
	    create: function (tag, param, parentElement) {
		    tag = document.createElement(tag);
		    parentElement.appendChild(tag);
		    tag.classList.add(param);
	    },
		
	    inner: function (element, text) {
		    element.innerHTML = text;
	    },
            
      createInput: function (tag, text) {
        tag.innerHTML = '<input type="checkbox">' + text;
      }
    },
    heading,
    questions,
    QuestionsLi,
    InputArr,
    button,
    form,
    i;
	
	numQuestions = 3;
  numAnswers = 3;
    
	mainObject.create('h1', 'heading', document.body);
	heading = document.querySelector('h1');
	mainObject.inner(heading, 'Тест по программированию');
  
  mainObject.create('form', 'main-form', document.body);
  form = document.querySelector('form');
  form.setAttribute('id', 'mainForm');
	
	mainObject.create('ol', 'questions', mainForm);
	questions = document.querySelector('ol');
	for (i = 0; i < numQuestions; i++) {
		mainObject.create('li', 'questionsItem', questions);
	}
	QuestionsLi = document.getElementsByClassName('questionsItem');
	
	mainObject.inner(QuestionsLi[0], 'Вопрос №1');
	mainObject.inner(QuestionsLi[1], 'Вопрос №2');
	mainObject.inner(QuestionsLi[2], 'Вопрос №3');
    
    
  for (i = 0; i < numAnswers; i++) {
    mainObject.create('div', 'answers', QuestionsLi[0]);
  }
  for (i = 0; i < numAnswers; i++) {
    mainObject.create('div', 'answers', QuestionsLi[1]);
  }
  for (i = 0; i < numAnswers; i++) {
    mainObject.create('div', 'answers', QuestionsLi[2]);
  }
  InputArr = document.getElementsByClassName('answers');
  for (i = 0; i < InputArr.length; i++) {
    InputArr[i].setAttribute('id', 'answer' + (i + 1));
  }
    
  mainObject.createInput(answer1, 'Вариант ответа №1');
  mainObject.createInput(answer2, 'Вариант ответа №2');
  mainObject.createInput(answer3, 'Вариант ответа №3');
    
  mainObject.createInput(answer4, 'Вариант ответа №1');
  mainObject.createInput(answer5, 'Вариант ответа №2');
  mainObject.createInput(answer6, 'Вариант ответа №3');
    
  mainObject.createInput(answer7, 'Вариант ответа №1');
  mainObject.createInput(answer8, 'Вариант ответа №2');
  mainObject.createInput(answer9, 'Вариант ответа №3');
    
  mainObject.create('div', 'btn', mainForm);
  button = document.getElementsByClassName('btn');
  button[0].setAttribute('id', 'submit');
  submit.innerHTML = '<input type="submit" value="Проверить мои результаты">';
});
