//Нужно сделать вот такой таймер (выбираете Stop Watch).
//
//Кнопка Start запускает таймер, так же нужно выводить милисекунды. После запуска она меняется на кнопку Pause, которая может приостанавливать таймер.
//Кнопка Clear останавливает и обнуляет таймер.
//Дизайн сделайте свой, используя Pure или Bootstrap.



window.addEventListener('load', function fullLoad() {
  'use strict';
  var secondTimer,
    timerStop,
    timerStart,
    timerClear,
    second,
    minute,
    hour,
    millisecond,
    secondCount,
    minuteCount,
    hourCount,
    milliSecondCount;
  
  timerStart = document.getElementById('timerStart');
  timerStop = document.getElementById('timerStop');
  timerClear = document.getElementById('timerClear');
  second = document.getElementById('second');
  minute = document.getElementById('minute');
  hour = document.getElementById('hour');
  millisecond = document.getElementById('millisecond');
  
  secondCount = 0;
  minuteCount = 0;
  hourCount = 0;
  milliSecondCount = 0;
  
  second.innerHTML = '00';
  minute.innerHTML = '00';
  hour.innerHTML = '00';
  millisecond.innerHTML = '0';
  
  timerStart.addEventListener('click', function () {
    secondTimer = setInterval(milliSecondOn, 1);
    timerStart.classList.add('btn-none');
    timerStop.classList.remove('btn-none');
  });
  
  timerStop.addEventListener('click', function () {
    clearInterval(secondTimer);
    timerStop.classList.add('btn-none');
    timerStart.classList.remove('btn-none');
  });
  
  timerClear.addEventListener('click', function () {
    clearInterval(secondTimer);
    secondCount = 0;
    second.innerHTML = '00';
    minuteCount = 0;
    minute.innerHTML = '00';
    hourCount = 0;
    hour.innerHTML = '00';
    milliSecondCount = 0;
    millisecond.innerHTML = '0';
    if (timerStart.classList.contains('btn-none')) {
      timerStart.classList.remove('btn-none');
      timerStop.classList.add('btn-none');
    }
  });
  
  function milliSecondOn() {
    milliSecondCount++;
    millisecond.innerHTML = milliSecondCount;
    if (milliSecondCount === 1000) {
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
    if (secondCount === 60) {
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
    if (minuteCount === 60) {
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
