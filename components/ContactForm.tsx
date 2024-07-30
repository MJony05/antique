import React from "react";
import styles from "./contactForm.module.css";
import Image from "next/image";
import Button from "./details/button";
const ContactForm = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contactTitle}>Обратная связь</h1>
      <Image
        className={styles.contactImage}
        src="/contact-image.png"
        alt="contact-image"
        quality={100}
        width={600}
        height={500}
      />
      <div className={styles.contactForm}>
        <h1>Обратная связь</h1>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Имя"
            className={styles.contactInput}
          />
          <input
            type="phone"
            placeholder="Телефон"
            className={styles.contactInput}
          />
          <input
            type="email"
            placeholder="E-mail"
            className={styles.contactInput}
          />
          <p className={styles.contactText}>
            Нажимая на кнопку, вы даете согласие на обработку персональных
            данных
          </p>
          <Button text="Оставить заявку" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
