import React from 'react';
import styles from './Reviews.module.css';

export default function Reviews() {
  return (
    <section className={styles.secReviews} id="reviews">
      <div className={`container ${styles.divReviews}`}>
        <h2 className={styles.revH2}>Reviews</h2>
        <ul className={styles.revUl}>
          <li className={styles.revLi}>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet="/images/reviews/John-min.jpg 1x, /images/reviews/John2x-min.jpg 2x"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/images/reviews/John-min.jpg 1x, /images/reviews/John2x-min.jpg 2x"
              />
              <source
                media="(max-width: 767px)"
                srcSet="/images/reviews/John-min.jpg 1x, /images/reviews/John2x-min.jpg 2x"
              />
              <img
                className={styles.liImg}
                src="/images/reviews/John-min.jpg"
                alt="John Wax"
              />
            </picture>
            <h3 className={styles.ulLiH}>John Wax</h3>
            <p className={styles.liP}>
              Buying a watch from was the best choice for me. The design is
              perfectly combined with high quality materials. The strap fits
              nicely on the hand, and the mechanism works flawlessly.
            </p>
          </li>

          <li className={`${styles.revLi} ${styles.liTablet}`}>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet="/images/reviews/Viktoria-min.jpg 1x, /images/reviews/Viktoria2x-min.jpg 2x"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/images/reviews/Viktoria-min.jpg 1x, /images/reviews/Viktoria2x-min.jpg 2x"
              />
              <source
                media="(max-width: 767px)"
                srcSet="/images/reviews/Viktoria-min.jpg 1x, /images/reviews/Viktoria2x-min.jpg 2x"
              />
              <img
                className={styles.liImg}
                src="/images/reviews/Viktoria-min.jpg"
                alt="Victoria Romashenko"
              />
            </picture>
            <h2 className={styles.ulLiH}>Victoria Romashenko</h2>
            <p className={styles.liP}>
              Can't take my eyes off my watch from. Every time I put it on, it
              is admired by those around me. The build quality and attention to
              detail make it a real gem among my accessories.
            </p>
          </li>

          <li className={`${styles.revLi} ${styles.liDesktop}`}>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet="/images/reviews/Anastasia-min.jpg 1x, /images/reviews/Anastasia2x-min.jpg 2x"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/images/reviews/Anastasia-min.jpg 1x, /images/reviews/Anastasia2x-min.jpg 2x"
              />
              <source
                media="(max-width: 767px)"
                srcSet="/images/reviews/Anastasia-min.jpg 1x, /images/reviews/Anastasia2x-min.jpg 2x"
              />
              <img
                className={styles.liImg}
                src="/images/reviews/Anastasia-min.jpg"
                alt="Anastasia Trachuk"
              />
            </picture>
            <h2 className={styles.ulLiH}>Anastasia Trachuk</h2>
            <p className={styles.liP}>
              My watch from is a real masterpiece. Every detail impresses with
              the high quality of execution. Special features like [specify
              features] make it an indispensable companion in my daily life.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
