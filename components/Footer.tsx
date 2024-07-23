import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerRow}>
        <div className={styles.footerContent}>
          <h3 className={styles.footerHeader}>Меню сайта</h3>
          <Link className={styles.footerLink} href="/">
            Главная
          </Link>
          <Link className={styles.footerLink} href="/about">
            О нас
          </Link>
          <Link className={styles.footerLink} href="/catalog">
            Каталог
          </Link>
          <Link className={styles.footerLink} href="/contact">
            Контакты
          </Link>
        </div>
      </div>
      <div className={styles.footerRow}>
        <div className={styles.footerContent}>
          <h3 className={styles.footerHeader}>Услуги</h3>
          <Link className={styles.footerLink} href="#">
            Примерка
          </Link>
          <Link className={styles.footerLink} href="/delivery">
            Доставка
          </Link>
          <Link className={styles.footerLink} href="/packaging">
            Упаковка
          </Link>
          <Link className={styles.footerLink} href="/baguette">
            Оформление в багет
          </Link>
        </div>
      </div>
      <div className={styles.footerRow}>
        <div className={styles.footerContent}>
          <h3 className={styles.footerHeader}>Каталог</h3>
          <Link className={styles.footerLink} href="/catalog">
            Старинные гравюры, литографии, офорты
          </Link>
          <Link className={styles.footerLink} href="/painting">
            Живопись, акварели, графика
          </Link>
          <Link className={styles.footerLink} href="/painting">
            Антикварные и винтажные открытки
          </Link>
          <Link className={styles.footerLink} href="/painting">
            Фарфоровые фигурки
          </Link>
          <Link className={styles.footerLink} href="/painting">
            Букинистика
          </Link>
        </div>
      </div>
      <div className={styles.footerRow}>
        <div className={styles.footerContent}>
          <div className={styles.footerContentItem}>
            <Image
              className={styles.footerContentItemImagee}
              src="/location-yellow.svg"
              alt="logo"
              width={24}
              height={24}
            />
            <p className={styles.footerContentText}>
              Россия, Санкт-петербург, Ленинский просп., 151
            </p>
          </div>
          <div className={styles.footerContentItem}>
            <div className={styles.footerContentItemImage}>
              <Image
                src="/phone-yellow.svg"
                className={styles.footerContentImagee}
                alt="phone"
                width={24}
                height={24}
              />
            </div>
            <p className={styles.footerContentText}>
              <span>Звоните с 9:00 до 18:00</span>
              +7 (999) 999-99-99
            </p>
          </div>
          <div className={styles.footerSocials}>
            <Link
              className={styles.footerLink}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.footerLinkIcon}
                src="/instagram-logo.svg"
                alt="instagram-icon"
                width={30}
                height={30}
              />
            </Link>
            <Link
              className={styles.footerLink}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.footerLinkIcon}
                src="/whatsapp-logo.svg"
                alt="whatsapp-icon"
                width={30}
                height={30}
              />
            </Link>
            <Link
              className={styles.footerLink}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.footerLinkIcon}
                src="/telegram-logo.svg"
                alt="telegram-icon"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
