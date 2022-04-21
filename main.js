// DOM SELECTION
const aboutBtn = document.querySelector('#about');
const freelanceBtn = document.querySelector('#freelance');
const scrollEl = document.querySelector('.scrolly');

// BUTTON SCROLL ANIMATION FOR DIFFERENT SECTIONS
scrollEl.addEventListener('click', () => {
  // scrollEl.forEach(() => {
  setInterval(() => {
    // alert('hello');
  }, 1000);
  // });
});

// WINDOW LOAD ANIMATIONS

// TYPING ANIMATION
let typed3 = new Typed('.typing', {
  strings: ['Developer', 'Freelancer'],
  typespeed: 10,
  backspeed: 6,
  loop: true,
});
let typed2 = new Typed('.typing2', {
  strings: ['Developer', 'Freelancer'],
  typespeed: 10,
  backspeed: 6,
  loop: true,
});
// NAV SCROLL
$(document).ready(() => {
  $(window).scroll(function () {
    // if (this.scrollY > 20) {
    //   $('.navbar').addClass('sticky');
    // } else {
    //   $('.navbar').removeClass('sticky');
    // }

    // SCROLL UP BUTTON SHOW AND HIDE SCRIPT

    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  // SLIDE-UP SCRIPT
  $('.scroll-up-btn').click(() => {
    $('html').animate({ scrollTop: 0 });
  });

  // TOGGLE MENU
  $('.menu-btn').click(() => {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });
});

// OWL CAROUSEL

$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});
