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
      }, 100 * i + 100);
    }
  }
});
