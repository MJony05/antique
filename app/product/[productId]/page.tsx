import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React from "react";
import "./card.css";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import CardContent from "@/components/card/cardContent";
import Similars from "@/components/card/Similars";
const Page = async ({ params }: any) => {
  const { productId } = params;
  const response = await fetch(
    `http://31.128.44.221:8000/product/${productId}`
  );
  const data = await response.json();

  return (
    <div className="card">
      {data.serializer && <Banner text={data.serializer.name} />}

      <Navbar />
      <ResponsiveCatalog />
      <CardContent productId={productId} />
      <ContactForm />
    </div>
  );
};

export default Page;
