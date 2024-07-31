import Banner from "@/components/Banner";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
import Navbar from "@/components/Navbar";
import React from "react";
import "./card.css";
const Page = () => {
  return (
    <div className="card">
      <Banner text="Санкт-Петербург в конце своего первого столетия. 1825 г. Комплектный экземпляр" />
      <Navbar />
      <ResponsiveCatalog />
    </div>
  );
};

export default Page;
