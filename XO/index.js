/*global getWinner*/
window.addEventListener('load', function loadFull() {
  'use strict';
  // получаем все элементы верстки
  var startGame = document.querySelector('.startGame');
  var count = document.querySelector('.count');
  var errorMessage = document.querySelector('.error-message');
  var generateField = document.querySelector('.generateField');
  var mainGame = document.querySelector('.mainGame');
  var startNewGame = document.querySelector('.startNewGame');
  var winnerMessage = document.querySelector('.winner-message');
  var field = document.querySelector('.field');
  var save = localStorage.getItem('game'); // загружаем предыдущую игру
  var game = { // создаю объект с "нулевыми" параметрами игры
    field: [], // массив хранит состояние поля
    sign: true, // состояние знака которым будет выполняться ход
    gameOver: false // состояние победителя
  };
  function loadField(g) { // функция прорисовывает состояние объекта game
    var size = g.field.length; // получаем размер поля
    var rows = []; // создаем массив для строк
    var cells = []; // создаем массив для ячеек
    var i;
    var j;
    for (i = 0; i < size; i++) { // перебор всех строк
      rows[i] = document.createElement('div'); // создаем елемент строки
      rows[i].classList.add('row'); // добавляем параметр класс для строки
      field.appendChild(rows[i]); // добавляем строку к полю
      for (j = 0; j < size; j++) { // перебор все ячеек в строке
        cells[j] = document.createElement('div'); // создаем елемнт ячейки
        cells[j].classList.add('cell'); // добавляем класс для ячейки
        if (g.field[i][j]) { // проверяем был ли сделан ход в нужной нам ячейке
          cells[j].classList.add(g.field[i][j]); // добавляем класс с совершенным ходом
        }
        cells[j].index = i + ',' + j; // присваиваем ячейке координаты ее положения на поле
        rows[i].appendChild(cells[j]); // добавляем ячейку к строке
      }
    }
  }
  function checkWinner() { // функция проверки победителя
    var win = getWinner(); // получаем параметр от гетвиннера
    if (win) { // если параметр был получен
      game.gameOver = true; // оканчиваем игру, что бы не возможно было сделать следующий ход
      if ( win === 'x' ) winnerMessage.innerHTML = 'Крестик победил'; // сообщаем о победе
      if ( win === 'o' ) winnerMessage.innerHTML = 'Нолик победил'; // сообзаем о победе
    }
  }
  if (save) { // если игра была сохранена
    game = JSON.parse(save); // то в объект игры загружаем параметры
    loadField(game); // прорисовываем поле по нашему состоянию
    checkWinner(); // проверяем, был ли победитель в игре
    startGame.style.display = 'none'; // прячем поле старта игры
    mainGame.style.display = 'block'; // показываем главное игровое поле
  }
  function cleanView() { // функция для очистки визуального поля игры
    var i;
    var rows = document.querySelectorAll('.row'); // находим все игровые строки в поле
    var x = rows.length; // получаем количество строк
    if (x !== 0) { // если есть хоть одна строка
      for (i = x - 1; i >= 0; i--) { // перебираем все строки
        rows[i].remove(); // удаляем строку
      }
    }
  }
  function isCorrect(x) { // функция для проверки корректности введенного размера нового поля
    var reg = /^[5-9]$|^(1[0-5])$/; // регулярное выражение для проверки корректности
    if ( reg.test(x) ) { // елси введенная строка удовлетворяет регулярку
      return true; // возвращем правду и происходит "выход" из функции
    } // если выход не произошел, то функция отрабатывает дальше
    return false;
  }
  function newGame(x) { // функция для создания новой игры, получаемый параметр - размер поля
    var i;
    var j;
    game.sign = true; // в новой игре ход по-умолчанию тру(крестик)
    game.gameOver = false; // окончания игры не было
    game.field = []; // очищаем массив от предыдущей игры
    for (i = 0; i < x; i++) { // перебор всех строк
      game.field[i] = []; // в каждой строке создаем еще один массив ячеек
      for (j = 0; j < x; j++) { // перебор ячеек
        game.field[i][j] = ''; // кадую ячейку делаем пустой
      }
    }
    localStorage.setItem('game', JSON.stringify(game)); // сохраняем игру
  }
  generateField.addEventListener('click', function crGame() { // когда нажимаем на кнопку "создать игру"
    if ( isCorrect(count.value) ) { // проверяем, правильно ли введен размер поля
      errorMessage.innerHTML = ''; // если все правильно, то очищаем сообщение об ошибке
      winnerMessage.innerHTML = ''; // очищаем сообщение о победителе
      cleanView(); // очищаем визуальное поле игры
      newGame(count.value); // создаем новое состояние игры с указаным размером
      loadField(game); // рисуем новое состояние игры
      startGame.style.display = 'none'; // скрываем поле старта игры
      mainGame.style.display = 'block'; // показываем поле главной игры
    } else { // в противном же случае
      errorMessage.innerHTML = 'Вы ввели некорректное число'; // выводим сообщение о некорректом размере поля
    }
  });
  startNewGame.addEventListener('click', function nGame() { // при нажатии на кнопку "новая игра"
    startGame.style.display = 'block'; // показываем поле старта игры
    mainGame.style.display = 'none'; // скрываем главное поле игры
  });
  field.addEventListener('click', function getElem(e) { // при нажатии на главное игровое поле, получаем нажатый элемент
    var i;
    var j;
    if ( e.target.index ) { // если элемент содержит индекс, то значит этот объект ячейка
      if ( !game.gameOver ) { // если игра не закончена
        i = e.target.index.split(','); // получаем координаты нажатого объекта
        j = i[1];
        i = i[0];
        if ( !game.field[i][j] ) { // если ячейка состояния по заданным координатам пустая
          game.field[i][j] = game.sign ? 'x' : 'o'; // то изменяем состояние нашего поля
          game.sign = !game.sign; // изменяем знак для следующего хода
          cleanView(); // очищаем визуальное поле
          loadField(game); // прорисовываем поле с новым состоянием
          checkWinner(); // проверяем победителя
          localStorage.setItem('game', JSON.stringify(game)); // сохраняем игру
        }
      }
    }
  });
});
