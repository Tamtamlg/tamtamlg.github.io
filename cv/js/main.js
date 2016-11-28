$(function() {
  var faBars = $('.fa-bars');
  var mainMenu = $('.main-menu');
  var menuItem = $('.main-menu__item');
  faBars.click(function() {
    mainMenu.slideToggle('menuItem');
  });
});