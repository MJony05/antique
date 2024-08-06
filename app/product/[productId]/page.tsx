import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React from "react";
import "./card.css";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import CardContent from "@/components/card/cardContent";
import Similars from "@/components/card/Similars";
const Page = ({ params }: any) => {
  const { productId } = params;
  return (
    <div className="card">
      <Banner text="Санкт-Петербург в конце своего первого столетия. 1825 г. Комплектный экземпляр" />
      <Navbar />
      <ResponsiveCatalog />
      <CardContent productId={productId} />
      <ContactForm />
    </div>
  );
};

export default Page;
