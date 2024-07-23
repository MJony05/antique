import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import Catalog from "@/components/details/Catalog";
import AboutComponent from "@/components/home/AboutComponent";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
export default function Home() {
  return (
    <>
      <Banner text="АРТ-ЛАВКА" />
      <Navbar />
      <main className={styles.main}>
        <Catalog />
        <div className={styles.mainRight}>
          <AboutComponent />
        </div>
      </main>
      <ContactForm />
    </>
  );
}
