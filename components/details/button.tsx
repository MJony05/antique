import React from "react";
import styles from "./button.module.css";
const Button = ({ text }: { text: string }) => {
  return (
    <div>
      <button className={styles.button}>{text}</button>
    </div>
  );
};

export default Button;
