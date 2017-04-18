$(function() {
  
  //menu
  var faBars = $('.fa-bars');
  var mainMenu = $('.main-menu');
  var menuItem = $('.menu-item');
  faBars.click(function() {
    mainMenu.slideToggle('menuItem');
  });
  
  //form validation
  var userName = $('#name');
  var userPhone = $('#phone');
  var userEmail = $('#email');
  var btn = $('#signUp');
  
  function checkClientName() {
    if (/[^а-яА-ЯёЁa-zA-Z]/.test(this.value)) {
      this.value = '';
    }
    checkBtn();
  }
  
  function checkPhoneNumber() {
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
    this.value = phoneCode.join('').substring(0, 18);
    checkBtn();
  }
  
  function checkBtn() {
    if (/\+38\(\d{3}\) \d{3} \d{2} \d{2}/.test(userPhone.val()) && userName.val() !== '' && userEmail.val() !=='') {
      btn.removeAttr('disabled');
    }
  }
  
  userPhone.on('input', checkPhoneNumber);
  userName.on('input', checkClientName);
  userEmail.on('input', checkBtn);
});

