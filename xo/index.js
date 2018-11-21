window.addEventListener('load', function fullLoad() {
  'use strict';
  var startNewGame = document.querySelector('.startNewGame');
  var cells = document.querySelectorAll('.cell');
  var field = document.querySelector('.field');
  var change = true;
  startNewGame.addEventListener('click', function clickButton() {
    var i;
    for ( i = 0; i < cells.length; i++) {
      cells[i].classList.remove('x');
      cells[i].classList.remove('o');
    }
    document.querySelector('.winner-message').innerHTML = '';
    change = true;
  });
  field.addEventListener('click', function clickCell(el) {
    if (el.target.classList.contains('cell') &&
      !el.target.classList.contains('x') &&
      !el.target.classList.contains('o')) {
      if (!getWinner()) {
        if (change) {
          el.target.classList.add('x');
        } else {
          el.target.classList.add('o');
        }
        change = !change;
        if (getWinner() === 'x') {
          document.querySelector('.winner-message').innerHTML = 'Крестик победил';
        }
        if (getWinner() === 'o') {
          document.querySelector('.winner-message').innerHTML = 'Нолик победил';
        }
      }
    }
  });
});
