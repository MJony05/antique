import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
interface CardProps {
  id: string;
  images: { image: string }[];
  title: string;
  category: { name: string };
  price: number;
}
const Card = ({ data }: { data: CardProps }) => {
  return (
    <Link href={`/product/${data.id}`} className={styles.card}>
      <Image
        className={styles.cardImage}
        src={data?.images[0]?.image || ""}
        alt="cardImage"
        width={250}
        height={280}
      />
      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          <p className={styles.cardCategory}>{data.category.name}</p>
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
    </Link>
  );
};

export default Card;
