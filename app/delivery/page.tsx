import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { Metadata } from "next";
const arr = [
  {
    id: "1",
    image: "/advantages/image-17.png",
    title: "Быстрая доставка",
    text: "Мы гарантируем оперативную доставку товара в кратчайшие сроки. Независимо от вашего местоположения, наш курьер прибудет вовремя.",
  },
  {
    id: "2",
    image: "/advantages/image-18.png",
    title: "Удобное время доставки",
    text: "Наш администратор свяжется с вами для уточнения адреса и выбора наиболее удобного времени доставки, чтобы вам не пришлось подстраиваться под расписание курьера.",
  },
  {
    id: "3",
    image: "/advantages/image-19.png",
    title: "Осмотр товара при доставке",
    text: "Вы можете вскрыть упаковку при курьере, осмотреть товар на целостность и соответствие комплектации. Это позволяет вам убедиться в качестве продукта сразу же.",
  },
  {
    id: "4",
    image: "/advantages/image-20.png",
    title: "Безопасность и надежность",
    text: "Мы тщательно следим за сохранностью товара на всех этапах доставки, гарантируя его целостность и качество.",
  },
];
export const metadata: Metadata = {
  title: "Доставка | Vernissage",
  description:
    "Vernissage - Условия доставки антиквариата в Санкт-Петербурге! Приятные цены, быстрая доставка. Оставляйте заявку на сайте",
};
const Page = () => {
  return (
    <div className={styles.delivery}>
      <Banner text="Доставка" />
      <Navbar />
      <ResponsiveCatalog />
      <main className={styles.main}>
        <p className={styles.text}>
          Мы предлогаем вам несколько вариантов доставки:
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>01</h3>
            <p className={styles.cardText}>
              По Санкт-Петербургу нашим курьером (в этот же день или по
              согласованию, бесплатно от 10 т.р.)
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>02</h3>
            <p className={styles.cardText}>
              Самовывоз из магазина (в этот же день или по согласованию,
              бесплатно)
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>03</h3>
            <p className={styles.cardText}>
              Курьерские службы доставки по России (от 1-х суток и более, по
              тарифам службы доставки)
            </p>
          </div>
        </div>
        <div>
          <h2 className={styles.title}>
            Доставка по Санкт-Петербургу курьером галереи
          </h2>
          <p className={styles.text}>
            Вы можете заказать доставку товара курьером по указанному адресу.
            После оформления заказа наш администратор свяжется с вами для
            уточнения адреса и выбора удобного времени доставки.
          </p>
          <p className={styles.text}>
            При получении товара вы вскрываете упаковку при курьере и проверяете
            её на целостность и соответствие комплектации.{" "}
          </p>
          <p className={styles.text}>
            <b>Бесплатная доставка при заказе</b>{" "}
            <span className={styles.span}>от 10000 рублей.</span>
          </p>
        </div>
        <div>
          <h2 className={styles.title}>Самовывоз из магазина</h2>
          <p className={styles.text}>
            Вы можете забрать товар у нас в галерее по адресу Санкт-петербург,
            Ленинский просп. 151, заранее предупредив администратора. 
          </p>
        </div>
        <div>
          <h2 className={styles.title}>Преимущества</h2>
          <p className={styles.text}>
            Мы предоставляет высококачественные услуги по доставке, обеспечивая
            клиентам множество преимуществ:
          </p>
          <div className={styles.whyContent}>
            {arr.map((item) => (
              <div className={styles.whyItem} key={item.id}>
                <Image
                  src={item.image}
                  alt="advantages"
                  width={50}
                  height={50}
                />
                <h4 className={styles.whyCardTitle}>{item.title}</h4>
                <p className={styles.itemText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <ContactForm />
    </div>
  );
};

export default Page;
