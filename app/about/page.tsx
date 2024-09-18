import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import styles from "./about.module.css";
import Image from "next/image";
import Title from "@/components/details/Title";
import ContactForm from "@/components/ContactForm";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import { Metadata } from "next";
// HEAD for SEO
export const metadata: Metadata = {
  title: "О нашей Арт-Лавке!",
  description:
    "Vernissage - Вся актуальная информация о нашей Арт-Лавке! Продажа антикварных изделий в СПБ",
};

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
    image: "/advantages/image-4.png",
    title: "Индивидуальный подход",
    text: "Мы ценим каждого клиента и стремимся учитывать все ваши пожелания, предлагая индивидуальные решения и эксклюзивные предложения.",
  },
];
const page = () => {
  return (
    <div className={styles.about}>
      <Banner text="Немного о нашей компании" />
      <Navbar />
      <ResponsiveCatalog />

      <div className={styles.aboutContent}>
        <p>
          Добро пожаловать в арт-лавку <span>&quot;ВЕРНИСАЖ&quot;</span>! Мы –
          это место, где оживает искусство, а творчество находит свое воплощение
          в уникальных произведениях. Наша миссия – объединить художников,
          мастеров и ценителей прекрасного в одном пространстве, где каждый
          сможет найти что-то особенное для себя.
        </p>
        <p>
          В нашем ассортименте представлены работы талантливых художников и
          мастеров декоративно-прикладного искусства. От картин и скульптур до
          изделий ручной работы – у нас вы найдете разнообразие стилей и техник,
          способных украсить любой интерьер и стать источником вдохновения.
        </p>
        <p>
          Мы гордимся тем, что поддерживаем локальных художников, предоставляя
          им платформу для демонстрации своего таланта и творчества. Каждое
          произведение, представленное в <span>&quot;ВЕРНИСАЖ&quot;</span>,
          проходит тщательный отбор, чтобы гарантировать высокое качество и
          оригинальность.
        </p>
        <p>
          В арт-лавке <span>&quot;ВЕРНИСАЖ&quot;</span> вы не просто покупаете
          предметы искусства – вы становитесь частью большого и увлекательного
          мира творчества. Наши консультанты всегда готовы помочь вам сделать
          правильный выбор и поделиться своими знаниями об искусстве.
        </p>
        <h3>
          Приходите к нам и погрузитесь в атмосферу творчества и вдохновения.{" "}
        </h3>
        <h3>
          <span>&quot;ВЕРНИСАЖ&quot;</span> – это место, где искусство
          становится частью вашей жизни!
        </h3>
        {/* <div className={styles.aboutImages}>
          <div className={styles.aboutImages1}>
            <Image
              className={styles.aboutImage1}
              src="/about/about1.png"
              alt="about"
              width={500}
              height={500}
            />
            <Image
              className={styles.aboutImage2}
              src="/about/about3.png"
              alt="about"
              width={500}
              height={500}
            />
            <Image
              className={styles.aboutImage3}
              src="/about/about3.png"
              alt="about"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.aboutImages2}>
            <Image
              className={styles.aboutImage4}
              src="/about/about4.png"
              alt="about"
              width={500}
              height={500}
            />
            <Image
              className={styles.aboutImage5}
              src="/about/about5.png"
              alt="about"
              width={500}
              height={500}
            />
            <Image
              className={styles.aboutImage6}
              src="/about/about6.png"
              alt="about"
              width={500}
              height={500}
            />
          </div>
        </div> */}
        <div className={styles.aboutAdvantages}>
          <Title text="Преимущества" size={36} />
          <p className={styles.aboutSubtitle}>
            <span>&quot;ВЕРНИСАЖ&quot;</span> — это уникальное место, где каждый
            найдет что-то особенное для себя. Вот основные преимущества нашей
            арт-лавки:
          </p>
          <div className={styles.advantagesContent}>
            {arr.map((item) => (
              <div className={styles.advantagesItem} key={item.id}>
                <Image
                  src={item.image}
                  alt="advantages"
                  width={50}
                  height={50}
                />
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.text}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default page;
