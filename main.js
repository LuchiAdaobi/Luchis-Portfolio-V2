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

// TYPING ANIMATION
const typed = new Typed('.typing', {
  strings: ['Developer', 'Freelancer'],
  typeSpeed: 100,
  backSpeed: 0,
  backDelay: 3000,
  startDelay: 0,
  loop: true,
});
