import Image from "next/image";
import React from "react";
import styles from "./banner.module.css";

const Banner = ({ text }: { text: string }) => {
  return (
    <div className={styles.banner}>
      <Image
        className={styles.bannerImage}
        src={"/main-logo.png"}
        alt="bannerImage"
        width={440}
        height={45}
      />
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
};

export default Banner;
