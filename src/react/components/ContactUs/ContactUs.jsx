import React from 'react';
import styles from './ContactUs.module.css';

export default function ContactUs() {
  return (
    <section className={styles.contactSection} id="contact-us">
      <div className="container">
        <h2 className={styles.contactHeading}>Contact Us</h2>
        <div className={styles.wrapper}>
          <div className={styles.formCard}>
            <p className={styles.cardSubtitle}>
              Please use the form below to contact us. Enter your name, email,
              phone, and message and we'll get back to you shortly.
            </p>
            <form className={styles.formContainer} autoComplete="on">
              <div className={styles.formContent}>
                <input
                  className={styles.inputField}
                  type="text"
                  name="user-name"
                  id="user-name"
                  placeholder="Name"
                  required
                />
                <p className={styles.textValid}>Looks good!</p>
                <p className={styles.textInvalid}>Please enter your name.</p>
              </div>

              <div className={styles.formContent}>
                <input
                  className={styles.inputField}
                  type="email"
                  name="user-email"
                  id="user-email"
                  placeholder="Email"
                  pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                  required
                />
                <p className={styles.textValid}>Valid email!</p>
                <p className={styles.textInvalid}>
                  Please enter a valid email.
                </p>
              </div>

              <div className={styles.formContent}>
                <input
                  className={styles.inputField}
                  type="tel"
                  name="user-tel"
                  id="user-tel"
                  placeholder="+380"
                  pattern="^\+\d{3}-\d{2}-\d{3}-\d{2}-\d{2}$"
                  required
                />
                <p className={styles.textValid}>Valid phone!</p>
                <p className={styles.textInvalid}>
                  Please enter a valid phone.
                </p>
              </div>

              <div className={styles.formContent}>
                <textarea
                  className={styles.textareaField}
                  name="user-comment"
                  id="user-comment"
                  rows="4"
                  placeholder="Comment"
                  required
                ></textarea>
                <p className={styles.textValid}>Thanks for your comment!</p>
                <p className={styles.textInvalid}>Please write a comment.</p>
              </div>

              <button className={styles.sendButton} type="submit">
                Send
              </button>
            </form>
          </div>
          <div className={styles.imageWrapper}>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet="/img/cont-dest-min.jpg 1x, /img/cont-dest@2x-min.jpg 2x"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/img/cont-tab-min.jpg 1x, /img/cont-tab@2x-min.jpg 2x"
              />
              <source
                media="(max-width: 767px)"
                srcSet="/img/cont-mob-min.jpg 1x, /img/cont-mob@2x-min.jpg 2x"
              />
              <img
                src="/img/cont-mob-min.jpg"
                className={styles.contactImage}
                alt="image"
                width="335"
                height="512"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
