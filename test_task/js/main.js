/*global $*/
$(function () {
  'use strict';
  
  var cardNumber = document.getElementById('cardNumber'),
    clientName = $('#clientName'),
    phoneNumber = $('#phoneNumber'),
    link2 = $('.btn-link'),
    btn = $('.btn-success'),
    errNumber = $('.err-number');
  
  // форматирование ввода номера карты
  function checkCardNumber() {
    
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0, 16); // исключаем все, что не цифры
    
    if (cardCode !== '') {
      cardCode = cardCode.match(/.{1,4}/g).join(' '); // разделяем
      
    } else {
      cardCode = '';
    }
    
    this.value = cardCode;
    
    if (/\d{4} \d{4} \d{4} \d{4}/.test(this.value)) {
      phoneNumber.removeAttr('disabled'); // разблокируем следующее поле
      phoneNumber[0].value = '+38';
    }
  }
  
  
  // форматирование номера телефона
  function checkPhoneNumber() {

    errNumber.text('');

    var phoneCode = this.value.replace('+38', '').replace(/\D/g, '').split(/(?=.)/);
    var i = phoneCode.length;

    if (0 <= i) {
      phoneCode.unshift('+38');
    }
    if (1 <= i) {
      phoneCode.splice(1, 0, '(');
    }
    if (4 <= i) {
      phoneCode.splice(5, 0, ') ');
    }
    if (7 <= i) {
      phoneCode.splice(9, 0, ' ');
    }
    if (9 <= i) {
      phoneCode.splice(12, 0, ' ');
    }

    this.value = phoneCode.join('');

    if (/\+38\(\d{3}\) \d{3} \d{2} \d{2}/.test(this.value)) {
      clientName.removeAttr('disabled'); // разблокируем следующее поле
    }
  }
  
  // проверка имени клиента
  function checkClientName() {
    if (/[^а-яА-ЯёЁ ]/.test(this.value)) {
      this.value = '';
    }
    this.value = this.value.toUpperCase();
    btn.removeClass('disabled'); // разблокируем следующее поле
  }
  
  // json
  function getConsoleObj(obj) {
    var consoleObj = JSON.stringify(obj);
    console.log(consoleObj);
  }
  
  // выводим в консоль
  function createObj(e) {
    e.preventDefault();
    var dataObj = {};
    dataObj.userCard = cardNumber.value.replace(/\s+/g, '');
    dataObj.userPhone = phoneNumber[0].value.replace(/\s+/g, '');
    dataObj.userName = clientName[0].value.replace(/\s+/g, '').toLowerCase();
    getConsoleObj(dataObj);
  }
  
  // потеря фокуса на номере телефона
  function blurPhoneNumber() {
    if (!('+38(066)' === phoneNumber[0].value.substr(0, 8)) && !('+38(098)' === phoneNumber[0].value.substr(0, 8)) && !('+38(099)' === phoneNumber[0].value.substr(0, 8))) {
      errNumber.text(phoneNumber[0].value);
      $('#myModal').modal('show');
      phoneNumber[0].value = '+38(0';
      clientName.attr('disabled', 'disabled');
    }
  }
  
  cardNumber.addEventListener('input', checkCardNumber);
  phoneNumber.on('input', checkPhoneNumber);
  phoneNumber.on('blur', blurPhoneNumber);
  clientName.on('input', checkClientName);
  btn.on('click', createObj);
  
  //ссылка без тега а
  link2.on('click', function () {
    window.open("https://docs.google.com/document/d/1BnJzEu4ygUVpiky7aUXTMQRRO6GxXe_tGcDV-XOuuW8/edit");
  });
  
  $('.active-hover').hide();
//  $('input').on('tachstart', function () {
//    $('.active-hover').show();
//    $('input').focus();
//  });
  $('input').hover(function () {
    $('.active-hover').show();
    $('input').focus();
    
    
  });
});

