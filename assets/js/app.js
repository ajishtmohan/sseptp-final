'use strict';

/////////// PAGE ELEMENT ANIMATIONS /////////

function isInFullView(element) {
  let bounding = element.getBoundingClientRect();

  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    return true;
  } else {
    return false;
  }
}

function isTopInView(element, pos = 0.8) {
  // console.log(pos);
  let bounding = element.getBoundingClientRect();

  if (bounding.top <= window.innerHeight * pos) {
    return true;
  } else {
    return false;
  }
}

/////////// SECONDARY LINKS ANIMATION /////////

let secondaryLinks = document.querySelector('.secondary-links');

if (secondaryLinks !== null) {
  window.addEventListener(
    'scroll',
    function (event) {
      let card = document.querySelectorAll('.secondary-card');

      if (isInFullView(secondaryLinks)) {
        console.log('yes yes');
        for (let i = 0; i < card.length; i++) {
          setInterval(() => {
            card[i].style.transform = 'rotateY(0deg)';
          }, 200 * i + 200);
        }
      }
    },
    false
  );
}

/////////// WHYSSE ANIMATION /////////

let whysse = document.querySelector('.whysse');

if (whysse !== null) {
  let whysseH1 = document.querySelector('.whysse__h1');
  let whysseP = document.querySelector('.whysse__p');
  let whySseEl = [whysseH1, whysseP];
  for (let i = 0; i < whySseEl.length; i++) {
    whySseEl[i].style.opacity = '0';
    whySseEl[i].style.top = '4rem';
  }

  window.addEventListener(
    'scroll',
    function (event) {
      if (isTopInView(whysse, 0.8)) {
        for (let i = 0; i < whySseEl.length; i++) {
          setInterval(() => {
            whySseEl[i].style.opacity = '1';
            whySseEl[i].style.top = '0';
          }, 200 * i + 200);
        }
      }
    },
    false
  );
}

/////////// SPECIALITIES ANIMATION /////////

let specialities = document.querySelectorAll('.specialities__item');

if (specialities !== null) {
  for (let i = 0; i < specialities.length; i++) {
    specialities[i].style.top = '5rem';
    specialities[i].style.opacity = '0';
  }

  window.addEventListener(
    'scroll',
    function (event) {
      for (let i = 0; i < specialities.length; i++) {
        if (isTopInView(specialities[i], 0.9)) {
          setInterval(() => {
            specialities[i].style.top = '0';
            specialities[i].style.opacity = '1';
          }, 200);
        }
      }
    },
    false
  );
}

/////////// COURSES ANIMATION /////////

let courses = document.querySelector('.courses');

if (courses !== null) {
  let coursesH1 = document.querySelector('.course-container__h1');
  let coursesP = document.querySelector('.course-container__p');
  let courseBlocks = document.querySelectorAll('.course-block__item');
  let courseEl = [courses, coursesH1, coursesP, ...courseBlocks];
  for (let i = 0; i < courseEl.length; i++) {
    courseEl[i].style.opacity = '0';
    courseEl[i].style.top = '5rem';
  }

  window.addEventListener('scroll', function (event) {
    if (isTopInView(courses, 0.8)) {
      for (let i = 0; i < courseEl.length; i++) {
        setInterval(() => {
          courseEl[i].style.opacity = '1';
          courseEl[i].style.top = '0';
        }, 100 * i + 100);
      }
    }
  });
}

/////////// RISE ANIMATION /////////

let sectionRise = document.querySelector('.rise');
let sectionPic = document.querySelector('.rise__img');
let sectionH2 = document.querySelector('.rise__text--h2');
let sectionP = document.querySelector('.rise__text--p');

if (sectionRise !== null) {
  let sectionRiseEl = [sectionRise, sectionPic, sectionH2, sectionP];
  for (let i = 0; i < sectionRiseEl.length; i++) {
    if (i < 2) {
      sectionRiseEl[i].style.opacity = '0';
    } else {
      sectionRiseEl[i].style.top = '8rem';
      sectionRiseEl[i].style.opacity = '0';
    }
  }

  window.addEventListener('scroll', function (event) {
    if (isTopInView(sectionRise, 0.8)) {
      for (let i = 0; i < sectionRiseEl.length; i++) {
        setInterval(() => {
          if (i < 2) {
            sectionRiseEl[i].style.opacity = '1';
          } else {
            sectionRiseEl[i].style.top = '0';
            sectionRiseEl[i].style.opacity = '1';
          }
        }, 300 * i + 300);
      }
    }
  });
}

/////////// ACADEMIC ANIMATION /////////

let academics = document.querySelector('.academics');
let academicsH1 = document.querySelector('.academics--h1');
let academicsBlock = document.querySelector('.academic-block');

if (academics !== null) {
  let academicsEl = [academics, academicsH1, academicsBlock];
  for (let i = 0; i < academicsEl.length; i++) {
    if (i == 0) {
      academicsEl[i].style.opacity = '0';
    } else {
      academicsEl[i].style.top = '8rem';
      academicsEl[i].style.opacity = '0';
    }
  }

  window.addEventListener('scroll', function (event) {
    if (isTopInView(academics, 0.8)) {
      for (let i = 0; i < academicsEl.length; i++) {
        setInterval(function () {
          if (i == 0) {
            academicsEl[i].style.opacity = '1';
          } else {
            academicsEl[i].style.top = '0';
            academicsEl[i].style.opacity = '1';
          }
        }, 300 * i + 300);
      }
    }
  });
}

/////////// CERTIFICATION ANIMATION /////////

let certification = document.querySelector('.certification');
let certificationH1 = document.querySelector('.certification--h1');
let certificationBlock = document.querySelector('.certification-block');

if (certification !== null) {
  let certificationEl = [certification, certificationH1, certificationBlock];
  for (let i = 0; i < certificationEl.length; i++) {
    if (i == 0) {
      certificationEl[i].style.opacity = '0';
    } else {
      certificationEl[i].style.top = '8rem';
      certificationEl[i].style.opacity = '0';
    }
  }

  window.addEventListener('scroll', function (event) {
    if (isTopInView(certification, 0.8)) {
      for (let i = 0; i < certificationEl.length; i++) {
        setInterval(function () {
          if (i == 0) {
            certificationEl[i].style.opacity = '1';
          } else {
            certificationEl[i].style.top = '0';
            certificationEl[i].style.opacity = '1';
          }
        }, 300 * i + 300);
      }
    }
  });
}

/////////// CLUBS ANIMATION /////////

let clubs = document.querySelector('.clubs');
let clubsItem = document.querySelectorAll('.clubs-item');
let clubsFrame = document.querySelectorAll('.clubs-item__frame');

if (clubs !== null) {
  for (let i = 0; i < clubsItem.length; i++) {
    clubsItem[i].style.top = '6rem';
    clubsItem[i].style.opacity = '0';
  }

  window.addEventListener('scroll', function (event) {
    if (isInFullView(clubs)) {
      for (let i = 0; i < clubsItem.length; i++) {
        setInterval(function () {
          clubsItem[i].style.top = '0';
          clubsItem[i].style.opacity = '1';
        }, 100 * i + 100);
      }
    }
  });
}

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

const windowUpto600 = function () {
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
  if (screenSize > 1250) {
    window1250px();
  } else if (screenSize < 1250 && screenSize >= 900) {
    window900to1250();
  } else if (screenSize < 900 && screenSize >= 600) {
    window600to900();
  } else if (screenSize < 600) {
    windowUpto600();
  }
}

(function init() {
  resizeHandler();
})();
