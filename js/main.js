//--plavna prokrutka
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    if (id !== '#') {
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
}

//--hiden-btn
const goTop = document.querySelector('.go-top');
window.onscroll = () => {
  if (window.pageYOffset < 800) {
    goTop.style.display = 'none';
  } else {
    goTop.style.display = 'block';
  }
};

//--hiden-btn--end-
//

function PopUpShow() {
  $('.popup').show();
}
function PopUpHide() {
  $('.popup').hide();
}

jQuery(document).ready(function ($) {
  ///----top-menu
  var $window = $(window),
    $target = $('.header__wrapper'),
    $topPosition = $target.offset().top;
  $window.on('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > $topPosition) {
      $target.addClass('header__fixed');
      return;
    } else {
      $target.removeClass('header__fixed');
    }
    return;
  });

  ////----sub menu
  var $flag = true;
  $('.header__menu--have-menu').on('click', function () {
    $(this).children('.header__sub-menu').slideToggle('fast');
  });

  ///----pop-up
  $('.popup').on('click', function () {
    PopUpHide();
  });

  //---sliders
  //https://kenwheeler.github.io/slick/

  $('.qualyty__body').slick({
    //dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '',
    prevArrow: '',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.sliders').slick({
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow:
      '<button type="button" class="sliders__next"><img src="./img/icon/sliders_prev.svg" alt="prev" /></button>',
    prevArrow:
      '<button type="button" class="sliders__prev"><img src="./img/icon/sliders_prev.svg" alt="prev" /></button>',
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $('.testimonials__body').slick({
    //dots: true,
    infinite: true,
    speed: 600,
    nextArrow:
      '<button type="button" class="sliders__next"><img src="./img/icon/testimonials_prev.svg" alt="prev" /></button>',
    prevArrow:
      '<button type="button" class="sliders__prev"><img src="./img/icon/testimonials_prev.svg" alt="prev" /></button>',
  });
});
