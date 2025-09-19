import React, { useCallback, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <a className={styles.headerLogo} href="index.html">
          watchcharm
        </a>
        <nav className="navigation">
          <ul className={styles.navList}>
            <li className="nav-list-item">
              <a className={`${styles.navListLink}`} href="#hero">
                <div className={styles.navItemContainer}>
                  Home<span className={styles.navDot}></span>
                </div>
              </a>
            </li>
            <li className="nav-list-item">
              <a className={`${styles.navListLink}`} href="#about-us">
                <div className={styles.navItemContainer}>
                  About Us<span className={styles.navDot}></span>
                </div>
              </a>
            </li>
            <li className="nav-list-item">
              <a className={`${styles.navListLink}`} href="#catalog">
                <div className={styles.navItemContainer}>
                  Catalog<span className={styles.navDot}></span>
                </div>
              </a>
            </li>
            <li className="nav-list-item">
              <a className={`${styles.navListLink}`} href="#sale">
                <div className={styles.navItemContainer}>
                  Sale<span className={styles.navDot}></span>
                </div>
              </a>
            </li>
            <li className="nav-list-item">
              <a className={`${styles.navListLink}`} href="#reviews">
                <div className={styles.navItemContainer}>
                  Reviews<span className={styles.navDot}></span>
                </div>
              </a>
            </li>
            <li className="nav-list-item">
              <a className={`${styles.navListLink}`} href="#contact-us">
                <div className={styles.navItemContainer}>
                  Contact Us<span className={styles.navDot}></span>
                </div>
              </a>
            </li>
          </ul>
        </nav>
        <ul className={styles.headerSocialListDesktop}>
          <li className="header-social-list-item">
            <a
              className={styles.headerSocialListLink}
              href="https://www.facebook.com/goITclub/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className={styles.headerSocialListIcon}
                width="20"
                height="20"
              >
                <use href="/img/sprite.svg#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li className="header-social-list-item">
            <a
              className={styles.headerSocialListLink}
              href="https://www.instagram.com/goitclub//"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className={styles.headerSocialListIcon}
                width="20"
                height="20"
              >
                <use href="/img/sprite.svg#icon-instagram"></use>
              </svg>
            </a>
          </li>
          <li className="header-social-list-item">
            <a
              className={styles.headerSocialListLink}
              href="https://www.youtube.com/c/GoIT"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className={styles.headerSocialListIcon}
                width="20"
                height="20"
              >
                <use href="/img/sprite.svg#icon-youtube"></use>
              </svg>
            </a>
          </li>
        </ul>
        <button className={styles.menuBtn} type="button" onClick={openMenu}>
          <svg className={styles.menuIcon} width="34" height="34">
            <use href="/img/sprite.svg#icon-menu"></use>
          </svg>
        </button>

        <div
          className={`${styles.modalMenu}${
            isMenuOpen ? ' ' + styles.isOpen : ''
          }`}
        >
          <div className={styles.menu}>
            <button
              className="menu-close-btn"
              type="button"
              onClick={closeMenu}
            >
              <svg className={styles.menuCloseIcon} width="34" height="34">
                <use href="/img/sprite.svg#icon-close"></use>
              </svg>
            </button>

            <nav className={styles.navigationMenu}>
              <ul className={styles.menuNavList} onClick={closeMenu}>
                <li className="menu-nav-list-item">
                  <a className={styles.menuNavListLink} href="#hero">
                    <div className={styles.navItemContainer}>
                      Home<span className={styles.navDotMob}></span>
                    </div>
                  </a>
                </li>
                <li className="menu-nav-list-item">
                  <a className={styles.menuNavListLink} href="#about-us">
                    <div className={styles.navItemContainer}>
                      About Us<span className={styles.navDotMob}></span>
                    </div>
                  </a>
                </li>
                <li className="menu-nav-list-item">
                  <a className={styles.menuNavListLink} href="#catalog">
                    <div className={styles.navItemContainer}>
                      Catalog<span className={styles.navDotMob}></span>
                    </div>
                  </a>
                </li>
                <li className="menu-nav-list-item">
                  <a className={styles.menuNavListLink} href="#sale">
                    <div className={styles.navItemContainer}>
                      Sale<span className={styles.navDotMob}></span>
                    </div>
                  </a>
                </li>
                <li className="menu-nav-list-item">
                  <a className={styles.menuNavListLink} href="#reviews">
                    <div className={styles.navItemContainer}>
                      Reviews<span className={styles.navDotMob}></span>
                    </div>
                  </a>
                </li>
                <li className="menu-nav-list-item">
                  <a className={styles.menuNavListLink} href="#contact-us">
                    <div className={styles.navItemContainer}>
                      Contact Us<span className={styles.navDotMob}></span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>

            <ul className={styles.menuSocialList}>
              <li className="menu-social-list-item">
                <a
                  className={styles.menuSocialListLink}
                  href="https://www.facebook.com/goITclub/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className={styles.menuSocialListIcon}
                    width="18"
                    height="18"
                  >
                    <use href="/img/sprite.svg#icon-facebook"></use>
                  </svg>
                </a>
              </li>
              <li className="menu-social-list-item">
                <a
                  className={styles.menuSocialListLink}
                  href="https://www.instagram.com/goitclub//"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className={styles.menuSocialListIcon}
                    width="18"
                    height="18"
                  >
                    <use href="/img/sprite.svg#icon-instagram"></use>
                  </svg>
                </a>
              </li>
              <li className="menu-social-list-item">
                <a
                  className={styles.menuSocialListLink}
                  href="https://www.youtube.com/c/GoIT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className={styles.menuSocialListIcon}
                    width="18"
                    height="18"
                  >
                    <use href="/img/sprite.svg#icon-youtube"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
