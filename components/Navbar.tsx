"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.navLinks}>
          <Link className={styles.navLink} href="/about">
            О нас
          </Link>
          <Link className={styles.navLink} href="/decor">
            Контакты
          </Link>
          <Link className={styles.navLink} href="/decor">
            Оформление в багет
          </Link>
          <div className={styles.navButton}>
            <p className={styles.navLink} onClick={() => setOpen(!open)}>
              Услуги{" "}
              <Image src="/Vector.svg" alt="arrow" width={13} height={7} />
            </p>
            {open && (
              <div className={styles.navSubLinks}>
                <Link className={styles.navSubLink} href="/about">
                  Примерка
                </Link>
                <Link className={styles.navSubLink} href="/payment">
                  Оплата
                </Link>
                <Link className={styles.navSubLink} href="#">
                  Доставка
                </Link>
                <Link className={styles.navSubLink} href="#">
                  Упаковка
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Поиск по каталогу"
          />
          <button className={styles.searchButton}>
            <Image
              className={styles.searchIcon}
              src="/search-icon.svg"
              alt="search-icon"
              width={19}
              height={19}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
