import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection} id="hero">
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroSidesContainer}>
          <div className={styles.tabTextContainer}>
            <h1 className={styles.heroTitle}>
              Welcome to our <span className={styles.spanWord}>collection</span>{' '}
              of premium watches
            </h1>
            <p className={styles.heroText}>
              Our watches are not just timepieces, but also an expression of
              your personality and lifestyle. From classic designs to modern
              ones, we have a watch to suit every taste and occasion.
            </p>
          </div>

          <div className={styles.heroListContainer}>
            <ul className={styles.heroList}>
              <li className={styles.heroListItem}>
                <img
                  srcSet="/images/hero/team-1-min.jpg 1x, /images/hero/team-1@2x-min.jpg 2x"
                  src="/images/hero/team-1-min.jpg"
                  alt="women-one"
                  className={`${styles.heroSmlImage} ${styles.imageBottom}`}
                />
              </li>
              <li className={styles.heroListItem}>
                <img
                  srcSet="/images/hero/team-2-min.jpg 1x, /images/hero/team-2@2x-min.jpg 2x"
                  src="/images/hero/team-2-min.jpg"
                  alt="men-one"
                  className={`${styles.heroSmlImage} ${styles.imageMiddle}`}
                />
              </li>
              <li className={styles.heroListItem}>
                <img
                  srcSet="/images/hero/team-3-min.jpg 1x, /images/hero/team-3@2x-min.jpg 2x"
                  src="/images/hero/team-3-min.jpg"
                  alt="women-two"
                  className={`${styles.heroSmlImage} ${styles.imageTop}`}
                />
              </li>
            </ul>
            <a className={styles.heroScrollLink} href="#footer">
              Scroll down
            </a>
          </div>
        </div>

        <picture className={styles.heroImg}>
          <source
            media="(min-width: 1280px)"
            srcSet="/images/hero/hero-3-min.jpg 1x, /images/hero/hero-3@2x-min.jpg 2x"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/hero/hero-2-min.jpg 1x, /images/hero/hero-2@2x-min.jpg 2x"
          />
          <source
            media="(max-width:767px)"
            srcSet="/images/hero/hero-1-min.jpg 1x, /images/hero/hero-1@2x-min.jpg 2x"
          />
          <img src="/images/hero/hero-3-min.jpg" alt="watch" />
        </picture>
      </div>
    </section>
  );
}
