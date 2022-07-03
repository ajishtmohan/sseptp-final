'use strict';

// For 1200px and above
const window1250px = function () {
  // MENU MANIPULATION

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      // Show standard menu
      setTimeout(function () {
        document.querySelector('.nav').style.top = '0';
        document.querySelector('.site-menu').style.top = '4rem';
        document.querySelector('.site-menu').style.height = '8rem';
        document.querySelector('.sitelinks').style.height = '8rem';
        document.querySelector('.site-link-main').style.height = '8rem';
        document.querySelector('.sitelinks__logo').style.height = '8rem';
        document.querySelector('.sitelinks__logo').style.width = '14rem';

        // Main menu items settings
        const navbarLinks = document.querySelectorAll('.site-link-main__item');
        for (let i = 0; i < navbarLinks.length; i++) {
          navbarLinks[i].style.padding = '3.3rem 0';
        }

        const submenu = document.querySelectorAll('.site-link-sub');
        for (let i = 0; i < submenu.length; i++) {
          submenu[i].style.top = '8rem';
        }
      }, 300);
    } else {
      // Show minimal menu
      setTimeout(function () {
        document.querySelector('.nav').style.top = '-4rem';
        document.querySelector('.site-menu').style.top = '0';
        document.querySelector('.site-menu').style.height = '5rem';
        document.querySelector('.sitelinks').style.height = '5rem';
        document.querySelector('.site-link-main').style.height = '5rem';
        document.querySelector('.sitelinks__logo').style.height = '5rem';
        document.querySelector('.sitelinks__logo').style.width = '9rem';

        // Main menu items settings
        const navbarLinks = document.querySelectorAll('.site-link-main__item');
        for (let i = 0; i < navbarLinks.length; i++) {
          navbarLinks[i].style.padding = '0.3rem 0';
        }

        const submenu = document.querySelectorAll('.site-link-sub');
        for (let i = 0; i < submenu.length; i++) {
          submenu[i].style.top = '3.4rem';
        }
      }, 300);
    }
    prevScrollpos = currentScrollPos;
  };
};

const window900to1250 = function () {
  const menuCheck = document.getElementById('nav-toggle');
  const menuPanel = document.querySelector('.menu-panel');
  const quickMenu = document.querySelector('.quick-menu');
  const quicklinks = document.querySelector('.quicklinks');
  const siteMenu = document.querySelector('.site-menu');
  const nav = document.querySelector('.nav');

  menuCheck.addEventListener('change', function () {
    nav.style.padding = '0 5%';
    quickMenu.style.opacity = '0';
    siteMenu.style.opacity = '0';
    menuPanel.style.cssText = 'visibility: hidden; opacity: 0';
    quicklinks.style.display = 'none';
    quickMenu.style.display = 'none';
    siteMenu.style.display = 'none';

    if (menuCheck.checked) {
      menuPanel.style.cssText = 'visibility: visible; opacity: 1';
      quickMenu.style.display = 'inline-block';
      siteMenu.style.display = 'inline-block';
      setTimeout(function () {
        quicklinks.style.display = 'block';
        quickMenu.style.opacity = '1';
        siteMenu.style.opacity = '1';
        nav.style.padding = '15rem 5%';
      }, 300);
    } else {
      nav.style.padding = '0 5%';
      quickMenu.style.opacity = '0';
      siteMenu.style.opacity = '0';
      setTimeout(function () {
        menuPanel.style.cssText = 'visibility: hidden; opacity: 0';
        quicklinks.style.display = 'none';
        quickMenu.style.display = 'none';
        siteMenu.style.display = 'none';
      }, 300);
    }
  });

  // ACTIVE LINK IN MENU
  /*
  const siteMainLinks = document.querySelectorAll('.site-link-main__item');
  for (let i = 0; i < siteMainLinks.length; i++) {
    siteMainLinks[i].addEventListener('mouseover', function () {
      let current = document.getElementsByClassName('site-link-main__item');
      current[0].className = current[0].className.replace(
        ' site-link-main__item',
        ''
      );
      this.className += ' site-link-main__item--active';
    });
  }
  */
};

const window600to900 = function () {
  const menuCheck = document.getElementById('nav-toggle');
  const menuPanel = document.querySelector('.menu-panel');
  const quickMenu = document.querySelector('.quick-menu');
  const quicklinks = document.querySelector('.quicklinks');
  const siteMenu = document.querySelector('.site-menu');
  const nav = document.querySelector('.nav');

  menuCheck.addEventListener('change', function () {
    if (menuCheck.checked) {
      burgerButtonOpen();
      menuPanel.style.cssText = 'visibility: visible; opacity: 1';
      setTimeout(function () {
        quicklinks.style.display = 'block';
        quickMenu.style.display = 'none';
        siteMenu.style.display = 'inline-block';
        nav.style.padding = '15rem 5%';
      }, 300);
    } else {
      quicklinks.style.display = 'none';
      quickMenu.style.display = 'none';
      siteMenu.style.display = 'none';
      nav.style.padding = '0 5%';
      setTimeout(function () {
        menuPanel.style.cssText = 'visibility: hidden; opacity: 0';
      }, 300);
      burgerButtonClose();
    }
  });
};

const window375to600 = function () {
  const menuCheck = document.getElementById('nav-toggle');
  const menuPanel = document.querySelector('.menu-panel');
  const quickMenu = document.querySelector('.quick-menu');
  const quicklinks = document.querySelector('.quicklinks');
  const siteMenu = document.querySelector('.site-menu');
  const nav = document.querySelector('.nav');

  menuCheck.addEventListener('change', function () {
    if (menuCheck.checked) {
      menuPanel.style.cssText = 'visibility: visible; opacity: 1';
      setTimeout(function () {
        quicklinks.style.display = 'block';
        quickMenu.style.display = 'none';
        siteMenu.style.display = 'inline-block';
        nav.style.padding = '15rem 5%';
      }, 300);
    } else {
      quicklinks.style.display = 'none';
      quickMenu.style.display = 'none';
      siteMenu.style.display = 'none';
      nav.style.padding = '0 5%';
      setTimeout(function () {
        menuPanel.style.cssText = 'visibility: hidden; opacity: 0';
      }, 300);
    }
  });
};

// MENU BUTTON ANIMATION
const menuCheck = document.getElementById('nav-toggle');
menuCheck.addEventListener('change', function () {
  if (menuCheck.checked) {
    burgerButtonOpen();
  } else {
    burgerButtonClose();
  }
});

const burgerButtonOpen = function () {
  const burgerLines = document.querySelectorAll('.icon-burger__line');

  console.log(burgerLines);
  for (let i = 0; i < burgerLines.length; i++) {
    burgerLines[i].style.cssText =
      'display: block; position: absolute; right: 5%;';
    burgerLines[0].style.transform = 'rotate(45deg)';
    burgerLines[1].style.display = 'none';
    burgerLines[2].style.transform = 'rotate(-45deg)';
  }
};

const burgerButtonClose = function () {
  const burgerLines = document.querySelectorAll('.icon-burger__line');

  console.log(burgerLines);
  for (let i = 0; i < burgerLines.length; i++) {
    burgerLines[i].style.cssText =
      'width: 3rem; height: 2px; background-color: $color-white; margin: 3px; border-radius: 10px; opacity: 1; transition: all 0.3s;';
    burgerLines[0].style.transform = 'rotate(0deg)';
    burgerLines[1].style.display = 'block';
    burgerLines[2].style.transform = 'rotate(-0deg)';
  }
};

// SCREENSIZE HANDLING
window.addEventListener('resize', resizeHandler);
let screenSize = window.innerWidth;

function resizeHandler() {
  window.onresize = function () {
    location.reload();
  };

  if (screenSize > 1250) {
    window1250px();
    console.log(screenSize);
  } else if (screenSize < 1250 && screenSize >= 900) {
    window900to1250();
    console.log(screenSize);
  } else if (screenSize < 900 && screenSize >= 600) {
    window600to900();
    console.log(screenSize);
  } else if (screenSize < 600 && screenSize >= 375) {
    window375to600();
  }
}

(function init() {
  resizeHandler();
})();
