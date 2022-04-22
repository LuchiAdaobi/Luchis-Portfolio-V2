// BUTTON SCROLL ANIMATION FOR DIFFERENT SECTIONS
let timeout;

document.querySelector('.scrolly').addEventListener('click', () => {
  clearTimeout(timeout);

  // setTimeout(() => (location.hash = '#about'), 2000);
  setTimeout(
    () =>
      window.scrollTo({
        behavior: 'smooth',
        top: document.querySelector('#about').getBoundingClientRect().top,
      }),
    1000
  );
});

// NAV SCROLL
$(document).ready(() => {
  $(window).scroll(function () {
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

// TYPING ANIMATION
const typed = new Typed('.typing', {
  strings: ['Developer', 'Freelancer'],
  typespeed: 100,
  backspeed: 60,
  loop: true,
});
const typed2 = new Typed('.typing2', {
  strings: ['Developer', 'Freelancer'],
  typespeed: 100,
  backspeed: 60,
  loop: true,
});
