;(function () {
  'use strict';

  // Main Controller
  function MainCTRL ($http) {
    var weking = this;
    weking.product = {};

    $http.get('mainData.json').success(function(gottenData){
      weking.product = gottenData;
    });

    // Fixed Navbar
    weking.affixNavbar = function () {
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
  }

  // INITIALIZE
  angular
    .module('weking', [ ])
    .controller('MainCTRL', ['$http', MainCTRL]);
})();