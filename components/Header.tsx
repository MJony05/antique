import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Button from "./details/button";
const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <div className={styles.navLeftItem}>
          <div className={styles.navLeftItemImage}>
            <Image
              className={styles.navLeftItemImagee}
              src="/location-icon.svg"
              alt="logo"
              width={24}
              height={24}
            />
          </div>
          <p className={styles.navLeftItemText}>
            Россия, Санкт-петербург, Ленинский просп., 151
          </p>
        </div>
        <div className={styles.navLeftItem}>
          <div className={styles.navLeftItemImage}>
            <Image
              src="/phone-icon.svg"
              className={styles.navLeftItemImagee}
              alt="phone"
              width={24}
              height={24}
            />
          </div>
          <p className={styles.navLeftItemText}>
            <span>Звоните с 9:00 до 18:00</span>
            +7 (999) 999-99-99
          </p>
        </div>
      </div>
      <div className={styles.navRight}>
        <Button text="Заказать звонок" />
        <Image src="/cart-icon.svg" alt="cart" width={44} height={44} />
      </div>
    </nav>
  );
};

export default Header;
