import React from "react";
import Header from "../Header";
import Title from "../details/Title";
import styles from "./newitems.module.css";
import Card from "../details/Card";
const arr = [
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
const NewItems = () => {
  return (
    <div className={styles.newItems}>
      <Title text="Новинки" size={36} />
      <div className={styles.newItemsContent}>
        {arr.map((item) => (
          <Card data={item} key={item.id} />
        ))}
        {arr.map((item) => (
          <Card data={item} key={item.id} />
        ))}
        {arr.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default NewItems;
