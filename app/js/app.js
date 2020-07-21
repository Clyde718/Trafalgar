$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.header__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<a class="header__slider-prev" href="#">prev</a>',
    nextArrow: '<a class="header__slider-next" href="#">next</a>',
    appendArrows: '.header__middle',
    responsive: [
      {
        breakpoint: 580,
        settings: {
          appendArrows: '.arrow-wrapp',
        }
      },
      {
        breakpoint: 576,
        settings: {
          // slidesToShow: 1
        }
      }
    ]
  })
});
