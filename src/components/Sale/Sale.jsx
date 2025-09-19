import React from 'react';
import styles from './Sale.module.css';

export default function Sale() {
  return (
    <section className={styles.saleSectionMain} id="sale">
      <div className={`container ${styles.sale}`}>
        <h2 className={styles.saleMain}>Sale</h2>
        <div className={styles.saleSection}>
          <div className={styles.salePhotosAll}>
            <div className={styles.salePhotos}>
              <ul className={styles.salePhotosList}>
                <li className={styles.salePhotosItem}>
                  <img
                    className={`${styles.img} ${styles.watchesFirst}`}
                    src="/images/sale/watch-5-min.png"
                    srcSet="/images/sale/watch-5-min.png 1x, ./images/sale/watch-5@2x-min.png 2x"
                    alt="watches"
                    width="52"
                  />
                </li>
                <li className={styles.salePhotosItem}>
                  <img
                    className={`${styles.img} ${styles.watchesFirst}`}
                    src="/images/sale/watch-4-min.png"
                    srcSet="/images/sale/watch-4-min.png 1x, ./images/sale/watch-4@2x-min.png 2x"
                    alt="watches"
                    width="52"
                  />
                </li>
                <li className={styles.salePhotosItem}>
                  <img
                    className={`${styles.img} ${styles.watchesFirst}`}
                    src="/images/sale/watch-2-min.png"
                    srcSet="/images/sale/watch-2-min.png 1x, ./images/sale/watch-2@2x-min.png 2x"
                    alt="watches"
                    width="52"
                  />
                </li>
                <li className={styles.salePhotosItem}>
                  <img
                    className={`${styles.img} ${styles.watchesFirst}`}
                    src="/images/sale/watch-3-min.png"
                    srcSet="/images/sale/watch-3-min.png 1x, ./images/sale/watch-3@2x-min.png 2x"
                    alt="watches"
                    width="52"
                  />
                </li>
              </ul>
            </div>
            <div className={styles.bigPhoto}>
              <img
                className={`${styles.img} ${styles.watchesMain}`}
                src="/images/sale/watch-1-min.png"
                srcSet="/images/sale/watch-1-min.png 1x, /images/sale/watch-1@2x-min.png 2x"
                alt="watches"
                width="235"
              />
            </div>
          </div>
          <div className={styles.saleText}>
            <div className={styles.saleTable}>
              <h3 className={styles.saleHero}>
                MARQ® Commander (Gen 2) - Carbon Edition
              </h3>
              <p className={styles.saleHeroPar}>Product tag: 928473</p>
            </div>
            <ul className={styles.salePricesList}>
              <li className={styles.salePricesItemAng}>
                <p className={styles.salePriceAction}>€2,847</p>
              </li>
              <li className={styles.salePricesItem}>
                <p className={styles.salePrice}>€4,692</p>
              </li>
            </ul>
            <p className={styles.saleParagraph}>
              The Garmin MARQ Commander Gen 2 Carbon Edition is a modern
              smartwatch for adventurers that takes materials and features to
              the next level. The body of the watch is made of very durable
              Fused Carbon Fiber material and has a precise AMOLED touch screen.
              The sensitive touch screen is complemented by buttons that can be
              used in any conditions.
            </p>
            <ul className={styles.saleSpecList}>
              <li className={styles.saleSpecItem}>
                <p className={styles.saleSpecPar}>Fused carbon fiber</p>
              </li>
              <li className={styles.saleSpecItem}>
                <p className={styles.saleSpecPar}>Grade-5 Titanuim</p>
              </li>
              <li className={styles.saleSpecItem}>
                <p className={styles.saleSpecPar}>Athlete</p>
              </li>
              <li className={styles.saleSpecItem}>
                <p className={styles.saleSpecPar}>Golfer</p>
              </li>
              <li className={styles.saleSpecItem}>
                <p className={styles.saleSpecPar}>Commander</p>
              </li>
              <li className={styles.saleSpecItem}>
                <p className={styles.saleSpecPar}>Adventurer</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
