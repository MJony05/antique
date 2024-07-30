"use client";
import React, { useState } from "react";
import styles from "./aboutComponent.module.css";
import Image from "next/image";
import Button from "../details/button";
import Title from "../details/Title";

const AboutComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: "/about-1.png", alt: "about1", width: 283, height: 368 },
    { src: "/about-2.png", alt: "about2", width: 174, height: 357 },
    { src: "/about-3.png", alt: "about3", width: 174, height: 309 },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className={styles.aboutHome}>
      <div className={styles.top}>
        <Title text="О нас" size={32} />
        <div className={styles.pagination}>
          <button onClick={prevSlide} className={styles.button}>
            <Image src={"/arrow.svg"} alt="arrow" width={30} height={18} />
          </button>
          <button onClick={nextSlide} className={styles.button}>
            <Image
              src={"/arrow.svg"}
              style={{ transform: "rotate(180deg)" }}
              alt="arrow"
              width={30}
              height={18}
            />
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <p>
            Добро пожаловать в арт-лавку <span>&quot;ВЕРНИСАЖ&quot;</span> ! Мы
            – это место, где оживает искусство, а творчество находит свое
            воплощение в уникальных произведениях. Наша миссия – объединить
            художников, мастеров и ценителей прекрасного в одном пространстве,
            где каждый сможет найти что-то особенное для себя. <br />В нашем
            ассортименте представлены работы талантливых художников и мастеров
            декоративно-прикладного искусства. От картин и скульптур до изделий
            ручной работы – у нас вы найдете разнообразие стилей и техник,
            способных украсить любой интерьер и стать источником вдохновения.
          </p>
          <Button text={"Подробнее о нас"} />
        </div>
        <div className={styles.pagination2}>
          <button onClick={prevSlide} className={styles.button}>
            <Image src={"/arrow.svg"} alt="arrow" width={30} height={18} />
          </button>
          <button onClick={nextSlide} className={styles.button}>
            <Image
              src={"/arrow.svg"}
              style={{ transform: "rotate(180deg)" }}
              alt="arrow"
              width={30}
              height={18}
            />
          </button>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.slider}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.slide} ${
                  index === currentSlide ? styles.active : ""
                }`}
              >
                <Image
                  className={styles.image}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
