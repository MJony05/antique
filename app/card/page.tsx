import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React from "react";
import "./card.css";
import ContactForm from "@/components/ContactForm";
const Page = () => {
  return (
    <div className="card">
      <Banner text="Корзина" />
      <Navbar />
      <ResponsiveCatalog />
      <ContactForm />
    </div>
  );
};

export default Page;
