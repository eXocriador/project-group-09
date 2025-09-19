import React from 'react';
import styles from './ChooseSection.module.css';

export default function ChooseSection() {
  return (
    <section className={styles.chooseSection}>
      <div className="container">
        <div className={styles.containerChoose}>
          <h2 className="visually-hidden">Choose your story</h2>
          <p className={styles.textSectionChoose}>
            Choose <span className={styles.textYourStory}>your story</span>,
            making every moment unique. Time is your style, and we reveal it.
          </p>
          <a href="#contact-us" className={styles.buttonStChoose}>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
