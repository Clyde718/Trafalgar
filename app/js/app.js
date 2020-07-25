$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });


  $('.customer__slider').slick({
    dots: true,
    arrows: true,
    appendDots: $('.slide-control'),
    appendArrows: $('.slide-control'),
    slidesToScroll: 1,
    slidesToShow: 1,
    prevArrow: '<a class="arrow-left" href=""><img src="icons/left.svg" alt="left"></a>',
    nextArrow: '<a class="arrow-right" href=""><img src="icons/right.svg" alt="right"></a>',
    infinite: false
  });









});
