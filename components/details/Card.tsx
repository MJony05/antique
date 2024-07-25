import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
interface CardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
}
const Card = ({ data }: { data: CardProps }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.cardImage}
        src={data.image}
        alt="cardImage"
        width={250}
        height={280}
      />
      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          <p className={styles.cardCategory}>{data.category}</p>
          <h3 className={styles.cardTitle}>{data.title}</h3>
        </div>
        <div className={styles.cardAction}>
          <div className={styles.cardLine}>
            <p className={styles.cardPrice}>{data.price} руб</p>
            <button className={styles.linkButton}>
              Смотреть
              <Image
                src={"/grey-arrow.svg"}
                alt="arrow"
                width={23}
                height={20}
              />
            </button>
          </div>
          <button className={styles.addButton}>В корзину</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
