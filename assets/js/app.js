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
    if (menuCheck.checked) {
      console.log('checked');
      menuPanel.style.cssText = 'visibility: visible; opacity: 1';
      quicklinks.style.display = 'block';
      quickMenu.style.display = 'inline-block';
      siteMenu.style.display = 'inline-block';
      nav.style.padding = '20rem 6rem';
    } else {
      console.log('unchecked');
      menuPanel.style.cssText = 'visibility: hidden; opacity: 0';
      quicklinks.style.display = 'none';
      quickMenu.style.display = 'none';
      siteMenu.style.display = 'none';
      nav.style.padding = '0 6rem';
    }
  });
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
    console.log('window1250');
  } else if (screenSize < 1250 && screenSize >= 900) {
    window900to1250();
    console.log(screenSize);
  }
}

(function init() {
  resizeHandler();
})();

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

window.addEventListener(
  'scroll',
  function (event) {
    let card = document.querySelectorAll('.secondary-card');

    if (isInFullView(secondaryLinks)) {
      for (let i = 0; i < card.length; i++) {
        setInterval(() => {
          card[i].style.transform = 'rotateY(0deg)';
        }, 200 * i + 200);
      }
    }
  },
  false
);

/////////// WHYSSE ANIMATION /////////

let whysse = document.querySelector('.whysse');

let whysseH1 = document.querySelector('.whysse__h1');
let whysseP = document.querySelector('.whysse__p');
let whySseEl = [whysseH1, whysseP];
for (let i = 0; i < whySseEl.length; i++) {
  whySseEl[i].style.opacity = '0';
  whySseEl[i].style.top = '8rem';
}

window.addEventListener(
  'scroll',
  function (event) {
    if (isInFullView(whysse)) {
      for (let i = 0; i < whySseEl.length; i++) {
        setInterval(() => {
          whySseEl[i].style.opacity = '1';
          whySseEl[i].style.top = '0';
        }, 300 * i + 300);
      }
    }
  },
  false
);

/////////// SPECIALITIES ANIMATION /////////

let specialities = document.querySelector('.specialities');
specialities.style.opacity = '0';
specialities.style.transform = 'translateY(5rem)';

window.addEventListener(
  'scroll',
  function (event) {
    if (isTopInView(specialities, 0.9)) {
      setInterval(() => {
        specialities.style.transform = 'translateY(0)';
        specialities.style.opacity = '1';
      }, 300);
    }
  },
  false
);

/////////// COURSES ANIMATION /////////

let courses = document.querySelector('.courses');
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

/////////// RISE ANIMATION /////////

let sectionRise = document.querySelector('.rise');
let sectionPic = document.querySelector('.rise__img');
let sectionH2 = document.querySelector('.rise__text--h2');
let sectionP = document.querySelector('.rise__text--p');

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

/////////// ACADEMIC ANIMATION /////////

let academics = document.querySelector('.academics');
let academicsH1 = document.querySelector('.academics--h1');
let academicsBlock = document.querySelector('.academic-block');

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

/////////// CERTIFICATION ANIMATION /////////

let certification = document.querySelector('.certification');
let certificationH1 = document.querySelector('.certification--h1');
let certificationBlock = document.querySelector('.certification-block');

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

/////////// CLUBS ANIMATION /////////

let clubs = document.querySelector('.clubs');
let clubsItem = document.querySelectorAll('.clubs-item');
let clubsFrame = document.querySelectorAll('.clubs-item__frame');

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
      }, 300 * i + 300);
    }
  }
});
