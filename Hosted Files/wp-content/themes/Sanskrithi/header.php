<!doctype html>

<head>
  <?php wp_head(); ?>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/x-icon" href="<?php echo get_theme_file_uri('assets/img/favicon.ico'); ?>">
</head>
<body>
<div class="nav">
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
            <li class="quicklinks__right--item"><a href="https://webprosindia.com/sanskrithi/AdminMaster1.aspx?licExp=False" target="_blank">portal</a></li>
            <li class="quicklinks__right--item">
              <a href="http://117.192.230.74/moodle/" target="_blank">moodle login</a>
            </li>
            <li class="quicklinks__right--item">
              <a href="#">degree verification</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="site-menu">
        <div class="sitelinks">
          <a href="<?php echo site_url(); ?>">
            <div class="sitelinks__logo">
              <img src="<?php echo get_theme_file_uri('assets/img/sse-logo.svg'); ?>" alt="" /></div
          ></a>
          <div class="sitelinks__links">
            <ul class="site-link-main">
              <li class="site-link-main__item">
                <a href="<?php echo site_url(); ?>">Home</a>
              </li>
              <li class="site-link-main__item">
                <a href="#">About Us ↓</a>
                <ul class="site-link-sub">
                  <div class="sub-menu-panel"></div>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/our-heritage'); ?>">Our&nbsp;Heritage </a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/about-us/vision-and-vision/'); ?>"
                      >Vision&nbsp;&&nbsp;Mission</a
                    >
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/about-us/chairman-message/'); ?>">Chairman&nbsp;Message</a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/about-us/dean-message'); ?>">Dean&nbsp;Message</a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/about-us/principal-message'); ?>">Principal&nbsp;Message</a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/about-us/secretary-message'); ?>">Secretary&nbsp;Message</a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/about-us/industry-interface'); ?>"
                      >Industry&nbsp;Interface</a
                    >
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/about-us/affiliation-and-recognition'); ?>"
                      >Affiliation&nbsp;& Recognition
                    </a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/about-us/governing-body'); ?>">Governing&nbsp;Body</a>
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
                        <a href="<?php echo site_url('/all-courses'); ?>">All Courses </a>
                      </li>
                      <li class="site-link-sub-sec__item">
                        <a href="<?php echo site_url('/computer-science'); ?>"
                          >Computer Science & Engineering (SOSO)
                        </a>
                      </li>
                      <li class="site-link-sub-sec__item">
                        <a href="<?php echo site_url('/electronics-and-communication-engineering'); ?>"
                          >Electronics & Communication Engineering (SLICE)
                        </a>
                      </li>
                      <li class="site-link-sub-sec__item">
                        <a href="<?php echo site_url('/electrical-electronics'); ?>"
                          >Electrical & Electronics Engineering (PPP)
                        </a>
                      </li>
                      <li class="site-link-sub-sec__item">
                        <a href="<?php echo site_url('/mechanical-engineering'); ?>"
                          >Mechanical Engineering (SMILE)
                        </a>
                      </li>
                      <li class="site-link-sub-sec__item">
                        <a href="<?php echo site_url('/civil-engineering'); ?>"
                          >Civil Engineering (FORCE)
                        </a>
                      </li>
                      <li class="site-link-sub-sec__item">
                        <a href="<?php echo site_url('/humanities-and-science'); ?>"
                          >Humanities and Science
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/sse-faculty'); ?>">Faculty</a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/value-added-courses'); ?>"
                      >Value&nbsp;added Courses
                    </a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/examination'); ?>">Examinations </a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/syllabus'); ?>">Syllabus </a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/fee-structure'); ?>">Fee&nbsp;Structure </a>
                  </li>
                </ul>
              </li>
              <li class="site-link-main__item">
                <a href="<?php echo site_url('/placements'); ?>">Placements</a>
              </li>
              <li class="site-link-main__item">
                <a href="#">IQAC ↓</a>
                <ul class="site-link-sub">
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/iqac/members'); ?>">Members</a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/iqac/best-practices-at-sse/'); ?>">best&nbsp;practices&nbsp;at&nbsp;sse</a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/iqac/annual-report'); ?>">Annual&nbsp;Reports</a>
                  </li>
                </ul>
              </li>
              <li class="site-link-main__item">
                <a href="<?php echo site_url('/committies'); ?>">Committees</a>
              </li>
              <li class="site-link-main__item">
                <a href="#">Facilities ↓</a>
                <ul class="site-link-sub">
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/facilities/sse-campus'); ?>">Campus</a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/facilities/library'); ?>">library</a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/facilities/it-infrastructure'); ?>">IT&nbsp;Infrastructure</a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/facilities/sports-ground'); ?>">Sports&nbsp;Ground</a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/facilities/student-residential-facilities'); ?>">Residential&nbsp;Facilities</a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/facilities/transportation'); ?>">Transportation</a>
                  </li>
                </ul>
              </li>
              <li class="site-link-main__item">
                <a href="#">SSE Media ↓</a>
                <ul class="site-link-sub">
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/newsletters'); ?>">newsletters</a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/brochures'); ?>">brochures</a>
                  </li>
                  <li class="site-link-sub__item">
                    <a href="<?php echo site_url('/sse-newspaper-articles'); ?>"">sse&nbsp;newspaper articles</a>
                  </li>
                </ul>
              </li>
              <li class="site-link-main__item">
                <a href="<?php echo site_url('/mandataries'); ?>">Mandataries</a>
              </li>
              <li class="site-link-main__item"><a href="<?php echo site_url('/alumni'); ?>">Alumni</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mobile-nav">
        <div class="mobile-nav__header">
          <div class="mobile-nav__logo">
            <a href="<?php echo site_url(); ?>">
            <img src="<?php echo get_theme_file_uri('assets/img/sse-logo.svg'); ?>" alt="" /></a>
          </div>
          <label for="nav-toggle" class="icon-burger">
            <div class="icon-burger__line"></div>
            <div class="icon-burger__line"></div>
            <div class="icon-burger__line"></div>
          </label>
        </div>
      </div>
      <div class="menu-panel"></div>
    </div>
