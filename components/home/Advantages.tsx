"use client";
import React from "react";
import Title from "../details/Title";
import styles from "./advantages.module.css";
import Image from "next/image";
import Button from "../details/button";
import { useRouter } from "next/navigation";

const arr = [
  {
    id: "1",
    image: "/advantages/image-1.png",
    title: "Уникальные произведения искусства",
    text: "Каждое произведение в нашем магазине уникально и тщательно отобрано, чтобы предложить вам лучшие образцы искусства.",
  },
  {
    id: "2",
    image: "/advantages/image-2.png",
    title: "Широкий ассортимент",
    text: "У нас вы найдете разнообразие стилей и техник, от картин и скульптур до изделий декоративно-прикладного искусства, которые подойдут для любого интерьера.",
  },
  {
    id: "3",
    image: "/advantages/image-3.png",
    title: "Высокое качество",
    text: "Все представленные у нас работы проходят строгий отбор, что гарантирует их высокое качество и оригинальность.",
  },
  {
    id: "4",
    image: "/advantages/image-4.png",
    title: "Индивидуальный подход",
    text: "Мы ценим каждого клиента и стремимся учитывать все ваши пожелания, предлагая индивидуальные решения и эксклюзивные предложения.",
  },
  {
    id: "5",
    image: "/advantages/image-5.png",
    title: "Профессиональные консультации",
    text: "Наши эксперты всегда готовы помочь вам с выбором и поделиться своими знаниями об искусстве, чтобы вы могли сделать осознанный и обоснованный выбор.",
  },
  {
    id: "6",
    image: "/advantages/image-6.png",
    title: "Доступные цены",
    text: "Мы предлагаем конкурентоспособные цены на все наши произведения, делая искусство доступным для каждого.",
  },
];
const Advantages = () => {
  const router = useRouter();
  return (
    <div className={styles.advantages}>
      <Title text="Наши преимущества" size={36} />
      <h3 className={styles.advantagesSubtitle}>
        Приходите в <span>&quot;ВЕРНИСАЖ&quot;</span> и откройте для себя мир
        искусства!
      </h3>
      <div className={styles.advantagesContent}>
        {arr.map((item) => (
          <div className={styles.advantagesItem} key={item.id}>
            <Image src={item.image} alt="advantages" width={50} height={50} />
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
        <div className={styles.advantagesLastItem}>
          <p>
            Добро пожаловать в арт-лавку <span>&quot;ВЕРНИСАЖ&quot;</span>! Мы
            гордимся тем, что можем предложить нашим клиентам не только
            уникальные произведения искусства, но и ряд преимуществ, которые
            делают наш магазин особенным.
          </p>
          <Button
            onClick={() => {
              router.push("/about");
            }}
            text="Подробнее о нас"
          />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
