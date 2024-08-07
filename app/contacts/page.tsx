import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "./style.module.css";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <div className={styles.contactContainer}>
      <Banner text="КОНТАКТЫ" />
      <Navbar />
      <ResponsiveCatalog />
      <main className={styles.main}>
        <div className={styles.mainLeft}>
          <p className={styles.mainText}>
            <span className={styles.mainSpan}>Адрес </span> Россия,
            Санкт-петербург, Ленинский просп., 151
          </p>
          <p className={styles.mainText}>
            <span className={styles.mainSpan}>Телефон </span> +7 (999) 999-99-99
          </p>
          <p className={styles.mainText}>
            <span className={styles.mainSpan}>E-mail </span> artlavka@mail.com
          </p>
          <p className={styles.mainText}>
            <span className={styles.mainSpan}>Режим работы </span>Пн-Пт с 10:00
            до 19:00
          </p>
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
        <div className={styles.mainRight}>
          <iframe
            style={{ width: "100%", height: "357px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511631.13889652846!2d29.43533648574493!3d59.939457342260006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a6f9d%3A0xfa47ca5a4725c9e4!2sSaint%20Petersburg%2C%20Sankt-Peterburg%2C%20Rossiya!5e0!3m2!1suz!2s!4v1723038659838!5m2!1suz!2s"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
      <ContactForm />
    </div>
  );
};

export default page;
