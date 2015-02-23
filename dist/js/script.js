;(function () {
  'use strict';

  function affixNavbar () {
    var navbar = document.querySelector('.navbar'),
      header = document.querySelector('.header');

    window.addEventListener("scroll", function () {
      var scrollY = window.scrollY,
        scrollM = header.offsetTop + header.offsetHeight - 7*8;

      if (scrollY >= scrollM) {
        navbar.className = navbar.className.replace(/topState/gi, 'fixedTop');
      } else {
        navbar.className = navbar.className.replace(/fixedTop/gi, 'topState');
      }

    });
  }

  affixNavbar();

})();
