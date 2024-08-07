import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
interface CardProps {
  id: string;
  images: { image: string }[];
  orginal_title: string;
  category: { name: string };
  price: number;
  name: string;
}
const Card = ({ data }: { data: CardProps }) => {
  const handleAddToCart = () => {
    console.log(data);
    // Get existing cart items from local storage
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Find if the item already exists in the cart
    const itemIndex = existingCart.findIndex(
      (item: CardProps) => item.id === data.id
    );

    // If item exists, increment the amount, otherwise add the item with amount 1
    if (itemIndex !== -1) {
      existingCart[itemIndex].amount += 1;
    } else {
      existingCart.push({ ...data, amount: 1 });
    }

    // Save updated cart to local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };
  return (
    <div className={styles.card}>
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
          <h3 className={styles.cardTitle}>{data.name}</h3>
        </div>
        <div className={styles.cardAction}>
          <div className={styles.cardLine}>
            <p className={styles.cardPrice}>{data.price} руб</p>
            <Link href={`/product/${data.id}`} className={styles.linkButton}>
              Смотреть
              <Image
                src={"/grey-arrow.svg"}
                alt="arrow"
                width={23}
                height={20}
              />
            </Link>
          </div>
          <button onClick={handleAddToCart} className={styles.addButton}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
