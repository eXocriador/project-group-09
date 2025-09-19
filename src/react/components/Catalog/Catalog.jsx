import React from 'react';
import styles from './Catalog.module.css';

export default function Catalog() {
  return (
    <section className={styles.catalog} id="catalog">
      <div className="container">
        <h2 className={styles.catalogTitle}>Catalog</h2>
        <ul className={styles.catalogList}>
          <li className={styles.catalogItem}>
            <div className={styles.catalogImgContainer}>
              <picture className={styles.catalogPicture}>
                <source
                  media="(min-width:1280px)"
                  srcSet="/img/catalog/fenixpro.png 1x, /img/catalog/fenixpro-2x.png 2x"
                />
                <source
                  media="(min-width:768px)"
                  srcSet="/img/catalog/fenixpro-tab.png 1x, /img/catalog/fenixpro-tab2x.png 2x"
                />
                <source
                  media="(max-width:767px)"
                  srcSet="/img/catalog/fenixpro-mob.png 1x, /img/catalog/fenixpro-mob2x.png 2x"
                />
                <img
                  src="/img/catalog/fenixpro.png"
                  alt="Garmin Fenix 7X Pro Sapphire Solar"
                  width="292"
                  height="292"
                  className={styles.catalogImg}
                />
              </picture>
            </div>
            <div className={styles.catalogItemWrapper}>
              <p className={styles.catalogName}>
                Garmin Fenix 7X Pro Sapphire Solar
              </p>
              <p className={styles.catalogText}>€500</p>
            </div>
          </li>

          <li className={styles.catalogItem}>
            <div className={styles.catalogImgContainer}>
              <picture className={styles.catalogPicture}>
                <source
                  media="(min-width:1280px)"
                  srcSet="/img/catalog/marq.png 1x, /img/catalog/marq-2x.png 2x"
                />
                <source
                  media="(min-width:768px)"
                  srcSet="/img/catalog/marq-tab.png 1x, /img/catalog/marq-tab2x.png 2x"
                />
                <source
                  media="(max-width:767px)"
                  srcSet="/img/catalog/marq-mob.png 1x, /img/catalog/marq-mob2x.png 2x"
                />
                <img
                  src="/img/catalog/marq.png"
                  alt="Garmin Marq Athlete"
                  width="292"
                  height="292"
                  className={styles.catalogImg}
                />
              </picture>
            </div>
            <div className={styles.catalogItemWrapper}>
              <p className={styles.catalogName}>Garmin Marq Athlete</p>
              <p className={styles.catalogText}>€450</p>
            </div>
          </li>

          <li className={styles.catalogItem}>
            <div className={styles.catalogImgContainer}>
              <picture className={styles.catalogPicture}>
                <source
                  media="(min-width:1280px)"
                  srcSet="/img/catalog/descent.png 1x, /img/catalog/descent-2x.png 2x"
                />
                <source
                  media="(min-width:768px)"
                  srcSet="/img/catalog/descent-tab.png 1x, /img/catalog/descent-tab2x.png 2x"
                />
                <source
                  media="(max-width:767px)"
                  srcSet="/img/catalog/descent-mob.png 1x, /img/catalog/descent-mob2x.png 2x"
                />
                <img
                  src="/img/catalog/descent.png"
                  alt="Garmin Descent MK1"
                  width="292"
                  height="292"
                  className={styles.catalogImg}
                />
              </picture>
            </div>
            <div className={styles.catalogItemWrapper}>
              <p className={styles.catalogName}>Garmin Descent MK1</p>
              <p className={styles.catalogText}>€680</p>
            </div>
          </li>

          <li className={styles.catalogItem}>
            <div className={styles.catalogImgContainer}>
              <picture className={styles.catalogPicture}>
                <source
                  media="(min-width:1280px)"
                  srcSet="/img/catalog/d2.png 1x, /img/catalog/d2-2x.png 2x"
                />
                <source
                  media="(min-width:768px)"
                  srcSet="/img/catalog/d2-tab.png 1x, /img/catalog/d2-tab2x.png 2x"
                />
                <source
                  media="(max-width:767px)"
                  srcSet="/img/catalog/d2-mob.png 1x, /img/catalog/d2-mob2x.png 2x"
                />
                <img
                  src="/img/catalog/d2.png"
                  alt="Garmin D2 Delta PX"
                  width="292"
                  height="292"
                  className={styles.catalogImg}
                />
              </picture>
            </div>
            <div className={styles.catalogItemWrapper}>
              <p className={styles.catalogName}>Garmin D2 Delta PX</p>
              <p className={styles.catalogText}>€380</p>
            </div>
          </li>

          <li className={`${styles.catalogItem} ${styles.catalogNone}`}>
            <div className={styles.catalogImgContainer}>
              <picture className={styles.catalogPicture}>
                <source
                  media="(min-width:1280px)"
                  srcSet="/img/catalog/fenix6.png 1x, /img/catalog/fenix6-2x.png 2x"
                />
                <source
                  media="(min-width:768px)"
                  srcSet="/img/catalog/fenix6-tab.png 1x, /img/catalog/fenix6-tab2x.png 2x"
                />
                <source
                  media="(max-width:767px)"
                  srcSet="/img/catalog/fenix6-mob.png 1x, /img/catalog/fenix6-mob2x.png 2x"
                />
                <img
                  src="/img/catalog/fenix6.png"
                  alt="Garmin Fenix 6 Pro Solar"
                  width="292"
                  height="292"
                  className={styles.catalogImg}
                />
              </picture>
            </div>
            <div className={styles.catalogItemWrapper}>
              <p className={styles.catalogName}>Garmin Fenix 6 Pro Solar</p>
              <p className={styles.catalogText}>€400</p>
            </div>
          </li>

          <li className={`${styles.catalogItem} ${styles.catalogNone}`}>
            <div className={styles.catalogImgContainer}>
              <picture className={styles.catalogPicture}>
                <source
                  media="(min-width:1280px)"
                  srcSet="/img/catalog/watch.png 1x, /img/catalog/watch-2x.png 2x"
                />
                <source
                  media="(min-width:768px)"
                  srcSet="/img/catalog/watch-tab.png 1x, /img/catalog/watch-tab2x.png 2x"
                />
                <source
                  media="(max-width:767px)"
                  srcSet="/img/catalog/watch-mob.png 1x, /img/catalog/watch-mob2x.png 2x"
                />
                <img
                  src="/img/catalog/watch.png"
                  alt="Tube Watch S42 Date Steel With Black Case"
                  width="292"
                  height="292"
                  className={styles.catalogImg}
                />
              </picture>
            </div>
            <div className={styles.catalogItemWrapper}>
              <p className={styles.catalogName}>
                Tube Watch S42 Date Steel With Black Case
              </p>
              <p className={styles.catalogText}>€395</p>
            </div>
          </li>
        </ul>
        <button
          className={`${styles.catalogBtn} ${styles.catalogBtnNone}`}
          type="button"
        >
          Show more
        </button>
      </div>
    </section>
  );
}
