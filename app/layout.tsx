import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../Assets/TildaSans/TildaSans-VF.woff2",
  display: "swap",
  variable: "--tilda-sans",
});

export const metadata: Metadata = {
  title: "Vernissage",
  description: "АРТ-ЛАВКА",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <ToastContainer progressClassName={"toast"} />
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
