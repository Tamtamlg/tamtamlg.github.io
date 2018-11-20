/*global getWinner*/
window.addEventListener('load', function fullLoad() { // выполнять скрипт после полной загрузки документа
  'use strict';
  var startNewGame = document.querySelector('.startNewGame'); // переменной присваиваем элемент с классом .startNewGame
  var cells = document.querySelectorAll('.cell'); // переменной присваиваем элементы с классом .cell (получаем массив)
  var field = document.querySelector('.field'); // переменной присваиваем элемент с классом .field
  var change = true; // переменная для чередования х и о
  startNewGame.addEventListener('click', function clickButton() { // вешаем обработчик на кнопку новой игры
    var i;
    for ( i = 0; i < cells.length; i++) { // перебираем все элементы с классом .cell
      cells[i].classList.remove('x'); // удаляем класс .х
      cells[i].classList.remove('o'); // удаляем класс .о
    }
    document.querySelector('.winner-message').innerHTML = ''; // удаляем победное сообщение
    change = true; // переинициализируем переменную, чтобы при новой игре ходил х
  });
  field.addEventListener('click', function clickCell(el) { // вешаем обработчик на элемент с классом .field, т.к. он родительский для всех .cell (используем всплытие)
    if (el.target.classList.contains('cell') && // имеет ли элемент, на который кликнули, класс .cell
      !el.target.classList.contains('x') && // не записан ли в элемент класс .х
      !el.target.classList.contains('o')) { // не записан ли в элемент класс .о
      if (!getWinner()) { // если не сработал скрипт getWinner
        if (change) { // если change = true
          el.target.classList.add('x'); // элементу,на который кликнули, присвоить класс .х
        } else {
          el.target.classList.add('o'); // элементу,на который кликнули, присвоить класс .о
        }
        change = !change; // поменять значение change на false
        if (getWinner() === 'x') { // если getWinner возвращает х
          document.querySelector('.winner-message').innerHTML = 'Крестик победил'; // выводим победное сообщение
        }
        if (getWinner() === 'o') { // если getWinner возвращает о
          document.querySelector('.winner-message').innerHTML = 'Нолик победил'; // выводим победное сообщение
        }
      }
    }
  });
});
