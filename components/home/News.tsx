import React from "react";
import styles from "./news.module.css";
import Title from "../details/Title";
import Image from "next/image";
import Button from "../details/button";
const News = () => {
  return (
    <section className={styles.news}>
      <Title text="Новости" size={36} />
      <h3 className={styles.newsSubtitle}>
        Следите за нашими новостями, чтобы быть в курсе всех событий и акций
        арт-лавки <span>&quot;ВЕРНИСАЖ&quot;</span>!
      </h3>
      <div className={styles.newsContent}>
        <div className={styles.newsItem}>
          <div className={styles.newsItemContent}>
            <h4 className={styles.newsItemTitle}>
              Новое поступление коллекционных картин
            </h4>
            <p className={styles.newsItemText}>
              Мы рады сообщить о новом поступлении картин от известных и молодых
              художников. Приходите и откройте для себя свежие работы, которые
              вдохновят и украсят ваш интерьер.
            </p>
            <Button text="Смотреть больше" />
          </div>
          <div className={styles.newsItemImage}>
            <Image
              className={styles.newsItemImagee}
              src="/news1.png"
              alt="news-image"
              width={600}
              height={320}
            />
          </div>
        </div>
        <div className={styles.newsItem}>
          <div className={styles.newsItemImage}>
            <Image
              className={styles.newsItemImagee}
              src="/news2.png"
              alt="news-image"
              width={600}
              height={320}
            />
          </div>
          <div className={styles.newsItemContent}>
            <h4 className={styles.newsItemTitle}>
              Выставка-продажа авторских скульптур
            </h4>
            <p className={styles.newsItemText}>
              С 1 по 15 июня в нашем магазине пройдет выставка-продажа
              уникальных авторских скульптур. В течение этого времени у вас
              будет возможность не только приобрести понравившиеся работы, но и
              лично познакомиться с их создателями.
            </p>

            <Button text="Смотреть больше" />
          </div>
        </div>
        <div className={styles.newsItem}>
          <div className={styles.newsItemContent}>
            <h4 className={styles.newsItemTitle}>Мастер-классы по живописи</h4>
            <p className={styles.newsItemText}>
              С 20 июня стартуют мастер-классы по живописи для всех желающих.
              Приглашаем как начинающих, так и опытных художников. Мастер-классы
              проведут профессиональные художники, которые поделятся своими
              секретами и техниками.
            </p>
            <Button text="Смотреть больше" />
          </div>
          <div className={styles.newsItemImage}>
            <Image
              className={styles.newsItemImagee}
              src="/news1.png"
              alt="news-image"
              width={600}
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
