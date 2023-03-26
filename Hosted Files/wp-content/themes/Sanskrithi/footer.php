<section class="section-subscribe">
      <label for="sub-email">Subscribe to Sanskrithi Newsletter</label>
      <input type="email" id="sub-email" placeholder="Email Address" />
      <input type="submit" />
    </section>

    <footer class="footer">
      <div class="container-content">
        <div class="footer-item">
          <img src="<?php echo get_theme_file_uri('/assets/img/sse-logo.svg') ?>" alt="" />
          <h1>Sanskrithi School of Engineering</h1>
          <p>
            Beedupalli, Knowledgepark, Prasanthigram, Puttaparthi, Andhra
            Pradesh 515134
          </p>
          <p class="footer-item__contact">
            +91 9100064545 / 9100974516 <br />
            enquiry@sseptp.org
          </p>
      <div class="footer-item__sm">
            <a href="https://www.facebook.com/sseptp/" target="_blank"
              ><img src="<?php echo get_theme_file_uri('/assets/img/sm-fb.svg') ?>" alt="" /></a>
            <a
              href="https://www.linkedin.com/in/sgiputtaparthi/"
              target="_blank"
              ><img src="<?php echo get_theme_file_uri('/assets/img/sm-li.svg') ?>" alt="" /></a>
            <a href="https://www.instagram.com/sgiptpofficial/" target="_blank"
              ><img src="assets/img/sm-in.svg" alt=""
            /><img src="<?php echo get_theme_file_uri('/assets/img/sm-in.svg') ?>" alt="" /></a>
            <a href="https://twitter.com/SanskrithiGroup" target="_blank"
              ><img src="<?php echo get_theme_file_uri('/assets/img/sm-tw.svg') ?>" alt="" /></a>
          </div>
        </div>
        <div class="footer-item footer-item-2">
          <h1>OUR CAMPUS</h1>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT SSE</a></li>
            <li><a href="#">ACADEMICS</a></li>
            <li><a href="#">PLACEMENTS</a></li>
            <li><a href="#">IQAC</a></li>
            <li><a href="#">COMMITTIES</a></li>
            <li><a href="#">FACILITIES</a></li>
            <li><a href="#">SSE MEDIA</a></li>
            <li><a href="#">MANDATORIES</a></li>
            <li><a href="#">ALUMNI</a></li>
          </ul>
        </div>
        <div class="footer-item footer-item-3">
          <h1>ACADEMICS</h1>
          <ul>
            <li><a href="#">Computer Science & Engineering (SOSO)</a></li>
            <li>
              <a href="#">Electronics & Communication Engineering (SLICE)</a>
            </li>
            <li><a href="#">Electrical & Electronics Engineering (PPP)</a></li>
            <li><a href="#">Mechanical Engineering(SMILE)</a></li>
            <li><a href="#">Civil Engineering(FORCE)</a></li>
            <li><a href="#">Physics Department</a></li>
            <li><a href="#">Chemistry Department</a></li>
            <li><a href="#">Mathematics Department</a></li>
          </ul>
        </div>
        <div class="footer-item footer-item-4">
          <h1>FACILITIES</h1>
          <p>
            SSE is encapsulated in exquisite and aesthetically designed
            architecture which state-of-the-art computer and internet
            facilities, seminar halls, modern workshop, auditorium and
            well-stocked libraries along with sports.
          </p>
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/RTlMoRGzD4w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    </footer>

    <div class="section-copyright">
      <div class="copyright">
        <p class="copyright__year">
          <script>
            (function () {
              document.querySelector(
                '.copyright__year'
              ).textContent = `All Right Reserved © ${new Date().getFullYear()} | Sanskrithi School of Engineering`;
            })();
          </script>
        </p>
        <p>Contact Developer</p>
      </div>
    </div>




<?php wp_footer(); ?>
</body>
</html>