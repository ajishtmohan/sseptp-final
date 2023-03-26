<?php get_header(); ?>

<div class="header">
    <div class="header__background"></div>
<div class="header__slider">
        <div class="header__slider--container">
          <div class="slides">
            <?php 
		       echo do_shortcode('[slide-anything id="995"]');
		    ?>
          </div>
        </div>
      </div>
    </div>

    <!-- Secondary Quick Links -->
    <div class="secondary-links">
      <div class="secondary-links-container">
        <div class="secondary-card">
          <div class="secondary-card__front">
            <img
              src="<?php echo get_theme_file_uri('/assets/img/q-heritage.svg') ?>"
              alt=""
              class="secondary-card__front--img"
            />
            <h3 class="secondary-card__front--h3">Our Heritage</h3>
          </div>
          <div class="secondary-card__back">
            <img
            src="<?php echo get_theme_file_uri('/assets/img/q-heritage.svg') ?>"
              alt=""
              class="secondary-card__back--img"
            />
            <a href="/about-us/our-heritage/" class="secondary-card__back--link">know more</a>
          </div>
        </div>

        <div class="secondary-card">
          <div class="secondary-card__front">
            <img
              src="<?php echo get_theme_file_uri('/assets/img/q-agreement.svg') ?>"
              alt=""
              class="secondary-card__front--img"
            />
            <h3 class="secondary-card__front--h3">Affiliations</h3>
          </div>
          <div class="secondary-card__back">
            <img
              src="<?php echo get_theme_file_uri('/assets/img/q-agreement.svg') ?>"
              alt=""
              class="secondary-card__back--img"
            />
            <a href="/about-us/affiliation-and-recognition/" class="secondary-card__back--link">know more</a>
          </div>
        </div>

        <div class="secondary-card">
          <div class="secondary-card__front">
            <img
              src="<?php echo get_theme_file_uri('/assets/img/q-facility.svg') ?>"
              alt=""
              class="secondary-card__front--img"
            />
            <h3 class="secondary-card__front--h3">Facilities</h3>
          </div>
          <div class="secondary-card__back">
            <img
            src="<?php echo get_theme_file_uri('/assets/img/q-facility.svg') ?>"
              alt=""
              class="secondary-card__back--img"
            />
            <a href="/facilities/sse-campus/" class="secondary-card__back--link">know more</a>
          </div>
        </div>

        <div class="secondary-card">
          <div class="secondary-card__front">
            <img
            src="<?php echo get_theme_file_uri('/assets/img/q-smedia.svg') ?>"
              alt=""
              class="secondary-card__front--img"
            />
            <h3 class="secondary-card__front--h3">Social Updates</h3>
          </div>
          <div class="secondary-card__back">
            <img
            src="<?php echo get_theme_file_uri('/assets/img/q-smedia.svg') ?>"
              alt=""
              class="secondary-card__back--img"
            />
            <a href="#" class="secondary-card__back--link">know more</a>
          </div>
        </div>
      </div>
    </div>

    <section class="whysse">
      <h1 class="whysse__h1">Why Sanskrithi School of Engineering?</h1>
      <p class="whysse__p">
        Sanskrithi School of Engineering strives for academic excellence.
        Innovative pedagogy, best placements, and faculty with vast industry
        experience, coupled with national & international collaborations, we
        offer engineering education of global standards.
      </p>
    </section>

    <section class="specialities">
      <!-- Faculty -->
      <div class="specialities__item">
        <div class="specialities__item--overlay"></div>
        <div class="specialities__item--orange"></div>
        <img
        src="<?php echo get_theme_file_uri('/assets/img/SSE Faculties.jpg') ?>"

          alt=""
          class="specialities__item--img"
        />
        <div class="specialities__text">
          <h2 class="specialities__text--h2">World Class Faculty</h2>
          <p class="specialities__text--p">
            Employment-centric curriculum as per industry expectations.
          </p>
          <p class="specialities__text--link"><a href="/academics/sse-faculty/">know more</a></p>
        </div>
      </div>

      <!-- Specialization -->
      <div class="specialities__item">
        <div class="specialities__item--overlay"></div>
        <div class="specialities__item--orange"></div>
        <img
        src="<?php echo get_theme_file_uri('/assets/img/Value Added Courses.jpg') ?>"
          alt=""
          class="specialities__item--img"
        />
        <div class="specialities__text">
          <h2 class="specialities__text--h2">Value Added Courses</h2>
          <p class="specialities__text--p">
            Skill development courses from accredited trainers.
          </p>
          <p class="specialities__text--link"><a href="/academics/value-added-courses/">know more</a></p>
        </div>
      </div>

      <!-- Recruitments -->
      <div class="specialities__item">
        <div class="specialities__item--overlay"></div>
        <div class="specialities__item--orange"></div>
        <img
        src="<?php echo get_theme_file_uri('/assets/img/Placementhome.jpg') ?>"
          alt=""
          class="specialities__item--img"
        />
        <div class="specialities__text">
          <h2 class="specialities__text--h2">Placements</h2>
          <p class="specialities__text--p">
            Training and Placement activities all-round the year.
          </p>
          <p class="specialities__text--link"><a href="/placements/">know more</a></p>
        </div>
      </div>

      <!-- Faculty -->
      <div class="specialities__item">
        <div class="specialities__item--overlay"></div>
        <div class="specialities__item--orange"></div>
        <img
        src="<?php echo get_theme_file_uri('/assets/img/SSE Campus.jpg') ?>"
          alt=""
          class="specialities__item--img"
        />
        <div class="specialities__text">
          <h2 class="specialities__text--h2">CAMPUS</h2>
          <p class="specialities__text--p">
            Safe, clean and peaceful residential facilities.
          </p>
          <p class="specialities__text--link"><a href="/facilities/sse-campus/">know more</a></p>
        </div>
      </div>
    </section>

    <section class="courses">
      <div class="course-container">
        <h1 class="course-container__h1">Courses</h1>
        <p class="course-container__p">
          SSE offers Bachelor of Technology in FIVE streams affiliated to JNTU-A
          and approved by AICTE. Certifications in the related streams are
          integrated into the curriculum to encourage hands-on learning and meet
          industry standards.
        </p>
        <div class="course-block">
          <div class="course-block__item">
            <div class="course-block__item--text">
              <h3>Computer Science & Engineering<br />(SOSO)</h3>
              <a href="/academics/courses/computer-science-and-engineering/">know more</a>
            </div>
          </div>

          <div class="course-block__item">
            <div class="course-block__item--text">
              <h3>Electronics & Communication Engineering (SLICE)</h3>
              <a href="/academics/courses/electronics-and-communication-engineering/">know more</a>
            </div>
          </div>
          <div class="course-block__item">
            <div class="course-block__item--text">
              <h3>Electrical & Electronics Engineering (PPP)</h3>
              <a href="/academics/courses/electrical-electronics-engineering-ppp/">know more</a>
            </div>
          </div>
          <div class="course-block__item">
            <div class="course-block__item--text">
              <h3>
                Mechanical Engineering <br />
                (SMILE)
              </h3>
              <a href="/academics/courses/mechanical-engineering-smile/">know more</a>
            </div>
          </div>
          <div class="course-block__item">
            <div class="course-block__item--text">
              <h3>
                Civil Engineering <br />
                (FORCE)
              </h3>
              <a href="/academics/courses/civil-engineering/">know more</a>
            </div>
          </div>
          <div class="course-block__item">
            <div class="course-block__item--text">
              <h3>
                Humanities <br />
                and Science
              </h3>
              <a href="/academics/courses/humanities-and-science/">know more</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-rise">
      <div class="rise">
        <div class="rise__img">
          <img src="<?php echo get_theme_file_uri('/assets/img/teacher.jpg') ?>" alt="" />
        </div>
        <div class="rise__text">
          <h2 class="rise__text--h2">
            Research Industrial Systems Engineering Enterprises – RISE, Austria.
          </h2>
          <p class="rise__text--p">
            "Research Industrial Systems Engineering, RISE, Europe, is a leading
            challenger in building serious, competitive or very large digital
            systems worldwide. A spin off from the renowned Vienna University of
            Technology, RISE & SSE have an MoU was signed, outlining the
            establishment of a long–term cooperative endeavor intended to create
            mutually advantageous relationships in academics, training and
            research."
          </p>
          <p class="rise__text--link"><a href="/academics/academics-rit-program">know more</a></p>
        </div>
      </div>
    </section>

    <section class="academics">
      <h1 class="academics--h1">Academic Partners</h1>
      <div class="academic-block">
        <div class="academic-block__item">
          <img
            class="academic-block__item--img"
            src="<?php echo get_theme_file_uri('/assets/img/a-rise.jpg') ?>"
            alt=""
          />
        </div>
        <div class="academic-block__item">
          <img
            class="academic-block__item--img"
            src="<?php echo get_theme_file_uri('/assets/img/a-iaeste.jpg') ?>"
            alt=""
          />
        </div>
        <div class="academic-block__item">
          <img
            class="academic-block__item--img"
            src="<?php echo get_theme_file_uri('/assets/img/a-indiaspark.jpg') ?>"
            alt=""
          />
        </div>
        <div class="academic-block__item">
          <img
            class="academic-block__item--img"
            src="<?php echo get_theme_file_uri('/assets/img/a-startup.jpg') ?>"
            alt=""
          />
        </div>
        <div class="academic-block__item">
          <img
            class="academic-block__item--img"
            src="<?php echo get_theme_file_uri('/assets/img/a-eduskill.jpg') ?>"
            alt=""
          />
        </div>
        <div class="academic-block__item">
          <img
            class="academic-block__item--img"
            src="<?php echo get_theme_file_uri('/assets/img/a-quantum.jpg') ?>"
            alt=""
          />
        </div>
        <div class="academic-block__item">
          <img
            class="academic-block__item--img"
            src="<?php echo get_theme_file_uri('/assets/img/a-apskill.jpg') ?>"
            alt=""
          />
        </div>
        <div class="academic-block__item">
          <img
            class="academic-block__item--img"
            src="<?php echo get_theme_file_uri('/assets/img/a-inso.jpg') ?>"
            alt=""
          />
        </div>
      </div>
    </section>

    <section class="certification">
      <h1 class="certification--h1">Certification Courses</h1>
      <div class="certification-block">
        <div class="certification-block__item">
          <img
            class="certification-block__item--img"
            src="<?php echo get_theme_file_uri('/assets/img/c-aws.jpg') ?>"
            alt=""
          />
        </div>
        <div class="certification-block__item">
          <img
            class="certification-block__item--img"
            src="<?php echo get_theme_file_uri('/assets/img/c-paloalto.jpg') ?>"
            alt=""
          />
        </div>
        <div class="certification-block__item">
          <img
            class="certification-block__item--img"
            src="<?php echo get_theme_file_uri('/assets/img/c-redhat.jpg') ?>"
            alt=""
          />
        </div>
        <div class="certification-block__item">
          <img
            class="certification-block__item--img"
            src="<?php echo get_theme_file_uri('/assets/img/c-cisco.jpg') ?>"
            alt=""
          />
        </div>
        <div class="certification-block__item">
          <img
            class="certification-block__item--img"
            src="<?php echo get_theme_file_uri('/assets/img/c-micro.jpg') ?>"
            alt=""
          />
        </div>
        <div class="certification-block__item">
          <img
            class="certification-block__item--img"
            src="<?php echo get_theme_file_uri('/assets/img/c-blue.jpg') ?>"
            alt=""
          />
        </div>
        <div class="certification-block__item">
          <img
            class="certification-block__item--img"
            src="<?php echo get_theme_file_uri('assets/img/c-auto.jpg') ?>"
            alt=""
          />
        </div>
      </div>
    </section>

    <section class="clubs">
      <div class="clubs-item">
        <h2 class="clubs-item__h2">Clubs</h2>
        <p>
          Students’ clubs provide a forum for interaction among themselves. The
          clubs bring about a good balance of work, fun and leisure activities
          and ensure the all-round development of students.
        </p>
        <p><a href="/iqac/clubs/">know more</a></p>
      </div>
      <div class="clubs-item">
        <div class="clubs-item__overlay"></div>
        <h2 class="clubs-item__h2">Research & Innovation</h2>
        <p>
          Aims to continuously liaise with various funding agencies, R&D
          institutions, industries and faculty members for undertaking
          innovative research
        </p>
        <p><a href="/committies/research-and-advanced-studies/">know more</a></p>
      </div>
      <div class="clubs-item">
        <div class="clubs-item__overlay"></div>
        <h2 class="clubs-item__h2">Scholarships & Financial Aid</h2>
        <p>
          Sai Prudent scholarship, aided by Anahata Stiftung (Germany) & RISE
          (Austria) is offered on selection on merit basis every year to
          deserving students. Schorship amount: One lakh/year.
        </p>
        <p><a href="/academics/scholarship-financial-aid/">know more</a></p>
      </div>
    </section>

    <section class="apply">
      <div class="apply-block">
        <div class="apply-block__img">
          <img src="/wp-content/uploads/2022/08/admissions.jpg" alt="" />
        </div>
        <div class="apply-block__text">
          <h1>Apply for Admission</h1>
          <h3>2022-23 applications are now open</h3>
          <p>
            We don’t just give students an education and experiences that set
            them up for success in a career. We help them succeed in their
            career — to discover a field they’re passionate about and dare to
            lead it.
          </p>
          <p><a href="#">join Sanskrithi</a></p>
        </div>
      </div>
    </section>

    <section class="section-recognition">
      <h1>Recognitions & Affiliations</h1>
      <p>
        Sanskrithi School of Engineering has entered into Memoranda of
        Understanding with many corporate and industrial organizations to
        strengthen the skill sets it provides its students. Ranging from
        educational material to soft skills that improve the employability of
        the students, these MOUs will help SSE (to) create character-shaping and
        life changing training modules for students, helping them garner more
        success in life – as employees and as human beings.
      </p>
    </section>

    <section class="section-news">
      <h1>Latest News & Events</h1>
      <div class="news-block">
      <?php
        $my_query = new WP_Query('showposts=4');
        while ($my_query->have_posts()): $my_query->the_post();
      ?>      
        <div class="news-item">
          <div class="news-item__img">
            <img src=<?php the_post_thumbnail(); ?>
          </div>
          <div class="news-item__text">
            <h3><?php the_title() ?></h3>

            <p>
              <a href="<?php the_permalink() ?>">read more</a>
            </p>
          </div>
        </div>

      <?php endwhile; ?>
      </div>


      <p><a href="<?php echo site_url('/blogs'); ?>">read more articles</a></p>
    </section>

<?php get_footer(); ?>