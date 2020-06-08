//'use strict'

var el = document.getElementById('menu'); // target
var numPx = '250';

window.addEventListener('scroll', function() {
    if (window.scrollY > numPx) {
    	el.classList.add('menu-scroll');
    } else {
      el.classList.remove('menu-scroll');
    }
});