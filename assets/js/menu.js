'use strict';

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

let siteLinks = document.querySelector('.menu');
// console.log(siteLinks);
siteLinks.innerHTML = `<input type="checkbox" name="menu-button" id="menubtn" />
<div class="nav">
  <input type="checkbox" name="" id="nav-toggle" />
  <div class="menu-container">
    <div class="menu-background"></div>
    <div class="quick-menu">
      <!-- <p class="quick-title">Quick Links</p> -->
      <div class="quicklinks">
        <ul class="quicklinks__left">
          <li class="quicklinks__left--item"><a href="#">contact</a></li>
          <li class="quicklinks__left--item"><a href="#">apply now</a></li>
        </ul>
        <ul class="quicklinks__right">
          <li class="quicklinks__right--item"><a href="#">calendar</a></li>
          <li class="quicklinks__right--item"><a href="#">portal</a></li>
          <li class="quicklinks__right--item">
            <a href="#">moodle login</a>
          </li>
          <li class="quicklinks__right--item">
            <a href="#">degree verification</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="site-menu">
      <div class="sitelinks">
        <a href="index.html">
          <div class="sitelinks__logo">
            <img src="/assets/img/sse-logo.svg" alt="" /></div
        ></a>
        <div class="sitelinks__links">
          <ul class="site-link-main">
            <li class="site-link-main__item"><a href="#">Home</a></li>
            <li class="site-link-main__item">
              <a href="#">About Us ↓</a>
              <ul class="site-link-sub">
                <li class="site-link-sub__item">
                  <a href="our-heritage.html">Our&nbsp;Heritage </a>
                </li>
                <li class="site-link-sub__item">
                  <a href="our-vision-mission.html"
                    >Vision&nbsp;&&nbsp;Mission</a
                  >
                </li>
                <li class="site-link-sub__item">
                  <a href="chairman-message.html">Chairman&nbsp;Message</a>
                </li>
                <li class="site-link-sub__item">
                  <a href="dean-message.html">Dean&nbsp;Message</a>
                </li>
                <li class="site-link-sub__item">
                  <a href="principal-message.html"
                    >Principal&nbsp;Message</a
                  >
                </li>
                <li class="site-link-sub__item">
                  <a href="secretary-message.html"
                    >Secretary&nbsp;Message</a
                  >
                </li>
                <li class="site-link-sub__item">
                  <a href="industry-interface.html"
                    >Industry&nbsp;Interface</a
                  >
                </li>
                <li class="site-link-sub__item">
                  <a href="recognition-affiliation.html"
                    >Affiliation&nbsp;&&nbsp;Recognition
                  </a>
                </li>
                <li class="site-link-sub__item">
                  <a href="governing-body.html">Governing&nbsp;Body</a>
                </li>
              </ul>
            </li>
            <li class="site-link-main__item">
              <a href="#">Academics ↓</a>
              <ul class="site-link-sub">
                <li class="site-link-sub__item">
                  <a href="courses.html"
                    >Courses <span class="right-arrow">&#8594;</span></a
                  >
                  <ul class="site-link-sub-sec">
                    <li class="site-link-sub-sec__item">
                      <a href="computer-science.html"
                        >Computer Science & Engineering (SOSO)
                      </a>
                    </li>
                    <li class="site-link-sub-sec__item">
                      <a href="electronics-communication.html"
                        >Electronics & Communication Engineering (SLICE)
                      </a>
                    </li>
                    <li class="site-link-sub-sec__item">
                      <a href="electrical-electronics.html"
                        >Electrical & Electronics Engineering (PPP)
                      </a>
                    </li>
                    <li class="site-link-sub-sec__item">
                      <a href="mechanical-engineering.html"
                        >Mechanical Engineering (SMILE)
                      </a>
                    </li>
                    <li class="site-link-sub-sec__item">
                      <a href="civil-engineering.html"
                        >Civil Engineering (FORCE)
                      </a>
                    </li>
                    <li class="site-link-sub-sec__item">
                      <a href="humanities-science.html"
                        >Humanities and Science
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="site-link-sub__item">
                  <a href="sse-faculty.html">Faculty</a>
                </li>
                <li class="site-link-sub__item">
                  <a href="value-added-courses.html"
                    >Value&nbsp;added&nbsp;Courses
                  </a>
                </li>
                <li class="site-link-sub__item">
                  <a href="examinations.html">Examinations </a>
                </li>
                <li class="site-link-sub__item">
                  <a href="syllabus.html">Syllabus </a>
                </li>
                <li class="site-link-sub__item">
                  <a href="e-resources.html">Fee&nbsp;Structure </a>
                </li>
              </ul>
            </li>
            <li class="site-link-main__item">
              <a href="placements.html">Placements</a>
            </li>
            <li class="site-link-main__item">
              <a href="#">IQAC ↓</a>
              <ul class="site-link-sub">
                <li class="site-link-sub__item">
                  <a href="#">Members</a>
                </li>
                <li class="site-link-sub__item">
                  <a href="#">sse&nbsp;best&nbsp;practices</a>
                </li>
                <li class="site-link-sub__item">
                  <a href="#">Annual&nbsp;Reports</a>
                </li>
              </ul>
            </li>
            <li class="site-link-main__item">
              <a href="committees.html">Committies</a>
            </li>
            <li class="site-link-main__item">
              <a href="#">Facilities ↓</a>
              <ul class="site-link-sub">
                <li class="site-link-sub__item">
                  <a href="#">Campus</a>
                </li>
                <li class="site-link-sub__item">
                  <a href="#">library</a>
                </li>
                <li class="site-link-sub__item">
                  <a href="#">IT&nbsp;Infrastructure</a>
                </li>
                <li class="site-link-sub__item">
                  <a href="#">Sports&nbsp;Ground</a>
                </li>
                <li class="site-link-sub__item">
                  <a href="#">Residential&nbsp;Facilities</a>
                </li>
                <li class="site-link-sub__item">
                  <a href="#">Transport</a>
                </li>
              </ul>
            </li>
            <li class="site-link-main__item">
              <a href="#">SSE Media ↓</a>
              <ul class="site-link-sub">
                <li class="site-link-sub__item">
                  <a href="#">newsletters</a>
                </li>
                <li class="site-link-sub__item">
                  <a href="#">brochures</a>
                </li>
                <li class="site-link-sub__item">
                  <a href="#">sse&nbsp;newspaper articles</a>
                </li>
              </ul>
            </li>
            <li class="site-link-main__item">
              <a href="#">Mandataries</a>
            </li>
            <li class="site-link-main__item"><a href="#">Alumni</a></li>
          </ul>
        </div>
      </div>
    </div>
    <label for="nav-toggle" class="icon-burger">
      <div class="icon-burger__line"></div>
      <div class="icon-burger__line"></div>
      <div class="icon-burger__line"></div>
    </label>
  </div>
</div>`;
