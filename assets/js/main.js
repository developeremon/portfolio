$(document).ready(function(){
    // Owl Carousel js
    $(".owl-carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
    });

    // Mix it up
    var mixer = mixitup('#my-portfolio');

    // smooth scroll
    $('a').smoothScroll({
        speed: 500,
    });

  });

//   AOS js
AOS.init({
    duration: 600,
    easing: 'ease-in-out',
});

// Typed js
var typed = new Typed('.hero-bio-text', {
    // Waits 1000ms after typing "First"
    strings: ['Designer', 'Developer'],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true,
    backDelay: 1500,
  });


