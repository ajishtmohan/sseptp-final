'use strict';

// MENU MANIPULATION

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    // Show standard menu
    setTimeout(function () {
      document.querySelector('.menu').style.top = '0';
      document.querySelector('.site-links').style.top = '4rem';
      document.querySelector('.navbar').style.height = '8rem';
      document.querySelector('.logo__img').style.width = '16rem';

      // Main menu items settings
      const navbarLinks = document.querySelectorAll('.navigation__item--link');
      for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].style.padding = '3.2rem 0 3.2rem 1.6rem';
      }

      const submenu = document.querySelectorAll('.submenu');
      for (let i = 0; i < submenu.length; i++) {
        submenu[i].style.top = '4.9rem';
      }
    }, 300);
  } else {
    // Show minimal menu
    setTimeout(function () {
      document.querySelector('.menu').style.top = '-4rem';
      document.querySelector('.site-links').style.top = '0';
      document.querySelector('.navbar').style.height = '5rem';
      document.querySelector('.logo__img').style.width = '10rem';

      // Main menu items settings
      const navbarLinks = document.querySelectorAll('.navigation__item--link');
      for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].style.padding = '1.8rem 0 1.8rem 1.6rem';
      }

      const submenu = document.querySelectorAll('.submenu');
      for (let i = 0; i < submenu.length; i++) {
        submenu[i].style.top = '3.4rem';
      }
    }, 300);
  }
  prevScrollpos = currentScrollPos;
};
