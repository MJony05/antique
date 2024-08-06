import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import Catalog from "@/components/details/Catalog";
import AboutComponent from "@/components/home/AboutComponent";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import NewItems from "@/components/home/NewItems";
import Advantages from "@/components/home/Advantages";
import News from "@/components/home/News";
import Image from "next/image";
import ResponsiveCatalog from "@/components/home/ResponsiveCatalog";
export default async function Home() {
  return (
    <>
      <Banner text="АРТ-ЛАВКА" />
      <Navbar />
      <ResponsiveCatalog />

      <main className={styles.main}>
        <div className={styles.catalogContainer}>
          <Catalog />
        </div>
        <div className={styles.mainRight}>
          <AboutComponent />
          <NewItems />
        </div>
      </main>
      <Advantages />
      <News />
      <ContactForm />
    </>
  );
}
