import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "./style.module.css";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Контактная информация | Vernissage",
  description:
    "Vernissage - Контактная информация для связи с нами! Большой выбор антиквариата по приятной цене.",
};
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
          <div style={{ position: "relative", overflow: "hidden" }}>
            <a
              href="https://yandex.uz/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              Санкт‑Петербург
            </a>
            <a
              href="https://yandex.uz/maps/2/saint-petersburg/house/leninskiy_prospekt_151/Z0kYdQdgQE0EQFtjfXR0cHhhZg==/?ll=30.300710%2C59.851434&utm_medium=mapframe&utm_source=maps&z=16.19"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "14px",
              }}
            >
              Ленинский проспект, 151 — Яндекс Карты
            </a>
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=30.300710%2C59.851434&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzQxNTM0NRJV0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0JvQtdC90LjQvdGB0LrQuNC5INC_0YDQvtGB0L_QtdC60YIsIDE1MSIKDWto8kEV22dvQg%2C%2C&z=16.19"
              style={{ position: "relative", width: "100%", height: "357px" }}
            ></iframe>
          </div>
        </div>
      </main>
      <ContactForm />
    </div>
  );
};

export default page;
