$(function () {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    gutter: 10,
    isFitWidth: true
  });
});