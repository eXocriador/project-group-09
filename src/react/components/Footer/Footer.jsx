import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.footerWrapperStreitch}>
            <div className={styles.footerWrapperTablet}>
              <div className={styles.footerWrapperLogo}>
                <a href="index.html" className={styles.footerLogo}>
                  watchcharm
                </a>
                <ul className={styles.footerSocials}>
                  <li className={styles.footerSocialsItem}>
                    <a
                      className={styles.footerSocialsLinks}
                      href="https://www.facebook.com/goITclub/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className={styles.footerSocialsIcon}
                        width="18"
                        height="18"
                      >
                        <use href="/img/sprite.svg#icon-facebook"></use>
                      </svg>
                    </a>
                  </li>
                  <li className={styles.footerSocialsItem}>
                    <a
                      className={styles.footerSocialsLinks}
                      href="https://www.instagram.com/goitclub/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className={styles.footerSocialsIcon}
                        width="18"
                        height="18"
                      >
                        <use href="/img/sprite.svg#icon-instagram"></use>
                      </svg>
                    </a>
                  </li>
                  <li className={styles.footerSocialsItem}>
                    <a
                      className={styles.footerSocialsLinks}
                      href="https://www.youtube.com/c/GoIT"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className={styles.footerSocialsIcon}
                        width="18"
                        height="18"
                      >
                        <use href="/img/sprite.svg#icon-youtube"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <address className={styles.footerTel}>
                <a className={styles.footerTelLink} href="tel:+380684439426">
                  +380 (68) 443-94-26
                </a>
              </address>
            </div>
            <p className={styles.footerSlogan}>
              Have the time of your life with our watches: where high-class
              craftsmanship meets impeccable design
            </p>
            <address
              className={`${styles.footerTel} ${styles.footerTelDesktop}`}
            >
              <a className={styles.footerTelLink} href="tel:+380684439426">
                +380 (68) 443-94-26
              </a>
            </address>
          </div>
          <div className={styles.footerWrapperStreitchDown}>
            <div className={styles.footerContacts}>
              <ul className={styles.footerListPages}>
                <li className={styles.footerListPagesItem}>
                  <a className={styles.footerListPagesItemLink} href="#hero">
                    Home
                  </a>
                </li>
                <li className={styles.footerListPagesItem}>
                  <a
                    className={styles.footerListPagesItemLink}
                    href="#about-us"
                  >
                    About Us
                  </a>
                </li>
                <li className={styles.footerListPagesItem}>
                  <a className={styles.footerListPagesItemLink} href="#catalog">
                    Catalog
                  </a>
                </li>
                <li className={styles.footerListPagesItem}>
                  <a className={styles.footerListPagesItemLink} href="#sale">
                    Sale
                  </a>
                </li>
                <li className={styles.footerListPagesItem}>
                  <a className={styles.footerListPagesItemLink} href="#reviews">
                    Reviews
                  </a>
                </li>
                <li className={styles.footerListPagesItem}>
                  <a
                    className={styles.footerListPagesItemLink}
                    href="#contact-us"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <address className={styles.footerAddress}>
                <a
                  className={styles.footerAddressLink}
                  href="https://www.google.com/maps/place/1678+Pioneer+Rd,+Salt+Lake+City,+UT+84104,+%D0%A1%D0%A8%D0%90/@40.733048,-111.9603985,17z/data=!3m1!4b1!4m6!3m5!1s0x8752f35b0826d399:0x2b26230524fd3ca3!8m2!3d40.733048!4d-111.9603985!16s%2Fg%2F11bw41vm_p?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  1678 S. Pioneer Road Salt Lake City UT 84104
                </a>
              </address>
            </div>
            <div className={styles.footerDataWrapper}>
              <p className={styles.footerData}>
                &copy; 2023 The Watch Spot. All rights reserved.
              </p>
              <ul className={styles.footerDataList}>
                <li className={styles.footerDataListItem}>
                  <a href="" className={styles.footerDataListText}>
                    Terms of Service
                  </a>
                </li>
                <li className={styles.footerDataListItem}>
                  <a href="" className={styles.footerDataListText}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
