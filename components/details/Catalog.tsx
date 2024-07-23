import React from "react";
import styles from "./catalog.module.css";
const arr = [
  "Санкт-Петербург",
  "Москва",
  "Новосибирск",
  "Флот, кораблестроение",
  "Оружие, военная атрибутика",
];
const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <h2 className={styles.catalogTitle}>Каталог</h2>
      <div className={styles.catalogItems}>
        <h3 className={styles.catalogName}>
          Старинные гравюры, литографии, офорты
        </h3>
        {arr.map((item) => (
          <p className={styles.catalogItem} key={item}>
            - {item}
          </p>
        ))}
        {arr.map((item) => (
          <p className={styles.catalogItem} key={item}>
            - {item}
          </p>
        ))}
        {arr.map((item) => (
          <p className={styles.catalogItem} key={item}>
            - {item}
          </p>
        ))}
        {arr.map((item) => (
          <p className={styles.catalogItem} key={item}>
            - {item}
          </p>
        ))}
        <h3 className={styles.catalogName}>Живопись, акварели, графика</h3>
        <h3 className={styles.catalogName}>Антикварные и винтажные открытки</h3>
        <h3 className={styles.catalogName}>Фарфоровые фигурки</h3>
        <h3 className={styles.catalogName}>Букинистика</h3>
      </div>
    </div>
  );
};

export default Catalog;
