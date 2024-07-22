import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Banner text="АРТ-ЛАВКА" />
      <Navbar />
      <ContactForm />
    </>
  );
}
