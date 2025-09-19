import React from 'react';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <section id="about-us" className={styles.aboutUsSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.aboutUsCard}>
          <h3 className={styles.aboutUsCardTitle}>About Us</h3>
          <ul className={styles.aboutUsDescriptionList}>
            <li>
              <p className={styles.aboutUsDescriptionText}>
                Welcome to our premium watch collection, where luxury and style
                meet functionality and precision. Our selection of timepieces
                embodies the very best in Swiss craftsmanship and engineering,
                ensuring that you'll always have a reliable and stylish
                accessory on your wrist.
              </p>
            </li>
            <li>
              <p className={styles.aboutUsDescriptionText}>
                At our premium watch collection, we believe that a watch is more
                than just a timekeeping device — it's a statement piece that
                reflects your personality and style. So why settle for anything
                less than the best?
              </p>
            </li>
          </ul>
          <a href="#catalog" className={styles.viewCatalogButton}>
            View catalog
          </a>
        </div>

        <div className={styles.aboutUsImageCont}>
          <picture>
            <source
              media="(min-width:1280px)"
              srcSet="/img/about-us-img/about-us-desktop-1x.webp 1x, /img/about-us-img/about-us-desktop-2x.webp 2x"
            />
            <source
              media="(min-width:768px)"
              srcSet="/img/about-us-img/about-us-pad-1x.webp 1x, /img/about-us-img/about-us-pad-2x.webp 2x"
            />
            <source
              media="(max-width:767px)"
              srcSet="/img/about-us-img/about-us-mobi-1x.webp 1x, /img/about-us-img/about-us-mobi-2x.webp 2x"
            />
            <img
              src="/img/about-us-img/about-us-mobi-1x.webp"
              alt="images for app"
              width="704"
              height="512"
              className={styles.aboutUsImage}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
