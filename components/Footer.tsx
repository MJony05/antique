"use client";
import React, { useEffect, useState } from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API + "category");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await res.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  console.log(data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
          <Link className={styles.footerLink} href="/">
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
          <Link className={styles.footerLink} href="/primerka">
            Примерка
          </Link>
          <Link className={styles.footerLink} href="/delivery">
            Доставка
          </Link>
          <Link className={styles.footerLink} href="/upakovka">
            Упаковка
          </Link>
          <Link className={styles.footerLink} href="/decor">
            Оформление в багет
          </Link>
        </div>
      </div>
      <div className={styles.footerRow}>
        <div className={styles.footerContent}>
          <h3 className={styles.footerHeader}>Каталог</h3>
          {data.map((item: any) => (
            <div key={item.id}>
              <div className={styles.footerLinkCon}>
                <Link
                  key={item.id}
                  className={styles.footerLink}
                  href={`/category/${item.id}`}
                >
                  {item.name}{" "}
                </Link>
                {item.sub_categor.length > 0 && (
                  <p
                    style={{
                      cursor: "pointer",
                      fontSize: "32px",
                      padding: "",
                      lineHeight: "0.7",
                      color: "grey",
                    }}
                    onClick={() => setVisible(!visible)}
                  >
                    ▾
                  </p>
                )}
              </div>

              <div
                className={styles.footerSubLinks}
                style={{
                  display: visible ? "flex" : "none",
                }}
              >
                {item.sub_categor.length > 0 &&
                  item.sub_categor.map((sub: any) => (
                    <Link
                      className={styles.footerSubLink}
                      href={`/category/${sub.id}`}
                      key={sub.id}
                    >
                      {sub.name}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
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
