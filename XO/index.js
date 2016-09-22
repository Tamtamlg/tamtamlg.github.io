/*global getWinner*/
window.addEventListener('load', function loadFull() {
  'use strict';
  
  var startGame = document.querySelector('.startGame');
  var count = document.querySelector('.count');
  var errorMessage = document.querySelector('.error-message');
  var generateField = document.querySelector('.generateField');
  var mainGame = document.querySelector('.mainGame');
  var startNewGame = document.querySelector('.startNewGame');
  var winnerMessage = document.querySelector('.winner-message');
  var field = document.querySelector('.field');
  var save = localStorage.getItem('game');
  var game = {
    field: [],
    sign: true,
    gameOver: false
  };
  function loadField(g) {
    var size = g.field.length;
    var rows = [];
    var cells = [];
    var i;
    var j;
    for (i = 0; i < size; i++) {
      rows[i] = document.createElement('div');
      rows[i].classList.add('row');
      field.appendChild(rows[i]);
      for (j = 0; j < size; j++) {
        cells[j] = document.createElement('div');
        cells[j].classList.add('cell');
        if (g.field[i][j]) {
          cells[j].classList.add(g.field[i][j]);
        }
        cells[j].index = i + ',' + j;
        rows[i].appendChild(cells[j]);
      }
    }
  }
  function checkWinner() {
    var win = getWinner();
    if (win) {
      game.gameOver = true;
      if ( win === 'x' ) winnerMessage.innerHTML = 'Крестик победил';
      if ( win === 'o' ) winnerMessage.innerHTML = 'Нолик победил';
    }
  }
  if (save) {
    game = JSON.parse(save);
    loadField(game);
    checkWinner();
    startGame.style.display = 'none';
    mainGame.style.display = 'block';
  }
  function cleanView() {
    var i;
    var rows = document.querySelectorAll('.row');
    var x = rows.length;
    if (x !== 0) {
      for (i = x - 1; i >= 0; i--) {
        rows[i].remove();
      }
    }
  }
  function isCorrect(x) {
    var reg = /^[5-9]$|^(1[0-5])$/;
    if ( reg.test(x) ) {
      return true;
    }
    return false;
  }
  function newGame(x) {
    var i;
    var j;
    game.sign = true;
    game.gameOver = false;
    game.field = [];
    for (i = 0; i < x; i++) {
      game.field[i] = [];
      for (j = 0; j < x; j++) {
        game.field[i][j] = '';
      }
    }
    localStorage.setItem('game', JSON.stringify(game));
  }
  generateField.addEventListener('click', function crGame() {
    if ( isCorrect(count.value) ) {
      errorMessage.innerHTML = '';
      winnerMessage.innerHTML = '';
      cleanView();
      newGame(count.value);
      loadField(game);
      startGame.style.display = 'none';
      mainGame.style.display = 'block';
    } else {
      errorMessage.innerHTML = 'Вы ввели некорректное число';
    }
  });
  startNewGame.addEventListener('click', function nGame() {
    startGame.style.display = 'block';
    mainGame.style.display = 'none';
  });
  field.addEventListener('click', function getElem(e) {
    var i;
    var j;
    if ( e.target.index ) {
      if ( !game.gameOver ) {
        i = e.target.index.split(',');
        j = i[1];
        i = i[0];
        if ( !game.field[i][j] ) {
          game.field[i][j] = game.sign ? 'x' : 'o';
          game.sign = !game.sign;
          cleanView();
          loadField(game);
          checkWinner();
          localStorage.setItem('game', JSON.stringify(game));
        }
      }
    }
  });
});
