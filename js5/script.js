//Нужно сделать вот такой таймер (выбираете Stop Watch).
//
//Кнопка Start запускает таймер, так же нужно выводить милисекунды. После запуска она меняется на кнопку Pause, которая может приостанавливать таймер.
//Кнопка Clear останавливает и обнуляет таймер.
//Дизайн сделайте свой, используя Pure или Bootstrap.



window.addEventListener('load', function fullLoad() {
  'use strict';
  var flag = true;
  timerStart.addEventListener('click', function() {
    if (flag) {
      var milliecondTimer = setInterval(milliSecondOn, 1);
     // var secondTimer = setInterval(secondOn, 1000);
      flag = !flag;
    } else {
      alert('timer stop');
    }
  });

  var secondCount = 0;
  second.innerHTML = '00';
  var minuteCount = 0;
  minute.innerHTML = '00';
  var hourCount = 0;
  hour.innerHTML = '00';
  var milliSecondCount = 0;
  millisecond.innerHTML = '0';

  function milliSecondOn() {
    milliSecondCount++;

        millisecond.innerHTML = milliSecondCount;

    if (milliSecondCount == 1000) {
      millisecond.innerHTML = '0';
      secondOn();
      milliSecondCount = 0;
    }
  }

  function secondOn() {
    secondCount++;
    if (secondCount < 10) {
      second.innerHTML = '0' + secondCount;
    } else {
      second.innerHTML = secondCount;
    }
    if (secondCount == 60) {
      second.innerHTML = '00';
      minuteOn();
      secondCount = 0;
    }
  }

  function minuteOn() {
    minuteCount++;
    if (minuteCount < 10) {
      minute.innerHTML = '0' + minuteCount;
    } else {
      minute.innerHTML = minuteCount;
    }
    if (minuteCount == 60) {
      minute.innerHTML = '00';
      hourOn();
      minuteCount = 0;
    }
  }

  function hourOn() {
    hourCount++;
    if (hourCount < 10) {
      hour.innerHTML = '0' + hourCount;
    } else {
      hour.innerHTML = hourCount;
    }
  }


});




