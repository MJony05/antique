import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.navLinks}>
          <Link className={styles.navLink} href="/about">
            О нас
          </Link>
          <Link className={styles.navLink} href="/contact">
            Контакты
          </Link>
          <Link className={styles.navLink} href="/baguette">
            Оформление в багет
          </Link>
          <Link className={styles.navLink} href="/services">
            Услуги
          </Link>
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
