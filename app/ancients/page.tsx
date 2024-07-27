import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "./ancients.module.css";
import Card from "@/components/details/Card";
const arr = [
  "Санкт-Петербург",
  "Москва",
  "Новосибирск",
  "Флот, кораблестроение",
  "Оружие, военная атрибутика",
];
const cards = [
  {
    id: "1",
    image: "/card-example2.png",
    title: "Павел I. Прижизненный портрет. 1780",
    category: "Флора и Фауна",
    price: 30000,
  },
  {
    id: "2",
    image: "/card-example2.png",
    title:
      "Московский Императорский Воспитательный дом. 1857г. Антикварная гравюра",
    category: "Флора и Фауна",
    price: 30000,
  },
  {
    id: "3",
    image: "/card-example3.png",
    title: "Московские зарисовки. 1890г. Хакер/Бренд’амур. Старинная гравира",
    category: "Флора и Фауна",
    price: 30000,
  },
];
const page = () => {
  return (
    <div className={styles.ancients}>
      <Banner text="Старинные гравюры, литографии, офорты" />
      <Navbar />
      <div className={styles.ancientsContent}>
        <div className={styles.ancientsFilter}>
          {arr.map((item) => (
            <p key={item} className={styles.ancientsFilterItem}>
              {item}
            </p>
          ))}
          {arr.map((item) => (
            <p key={item} className={styles.ancientsFilterItem}>
              {item}
            </p>
          ))}
          {arr.map((item) => (
            <p key={item} className={styles.ancientsFilterItem}>
              {item}
            </p>
          ))}
        </div>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card key={item.id} data={item} />
          ))}
          {cards.map((item) => (
            <Card key={item.id} data={item} />
          ))}
          {cards.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
