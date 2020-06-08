//'use strict'

// Menu
var el = document.getElementById("menu"); // target
var numPx = "250";

window.addEventListener("scroll", function () {
  if (window.scrollY > numPx) {
    el.classList.add("menu-scroll");
  } else {
    el.classList.remove("menu-scroll");
  }
});

// blog carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});
