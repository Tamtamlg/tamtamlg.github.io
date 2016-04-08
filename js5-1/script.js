//Нужно сделать вот такой таймер (выбираете Stop Watch).
//
//Кнопка Start запускает таймер, так же нужно выводить милисекунды. После запуска она меняется на кнопку Pause, которая может приостанавливать таймер.
//Кнопка Clear останавливает и обнуляет таймер.
//Дизайн сделайте свой, используя Pure или Bootstrap.


var timer = document.getElementById('timer');
var timerStart = document.getElementById('timerStart');
var timerClear = document.getElementById('timerClear');

var watch = new Stopwatch(timer);

timerStart.addEventListener('click', function () {
  if (watch.isOn) {
    watch.stop();
    timerStart.textContent = 'Start';
  } else {
    watch.start();
    timerStart.textContent = 'Pause';
  }
});

timerClear.addEventListener('click', function () {
  watch.stop();
  timerStart.textContent = 'Start';
  watch.reset();
});


function Stopwatch(elem) {
  var time = 0;
  var interval;
  var offset;
    
  function update() {
    if (this.isOn) {
      time += delta();
    }
    var formattedTime = timeFormatter(time);
    elem.textContent = formattedTime;
  }
    
  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }
    
  function timeFormatter(timeInMilliseconds) {
    var time = new Date(timeInMilliseconds);
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }
    while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
    }
    return minutes + ':' + seconds + '.' + milliseconds;
  }
    
  this.isOn;
    
  this.start = function () {
    if (!this.isOn) {
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
    }
  };
    
  this.stop = function () {
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };
    
  this.reset = function () {
    time = 0;
    update();
  };
    
}
  