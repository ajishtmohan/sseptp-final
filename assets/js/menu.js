'use strict';

let siteLinks = document.querySelector('.nav');
// console.log(siteLinks);
siteLinks.innerHTML = `
<input type="checkbox" name="" id="nav-toggle" />

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
    <div class="sitelinks__logo">
      <img src="assets/img/sse-logo.svg" alt="" />
    </div>

    <div class="sitelinks__links">
      <ul class="site-link-main">
        <li class="site-link-main__item">
          <a href="index.html">Home</a>
        </li>
        <li class="site-link-main__item">
          <a href="#">About Us ↓</a>
          <ul class="site-link-sub">
            <div class="sub-menu-panel"></div>
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
              <a href="principal-message.html">Principal&nbsp;Message</a>
            </li>
            <li class="site-link-sub__item">
              <a href="secretary-message.html">Secretary&nbsp;Message</a>
            </li>
            <li class="site-link-sub__item">
              <a href="industry-interface.html"
                >Industry&nbsp;Interface</a
              >
            </li>
            <li class="site-link-sub__item">
              <a href="recognition-affiliation.html"
                >Affiliation&nbsp;& Recognition
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
              <a href="#"
                >Courses <span class="right-arrow">&#8594;</span></a
              >
              <ul class="site-link-sub-sec">
                <li class="site-link-sub-sec__item">
                  <a href="courses.html">All Courses </a>
                </li>
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
                >Value&nbsp;added Courses
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
<div class="mobile-nav">
  <div class="mobile-nav__header">
    <div class="mobile-nav__logo">
      <a href="index.html">
        <img src="assets/img/sse-logo.svg" alt=""
      /></a>
    </div>
    <label for="nav-toggle" class="icon-burger">
      <div class="icon-burger__line"></div>
      <div class="icon-burger__line"></div>
      <div class="icon-burger__line"></div>
    </label>
  </div>
</div>
<div class="menu-panel"></div>`;
