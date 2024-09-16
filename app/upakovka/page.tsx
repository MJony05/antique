import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React from "react";
import "./style.css";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Упаковка наших антикварных изделий!",
  description:
    "Vernissage - Мы чательно и аккуратно упаковываем наш товар! Ознакомиться с примерами упаковки, можно у нас на сайте!",
};
const Page = () => {
  return (
    <div className="page">
      <Banner text="Упаковка" />
      <Navbar />
      <ResponsiveCatalog />
      <main className="upakovka">
        <p>
          Упаковка: мы гарантируем качественную упаковку для транспортировки
          работы в другие города России.
        </p>
        <div className="images">
          <div className="imageContainer">
            <Image
              className="image"
              src="/upakovka1.png"
              alt="decor"
              width={300}
              height={300}
            />
          </div>
          <div className="imageContainer">
            <Image
              className="image"
              src="/upakovka2.png"
              alt="decor"
              width={300}
              height={300}
            />
          </div>
          <div className="imageContainer">
            <Image
              className="image"
              src="/upakovka3.png"
              alt="decor"
              width={300}
              height={300}
            />
          </div>
          <div className="imageContainer">
            <Image
              className="image"
              src="/upakovka4.png"
              alt="decor"
              width={300}
              height={300}
            />
          </div>
        </div>
      </main>
      <ContactForm />
    </div>
  );
};

export default Page;
